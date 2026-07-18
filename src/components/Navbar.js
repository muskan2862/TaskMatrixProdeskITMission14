"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white">
      <h1 className="text-xl font-bold">TaskMatrix</h1>

      <div className="flex items-center gap-4">
        <Link href="/dashboard">Dashboard</Link>

        {user ? (
          <>
            <span>{user.user_metadata?.full_name}</span>

            <button
              onClick={handleLogout}
              className="rounded bg-red-500 px-3 py-1"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}