"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      router.push("/signin");
    }
  }, []);
  return (
    <>
      <div className=""></div>
    </>
  );
};
export default Home;
