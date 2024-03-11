import Link from "next/link";
import { MiniCart } from "../organisms/MiniCart";
import { Dropdown } from "../atoms/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import "../../styles/remixicon.css";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Search } from "../organisms/Search";
import { LoginForm } from "../organisms/LoginForm";
import { AuthContext } from "../contexts/AuthContext";
import {
  FaRegUser,
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { ListCategories } from "../../utils/auth";
import { FiSettings } from "react-icons/fi";

export const Header = () => {
  const storedIdCustomer = Cookies.get("id_customer");
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { isShowLogin, setIsShowLogin, breadcrumb, setBreadcrumb } =
    useContext(AuthContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleLogin = () => {
    setIsShowLogin(!isShowLogin);
    router.refresh();
  };

  const router = useRouter();
  const pathname = usePathname();
  const [listitem, setListitem] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  const Signout = () => {
    Cookies.remove("token");
    Cookies.remove("id_customer");
    router.refresh();
  };
  const Account = () => {
    router.push("/");
  };

  const clickCart = () => {
    if (storedIdCustomer) {
      router.push("/cart");
    } else {
      setIsShowLogin(true);
    }
  };

  useEffect(() => {
    if (storedIdCustomer) {
      setListitem([
        {
          icon: <FaRegUser />,
          text: "Account settings",
          onclick: Account,
        },
        {
          icon: <FaArrowRightFromBracket />,
          text: "Sign out",
          onclick: Signout,
        },
      ]);
    } else {
      setListitem([
        {
          icon: <FaArrowRightToBracket />,
          text: "Signin",
          onclick: toggleLogin,
        },
      ]);
    }
  }, [storedIdCustomer]);

  const [dataAll, setDataAll] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ListCategories();
        setDataAll(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dataAll) {
      const additionalElement = {
        text: "All products",
        onclick: () => router.push(`/product`),
      };

      const dataMap = dataAll?.map((item) => ({
        text: item.category_name,
        onclick: () => router.push(`/category/${item.category_id}`),
      }));

      // Adding the additional element to the beginning of the array
      const updatedListCategory = [additionalElement, ...dataMap];

      setListCategory(updatedListCategory);
    }
  }, [dataAll]);

  const changeRole = () => {
    localStorage.setItem("role", "admin");
    router.refresh();
    router.push("/");
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link href="/" className="nav__logo">
            <img src="/logo.png" className="h-[88px]" />
          </Link>

          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/" className="nav__link">
                  Home
                </Link>
              </li>

              <li className="nav__item">
                <Dropdown
                  content={
                    <span className="nav__link flex gap-1 items-center">
                      Categories <FaAngleDown />
                    </span>
                  }
                  listitem={listCategory}
                />
              </li>

              <li className="nav__item">
                <Link href="/news" className="nav__link">
                  News
                </Link>
              </li>

              {/* <li className="nav__item">
                <a href="#" className="nav__link">
                  Shopping Guide
                </a>
              </li> */}

              <li className="nav__item">
                <Link href="/contact" className="nav__link">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Close button */}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <AiOutlineClose />
            </div>
          </div>

          <div className="nav__actions">
            {/* Search button */}
            <span onClick={changeRole} id="search-btn">
              <FiSettings />
            </span>

            <span onClick={toggleSearch} id="search-btn">
              <FaSearch />
            </span>

            {/* Cart */}
            <div className="cursor-pointer" onClick={clickCart}>
              <FaShoppingCart className=" w-5 h-5" />
            </div>

            {/* Login button */}
            <Dropdown
              content={
                <span id="login-btn">
                  <FaRegUser />
                </span>
              }
              listitem={listitem}
            />

            {/* Toggle button */}
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <FiMenu />
            </div>
          </div>
        </nav>
      </header>

      {pathname !== "/" ? (
        <nav
          className="flex py-2 px-[10rem] bg-slate-100"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <ImHome />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <FaAngleRight />
                <span className="cursor-pointer ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                  {breadcrumb}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      ) : null}

      <Search showSearch={showSearch} setShowSearch={setShowSearch} />

      <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} />
    </>
  );
};
