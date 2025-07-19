'use client'
import { Navbar } from "@/components/commercial/Navbar";
import { Sidebar } from "@/components/commercial/Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
}