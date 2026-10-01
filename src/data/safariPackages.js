import eveningImage from "../assets/images/evening-safari.jpg";
import morningImage from "../assets/images/morning-safari.jpg";
import privateImage from "../assets/images/private-safari.jpg";
import luxuryImage from "../assets/images/luxury-safari.webp";
import quadImage from "../assets/images/quad-bike-safari.webp";
import vipImage from "../assets/images/vip-camp.webp";
import overnightImage from "../assets/images/overnight-safari.webp";
import buggyImage from "../assets/images/dune-buggy.webp";
import privateMorningImage from "../assets/images/private-morning-safari.webp";
import vipQuadImage from "../assets/images/vip-quad-bike.webp";
import privateAtvVipImage from "../assets/images/private-atv-vip.webp";
import oneSeaterBuggyImage from "../assets/images/one-seater-buggy.webp";
import twoSeaterBuggyImage from "../assets/images/two-seater-buggy.webp";
import fourSeaterBuggyImage from "../assets/images/four-seater-buggy.webp";
import morningQuadImage from "../assets/images/morning-quad-bike.webp";

const eveningFeatures = [
  "Pickup and drop-off from designated meeting points",
  "Dune bashing in a 4x4 vehicle",
  "Camel ride and sandboarding",
  "Unlimited soft drinks",
  "Traditional costume photography",
  "Henna painting for women and children",
  "Vegetarian and non-vegetarian BBQ buffet dinner",
  "Tanoura, fire and belly dance shows",
];

const privateEveningFeatures = [
  "Private pickup and drop-off from your location",
  ...eveningFeatures.slice(1),
];

const morningFeatures = [
  "Pickup and drop-off from your location",
  "Dune bashing in a 4x4 vehicle",
  "Camel ride and sandboarding",
  "Unlimited soft drinks",
  "Traditional costume photography",
  "Photo stop on the high dunes",
];

export const safariPackages = [
  {
    id: "evening-desert-safari",
    title: "Evening Desert Safari Abu Dhabi",
    image: eveningImage,
    prices: [
      { label: "Child", amount: "65 AED" },
      { label: "Adult", amount: "75 AED" },
    ],
    features: eveningFeatures,
  },
  {
    id: "luxury-desert-safari",
    title: "Luxury Desert Safari Abu Dhabi",
    image: luxuryImage,
    prices: [{ label: "Per person", amount: "150 AED" }],
    features: privateEveningFeatures,
  },
  {
    id: "desert-safari-quad-bike",
    title: "Desert Safari with Quad Bike",
    image: quadImage,
    prices: [{ label: "Per person", amount: "200 AED" }],
    features: [
      ...privateEveningFeatures.slice(0, 3),
      "25–30-minute quad bike ride",
      ...privateEveningFeatures.slice(3),
    ],
  },
  {
    id: "private-desert-safari",
    title: "Private Desert Safari Abu Dhabi",
    image: privateImage,
    prices: [{ label: "Up to 6 guests", amount: "900 AED" }],
    features: privateEveningFeatures,
  },
  {
    id: "vip-desert-safari",
    title: "VIP Desert Safari Abu Dhabi",
    image: vipImage,
    prices: [{ label: "Per person", amount: "175 AED" }],
    features: [
      ...privateEveningFeatures,
      "Reserved VIP seating area",
      "Dinner and soft drinks served at your table",
    ],
  },
  {
    id: "vip-desert-safari-quad-bike",
    title: "VIP Desert Safari with Quad Bike",
    image: vipQuadImage,
    prices: [{ label: "Per person", amount: "275 AED" }],
    features: [
      ...privateEveningFeatures.slice(0, 3),
      "30-minute quad bike ride",
      ...privateEveningFeatures.slice(3),
      "Reserved VIP seating area",
      "Dinner and soft drinks served at your table",
    ],
  },
  {
    id: "overnight-desert-safari",
    title: "Overnight Desert Safari",
    image: overnightImage,
    prices: [{ label: "Per person", amount: "400 AED" }],
    features: [
      ...privateEveningFeatures,
      "Overnight stay in the desert",
      "Sleeping tent and breakfast the next morning",
    ],
  },
  {
    id: "private-safari-atv-vip",
    title: "Private Safari with ATV and VIP Service",
    image: privateAtvVipImage,
    prices: [{ label: "Up to 6 guests", amount: "2,000 AED" }],
    features: [
      ...privateEveningFeatures.slice(0, 3),
      "30-minute quad bike ride",
      ...privateEveningFeatures.slice(3),
      "Reserved VIP seating area",
      "Dinner and soft drinks served at your table",
    ],
  },
  {
    id: "private-safari-dune-buggy",
    title: "Private Safari with Dune Buggy",
    image: buggyImage,
    prices: [{ label: "Up to 6 guests", amount: "3,000 AED" }],
    features: [
      ...privateEveningFeatures.slice(0, 3),
      "30-minute dune buggy ride",
      ...privateEveningFeatures.slice(3),
    ],
  },
  {
    id: "one-seater-dune-buggy",
    title: "1-Seater Dune Buggy",
    image: oneSeaterBuggyImage,
    prices: [{ label: "One rider", amount: "600 AED" }],
    features: [
      ...privateEveningFeatures.slice(0, 3),
      "30-minute single-seat dune buggy ride",
      ...privateEveningFeatures.slice(3),
    ],
  },
  {
    id: "two-seater-dune-buggy",
    title: "2-Seater Dune Buggy",
    image: twoSeaterBuggyImage,
    prices: [{ label: "Two guests", amount: "800 AED" }],
    features: [
      ...privateEveningFeatures.slice(0, 3),
      "30-minute two-seat dune buggy ride",
      ...privateEveningFeatures.slice(3),
    ],
  },
  {
    id: "four-seater-dune-buggy",
    title: "4-Seater Dune Buggy",
    image: fourSeaterBuggyImage,
    prices: [{ label: "Four guests", amount: "1,000 AED" }],
    features: [
      ...privateEveningFeatures.slice(0, 3),
      "30-minute four-seat dune buggy ride",
      ...privateEveningFeatures.slice(3),
    ],
  },
  {
    id: "morning-desert-safari",
    title: "Morning Desert Safari",
    image: morningImage,
    prices: [{ label: "Per person", amount: "300 AED" }],
    features: morningFeatures,
  },
  {
    id: "morning-desert-safari-quad-bike",
    title: "Morning Desert Safari with Quad Bike",
    image: morningQuadImage,
    prices: [{ label: "Per person", amount: "400 AED" }],
    features: [
      ...morningFeatures.slice(0, 3),
      "30-minute quad bike ride",
      ...morningFeatures.slice(3),
    ],
  },
  {
    id: "private-morning-desert-safari",
    title: "Private Morning Desert Safari",
    image: privateMorningImage,
    prices: [{ label: "Up to 6 guests", amount: "1,000 AED" }],
    features: morningFeatures,
  },
];

export default safariPackages;
