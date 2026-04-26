import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Tu Fiscalista — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Tu Fiscalista";
  const category = post?.category ?? "Blog";
  const readTime = post?.readTime ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          background: "linear-gradient(135deg, #0B0F14 0%, #111827 50%, #0B0F14 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#1a2332",
              border: "1px solid #253041",
            }}
          >
            <span style={{ fontSize: 24, fontWeight: 700, color: "#C8A977" }}>
              TF
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              color: "#C8A977",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            {category}
          </span>
        </div>

        <h1
          style={{
            fontSize: title.length > 80 ? 44 : 56,
            fontWeight: 700,
            color: "#F5F7FA",
            margin: 0,
            lineHeight: 1.15,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {title}
        </h1>

        <div style={{ flex: 1 }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #253041",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 18, color: "#A7B0BE" }}>
              Ali El Yemlahy · Asesor Fiscal
            </span>
            <span style={{ fontSize: 16, color: "#6B7A8D", marginTop: 4 }}>
              tufiscalista.com
            </span>
          </div>
          {readTime && (
            <span style={{ fontSize: 16, color: "#A7B0BE" }}>{readTime}</span>
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
