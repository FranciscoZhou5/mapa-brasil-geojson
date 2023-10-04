"use client";

import BrazilSVG from "@/components/BrazilSVG";
import Header from "@/components/Header";
import MapSideBar from "@/components/MapSideBar";

export default function BrazilInSVG() {
  return (
    <>
      <Header />

      <div className="flex justify-end">
        <div className="flex-1 flex justify-center py-4">
          <BrazilSVG />
        </div>

        <MapSideBar />
      </div>
    </>
  );
}
