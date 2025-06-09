// /app/login/page.tsx (Next.js 13+ App Router)
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import Layout from "@/layout/Layout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "admin@example.com" && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Layout noSidebar>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl border border-gray-200 dark:border-gray-700 rounded-2xl">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">Welcome Back</h2>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">Login to access your admin dashboard</p>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button onClick={handleLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-xl">Login</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    </Layout>
  );
}
