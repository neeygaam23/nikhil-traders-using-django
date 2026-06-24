import { useState } from "react"

const SEGMENTS = [
  { label: "10% OFF", emoji: "🎉" },
  { label: "Free Wire", emoji: "⚡" },
  { label: "Try Again", emoji: "🔄" },
  { label: "Free Bulb", emoji: "💡" },
  { label: "5% OFF", emoji: "💰" },
  { label: "Free Socket", emoji: "🔌" },
  { label: "Free Delivery", emoji: "📦" },
  { label: "Jackpot!", emoji: "🏆" },
]

const COLORS = [
  "#ef4444", "#3b82f6", "#9ca3af", "#eab308",
  "#22c55e", "#a855f7", "#f97316", "#ec4899",
]

const LuckySpin = () => {
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [result, setResult] = useState(null)
  const [spinsLeft, setSpinsLeft] = useState(3)

  const spin = () => {
    if (spinning || spinsLeft <= 0) return
    setSpinning(true)
    setResult(null)

    const segmentAngle = 360 / SEGMENTS.length
    const index = Math.floor(Math.random() * SEGMENTS.length)
    const extraTurns = 4 + Math.floor(Math.random() * 4)
    const target = rotation + extraTurns * 360 + (360 - (rotation % 360)) + index * segmentAngle

    setRotation(target)

    setTimeout(() => {
      setSpinning(false)
      setResult(SEGMENTS[index])
      setSpinsLeft((prev) => prev - 1)
    }, 4000)
  }

  const conic = COLORS.map((c, i) => {
    const start = (i / SEGMENTS.length) * 100
    const end = ((i + 1) / SEGMENTS.length) * 100
    return `${c} ${start}% ${end}%`
  }).join(", ")

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <svg className="w-7 h-7 text-red-500 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        </div>

        <div
          onClick={spinning ? undefined : spin}
          style={{
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(${conic})`,
          }}
          className={`w-64 h-64 sm:w-72 sm:h-72 rounded-full relative cursor-pointer select-none shadow-2xl border-4 border-white transition-transform duration-[4000ms] ease-out ${spinning ? "" : "hover:shadow-blue-400/30"}`}
        >
          {SEGMENTS.map((seg, i) => {
            const angle = (i / SEGMENTS.length) * 360 + 360 / SEGMENTS.length / 2
            const rad = (angle * Math.PI) / 180
            const r = 38
            const x = 50 + r * Math.cos(rad)
            const y = 50 + r * Math.sin(rad)
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <span
                  className="text-xs sm:text-sm font-bold text-white drop-shadow-lg"
                  style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${angle - 90}deg)`,
                    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  }}
                >
                  {seg.label}
                </span>
              </div>
            )
          })}

          <div className="absolute inset-4 rounded-full bg-white shadow-inner flex items-center justify-center pointer-events-none border-2 border-gray-100">
            <span className="text-lg sm:text-xl font-bold text-gray-800">
              {spinning ? "🎲" : result ? "🎉" : "SPIN"}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-3">
        Spins left: {spinsLeft} / 3
      </p>

      {!spinning && spinsLeft > 0 && (
        <button
          onClick={spin}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          🎡 Spin the Wheel!
        </button>
      )}

      {result && !spinning && (
        <div className="mt-4 px-6 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 text-center">
          <p className="text-lg font-bold text-gray-800">
            {result.emoji} You won: {result.label}! {result.emoji}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Show this at the shop to claim your prize!
          </p>
        </div>
      )}

      {spinsLeft === 0 && (
        <p className="mt-4 text-sm text-gray-400 italic">
          No more spins for today! Come back tomorrow 🎉
        </p>
      )}
    </div>
  )
}

export default LuckySpin
