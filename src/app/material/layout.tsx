"use client"

import Materials from "./home";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>

      <div className="w-max-w mx-auto">
        <Materials />
        {children} 
      </div>
    </div>
  );
}
