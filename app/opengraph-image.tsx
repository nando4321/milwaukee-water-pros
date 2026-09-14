import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — water filtration in Milwaukee`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111E46",
          color: "white",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#C2420D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            MWP
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
            Water filtration & treatment for Greater Milwaukee
          </div>
          <div style={{ fontSize: 24, color: "#dbeafe" }}>
            Milwaukee County • Waukesha County • Ozaukee County
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#93c5fd" }}>{site.address.full}</div>
      </div>
    ),
    size,
  );
}
