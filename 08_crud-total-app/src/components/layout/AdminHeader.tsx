import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-lg font-semibold">관리자 대시보드</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="알림">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="프로필">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}