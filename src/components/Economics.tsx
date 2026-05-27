import { motion } from 'motion/react'
import { TrendingUp, Percent, BarChart3, Coins, Landmark, Sparkles, ArrowUpRight } from 'lucide-react'

const yieldTiers = [
  { duration: '30 Days', multiplier: '1.2x', apy: '5.2%', active: '34% yielders', popularity: 'Flexible' },
  { duration: '90 Days', multiplier: '1.6x', apy: '6.8%', active: '42% yielders', popularity: 'Most Popular' },
  { duration: '365 Days', multiplier: '2.5x', apy: '10.4%', active: '18% yielders', popularity: 'High Yield' },
  { duration: '4 Years', multiplier: '4.0x', apy: '15.6%', active: '6% yielders', popularity: 'Max Multiplier' },
]

const collateralAssets = [
  { name: 'Ethereum Liquid Staking (stETH/frxETH)', ratio: 45, value: '$382.1M', color: 'bg-indigo-400' },
  { name: 'Stablecoin Streams (USDC/USDT)', ratio: 30, value: '$254.7M', color: 'bg-emerald-400' },
  { name: 'Liquid Restaking Tokens (eETH/rsETH)', ratio: 15, value: '$127.3M', color: 'bg-purple-400' },
  { name: 'Real World Assets (RWA Treasury Stream)', ratio: 10, value: '$84.9M', color: 'bg-amber-400' },
]

export default function Economics() {
  return (
    <motion.section 
      id="economics"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1536px] mx-auto my-6 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/40 backdrop-blur-md border border-white/20 overflow-hidden relative flex flex-col gap-8 md:gap-12"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/20 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[rgba(30,50,90,0.8)]" />
            <span className="text-[12px] font-normal text-[rgba(30,50,90,0.9)] uppercase tracking-wider">Protocol Economics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal text-[#5E6470] tracking-tight mb-2">
            Yield Mechanics & TVL
          </h2>
        </div>
          <p className="text-sm md:text-base text-[#5E6470] opacity-80 max-w-md font-normal leading-relaxed">
            Engineered to sustain continuous yield streams and keep capital highly collateralized through liquid staking derivatives.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Fluid Staking Yield Tiers (6 Cols on large) */}
          <div className="lg:col-span-6 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <Percent className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.9)]">
                  Fluid Staking Multipliers
                </h3>
              </div>
              <span className="text-xs text-[rgba(30,50,90,0.6)]">Dynamic Lock Tiers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {yieldTiers.map((tier, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/30 hover:bg-white/45 border border-white/30 rounded-[1.2rem] p-4 flex flex-col gap-3 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-normal text-[rgba(30,50,90,0.8)]">{tier.duration}</span>
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-white/60 border border-white/10 text-[rgba(30,50,90,0.8)]">
                      {tier.popularity}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-normal text-[rgba(30,50,90,0.5)] uppercase tracking-wider">Base APY</span>
                      <span className="text-2xl font-semibold text-[#14F195] tracking-tight">{tier.apy}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-normal text-[rgba(30,50,90,0.5)] uppercase tracking-wider block">Multiplier</span>
                      <span className="text-base font-normal text-[rgba(30,50,90,0.95)] bg-white/60 px-2 py-0.5 rounded-md border border-white/20">
                        {tier.multiplier}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[rgba(30,50,90,0.6)] border-t border-[rgba(30,50,90,0.04)] pt-2 mt-1">
                    Pool share: {tier.active}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Card 2: Collateral Distribution Graph (6 Cols on large) */}
          <div className="lg:col-span-6 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.9)]">
                  Collateral Asset Distribution
                </h3>
              </div>
              <span className="text-xs text-[rgba(30,50,90,0.6)]">100% Collateralized</span>
            </div>

            <div className="flex flex-col gap-4">
              {collateralAssets.map((asset, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="font-normal text-[rgba(30,50,90,0.85)]">{asset.name}</span>
                    <div className="flex gap-2">
                      <span className="font-semibold text-[rgba(30,50,90,0.9)]">{asset.ratio}%</span>
                      <span className="text-[#5E6470] opacity-60">({asset.value})</span>
                    </div>
                  </div>
                  {/* Semantic Structural Progress Bar */}
                  <div className="w-full h-3 bg-white/30 border border-white/20 rounded-full overflow-hidden p-[2px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${asset.ratio}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                      className={`h-full rounded-full ${asset.color} opacity-80`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Total Indicator Block */}
            <div className="bg-white/20 border border-white/20 rounded-[1rem] p-4 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-[rgba(30,50,90,0.8)]" />
                <span className="text-xs font-normal text-[rgba(30,50,90,0.8)]">Total Collateral Value</span>
              </div>
              <span className="text-base md:text-lg font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
                $849.20M USD
              </span>
            </div>
          </div>

          {/* Card 3: TVL Tracking Benchmark (12 Cols - Full width below splits) */}
          <div className="lg:col-span-12 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.9)]">
                  TVL Performance Benchmarks
                </h3>
              </div>
              
              {/* Metrics inline items */}
              <div className="flex gap-4 md:gap-8 flex-wrap">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[rgba(30,50,90,0.5)] uppercase tracking-wider">All-Time Peak</span>
                  <span className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.9)]">$894.5M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[rgba(30,50,90,0.5)] uppercase tracking-wider">24H Stream Vol</span>
                  <span className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.9)]">$18.4M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[rgba(30,50,90,0.5)] uppercase tracking-wider">Yield Distributed</span>
                  <span className="text-sm md:text-base font-normal text-[#14F195] font-semibold">$42.5M</span>
                </div>
              </div>
            </div>

            {/* High-Fidelity SVG Graphic Area Chart */}
            <div className="relative w-full h-[180px] md:h-[240px] bg-white/10 rounded-[1.2rem] border border-white/20 p-4 overflow-hidden flex items-end">
              
              {/* Y Axis Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-6 px-4 pointer-events-none opacity-20">
                <div className="w-full border-t border-[rgba(30,50,90,0.3)]" />
                <div className="w-full border-t border-[rgba(30,50,90,0.3)]" />
                <div className="w-full border-t border-[rgba(30,50,90,0.3)]" />
              </div>

              {/* Area SVG */}
              <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="tvlGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(30, 50, 90, 0.25)" />
                    <stop offset="100%" stopColor="rgba(30, 50, 90, 0.0)" />
                  </linearGradient>
                </defs>

                {/* Filled Area */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  d="M 0 180 Q 150 140, 250 130 T 500 110 T 750 60 T 1000 30 L 1000 200 L 0 200 Z"
                  fill="url(#tvlGrad)"
                />

                {/* Top Stroke Curve */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  d="M 0 180 Q 150 140, 250 130 T 500 110 T 750 60 T 1000 30"
                  fill="none"
                  stroke="rgba(30, 50, 90, 0.6)"
                  strokeWidth="3"
                />

                {/* Growth Point indicator circles */}
                <circle cx="250" cy="130" r="5" fill="#14F195" stroke="rgba(30,50,90,0.8)" strokeWidth="2" />
                <circle cx="500" cy="110" r="5" fill="#14F195" stroke="rgba(30,50,90,0.8)" strokeWidth="2" />
                <circle cx="750" cy="60" r="5" fill="#14F195" stroke="rgba(30,50,90,0.8)" strokeWidth="2" />
                <circle cx="1000" cy="30" r="6" fill="#14F195" stroke="white" strokeWidth="2" />
              </svg>

              {/* Float-in tooltips on points */}
              <div className="absolute left-[24%] bottom-[42%] bg-white/80 backdrop-blur-md px-2 py-0.5 border border-white/30 rounded text-[9px] font-normal text-[rgba(30,50,90,0.9)] shadow-sm hidden md:block">
                Q2: $412M
              </div>
              <div className="absolute left-[49%] bottom-[52%] bg-white/80 backdrop-blur-md px-2 py-0.5 border border-white/30 rounded text-[9px] font-normal text-[rgba(30,50,90,0.9)] shadow-sm hidden md:block">
                Q3: $495M
              </div>
              <div className="absolute left-[74%] bottom-[76%] bg-white/80 backdrop-blur-md px-2 py-0.5 border border-white/30 rounded text-[9px] font-normal text-[rgba(30,50,90,0.9)] shadow-sm hidden md:block">
                Q4: $680M
              </div>
              <div className="absolute right-4 bottom-[87%] bg-[rgba(30,50,90,0.95)] px-2 py-1 text-white border border-white/20 rounded text-[10px] font-normal flex items-center gap-1 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-ping" />
                <span>Now: $849.2M</span>
              </div>

              {/* X Axis Time Labels */}
              <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[10px] text-[rgba(30,50,90,0.5)] font-normal pointer-events-none">
                <span>Jan 2026</span>
                <span>Apr 2026</span>
                <span>Jul 2026</span>
                <span>Oct 2026</span>
                <span>Active Vault Phase</span>
              </div>
            </div>

            {/* Bottom summary and action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[rgba(30,50,90,0.65)]">
                <TrendingUp className="w-4 h-4 text-[#14F195]" />
                <span>Steady television asset base scaling, up 104% from base release.</span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-[rgba(30,50,90,0.8)] text-white text-xs px-4 py-2 rounded-full hover:bg-[rgba(30,50,90,1)] transition-colors self-end group"
              >
                <span>View Analytics Ledger</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>
          
        </div>
      </motion.section>
  )
}
