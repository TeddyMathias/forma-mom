export default function NotificationBar() {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #5C4A38 0%, #6A2828 55%, #C49A6C 100%)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
      {/* Text content */}
      <div className="relative px-6 py-2.5 flex items-center justify-center">
        <p
          className="text-[12px] tracking-[0.06em] font-medium"
          style={{ color: "#D4A84C" }}
        >
          ✦ Now available for bookings in NYC and virtually anywhere
        </p>
      </div>
      {/* Extra background strip that the nav's rounded corners bite into */}
      <div className="h-3" />
    </div>
  );
}
