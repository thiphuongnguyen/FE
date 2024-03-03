import Link from "next/link";
import "../../styles/navbar.css";
import {
  FcBusinessman,
  FcEditImage,
  FcHome,
  FcIphone,
  FcNews,
  FcSurvey,
  FcViewDetails,
} from "react-icons/fc";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const listCategory = [
    {
      name: "Home",
      icon: <FcHome className="text-3xl" />,
      link: "/",
    },
    {
      name: "Category",
      icon: <FcSurvey className="text-3xl" />,
      link: "/category",
    },
    {
      name: "Product",
      icon: <FcIphone className="text-3xl" />,
      link: "/product",
    },
    {
      name: "Orders",
      icon: <FcViewDetails className="text-3xl" />,
      link: "/order",
    },
    {
      name: "Sliders",
      icon: <FcEditImage className="text-3xl" />,
      link: "/slider",
    },
    {
      name: "User",
      icon: <FcBusinessman className="text-3xl" />,
      link: "/user",
    },
    {
      name: "News",
      icon: <FcNews className="text-3xl" />,
      link: "/news",
    },
  ];

  return (
    <nav className="navbar bg-white shadow-sm z-10 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100">
      <ul className="navbar__menu">
        {listCategory.map((item, index) => (
          <li className="navbar__item" key={index}>
            <Link
              href={item.link}
              className={`navbar__link ${
                pathname === item.link
                  ? "bg-[#406ff3] w-[3.5rem] rounded-[17.5px] m-auto"
                  : ""
              }`}
              style={{
                width: pathname === item.link ? "3.5rem" : "5.5rem",
                margin: pathname === item.link ? "10px auto" : "10px 0",
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
