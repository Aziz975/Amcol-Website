const BASE = "https://www.amcolhardwarett.com";

export const constructionData = {
  title: "Construction",
  subtitle: "Builder? Contractor? We've got all your construction needs.",
  icon: "/images/construct.png",
  categories: [
    {
      id: "clay-blocks",
      title: "Clay Blocks",
      products: [
        {
          name: "Red Blocks, Grade 1, 4″ x 8″ x 12″",
          price: null, // price na ho to card mein nahi dikhega
          img: "/images/clayblock1.png",
          href: `${BASE}/product-0000.php`,
        },
        {
          name: "CLAY BLOCK, VERTICAL CORE, 4″ X 8″ X 16″ (HERCULES)",
          price: null,
          img: "/images/clayblock2.png",
          href: `${BASE}/product-0000.php`,
        },
      ],
    },
    {
      id: "corrugated-steel",
      title: "Corrugated Steel",
      products: [
        {
          name: "1 LENGTH CORRUGATED STEEL ROD 12MM 1/2″ DHT (20FT)",
          price: 48,
          img: "/images/steel-rod1.png",
          href: `${BASE}/product-0000.php`,
        },
        {
          name: "TON 1/2″ X 20FT CORRUGATED STEEL RODS (12MM X 6M)",
          price: 8600,
          img: "/images/steel-rod2.png",
          href: `${BASE}/product-6964.php`,
        },
        {
          name: 'TON 5/8" X 20FT CORRUGATED STEEL RODS (16MM X 6M)?',
          price: 8600,
          img: "/images/steel-rod2.png",
          href: `${BASE}/product-6964.php`,
        },
        // ...baaki products
      ],
    },
    {
      id: "sand-and-gravel",
      title: "Sand and Gravel",
      products: [
        {
          name: "1/2 x 1/2 Gravel w/ Sharp Sand [1 Yard]",
          price: 360,
          img: "/images/sand1.png",
          href: `${BASE}/product-0000.php`,
        },
         {
          name: "[1 Bag] 1/2 x 1/2 Gravel w/ Sharp Sand",
          price: 60,
          img: "/images/sand1.png",
          href: `${BASE}/product-0000.php`,
        },
         {
          name: "[1/2 Load] 1/2 x 1/2 Gravel w/ Sharp Sand, (4 Yards)",
          price: 1320,
          img: "/images/sand1.png",
          href: `${BASE}/product-0000.php`,
        },
        // ...baaki products
      ],
    },
    // Concrete Mixes, Fencing Material, Cement Board & Tape...
    // Isi format mein aur categories add karte jao
  ],
};