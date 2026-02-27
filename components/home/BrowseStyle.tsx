// components/home/BrowseStyle.tsx
import Image from "next/image";
import Link from "next/link";

// Mảng dữ liệu chứa cấu hình cho từng thẻ
const DRESS_STYLES = [
  {
    id: "casual",
    title: "Casual",
    image: "/next.svg", // Bạn thay bằng ảnh thật nhé
    // Chiếm 2/5 cột trên Desktop
    spanClass: "md:col-span-2", 
  },
  {
    id: "formal",
    title: "Formal",
    image: "/next.svg",
    // Chiếm 3/5 cột trên Desktop
    spanClass: "md:col-span-3", 
  },
  {
    id: "party",
    title: "Party",
    image: "/next.svg",
    // Chiếm 3/5 cột trên Desktop
    spanClass: "md:col-span-3", 
  },
  {
    id: "gym",
    title: "Gym",
    image: "/next.svg",
    // Chiếm 2/5 cột trên Desktop
    spanClass: "md:col-span-2", 
  },
];

export default function BrowseStyle() {
  return (
    <section className="py-10 md:py-16 transition-colors duration-300">
      <div className="container">
        
        {/* Khung nền xám bo góc to bọc ngoài cùng */}
        <div className="bg-shop-card rounded-[40px] px-6 py-10 md:px-16 md:py-16 transition-colors duration-300">
          
          {/* Tiêu đề */}
          <h2 className="text-3xl md:text-5xl font-black uppercase text-center tracking-tighter mb-10 md:mb-16 text-foreground">
            Browse by dress style
          </h2>

          {/* Lưới Grid: 1 cột trên Mobile, 5 cột trên Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            
            {DRESS_STYLES.map((style) => (
              <Link
                key={style.id}
                href={`/shop/${style.id}`}
                // Ghép class span vào để định hình chiều rộng, thêm group để làm hiệu ứng hover
                className={`${style.spanClass} group relative h-[190px] md:h-[290px] bg-background rounded-[20px] overflow-hidden transition-colors duration-300 shadow-sm hover:shadow-md block`}
              >
                {/* Tên Style (Nằm đè lên trên ảnh ở góc trái) */}
                <h3 className="absolute top-6 left-6 md:top-8 md:left-9 z-10 text-2xl md:text-3xl font-bold text-foreground">
                  {style.title}
                </h3>

                {/* Ảnh mô tả */}
                <div className="absolute inset-0 w-full h-full">
                  {/* Sử dụng object-cover và object-[center_right] để ảnh luôn căn sang phải, không bị che mất mặt người mẫu */}
                  <Image
                    src={style.image}
                    alt={`${style.title} style`}
                    fill
                    className="object-cover object-[center_right] group-hover:scale-105 transition-transform duration-500 ease-out dark:invert"
                  />
                </div>
              </Link>
            ))}

          </div>
        </div>
        
      </div>
    </section>
  );
}