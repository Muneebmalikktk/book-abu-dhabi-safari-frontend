export const sampleReviews = [
  {
    id: "sophie-turner",
    name: "Sophie Turner",
    country: "United Kingdom",
    message:
      "Our driver arrived right on time and made us feel comfortable from the start. The sunset stop was beautiful, and dinner at the camp was a lovely finish to the evening.",
    rating: 5,
  },
  {
    id: "omar-al-hassan",
    name: "Omar Al Hassan",
    country: "Jordan",
    message:
      "We booked the private safari for our family. The dune drive was exciting without feeling rushed, and the team was especially patient with our children.",
    rating: 5,
  },
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    country: "Italy",
    message:
      "A memorable afternoon in Abu Dhabi. Communication was clear, pickup was smooth, and we had plenty of time for photos on the dunes before sunset.",
    rating: 5,
  },
  {
    id: "daniel-kim",
    name: "Daniel Kim",
    country: "South Korea",
    message:
      "The quad bike session and dune bashing were the highlights of our trip. Everything was well organized and the guide checked that we were comfortable throughout.",
    rating: 5,
  },
  {
    id: "amina-yusuf",
    name: "Amina Yusuf",
    country: "Nigeria",
    message:
      "Warm service, a clean vehicle and a relaxed evening at the camp. The team answered all our questions before the tour and the experience matched what was promised.",
    rating: 5,
  },
  {
    id: "marcus-lee",
    name: "Marcus Lee",
    country: "Singapore",
    message:
      "We chose the morning safari because of our schedule and loved the quiet dunes. The views were incredible and we were back at the hotel exactly when expected.",
    rating: 5,
  },
];

const STORAGE_KEY = "true-desert-tourism.reviews";

/** Reviews posted from this browser. Replace with a GET request later. */
export function getLocalReviews() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Persist a new review. Replace with a POST request later. */
export function saveLocalReview({ name, message, rating = 5 }) {
  const review = {
    id: `local-${Date.now()}`,
    name: name.trim(),
    message: message.trim(),
    rating,
    createdAt: new Date().toISOString(),
    local: true,
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([review, ...getLocalReviews()]),
      );
    } catch {
      /* storage unavailable — review stays in memory for this session */
    }
  }
  return review;
}
