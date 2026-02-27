"use client";

import { Star, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// 1. MẢNG DỮ LIỆU REVIEW
const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    isVerified: true,
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    isVerified: true,
    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    isVerified: true,
    review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: "Michael B.",
    isVerified: true,
    review: "The shipping was incredibly fast and the packaging was premium. I ordered a few graphic tees and the print quality is top-notch. Will definitely be shopping here again.",
  },
  {
    id: 5,
    name: "Emily R.",
    isVerified: true,
    review: "Customer service is excellent! I had to exchange a pair of jeans for a different size and the process was seamless and hassle-free. Highly recommend Shop.co to everyone.",
  }
];

// 2. COMPONENT THẺ REVIEW (Review Card)
const ReviewCard = ({ data }: { data: any }) => {
  return (
    <div className="border border-shop-border rounded-[20px] p-6 md:p-8 bg-background h-full flex flex-col transition-colors duration-300">
      
      {/* 5 Ngôi sao */}
      <div className="flex gap-1.5 mb-4 text-[#FFC633]">
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={20} className="fill-current" />
        ))}
      </div>

      {/* Tên & Tích xanh */}
      <div className="flex items-center gap-2 mb-3">
        <h3 className="font-bold text-lg md:text-xl text-foreground">
          {data.name}
        </h3>
        {data.isVerified && (
          <div className="bg-[#01AB31] text-white rounded-full p-0.5">
            <Check size={14} strokeWidth={4} />
          </div>
        )}
      </div>

      {/* Nội dung đánh giá */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">
        "{data.review}"
      </p>
    </div>
  );
};

// 3. COMPONENT CHÍNH
export default function HappyCustomers() {
  return (
    <section className="py-10 md:py-20 transition-colors duration-300 overflow-hidden">
      <div className="container relative">
        
        {/* TIÊU ĐỀ & NÚT ĐIỀU HƯỚNG */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-3xl md:text-[40px] font-black uppercase tracking-tighter text-foreground">
            Our Happy Customers
          </h2>
          
          {/* Cụm Mũi tên (Dùng class ảo để Swiper móc nối vào) */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="swiper-button-prev-custom w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-shop-card transition-colors text-foreground disabled:opacity-30 disabled:cursor-not-allowed">
              <ArrowLeft size={24} />
            </button>
            <button className="swiper-button-next-custom w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-shop-card transition-colors text-foreground disabled:opacity-30 disabled:cursor-not-allowed">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* SWIPER CAROUSEL */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <Swiper
            modules={[Navigation]} // Khai báo module Navigation
            navigation={{
              prevEl: '.swiper-button-prev-custom', // Trỏ tới class nút Back ở trên
              nextEl: '.swiper-button-next-custom', // Trỏ tới class nút Next ở trên
            }}
            grabCursor={true}
            // Cấu hình tỷ lệ thẻ để luôn có 1 thẻ bị cắt ngang gợi ý cuộn
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 }, // Mobile: 1 thẻ nguyên + 1 mẩu nhỏ
              640: { slidesPerView: 2.2, spaceBetween: 20 }, // Tablet nhỏ
              1024: { slidesPerView: 3.2, spaceBetween: 24 }, // Desktop: 3 thẻ nguyên + 1 mẩu
            }}
            className="w-full !overflow-visible" // !overflow-visible giúp thẻ bị cắt ngang không bị mất shadow
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                {/* h-auto ở Slide giúp các thẻ review tự động cao bằng nhau dựa theo thẻ dài nhất */}
                <ReviewCard data={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}