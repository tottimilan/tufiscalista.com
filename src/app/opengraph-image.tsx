import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tu Fiscalista — Asesoría Fiscal Boutique";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B0F14 0%, #111827 50%, #0B0F14 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "#1a2332",
            border: "1px solid #253041",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 36, fontWeight: 700, color: "#C8A977" }}>
            TF
          </span>
        </div>

        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#F5F7FA",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Tu Fiscalista
        </h1>

        <p
          style={{
            fontSize: 24,
            color: "#C8A977",
            margin: "16px 0 0 0",
            textAlign: "center",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}
        >
          Asesoría Fiscal Boutique
        </p>

        <p
          style={{
            fontSize: 20,
            color: "#A7B0BE",
            margin: "24px 0 0 0",
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Máximo 20 clientes. Planificación, seguimiento y criterio para tu
          negocio.
        </p>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 14, color: "#6B7A8D" }}>
            tufiscalista.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
