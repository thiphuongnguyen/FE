"use client";
import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../contexts/AuthContext";
import "../../styles/globals.css";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

export const LayoutAdmin = ({ children }) => {
  const pathname = usePathname();

  const whiteList = ["/signin"];
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        {!whiteList.includes(pathname) ? (
          <>
            <div className="ml-[150px]">
              <Header />
            </div>
            <Navbar />
            <div className="ml-[150px] mr-10">{children}</div>
          </>
        ) : (
          <>{children}</>
        )}
      </AuthProvider>
    </>
  );
};
