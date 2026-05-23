import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout";
import MapPage from "@/pages/MapPage/MapPage";
import FuturesPage from "@/pages/FuturesPage/FuturesPage";
import RootedInLandPage from "@/pages/RootedInLandPage/RootedInLandPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MapPage />} />
        <Route path="futures" element={<FuturesPage />} />
        <Route path="rooted-in-land" element={<RootedInLandPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
