# Coolify deployment repair

## Confirmed failures on 12 October 2026
- https://www.bookabudhabisafari.com/ returns 200.
- Direct requests to /book and /reviews return Nginx 404.
- The deployed JS calls https://bookabudhabisafari.com/api/...
- /api/reviews redirects to www and returns a frontend Nginx 404, not a backend response.
- The backend uses MongoDB/Mongoose, NOT PostgreSQL or Prisma.

## Frontend
In Coolify select the frontend application:
- Repository: Muneebmalikktk/book-abu-dhabi-safari-frontend, main.
- Build strategy: Dockerfile; base directory /; Dockerfile /Dockerfile.
- Exposed container port: 80. No public host port mapping is required.
- Keep the existing website domains and www redirect.
- VITE_API_URL is a PUBLIC BUILD variable. Set it to the backend HTTPS origin, e.g. https://api.bookabudhabisafari.com (only after configuring that domain).
- Do not append /api: the application adds that prefix itself.
- Deploy after saving variables. Restart alone does not rebuild a Vite bundle.
- nginx.conf provides browser-route fallback and returns actual 404 for missing assets.
- If keeping Coolify's existing static/Nixpacks build instead of Dockerfile, paste nginx.conf into its custom Nginx configuration; a file in Git alone may not change Coolify's generated config. Build npm ci && npm run build; publish /dist; port 80.

## Backend and database
1. Inspect the existing MongoDB/Atlas deployment first. Do not replace or reset an existing database: it may contain bookings, reviews and admin accounts.
2. Set runtime MONGODB_URI to the existing database connection URI. A separate Coolify MongoDB database uses its INTERNAL hostname, not localhost or 127.0.0.1. Preserve authSource and database name in that URI. Both containers must share a reachable Docker network. Keep MongoDB private; no public port is required.
3. If there is no database, create a MongoDB database resource on the same server/network. Save its generated credentials privately and use its internal URI; select an application database such as book_abudhabi_safari. A new empty database does not contain the old developer's records; request a backup if those are needed.
4. Backend build strategy Dockerfile, base /, Dockerfile /Dockerfile, port 5000. Runtime PORT=5000 and NODE_ENV=production.
5. Set CLIENT_URL=https://www.bookabudhabisafari.com,https://bookabudhabisafari.com
6. Set a long random JWT_SECRET at runtime. Keep an existing secret if already configured. Do not put it in the frontend.
7. Configure an HTTPS backend domain such as https://api.bookabudhabisafari.com. Add its DNS A record pointing to this deployment's VPS (do not assume it uses the other website's VPS).
8. Deploy backend. GET https://api.bookabudhabisafari.com/api/health must return status ok and database connected; /api/reviews must return JSON.
9. Set the frontend build variable above to that verified API origin and deploy frontend.
10. Configure SMTP_HOST, SMTP_PORT (465 TLS or 587 STARTTLS), SMTP_USER, SMTP_PASS, EMAIL_FROM_NAME, EMAIL_FROM and EMAIL_TO at backend runtime. These names differ from the True Desert project's names. Mail failures currently do not undo saved bookings and there is no automatic email retry queue in this project.
11. Only if no admin exists, set ADMIN_EMAIL and ADMIN_PASSWORD privately at backend runtime then run node createAdmin.js in the backend terminal. Do not recreate/overwrite an existing administrator.

## Verification
- Open and refresh /packages, a package-detail URL, /book, /reviews, /why-us and /admin/login.
- Confirm the browser API calls use the intended origin and return JSON.
- Verify /api/health shows a connected database.
- Submit one clearly identified test booking, confirm its admin entry and business email, then remove test data through your normal admin process if supported.
- Verify admin login and logout.

## Local verification
Frontend: npm ci; npm run lint; npm run build.
Backend integration test: start a disposable MongoDB on 127.0.0.1:27028, then node --test tests/deployment.test.js. The test creates and deletes only its own randomly named test database and mocks SMTP; it never sends email.

Production credentials and Coolify configuration are not in these repositories. Repository fixes alone cannot connect an unknown database or create an API domain.
