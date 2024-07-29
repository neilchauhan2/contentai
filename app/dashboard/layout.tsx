"use client";
import { usePathname } from "next/navigation";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        {pathname === "/dashboard" && <Header />}
        {children}
      </div>
    </div>
  );
}
