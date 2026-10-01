import { safariPackages } from "./safariPackages.js";

export const safariPackage = safariPackages.map(({ id, title }) => ({ id, title }));
