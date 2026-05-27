import { useState } from 'react'
import { motion } from 'motion/react'
import { Terminal, Code2, Copy, Check, GitBranch, Key, ArrowUpRight } from 'lucide-react'

const apiEndpoints = [
  { method: 'POST', path: '/v1/streams/init', desc: 'Initialize instant liquid asset stream.', response: '201 Created' },
  { method: 'GET', path: '/v1/vaults/rates', desc: 'Fetch dynamic real-time staking APY.', response: '200 OK' },
  { method: 'POST', path: '/v1/collateral/lock', desc: 'Lock multi-chain asset collateral.', response: '200 OK' },
  { method: 'DELETE', path: '/v1/streams/:id/close', desc: 'Settle and close active stream.', response: '204 No Content' },
]

const packages = [
  { name: '@rivr-finance/sdk', type: 'Node JS / TS Library', version: 'v2.4.1', desc: 'Complete client wrapper for staking and stream executions.' },
  { name: '@rivr-finance/contracts', type: 'Solidity Core Contracts', version: 'v1.0.8', desc: 'Core smart contract protocols, audited by Spearbit & Certora.' },
  { name: '@rivr-finance/subgraph', type: 'The Graph Schema', version: 'v1.2.0', desc: 'Highly optimized indexing for on-chain yield querying.' },
]

export default function Developers() {
  const [copiedSdk, setCopiedSdk] = useState(false)
  const [copiedApi, setCopiedApi] = useState<string | null>(null)

  const handleCopySdk = () => {
    navigator.clipboard.writeText('npm install @rivr-finance/sdk')
    setCopiedSdk(true)
    setTimeout(() => setCopiedSdk(false), 2000)
  }

  const handleCopyApi = (path: string) => {
    navigator.clipboard.writeText(path)
    setCopiedApi(path)
    setTimeout(() => setCopiedApi(null), 2000)
  }

  return (
    <motion.section 
      id="developers"
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
            <Terminal className="w-3.5 h-3.5 text-[rgba(30,50,90,0.8)]" />
            <span className="text-[12px] font-normal text-[rgba(30,50,90,0.9)] uppercase tracking-wider">Developer API</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal text-[#5E6470] tracking-tight mb-2">
            Developer Portal
          </h2>
        </div>
          <p className="text-sm md:text-base text-[#5E6470] opacity-80 max-w-md font-normal leading-relaxed">
            Integrate yield streams directly into your dApps, smart contracts, or trading pipelines with our developer-first API and core SDK libraries.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Column 1: API Endpoint Register (5 Cols) */}
          <div className="lg:col-span-5 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <Key className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.9)]">
                  API Gateways
                </h3>
              </div>
              <span className="text-xs text-[rgba(30,50,90,0.6)]">JSON REST API</span>
            </div>

            <div className="flex flex-col gap-4">
              {apiEndpoints.map((endpoint, idx) => (
                <div 
                  key={idx}
                  className="bg-white/20 hover:bg-white/30 border border-white/20 rounded-[1rem] p-3 flex flex-col gap-2 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${
                        endpoint.method === 'POST' ? 'bg-sky-500' : endpoint.method === 'GET' ? 'bg-[#14F195] text-slate-800' : 'bg-rose-500'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-xs font-mono font-semibold text-[rgba(30,50,90,0.85)] tracking-tight">
                        {endpoint.path}
                      </code>
                    </div>
                    <button 
                      onClick={() => handleCopyApi(endpoint.path)}
                      className="p-1 hover:bg-white/60 rounded transition-colors text-[rgba(30,50,90,0.6)] hover:text-[rgba(30,50,90,0.9)]"
                    >
                      {copiedApi === endpoint.path ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <p className="text-xs text-[#5E6470] opacity-80 pl-1">
                    {endpoint.desc}
                  </p>
                  <div className="text-[9px] text-[rgba(30,50,90,0.5)] pl-1 border-t border-[rgba(30,50,90,0.03)] pt-1.5 flex items-center justify-between">
                    <span>Expected Response</span>
                    <span className="font-mono">{endpoint.response}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Code Playground and Quickstart (7 Cols) */}
          <div className="lg:col-span-7 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)]">
                  SDK Stream Quickstart
                </h3>
              </div>
              <span className="text-xs text-[rgba(30,50,90,0.6)]">TypeScript Integration</span>
            </div>

            {/* Terminal Command bar */}
            <div className="bg-[#1b2230] border border-white/10 rounded-[1rem] p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[rgba(30,50,90,0.35)] text-xs font-mono font-semibold select-none">$</span>
                <code className="text-xs font-mono text-white/90">
                  npm install @rivr-finance/sdk
                </code>
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={handleCopySdk}
                className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg p-1.5 text-white/70 hover:text-white transition-colors"
              >
                {copiedSdk ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </motion.button>
            </div>

            {/* Code Block with neon highlights */}
            <div className="bg-[#1b2230] border border-white/10 rounded-[1.2rem] p-4 md:p-6 overflow-x-auto relative flex flex-col">
              <div className="absolute top-3 right-4 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
              </div>

              <pre className="font-mono text-xs text-white/85 leading-relaxed leading-[1.6]">
                <code>
                  <span className="text-sky-300">import</span> {'{ RivrClient, Network }'} <span className="text-sky-300">from</span> <span className="text-[#14F195]">'@rivr-finance/sdk'</span>;<br /><br />
                  <span className="text-slate-400">// Initialize the secure multi-chain client</span><br />
                  <span className="text-sky-300">const</span> rivr = <span className="text-sky-300">new</span> <span className="text-amber-300">RivrClient</span>({'{'}<br />
                  &nbsp;&nbsp;network: Network.MAINNET,<br />
                  &nbsp;&nbsp;apiKey: process.env.RIVR_SECRET_KEY<br />
                  {'}'});<br /><br />
                  <span className="text-slate-400">// Stream liquid cash flows instantly</span><br />
                  <span className="text-sky-300">const</span> stream = <span className="text-sky-300">await</span> rivr.createStream({'{'}<br />
                  &nbsp;&nbsp;collateral: <span className="text-[#14F195]">'stETH'</span>,<br />
                  &nbsp;&nbsp;amount: <span className="text-[#14F195]">'12.5'</span>,<br />
                  &nbsp;&nbsp;targetVault: <span className="text-[#14F195]">'eth-main-stream'</span><br />
                  {'}'});<br /><br />
                  console.log(<span className="text-[#14F195] font-semibold">`Stream established: $`</span> + <span className="text-sky-300">stream.id</span>);
                </code>
              </pre>
            </div>
          </div>

          {/* Open Source Repos (12 Cols) */}
          <div className="lg:col-span-12 bg-white/20 border border-white/35 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[rgba(30,50,90,0.06)] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[rgba(30,50,90,0.05)] border border-[rgba(30,50,90,0.1)] flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.9)]">
                  Open Source Protocol Libraries
                </h3>
              </div>
              <span className="text-xs text-[rgba(30,50,90,0.6)]">GPL v3 Licenced</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-white/30 border border-white/30 rounded-[1.2rem] p-5 flex flex-col justify-between gap-4 transition-all duration-300"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-[rgba(30,50,90,0.9)]">
                        {pkg.name}
                      </span>
                      <span className="text-[10px] font-semibold text-sky-500 bg-white/80 border border-white/35 px-2 py-0.5 rounded-full">
                        {pkg.version}
                      </span>
                    </div>
                    <span className="text-[10px] text-[rgba(30,50,90,0.5)] uppercase tracking-wider">
                      {pkg.type}
                    </span>
                    <p className="text-xs text-[#5E6470] opacity-80 mt-2 leading-relaxed">
                      {pkg.desc}
                    </p>
                  </div>

                  <a 
                    href="#developers"
                    className="flex items-center gap-1.5 text-xs text-[rgba(30,50,90,0.85)] font-semibold hover:text-[rgba(30,50,90,1)] transition-colors self-start mt-auto group"
                  >
                    <span>Fork Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>
  )
}
