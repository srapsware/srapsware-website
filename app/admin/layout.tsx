import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Manager - Srapsware",
  description: "Decap CMS Admin Panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
