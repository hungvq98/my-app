"use client"; // Bắt buộc phải có khi dùng Swiper trong Next.js App Router

import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";

// Import Swiper React components và CSS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// 1. MẢNG DỮ LIỆU
const NEW_ARRIVALS = [
  { id: 1, name: "T-shirt with Tape Details", price: 120, rating: 4.5, image: "/next.svg" },
  { id: 2, name: "Skinny Fit Jeans", price: 240, oldPrice: 260, discount: "-20%", rating: 3.5, image: "/next.svg" },
  { id: 3, name: "Checkered Shirt", price: 180, rating: 4.5, image: "/next.svg" },
  { id: 4, name: "Sleeve Striped T-shirt", price: 130, oldPrice: 160, discount: "-30%", rating: 4.5, image: "/next.svg" },
  { id: 5, name: "Graphic Printed Tee", price: 150, rating: 4.0, image: "/next.svg" }, // Thêm data để test trượt
];

const TOP_SELLING = [
  { id: 6, name: "Vertical Striped Shirt", price: 212, oldPrice: 232, discount: "-20%", rating: 5.0, image: "/next.svg" },
  { id: 7, name: "Courage Graphic T-shirt", price: 145, rating: 4.0, image: "/next.svg" },
  { id: 8, name: "Loose Fit Bermuda Shorts", price: 80, rating: 3.0, image: "/next.svg" },
  { id: 9, name: "Faded Skinny Jeans", price: 210, rating: 4.5, image: "/next.svg" },
  { id: 10, name: "Classic Polo Shirt", price: 190, rating: 4.8, image: "/next.svg" }, // Thêm data để test trượt
];

// 2. COMPONENT CON: Thẻ Sản Phẩm (Đã hỗ trợ Dark Mode)
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link href={`/product/${product.id}`} className="group flex flex-col cursor-pointer w-full">
      <div className="bg-shop-card rounded-[20px] aspect-square relative overflow-hidden mb-4 p-4 flex items-center justify-center transition-colors duration-300">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 dark:invert" 
        />
      </div>

      <h3 className="font-bold text-base md:text-lg mb-1.5 truncate text-foreground">
        {product.name}
      </h3>
      
      <div className="flex items-center gap-1.5 mb-2">
        <div className="flex text-[#FFC633]">
          <Star size={16} className="fill-current" />
          <Star size={16} className="fill-current" />
          <Star size={16} className="fill-current" />
          <Star size={16} className="fill-current" />
          {product.rating % 1 !== 0 ? <StarHalf size={16} className="fill-current" /> : <Star size={16} className="fill-current" />}
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

// 3. COMPONENT CHÍNH
export default function ProductSections() {
  // Cấu hình Responsive chung cho cả 2 Slider
  const swiperBreakpoints = {
    // Mobile nhỏ (Mặc định)
    0: { slidesPerView: 2, spaceBetween: 16 },
    // Tablet
    768: { slidesPerView: 3, spaceBetween: 24 },
    // Desktop
    1024: { slidesPerView: 4, spaceBetween: 32 },
  };

  return (
    <section className="py-10 md:py-16 transition-colors duration-300">
      
      {/* --- SECTION 1: NEW ARRIVALS --- */}
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center tracking-tighter mb-10 md:mb-14 text-foreground">
          New Arrivals
        </h2>
        
        {/* Dùng Swiper thay cho Grid */}
        <div className="mb-10 w-full overflow-hidden">
          <Swiper
            breakpoints={swiperBreakpoints}
            grabCursor={true} // Đổi con trỏ chuột thành hình bàn tay để user biết có thể kéo
            className="w-full pb-4" // Thêm padding bottom nhẹ để shadow/hover không bị cắt ngang
          >
            {NEW_ARRIVALS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center">
          <button className="px-14 py-3.5 rounded-full border border-shop-border text-foreground font-medium hover:bg-shop-card transition-colors w-full sm:w-auto">
            View All
          </button>
        </div>
      </div>

      {/* ĐƯỜNG KẺ NGANG (Divider) */}
      <div className="container">
        <hr className="border-t border-shop-border my-12 md:my-16 transition-colors duration-300" />
      </div>

      {/* --- SECTION 2: TOP SELLING --- */}
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center tracking-tighter mb-10 md:mb-14 text-foreground">
          Top Selling
        </h2>
        
        <div className="mb-10 w-full overflow-hidden">
          <Swiper
            breakpoints={swiperBreakpoints}
            grabCursor={true}
            className="w-full pb-4"
          >
            {TOP_SELLING.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center">
          <button className="px-14 py-3.5 rounded-full border border-shop-border text-foreground font-medium hover:bg-shop-card transition-colors w-full sm:w-auto">
            View All
          </button>
        </div>
      </div>

    </section>
  );
}