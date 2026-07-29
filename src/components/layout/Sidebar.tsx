"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Megaphone, 
  Settings,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Inbox", href: "/inbox", icon: MessageSquare },
    { name: "Contacts", href: "/contacts", icon: Users },
    { name: "Broadcast", href: "/broadcasts", icon: Megaphone },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-800 text-white flex flex-col shadow-xl">
      {/* Brand */}
      <div className="p-6 border-b border-indigo-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-xl">
            Z
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">ZIVEXO CRM</h1>
            <p className="text-xs text-indigo-300">Smarter CRM</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-indigo-700 text-white shadow-lg shadow-indigo-700/30"
                  : "text-indigo-200 hover:bg-indigo-700/50 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-indigo-700">
        <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-lg text-indigo-200 hover:bg-indigo-700/50 hover:text-white transition-all duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
