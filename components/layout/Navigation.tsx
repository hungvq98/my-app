import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

// TẠO MẢNG DỮ LIỆU MENU
const NAV_LINKS = [
  {
    title: "Shop",
    href: "/shop",
    isDropdown: true, // Đánh dấu mục này có menu xổ xuống
    subMenu: [
      {
        title: "Men",
        href: "/shop/men",
        // Khai báo rõ class Tailwind để tạo hiệu ứng hover độc lập
        groupClass: "group/men",
        hoverClass: "group-hover/men:opacity-100 group-hover/men:visible",
        childLinks: [
          { title: "T-Shirts", href: "/shop/men/tshirts" },
          { title: "Jeans", href: "/shop/men/jeans" },
          { title: "Shoes", href: "/shop/men/shoes" },
        ],
      },
      {
        title: "Women",
        href: "/shop/women",
        groupClass: "group/women",
        hoverClass: "group-hover/women:opacity-100 group-hover/women:visible",
        childLinks: [
          { title: "Dresses", href: "/shop/women/dresses" },
          { title: "Tops", href: "/shop/women/tops" },
          { title: "Bags & Purses", href: "/shop/women/bags" },
        ],
      },
      // Các mục không có menu cấp 2 thì không cần groupClass và childLinks
      { title: "Kids", href: "/shop/kids" },
      { title: "Accessories", href: "/shop/accessories" },
    ],
  },
  { title: "On Sale", href: "/on-sale" },
  { title: "New Arrivals", href: "/new-arrivals" },
  { title: "Brands", href: "/brands" },
];

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium h-full">
      {/* VÒNG LẶP CẤP 1: Render các menu chính (Shop, On Sale, Brands...) */}
      {NAV_LINKS.map((item, index) => (
        item.isDropdown ? (
          // NẾU LÀ DROPDOWN (Ví dụ: Shop)
          <div key={index} className="relative group cursor-pointer py-4">
            <div className="flex items-center gap-1 hover:text-gray-600 transition-colors">
              {item.title} <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
            </div>

            {/* Khung Dropdown Cấp 1 */}
            <div className="absolute top-[50px] left-0 w-48 bg-white border border-gray-100 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="py-3 text-gray-700">
                
                {/* VÒNG LẶP CẤP 2: Render các menu con (Men, Women, Kids...) */}
                {item.subMenu?.map((subItem, subIndex) => (
                  subItem.childLinks ? (
                    // NẾU CÓ MENU CẤP 3 (Ví dụ: Men, Women)
                    <li key={subIndex} className={`relative ${subItem.groupClass} px-5 py-2 hover:bg-gray-50 hover:text-black flex justify-between items-center transition-colors mt-1`}>
                      <span>{subItem.title}</span>
                      <ChevronRight size={14} className="text-gray-400" />
                      
                      {/* Khung Dropdown Cấp 2 */}
                      <div className={`absolute top-0 left-full ml-1 w-44 bg-white border border-gray-100 shadow-lg rounded-xl opacity-0 invisible ${subItem.hoverClass} transition-all duration-300`}>
                        <ul className="py-2">
                          
                          {/* VÒNG LẶP CẤP 3: T-shirts, Jeans... */}
                          {subItem.childLinks.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link href={child.href} className="block px-5 py-2 hover:bg-gray-50 hover:text-black">
                                {child.title}
                              </Link>
                            </li>
                          ))}

                        </ul>
                      </div>
                    </li>
                  ) : (
                    // KHÔNG CÓ MENU CẤP 3 (Ví dụ: Kids, Accessories)
                    <li key={subIndex}>
                      <Link href={subItem.href} className="block px-5 py-2 hover:bg-gray-50 hover:text-black mt-1">
                        {subItem.title}
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </div>
        ) : (
          // NẾU KHÔNG PHẢI DROPDOWN (Ví dụ: On sale, Brands)
          <Link key={index} href={item.href} className="hover:text-gray-600 transition-colors py-4">
            {item.title}
          </Link>
        )
      ))}
    </nav>
  );
}