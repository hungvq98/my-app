import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";

// 1. MẢNG DỮ LIỆU: NEW ARRIVALS
const NEW_ARRIVALS = [
  { id: 1, name: "T-shirt with Tape Details", price: 120, rating: 4.5, image: "/next.svg" },
  { id: 2, name: "Skinny Fit Jeans", price: 240, oldPrice: 260, discount: "-20%", rating: 3.5, image: "/next.svg" },
  { id: 3, name: "Checkered Shirt", price: 180, rating: 4.5, image: "/next.svg" },
  { id: 4, name: "Sleeve Striped T-shirt", price: 130, oldPrice: 160, discount: "-30%", rating: 4.5, image: "/next.svg" },
];

// 2. MẢNG DỮ LIỆU: TOP SELLING
const TOP_SELLING = [
  { id: 5, name: "Vertical Striped Shirt", price: 212, oldPrice: 232, discount: "-20%", rating: 5.0, image: "/next.svg" },
  { id: 6, name: "Courage Graphic T-shirt", price: 145, rating: 4.0, image: "/next.svg" },
  { id: 7, name: "Loose Fit Bermuda Shorts", price: 80, rating: 3.0, image: "/next.svg" },
  { id: 8, name: "Faded Skinny Jeans", price: 210, rating: 4.5, image: "/next.svg" },
];

// 3. COMPONENT CON: Thẻ Sản Phẩm (Dùng chung cho cả 2 section)
// Trong file ProductSections.tsx, cập nhật lại Component ProductCard:
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col cursor-pointer">
      {/* Background card sẽ đổi màu tự động */}
      <div className="bg-shop-card rounded-[20px] aspect-square relative overflow-hidden mb-4 p-4 flex items-center justify-center transition-colors duration-300">
        <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 dark:invert" />
      </div>

      {/* Chữ đổi sang foreground */}
      <h3 className="font-bold text-base md:text-lg mb-1.5 truncate text-foreground">
        {product.name}
      </h3>
      
      <div className="flex items-center gap-1.5 mb-2">
        <div className="flex text-[#FFC633]">
           <Star size={16} className="fill-current" />
           <Star size={16} className="fill-current" />
           <Star size={16} className="fill-current" />
           <Star size={16} className="fill-current" />
           <StarHalf size={16} className="fill-current" />
        </div>
        <span className="text-xs md:text-sm text-gray-500">
          <span className="text-foreground">{product.rating}</span>/5
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-bold text-xl md:text-2xl text-foreground">${product.price}</span>
        {product.oldPrice && (
          <span className="font-bold text-xl md:text-2xl text-gray-400 line-through">
            ${product.oldPrice}
          </span>
        )}
        {product.discount && (
          <span className="bg-[#FF3333]/10 text-[#FF3333] text-xs font-medium px-3 py-1 rounded-full">
            {product.discount}
          </span>
        )}
      </div>
    </Link>
  );
};

// 4. COMPONENT CHÍNH: Xếp 2 section lại với nhau
export default function ProductSections() {
  return (
    <section className="py-10 md:py-16">
      
      {/* --- SECTION 1: NEW ARRIVALS --- */}
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center tracking-tighter mb-10 md:mb-14">
          New Arrivals
        </h2>
        {/* Lưới Grid: 2 cột trên Mobile, 4 cột trên Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-10">
          {NEW_ARRIVALS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-14 py-3.5 rounded-full border border-gray-200 text-black font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
            View All
          </button>
        </div>
      </div>

      {/* ĐƯỜNG KẺ NGANG (Divider) */}
      <div className="container">
        <hr className="border-t border-gray-200 my-12 md:my-16" />
      </div>

      {/* --- SECTION 2: TOP SELLING --- */}
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center tracking-tighter mb-10 md:mb-14">
          Top Selling
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-10">
          {TOP_SELLING.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-14 py-3.5 rounded-full border border-gray-200 text-black font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
            View All
          </button>
        </div>
      </div>

    </section>
  );
}