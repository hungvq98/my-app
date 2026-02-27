// components/home/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0C50 0 50 40 100 50C100 50 50 60 50 100C50 100 50 60 0 50C0 50 50 40 50 0Z" />
  </svg>
);

export default function HeroBanner() {
  return (
    <section className="w-full transition-colors duration-300">
      
      {/* --- PHẦN NỀN XÁM --- */}
      {/* Trở lại padding tĩnh chuẩn: pt-10 md:pt-20 */}
      <div className="bg-shop-hero pt-10 md:pt-20 relative overflow-hidden transition-colors duration-300">
        
        <div className="container flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          
          {/* CỘT TRÁI: NỘI DUNG CHỮ */}
          <div className="w-full md:w-1/2 flex flex-col items-start z-10 pb-10 md:pb-20">
            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black uppercase leading-[1.1] text-foreground mb-6 tracking-tighter">
              Find clothes <br className="hidden md:block" />
              that matches <br className="hidden md:block" />
              your style
            </h1>
            
            <p className="text-sm md:text-base text-gray-500 max-w-md mb-8 leading-relaxed">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            
            <Link 
              href="/shop" 
              className="bg-foreground text-background px-12 py-4 rounded-full text-sm font-medium hover:opacity-80 transition-opacity w-full sm:w-auto text-center mb-10 md:mb-12"
            >
              Shop Now
            </Link>

            {/* Cụm 3 Thống kê */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-4 w-full sm:w-auto">
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold text-foreground">200+</span>
                <span className="text-xs md:text-sm text-gray-500">International Brands</span>
              </div>
              <div className="w-px h-12 bg-shop-border hidden sm:block"></div>
              
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold text-foreground">2,000+</span>
                <span className="text-xs md:text-sm text-gray-500">High-Quality Products</span>
              </div>
              <div className="w-px h-12 bg-shop-border hidden sm:block"></div>
              
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold text-foreground">30,000+</span>
                <span className="text-xs md:text-sm text-gray-500">Happy Customers</span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: ẢNH NGƯỜI MẪU */}
          {/* Trở lại chiều cao chuẩn: 400px cho mobile và 600px cho desktop */}
          <div className="w-full md:w-1/2 relative flex justify-center h-[400px] md:h-[600px]">
            <StarIcon className="absolute left-0 top-[40%] w-10 md:w-14 text-foreground animate-pulse z-20" />
            <StarIcon className="absolute right-0 md:right-10 top-10 w-16 md:w-24 text-foreground animate-pulse z-20" />

            <div className="relative w-full h-full">
              <Image 
                src="/assets/images/Rectangle 2.png" // Chỗ này bạn nhớ thay ảnh mẫu tách nền nhé
                alt="Models wearing stylish clothes"
                fill
                className="object-cover md:object-contain object-bottom dark:invert"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* --- DẢI LOGO THƯƠNG HIỆU --- */}
      {/* Trở lại padding chuẩn: py-8 md:py-10 */}
      <div className="bg-foreground py-8 md:py-10 transition-colors duration-300">
        <div className="container flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-background opacity-90">
          <span className="text-2xl md:text-3xl font-serif tracking-widest uppercase">Versace</span>
          <span className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">ZARA</span>
          <span className="text-3xl md:text-4xl font-serif tracking-widest uppercase">GUCCI</span>
          <span className="text-2xl md:text-3xl font-bold tracking-widest uppercase">PRADA</span>
          <span className="text-xl md:text-2xl font-sans tracking-tight">Calvin Klein</span>
        </div>
      </div>

    </section>
  );
}