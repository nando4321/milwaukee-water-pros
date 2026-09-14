import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111E46",
          borderRadius: 16,
        }}
      >
        <div
          style={{
            width: 14,
            height: 18,
            background: "#F4FAFF",
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
          }}
        />
      </div>
    ),
    size,
  );
}
