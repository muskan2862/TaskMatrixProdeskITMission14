"use client";

import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <>
        <Navbar />

        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-100">
          <div className="rounded-lg bg-white p-8 shadow-lg w-[450px]">
            <h1 className="mb-5 text-3xl font-bold">
              Welcome to TaskMatrix
            </h1>

            <p className="mb-3">
              <strong>Name:</strong> {user?.user_metadata?.full_name}
            </p>

            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
        </div>
      </>
    </ProtectedRoute>
  );
}