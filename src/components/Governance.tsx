import { motion } from 'motion/react'
import { Vote, Users, ShieldAlert, Award, ChevronRight, FileText, ArrowUpRight } from 'lucide-react'

const proposals = [
  {
    id: 'RGP-12',
    title: 'Phase 3: Core Staking APY Adjustment & Treasury Restructuring',
    status: 'Active',
    statusStyle: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    yesVotes: '12.4M RIVR',
    yesPercent: 78.4,
    noVotes: '3.4M RIVR',
    noPercent: 21.6,
    quorum: 'Quorum: Met (62%)',
    timeRemaining: '2 days remaining',
    proposer: 'rivr-labs.eth',
  },
  {
    id: 'RGP-11',
    title: 'Integrate Base Network Smart Vaults into Ecosystem Ledger',
    status: 'Passed',
    statusStyle: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
    yesVotes: '15.1M RIVR',
    yesPercent: 94.2,
    noVotes: '0.9M RIVR',
    noPercent: 5.8,
    quorum: 'Quorum: Met (74%)',
    timeRemaining: 'Ended Oct 24, 2026',
    proposer: 'capital-stream.eth',
  },
  {
    id: 'RGP-10',
    title: 'Optimize Collateralization Ratio threshold from 120% to 110%',
    status: 'Defeated',
    statusStyle: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    yesVotes: '6.2M RIVR',
    yesPercent: 42.1,
    noVotes: '8.5M RIVR',
    noPercent: 57.9,
    quorum: 'Quorum: Met (58%)',
    timeRemaining: 'Ended Oct 15, 2026',
    proposer: 'alpha-liquid.eth',
  },
]

const delegates = [
  { name: 'Rivr Core Labs', power: '8.4M RIVR', weight: '9.2%', participation: '100%', rank: 1 },
  { name: 'Consensys Stream', power: '6.1M RIVR', weight: '6.7%', participation: '98%', rank: 2 },
  { name: 'DeFi Capital Group', power: '4.8M RIVR', weight: '5.2%', participation: '92%', rank: 3 },
  { name: 'Staking Alliance', power: '3.9M RIVR', weight: '4.3%', participation: '95%', rank: 4 },
]

export default function Governance() {
  return (
    <motion.section 
      id="governance"
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
            <Vote className="w-3.5 h-3.5 text-[rgba(30,50,90,0.8)]" />
            <span className="text-[12px] font-normal text-[rgba(30,50,90,0.9)] uppercase tracking-wider">Decentralized Voting</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal text-[#5E6470] tracking-tight mb-2">
            Governance & Ledger
          </h2>
        </div>
          <p className="text-sm md:text-base text-[#5E6470] opacity-80 max-w-md font-normal leading-relaxed">
            Participate in the RIVR consensus. Submit proposals, allocate voting weight parameters, and steer the future of multi-chain liquid staking.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Active Proposals Ledger (8 Cols) */}
          <div className="lg:col-span-8 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)]">
                  Consensus Proposal Ledger
                </h3>
              </div>
              <span className="text-xs text-[rgba(30,50,90,0.6)]">DAO Votes</span>
            </div>

            <div className="flex flex-col gap-4">
              {proposals.map((proposal) => (
                <motion.div
                  key={proposal.id}
                  whileHover={{ x: 3 }}
                  className="bg-white/20 hover:bg-white/30 border border-white/25 rounded-[1.2rem] p-4 md:p-5 flex flex-col gap-4 transition-colors duration-300"
                >
                  {/* Proposal Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/80 border border-white/30 text-[rgba(30,50,90,0.9)]">
                        {proposal.id}
                      </span>
                      <span className="text-xs text-[#5E6470] opacity-60 font-mono">
                        by {proposal.proposer}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${proposal.statusStyle}`}>
                        {proposal.status}
                      </span>
                      <span className="text-[10px] text-[rgba(30,50,90,0.5)] font-normal">
                        {proposal.timeRemaining}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm md:text-base font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
                    {proposal.title}
                  </h4>

                  {/* Voting Progress Splits */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-[rgba(30,50,90,0.7)]">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14F195]" />
                        <span>For: {proposal.yesVotes} ({proposal.yesPercent}%)</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span>Against: {proposal.noVotes} ({proposal.noPercent}%)</span>
                      </span>
                    </div>

                    {/* Voting Progress Line */}
                    <div className="w-full h-2 bg-white/30 border border-white/25 rounded-full overflow-hidden p-[1px] flex">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proposal.yesPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-[#14F195]/80 rounded-l-full"
                      />
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proposal.noPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-rose-400/80 rounded-r-full"
                      />
                    </div>
                  </div>

                  {/* Quorum and Info */}
                  <div className="flex items-center justify-between text-[10px] text-[rgba(30,50,90,0.5)] border-t border-[rgba(30,50,90,0.03)] pt-2.5">
                    <span>{proposal.quorum}</span>
                    <a 
                      href="#governance"
                      className="flex items-center gap-0.5 hover:text-[rgba(30,50,90,0.8)] transition-colors group"
                    >
                      <span>Examine Vote Details</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Card 2: Community Voting Weights & Delegation (4 Cols) */}
          <div className="lg:col-span-4 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <Users className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.9)]">
                  Top Delegates
                </h3>
              </div>
              <span className="text-xs text-[rgba(30,50,90,0.6)]">Weights</span>
            </div>

            <div className="flex flex-col gap-4">
              {delegates.map((delegate, idx) => (
                <div 
                  key={idx}
                  className="bg-white/20 border border-white/20 rounded-[1.2rem] p-3 flex items-center justify-between transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    {/* Ring Badge */}
                    <div className="w-7 h-7 rounded-full bg-white/50 border border-white/30 text-xs font-semibold text-[rgba(30,50,90,0.7)] flex items-center justify-center">
                      #{delegate.rank}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-[rgba(30,50,90,0.85)]">
                        {delegate.name}
                      </span>
                      <span className="text-[9px] text-[#5E6470] opacity-60">
                        Participation: {delegate.participation}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-semibold text-[rgba(30,50,90,0.9)] block">
                      {delegate.power}
                    </span>
                    <span className="text-[9px] text-[rgba(30,50,90,0.45)] uppercase tracking-wider font-semibold">
                      Weight: {delegate.weight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Delegate Action Block */}
            <div className="bg-white/30 border border-white/30 rounded-[1.2rem] p-4 flex flex-col gap-3 mt-auto">
              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-[#14F195] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[rgba(30,50,90,0.9)]">
                    Delegate Your Voting Weight
                  </span>
                  <p className="text-[10px] text-[#5E6470] opacity-80 leading-relaxed">
                    Entrust your voting parameters to verified community delegates or vote directly in upcoming proposal periods.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-[rgba(30,50,90,0.8)] text-white text-xs py-2 rounded-full hover:bg-[rgba(30,50,90,1)] transition-colors group mt-1"
              >
                <span>Delegate Power</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Consensus Protocol Banner (12 Cols) */}
          <div className="lg:col-span-12 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-xs text-[#5E6470] opacity-85 max-w-2xl leading-relaxed">
                RIVR consensus requires a 50% quorum threshold and a minimum 7-day vote maturity duration. Ensure safety variables are fully audited before creating any parameter modifications.
              </p>
            </div>
            
            <a 
              href="#governance"
              className="text-xs font-semibold text-[rgba(30,50,90,0.85)] hover:underline whitespace-nowrap"
            >
              Read Consensus Spec
            </a>
          </div>

        </div>
      </motion.section>
  )
}
