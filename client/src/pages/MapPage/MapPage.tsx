import { HeroCarouselSection } from "./components/HeroCarouselSection";
import { MapSection } from "./components/MapSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { ThemesSection } from "./components/ThemesSection";
import { FooterSection } from "./components/FooterSection";

export default function MapPage() {
  return (
    <main className="min-h-full flex flex-col">
      <HeroCarouselSection />
      <MapSection />
      <ManifestoSection />
      <ThemesSection />
      <FooterSection />
    </main>
  );
}
