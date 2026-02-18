'use client';

import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function InfiniteSliderBasic() {
  return (
    <InfiniteSlider
      gap={24}
      reverse
      className="w-full max-w-7xl mx-auto flex mt-10 h-full"
    >
      {/* Logo existants */}
      <img src="/logo/bouillon.png" alt="JMS Café" className="h-[120px] w-auto" />
      <img src="/logo/my-pub.webp" alt="My Pub Rouen" className="h-[120px] w-auto" />
      <img src="/logo/le-maharaja.png" alt="Le Maharaja" className="h-[120px] w-auto" />
      <img src="/logo/drugstore.png" alt="Drugstore" className="h-[120px] w-auto" />
      <img src="/logo/logo-vache.png" alt="Logo Vache" className="h-[120px] w-auto" />
            <img src="/logo/bouillon.png" alt="JMS Café" className="h-[120px] w-auto" />
      <img src="/logo/my-pub.webp" alt="My Pub Rouen" className="h-[120px] w-auto" />
      <img src="/logo/le-maharaja.png" alt="Le Maharaja" className="h-[120px] w-auto" />
      <img src="/logo/drugstore.png" alt="Drugstore" className="h-[120px] w-auto" />
      <img src="/logo/logo-vache.png" alt="Logo Vache" className="h-[120px] w-auto" />

      {/* Tu peux garder ou enlever ceux-là */}

    </InfiniteSlider>
  );
}
