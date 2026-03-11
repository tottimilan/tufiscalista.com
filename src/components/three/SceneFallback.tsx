export function SceneFallback() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 25% 35%, rgba(200, 169, 119, 0.07) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 50% at 75% 55%, rgba(94, 143, 121, 0.05) 0%, transparent 55%)",
            "linear-gradient(180deg, #0B0F14 0%, #111827 100%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
