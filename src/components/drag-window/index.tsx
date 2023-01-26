"use client";

import WindowCard from "@/components/window-card";

export default function DragWindow() {
  return (
    <div className="absolute bottom-10 right-10">
      <WindowCard title="Drag Me!" onClose={() => console.log("Closed")}>
        <div className="px-10 py-10">
          <p className="text-2xl font-bold">Hello!</p>
          <p className="text-lg leading-8">Let`s connect!</p>
        </div>
      </WindowCard>
    </div>
  );
}
