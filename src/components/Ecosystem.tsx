import { motion } from 'motion/react'
import { ArrowUpRight, Activity, Cpu, Database, Network, Server, Shield } from 'lucide-react'

const vaults = [
  {
    id: 'eth-vault',
    network: 'Ethereum',
    logoColor: 'text-[#627EEA]',
    bgAccent: 'from-[#627EEA]/10 to-[#627EEA]/0',
    title: 'Ethereum Main Stream',
    tvl: '$342.8M',
    apy: '4.8%',
    activeStreams: '3,420',
    collateral: 'ETH, stETH, wETH',
    status: 'High Liquidity',
    icon: Network,
  },
  {
    id: 'sol-vault',
    network: 'Solana',
    logoColor: 'text-[#14F195]',
    bgAccent: 'from-[#14F195]/10 to-[#14F195]/0',
    title: 'Solana Fluid Stream',
    tvl: '$185.2M',
    apy: '8.5%',
    activeStreams: '8,140',
    collateral: 'SOL, mSOL, JupSOL',
    status: 'Optimal Flow',
    icon: Cpu,
  },
  {
    id: 'base-vault',
    network: 'Base',
    logoColor: 'text-[#0052FF]',
    bgAccent: 'from-[#0052FF]/10 to-[#0052FF]/0',
    title: 'Base Asset Stream',
    tvl: '$124.9M',
    apy: '6.2%',
    activeStreams: '5,910',
    collateral: 'USDC, cbETH, wETH',
    status: 'High Volume',
    icon: Database,
  },
  {
    id: 'arb-vault',
    network: 'Arbitrum',
    logoColor: 'text-[#28A0F0]',
    bgAccent: 'from-[#28A0F0]/10 to-[#28A0F0]/0',
    title: 'Arbitrum Turbo Stream',
    tvl: '$98.4M',
    apy: '5.5%',
    activeStreams: '2,840',
    collateral: 'USDC, ARB, wETH',
    status: 'Low Fee',
    icon: Server,
  },
  {
    id: 'op-vault',
    network: 'Optimism',
    logoColor: 'text-[#FF0420]',
    bgAccent: 'from-[#FF0420]/10 to-[#FF0420]/0',
    title: 'Optimism Flow Stream',
    tvl: '$54.1M',
    apy: '5.1%',
    activeStreams: '1,420',
    collateral: 'OP, wETH, USDC',
    status: 'Superfluid',
    icon: Shield,
  },
  {
    id: 'avax-vault',
    network: 'Avalanche',
    logoColor: 'text-[#E84142]',
    bgAccent: 'from-[#E84142]/10 to-[#E84142]/0',
    title: 'Avalanche Red Stream',
    tvl: '$42.5M',
    apy: '7.2%',
    activeStreams: '980',
    collateral: 'AVAX, sAVAX, USDC',
    status: 'Instant Finality',
    icon: Activity,
  },
]

export default function Ecosystem() {
  return (
    <motion.section 
      id="ecosystem"
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
            <span className="w-1.5 h-1.5 rounded-full bg-[rgba(30,50,90,0.8)] animate-pulse" />
            <span className="text-[12px] font-normal text-[rgba(30,50,90,0.9)] uppercase tracking-wider">Active Infrastructure</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal text-[#5E6470] tracking-tight mb-2">
            Multi-Chain Ecosystem
          </h2>
        </div>
          <p className="text-sm md:text-base text-[#5E6470] opacity-80 max-w-md font-normal leading-relaxed">
            Deploy capital seamlessly across ultra-fast smart vaults, designed for frictionless multi-chain yields and institutional safety.
          </p>
        </div>

        {/* Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaults.map((vault, idx) => {
            const Icon = vault.icon
            return (
              <motion.div
                key={vault.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative overflow-hidden group bg-white/25 hover:bg-white/35 backdrop-blur-md border border-white/30 rounded-[1.5rem] md:rounded-[2rem] p-6 flex flex-col gap-6 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Visual gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${vault.bgAccent} rounded-full blur-2xl opacity-80 pointer-events-none`} />

                {/* Card Top */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/50 border border-white/30 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${vault.logoColor}`} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider">
                        {vault.network}
                      </span>
                      <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-white/60 border border-white/20 w-fit text-[rgba(30,50,90,0.8)] mt-0.5">
                        {vault.status}
                      </span>
                    </div>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                  </motion.div>
                </div>

                {/* Main Vault Info */}
                <div className="flex flex-col gap-1 z-10">
                  <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
                    {vault.title}
                  </h3>
                  <span className="text-[12px] font-normal text-[#5E6470] opacity-80">
                    Collateral: {vault.collateral}
                  </span>
                </div>

                {/* Vault Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[rgba(30,50,90,0.06)] z-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-normal text-[rgba(30,50,90,0.5)] uppercase tracking-wider">
                      Total Value Locked
                    </span>
                    <span className="text-xl md:text-2xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
                      {vault.tvl}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-normal text-[rgba(30,50,90,0.5)] uppercase tracking-wider">
                      Staking APY
                    </span>
                    <span className="text-xl md:text-2xl font-normal text-[#14F195] drop-shadow-sm font-semibold tracking-tight">
                      {vault.apy}
                    </span>
                  </div>
                </div>

                {/* Translucent Activity Block */}
                <div className="bg-white/20 border border-white/20 rounded-[1rem] p-3 flex items-center justify-between text-xs text-[rgba(30,50,90,0.7)] z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#14F195] animate-ping" />
                    <span>Live Vault Activity</span>
                  </div>
                  <div className="font-normal">
                    <span className="text-[rgba(30,50,90,0.9)] font-medium">{vault.activeStreams}</span> Active Streams
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>
  )
}
