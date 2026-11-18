import Evening_Desert_Safari_Abu_Dhabi from "../assets/images/Evening_Desert_Safari_Abu_Dhabi.jpg";
import Luxury_Desert_Safari_Abu_Dhabi from "../assets/images/Luxury_Desert_Safari_Abu_Dhabi.webp";
import Desert_Safari_with_Quad_Bike from "../assets/images/Desert_Safari_with_Quad_Bike.webp";
import Private_Desert_Safari_Abu_Dhabi from "../assets/images/Private_Desert_Safari_Abu_Dhabi.webp";
import VIP_Desert_Safari_Abu_Dhabi from "../assets/images/VIP_Desert_Safari_Abu_Dhabi.webp";
import VIP_Desert_Safari_with_Quad_Bike from "../assets/images/VIP_Desert_Safari_with_Quad_Bike.webp";
import Overnight_Desert_Safari from "../assets/images/Overnight_Desert_Safari.webp";
import Private_Safari_with_ATV_and_VIP_Service from "../assets/images/Private_Safari_with_ATV_and_VIP_Service.webp";
import Private_Safari_with_Dune_Buggy from "../assets/images/Private_Safari_with_Dune_Buggy.png";
import _1_Seater_Dune_Buggy from "../assets/images/_1_Seater_Dune_Buggy.webp";
import _2_Seater_Dune_Buggy from "../assets/images/_2_Seater_Dune_Buggy.webp";
import _4_Seater_Dune_Buggy from "../assets/images/_4_Seater_Dune_Buggy.webp";
import Morning_Desert_Safari from "../assets/images/Morning_Desert_Safari.webp";
import Morning_Desert_Safari_with_Quad_Bike from "../assets/images/morning-quad-bike.webp";
import Private_Morning_Desert_Safari from "../assets/images/Private_Morning_Desert_Safari.webp";

const eveningFeatures = [
  "Pickup and drop-off from your location",
  "Dune bashing in a 4x4 vehicle",
  "Camel ride and sandboarding",
  "Unlimited soft drinks",
  "Traditional costume photography",
  "Henna painting for women and children",
  "Vegetarian and non-vegetarian BBQ buffet dinner",
  "Tanoura, fire and belly dance shows",
];

const privateEveningFeatures = [
  "Pickup and drop-off from your location",
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
    image: Evening_Desert_Safari_Abu_Dhabi,
    prices: [
      { label: "Child", amount: "65 AED" },
      { label: "Adult", amount: "75 AED" },
    ],
    features: eveningFeatures,
  },
  {
    id: "luxury-desert-safari",
    title: "Luxury Desert Safari Abu Dhabi",
    image: Luxury_Desert_Safari_Abu_Dhabi,
    prices: [{ label: "Per person", amount: "150 AED" }],
    features: privateEveningFeatures,
  },
  {
    id: "desert-safari-quad-bike",
    title: "Desert Safari with Quad Bike",
    image: Desert_Safari_with_Quad_Bike,
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
    image: Private_Desert_Safari_Abu_Dhabi,
    prices: [{ label: "Up to 6 guests", amount: "900 AED" }],
    features: privateEveningFeatures,
  },
  {
    id: "vip-desert-safari",
    title: "VIP Desert Safari Abu Dhabi",
    image: VIP_Desert_Safari_Abu_Dhabi,
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
    image: VIP_Desert_Safari_with_Quad_Bike,
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
    image: Overnight_Desert_Safari,
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
    image: Private_Safari_with_ATV_and_VIP_Service,
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
    image: Private_Safari_with_Dune_Buggy,
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
    image: _1_Seater_Dune_Buggy,
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
    image: _2_Seater_Dune_Buggy,
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
    image: _4_Seater_Dune_Buggy,
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
    image: Morning_Desert_Safari,
    prices: [{ label: "Per person", amount: "300 AED" }],
    features: morningFeatures,
  },
  {
    id: "morning-desert-safari-quad-bike",
    title: "Morning Desert Safari with Quad Bike",
    image: Morning_Desert_Safari_with_Quad_Bike,
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
    image: Private_Morning_Desert_Safari,
    prices: [{ label: "Up to 6 guests", amount: "1,000 AED" }],
    features: morningFeatures,
  },
];

export default safariPackages;
