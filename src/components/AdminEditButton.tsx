"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminEditButton() {
  const [mounted, setMounted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setMounted(true);
    const admin = sessionStorage.getItem("isAdmin") === "true";
    setIsAdmin(admin);
  }, []);

  if (!mounted || !isAdmin) return null;

  return (
    <Link
      href="/dashboard"
      className="nav-links"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 14px",
        borderRadius: "10px",
        border: "1px solid currentColor",
        cursor: "pointer",
      }}
    >
      Modifica
    </Link>
  );
}