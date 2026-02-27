"use client"; // Thêm dòng này để sử dụng state

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, ShoppingCart, CircleUserRound, X, 
  Trash2, LogOut, User, Package, Menu // Import thêm Menu icon
} from "lucide-react";
import Navigation from "./Navigation";

export default function Header() {
  // State quản lý việc đóng/mở mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* --- TOP BANNER --- */}
      <div className="bg-foreground text-background py-3 relative text-xs sm:text-sm transition-colors duration-300">
        <div className="container py-3 flex items-center justify-center relative">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <Link href="/signup" className="font-medium underline underline-offset-2 hover:opacity-75">
              Sign Up Now
            </Link>
          </p>
          <button className="absolute right-0 hover:opacity-75 hidden sm:block">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <div className="bg-background border-b py-4 border-shop-border relative z-50 transition-colors duration-300">
        <div className="container py-6 flex items-center justify-between">
          
          {/* 1. Hamburger Button (Mobile) & Logo */}
          <div className="flex items-center gap-4 text-foreground">
            {/* Nút mở menu mobile - Ẩn trên màn hình lớn (lg) */}
            <button 
              className="lg:hidden hover:opacity-75"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={26} />
            </button>
            
            <Link href="/" className="font-black text-2xl md:text-3xl tracking-tighter">
              ZHYLOS
            </Link>
          </div>

          {/* 2. Navigation (Desktop) */}
          <div className="hidden lg:block">
             <Navigation />
          </div>

          {/* 3. Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-6 items-center bg-shop-search rounded-full px-4 py-2.5 transition-colors duration-300">
            <Search size={20} className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-gray-500"
            />
          </div>

          {/* 4. Action Icons (Cart & User Dropdowns) */}
          <div className="flex items-center gap-4 md:gap-6 text-foreground">
            {/* Nút search mobile */}
            <button className="lg:hidden hover:opacity-75"><Search size={24} /></button>

            {/* --- MINI CART DROPDOWN --- */}
            <div className="relative group py-4">
              <Link href="/cart" className="hover:opacity-75 relative block">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              {/* Nội dung Dropdown Cart */}
              <div className="absolute top-[50px] right-0 w-80 bg-background border border-shop-border shadow-xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right z-[60]">
                <h3 className="font-bold text-lg mb-3 text-foreground">Giỏ hàng (2)</h3>
                
                <div className="space-y-4 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                  {/* Item 1 */}
                  <div className="flex gap-3">
                    <div className="w-16 h-16 bg-shop-card rounded-md flex-shrink-0 relative overflow-hidden">
                       <Image src="/next.svg" alt="Product" fill className="object-contain p-2 dark:invert" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium line-clamp-2 text-foreground">Áo Thun Gradient Graphic</h4>
                        <button className="text-red-500 hover:text-red-700"><Trash2 size={14} /></button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Size: L • Màu: Đen</p>
                      <p className="text-sm font-bold mt-1 text-foreground">$145</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-3">
                    <div className="w-16 h-16 bg-shop-card rounded-md flex-shrink-0 relative overflow-hidden">
                       <Image src="/next.svg" alt="Product" fill className="object-contain p-2 dark:invert" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium line-clamp-2 text-foreground">Quần Jean Skinny Fit</h4>
                        <button className="text-red-500 hover:text-red-700"><Trash2 size={14} /></button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Size: 32 • Màu: Xanh</p>
                      <p className="text-sm font-bold mt-1 text-foreground">$180</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-shop-border mt-4 pt-3 space-y-3">
                  <div className="flex justify-between font-bold text-foreground">
                    <span>Tổng cộng:</span>
                    <span className="text-xl">$325</span>
                  </div>
                  <Link href="/cart" className="block w-full bg-foreground text-background text-center py-3 rounded-full font-medium hover:opacity-80 transition-opacity">
                    Thanh toán ngay
                  </Link>
                </div>
              </div>
            </div>
            
            {/* --- USER PROFILE DROPDOWN --- */}
            <div className="relative group py-4">
              <Link href="/profile" className="hover:opacity-75 block">
                <CircleUserRound size={24} />
              </Link>

              {/* Nội dung Dropdown User */}
              <div className="absolute top-[50px] right-0 w-56 bg-background border border-shop-border shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right z-[60]">
                <div className="px-4 py-3 border-b border-shop-border mb-1">
                  <p className="text-sm font-bold text-foreground">Nguyễn Văn A</p>
                  <p className="text-xs text-gray-500 truncate">user@example.com</p>
                </div>
                <ul className="text-sm text-foreground">
                  <li>
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-shop-card transition-colors">
                      <User size={16} /> Quản lý tài khoản
                    </Link>
                  </li>
                  <li>
                    <Link href="/orders" className="flex items-center gap-2 px-4 py-2 hover:bg-shop-card transition-colors">
                      <Package size={16} /> Đơn mua
                    </Link>
                  </li>
                  <div className="border-t border-shop-border my-1"></div>
                  <li>
                    <button className="flex w-full items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-500/10 transition-colors text-left">
                      <LogOut size={16} /> Đăng xuất
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* --- MOBILE MENU DRAWER (Thêm mới) --- */}
      {/* ========================================= */}
      
      {/* 1. Lớp phủ đen (Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[100] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* 2. Nội dung Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-background z-[101] lg:hidden transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header của Drawer */}
        <div className="flex items-center justify-between p-5 border-b border-shop-border">
          <span className="font-black text-2xl tracking-tighter text-foreground">ZHYLOS</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-foreground hover:opacity-75 bg-shop-card p-2 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Khung tìm kiếm trên Mobile */}
        <div className="p-5 border-b border-shop-border">
          <div className="flex items-center bg-shop-search rounded-full px-4 py-2.5">
            <Search size={20} className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Danh sách link điều hướng */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
          <nav className="flex flex-col space-y-4 text-lg font-medium text-foreground">
            {/* Bạn có thể đưa component <Navigation /> của bạn vào đây nếu nó hỗ trợ flex-col. 
                Hoặc tự viết các thẻ Link cụ thể như bên dưới */}
            <Link href="/shop" className="hover:text-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link href="/men" className="hover:text-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Men</Link>
            <Link href="/women" className="hover:text-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Women</Link>
            <Link href="/kids" className="hover:text-gray-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Kids</Link>
            <Link href="/sale" className="text-red-500 hover:text-red-700 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sale</Link>
          </nav>
        </div>
        
        {/* Footer của Drawer (Tùy chọn) */}
        <div className="p-5 border-t border-shop-border bg-shop-card/50">
          <p className="text-xs text-gray-500 text-center">© 2026 ZHYLOS Store.</p>
        </div>
      </div>

    </header>
  );
}