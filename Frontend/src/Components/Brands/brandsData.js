const BASE = "https://www.amcolhardwarett.com";

export const brandsData = [
  { name: "Black and Decker", alt: "Black and Decker Tools", img: "/images/brand1.png" },
  { name: "DeWalt", alt: "DeWalt Tools", img: "/images/brand2.png" },
  { name: "Makita", alt: "Makita Tools", img: "/images/brand3.png" },
  { name: "RIDGID", alt: "RIDGID Tools", img: "/images/brand4.png" },
  { name: "Milwaukee", alt: "Milwaukee Tools", img: "/images/brand5.png" },
  { name: "SKIL", alt: "SKIL Tools", img: "/images/brand6.png" },
  { name: "Stanley", alt: "Stanley Tools", img: "/images/brand7.png" },
  { name: "Moen", alt: "Moen Plumbing Products", img: "/images/brand8.png" },
].map((b) => ({
  ...b,
  href: `${BASE}/search.php?brand=${encodeURIComponent(b.name)}`,
}));