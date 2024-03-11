"use client";
import { useSearchParams } from "next/navigation";
import { Inter } from "next/font/google";
import { Layout } from "./@user/components/component/templates/Layout";
import { LayoutAdmin } from "./@admin/components/component/templates/Layout";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ user, admin }) {
  const searchParams = useSearchParams();
  const role = localStorage.getItem("role");
  if(!role){
    localStorage.setItem("role", "user");
  }

  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-beauty-logo-design-png-image_6568470.png"
        type="image/x-icon"
        sizes="16x16"
      />
      <body
        className={inter.className}
        suppressHydrationWarning={true}
        style={{
          backgroundImage:
            role === "admin"
              ? "linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6))"
              : null,
        }}
      >
        {role === "admin" ? (
          <LayoutAdmin>{admin}</LayoutAdmin>
        ) : (
          <Layout>{user}</Layout>
        )}
      </body>
    </html>
  );
}
