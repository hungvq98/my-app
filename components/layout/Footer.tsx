import Link from "next/link";
import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";

const FOOTER_LINKS = [
    {
        title: "COMPANY",
        links: ["About", "Features", "Works", "Career"],
    },
    {
        title: "HELP",
        links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
    },
    {
        title: "FAQ",
        links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
        title: "RESOURCES",
        links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
    },
];

export default function Footer() {
    return (
        // mt-32 để tạo khoảng trống phía trên cho khối Newsletter đẩy lên
        <div className="relative mt-32">
            <div className="container">
                <div className="ft-newsletter bg-foreground rounded-[20px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl transition-colors duration-300">
                    <h2 className="text-background text-3xl md:text-4xl lg:text-[40px] font-black uppercase leading-tight max-w-sm w-full">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <div className="flex flex-col gap-3.5 w-full lg:max-w-sm">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-background text-foreground rounded-full py-3.5 pl-12 pr-4 outline-none text-sm placeholder:text-gray-400 transition-colors"
                            />
                        </div>
                        <button className="w-full bg-background text-foreground font-medium rounded-full py-3.5 text-sm hover:opacity-80 transition-opacity">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MAIN FOOTER --- */}
            {/* pt-36 để chừa chỗ cho khối Newsletter ở trên đâm xuống */}
            <footer className="bg-shop-footer pt-36 pb-10 transition-colors duration-300">
                <div className="container">

                    {/* Cấu trúc Grid chia cột */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-gray-300">

                        {/* Cột 1: Thông tin thương hiệu (Chiếm 2 phần) */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="font-black text-3xl tracking-tighter uppercase mb-6 block text-black">
                                SHOP.CO
                            </Link>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
                                We have clothes that suits your style and which you're proud to wear. From women to men.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">

                                {/* Twitter */}
                                <Link href="#" className="w-10 h-10 bg-background border border-shop-border rounded-full flex items-center justify-center text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground">
                                    <Twitter size={18} fill="currentColor" />
                                </Link>

                                {/* Facebook */}
                                <Link href="#" className="w-10 h-10 bg-background border border-shop-border rounded-full flex items-center justify-center text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground">
                                    <Facebook size={18} fill="currentColor" />
                                </Link>

                                {/* Instagram */}
                                <Link href="#" className="w-10 h-10 bg-background border border-shop-border rounded-full flex items-center justify-center text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground">
                                    <Instagram size={18} />
                                </Link>

                                {/* Github */}
                                <Link href="#" className="w-10 h-10 bg-background border border-shop-border rounded-full flex items-center justify-center text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground">
                                    <Github size={18} fill="currentColor" />
                                </Link>

                            </div>
                        </div>

                        {/* Các cột Links */}
                        {FOOTER_LINKS.map((column, index) => (
                            <div key={index} className="flex flex-col">
                                <h3 className="font-medium tracking-widest uppercase text-black mb-6">
                                    {column.title}
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    {column.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link href="#" className="text-gray-500 hover:text-black text-sm transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Dưới cùng: Copyright & Các thẻ thanh toán */}
                    <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            Shop.co © 2000-2023, All Rights Reserved
                        </p>

                        {/* Payment Badges (Sử dụng text giả lập, bạn có thể thay bằng thẻ <Image> chứa SVG logo thật sau) */}
                        <div className="flex items-center gap-2">
                            <div className="bg-white border px-3 py-1.5 rounded-md text-xs font-black text-[#1434CB] italic">VISA</div>
                            <div className="bg-white border px-3 py-1.5 rounded-md text-xs font-bold text-[#EB001B] relative overflow-hidden flex items-center">
                                {/* Giả lập logo Mastercard */}
                                <div className="w-4 h-4 rounded-full bg-[#EB001B] opacity-80 -mr-2 relative z-10"></div>
                                <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-80"></div>
                            </div>
                            <div className="bg-white border px-3 py-1.5 rounded-md text-xs font-bold text-[#003087] italic">PayPal</div>
                            <div className="bg-white border px-3 py-1.5 rounded-md text-xs font-bold text-black flex items-center gap-1">
                                <span className="text-[10px]"></span>Pay
                            </div>
                            <div className="bg-white border px-3 py-1.5 rounded-md text-xs font-medium text-gray-600 flex items-center gap-1">
                                <span className="font-bold text-black border border-black rounded-full px-1 text-[8px]">G</span> Pay
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}