export default function FixedGradientBackground() {
  return (
    <div className="fixed inset-0 bg-black -z-10 overflow-hidden">
      {/* Glow gradients */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-600 opacity-50 blur-[140px]" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-500 opacity-50 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 h-[600px] w-[600px] rounded-full bg-orange-500 opacity-40 blur-[180px]" />

      {/* Dark overlay */}
      <div className="" />
    </div>
  );
}
