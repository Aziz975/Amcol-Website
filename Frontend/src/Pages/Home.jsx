import HeroSection from "../Components/Home/HeroSection";
 import FeaturedProductsSection from "../Components/Home/FeaturedProductsSection";
 import ShopByDepartmentSection from "../Components/Home/ShopByDepartmentSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProductsSection />
      <ShopByDepartmentSection />
    </main>
  );
}