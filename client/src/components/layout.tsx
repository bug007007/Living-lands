import { Outlet } from "react-router-dom";
import { SubscribeBar } from "./SubscribeBar";

export function Layout() {
  return (
    <div className="w-screen h-screen relative">
      <Outlet />
      <SubscribeBar />
    </div>
  );
}
