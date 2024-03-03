"use client";
import { useSearchParams } from "next/navigation";
import { Inter } from "next/font/google";
import { Layout } from "./@user/config/components/templates/Layout";
import { LayoutAdmin } from "./@admin/config/components/templates/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ user, admin }) {
  const searchParams = useSearchParams();
  const role = localStorage.getItem("role");

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
        // style={{
        //   backgroundImage:
        //     role === "admin"
        //       ? "linear-gradient(to bottom right, rgba(0, 47, 75, 0.5), rgba(220, 67, 37, 0.3))"
        //       : null,
        // }}
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
