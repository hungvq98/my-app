import BrowseStyle from "@/components/home/BrowseStyle";
import ProductSections from "@/components/home/ProductSection";
import HeroBanner from "@/components/layout/HeroBanner"
export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <ProductSections/>
      <BrowseStyle/>
    </main>
  );
}
