"use client";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../contexts/AuthContext";
import "../../styles/globals.css";

export const Layout = ({ children }) => {
  const pathname = usePathname();

  const whiteList = ["/signin"];
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        {!whiteList.includes(pathname) ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          <>{children}</>
        )}
      </AuthProvider>
    </>
  );
};
