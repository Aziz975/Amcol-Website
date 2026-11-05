import HeroSection from "../Components/Home/HeroSection";
 import FeaturedProductsSection from "../Components/Home/FeaturedProductsSection";
 import ShopByDepartmentSection from "../Components/Home/ShopByDepartmentSection";
import PerksSection from "../Components/Home/PerksSection";
import TopSellingCategoriesSection from "../Components/Home/TopSellingCategoriesSection";
import AboutUsSection from "../Components/AboutUs/AboutUsSection";
import HardwareSupplies from "../Components/HardwareSupplies/HardwareSupplies";
import FaqSection from "../Components/Faq/FaqSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProductsSection />
      <ShopByDepartmentSection />
      <PerksSection />
      <TopSellingCategoriesSection />
      <AboutUsSection />
      <HardwareSupplies />
      <FaqSection />
    </main>
  );
}