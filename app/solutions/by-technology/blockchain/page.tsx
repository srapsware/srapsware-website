import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Link as LinkIcon, 
  Shield, 
  Wallet, 
  Code2, 
  Network,
  ArrowRight,
  CheckCircle2,
  Layers,
  Lock,
  Coins,
  FileText,
  Zap,
  Users
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blockchain & Web3 Development Services | Smart Contracts & DApps',
  description: 'Professional blockchain development for smart contracts, DApps, DeFi, NFTs, and Web3 solutions. Build decentralized applications on Ethereum, Solana, Polygon, and more.',
  keywords: 'blockchain development, Web3 development, smart contracts, DApp development, Ethereum development, Solidity, NFT marketplace, DeFi, cryptocurrency, blockchain consulting',
  openGraph: {
    title: 'Blockchain & Web3 Development Services | Decentralized Applications',
    description: 'Build secure smart contracts, NFT marketplaces, DeFi protocols, and decentralized applications on leading blockchain platforms.',
    type: 'website',
  }
}

export default function BlockchainPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Blockchain & Web3</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-cyan-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                ⛓️ Blockchain & Web3
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Blockchain & Web3 Development
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build decentralized applications, smart contracts, NFT marketplaces, and DeFi protocols on Ethereum, Solana, Polygon, and other leading blockchain platforms.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-muted-foreground">Contracts</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-blue-600">$10M+</div>
                  <div className="text-sm text-muted-foreground">Secured</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-cyan-600">100%</div>
                  <div className="text-sm text-muted-foreground">Audited</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Your Web3 Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=blockchain"
                  alt="Blockchain Smart Contract Development & DApp Architecture"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-purple-500 animate-pulse" />
                    <span className="font-semibold text-sm">Audited Smart Contracts</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <LinkIcon className="w-6 h-6 text-purple-600" />
                <Network className="w-6 h-6 text-blue-600" />
                <Lock className="w-6 h-6 text-cyan-600" />
                <Wallet className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Magazine Layout */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          {/* Layout 1: Diagonal Split */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=smart-contracts"
                  alt="Smart Contract Architecture on Blockchain"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Decentralized Trust</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Contract Development</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Smart contracts are self-executing programs on the blockchain that automatically enforce agreements without intermediaries. We write secure, gas-optimized Solidity contracts for Ethereum, Polygon, BSC, and EVM-compatible chains, plus Rust programs for Solana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every contract undergoes security audits, unit testing (Hardhat/Foundry), formal verification, and mainnet deployment with multi-sig wallets. We've deployed contracts handling millions in TVL with zero security incidents.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">DApp & Web3 Integration</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Decentralized applications (DApps) run on blockchain networks, offering transparency, censorship resistance, and user ownership. We build Web3 frontends with React/Next.js, connect to Web3 wallets (MetaMask, WalletConnect), and integrate smart contracts using ethers.js/web3.js.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full-stack DApp development includes IPFS/Arweave for decentralized storage, The Graph for indexing blockchain data, and Layer 2 solutions (Arbitrum, Optimism) for scalability and reduced gas fees.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=dapp"
                  alt="Decentralized Application (DApp) Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Web3 Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-purple-100">Smart Contracts Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$10M+</div>
                <div className="text-purple-100">Total Value Secured</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-purple-100">Blockchain Networks</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-purple-100">Security Audits Passed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Solutions We Build</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From smart contracts to NFT marketplaces and DeFi protocols
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Code2 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Smart Contract Development & Audits</h3>
                <p className="text-purple-100 mb-4 text-lg leading-relaxed">
                  Write secure Solidity/Rust smart contracts for ERC-20/721/1155 tokens, multi-sig wallets, DAOs, staking, vesting, governance, and custom protocols. Gas optimization, reentrancy protection, overflow checks, and comprehensive testing with 100% code coverage.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Solidity & Rust</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Security Audits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Gas Optimized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <FileText className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">NFT Marketplaces & Minting</h3>
                <p className="text-blue-100 mb-4 leading-relaxed flex-grow">
                  Build NFT marketplaces with ERC-721/1155 minting, lazy minting, royalties (EIP-2981), auction systems, bidding, and IPFS/Arweave metadata storage. Support for generative art, PFP collections, and dynamic NFTs.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Minting Engine</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Marketplace</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Royalty System</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Coins className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">DeFi Protocols & DEXs</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Decentralized exchanges, AMMs, yield farming, liquidity pools, and lending protocols
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Users className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">DAOs & Governance</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Decentralized autonomous organizations with voting, proposals, and treasury management
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Wallet className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Web3 Wallet Integration & Authentication</h3>
                <p className="text-indigo-100 mb-4 text-lg leading-relaxed">
                  Connect DApps to MetaMask, WalletConnect, Coinbase Wallet, Phantom (Solana), and other Web3 wallets. Implement wallet-based authentication (Sign-In with Ethereum), transaction signing, gas estimation, and multi-chain support with network switching.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">MetaMask & WalletConnect</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Multi-Chain</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">SIWE Auth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Network className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Layer 2 & Scalability</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Deploy on Arbitrum, Optimism, Polygon zkEVM, StarkNet for lower gas fees
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Layers className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Blockchain Indexing & APIs</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                The Graph subgraphs, custom indexers, and GraphQL APIs for blockchain data
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Lock className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Security & Auditing</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Smart contract audits, penetration testing, and formal verification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Blockchain Technology Stack"
            subtitle="Smart contract languages, blockchain networks, and Web3 tools we use"
            filterSlugs={[
              'solidity', 'rust', 'ethereum', 'polygon', 'solana',
              'react', 'nextjs', 'typescript', 'nodejs', 'ipfs'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Blockchain Networks Supported */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Networks We Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploy smart contracts and DApps on leading L1 and L2 blockchain networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Network 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                  ETH
                </div>
                <h3 className="text-xl font-bold mb-2">Ethereum</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Leading smart contract platform with largest developer ecosystem
                </p>
                <div className="text-sm text-blue-600 font-semibold">Mainnet & Testnets</div>
              </div>
            </div>

            {/* Network 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                  SOL
                </div>
                <h3 className="text-xl font-bold mb-2">Solana</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  High-performance blockchain with ultra-fast transactions
                </p>
                <div className="text-sm text-purple-600 font-semibold">50,000 TPS</div>
              </div>
            </div>

            {/* Network 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                  MATIC
                </div>
                <h3 className="text-xl font-bold mb-2">Polygon</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Ethereum L2 with low gas fees and EVM compatibility
                </p>
                <div className="text-sm text-purple-600 font-semibold">zkEVM Ready</div>
              </div>
            </div>

            {/* Network 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                  ARB
                </div>
                <h3 className="text-xl font-bold mb-2">Arbitrum</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Optimistic rollup L2 with 90% lower gas fees
                </p>
                <div className="text-sm text-orange-600 font-semibold">Ethereum L2</div>
              </div>
            </div>

            {/* Additional Networks */}
            <div className="col-span-full">
              <div className="text-center text-muted-foreground">
                <p className="mb-2">Also supporting:</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-4 py-2 bg-muted rounded-lg">Optimism</span>
                  <span className="px-4 py-2 bg-muted rounded-lg">BSC</span>
                  <span className="px-4 py-2 bg-muted rounded-lg">Avalanche</span>
                  <span className="px-4 py-2 bg-muted rounded-lg">Fantom</span>
                  <span className="px-4 py-2 bg-muted rounded-lg">Cosmos</span>
                  <span className="px-4 py-2 bg-muted rounded-lg">Near</span>
                  <span className="px-4 py-2 bg-muted rounded-lg">Polkadot</span>
                  <span className="px-4 py-2 bg-muted rounded-lg">Tezos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Contract Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From architecture to mainnet deployment in 6-12 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Requirements & Architecture',
                description: 'Define tokenomics, contract logic, access controls, and gas optimization strategies. Design contract architecture with upgrade patterns (proxy/diamond) and security considerations.',
                duration: '1 week',
                icon: FileText
              },
              {
                step: '02',
                title: 'Smart Contract Development',
                description: 'Write Solidity/Rust code following best practices (checks-effects-interactions, reentrancy guards). Implement ERC standards, custom logic, and modular contract design for reusability.',
                duration: '2-4 weeks',
                icon: Code2
              },
              {
                step: '03',
                title: 'Testing & QA',
                description: 'Unit tests with Hardhat/Foundry achieving 100% code coverage. Integration tests, fuzzing, gas profiling, and testnet deployment (Goerli/Sepolia/Devnet) for real-world validation.',
                duration: '1-2 weeks',
                icon: Shield
              },
              {
                step: '04',
                title: 'Security Audit',
                description: 'Third-party security audit by CertiK, OpenZeppelin, or Trail of Bits. Fix identified vulnerabilities, implement recommendations, and pass final audit before mainnet launch.',
                duration: '2-3 weeks',
                icon: Lock
              },
              {
                step: '05',
                title: 'Frontend & Web3 Integration',
                description: 'Build React/Next.js DApp with wallet connection (MetaMask, WalletConnect), contract interaction using ethers.js, transaction handling, and event listening.',
                duration: '2-3 weeks',
                icon: Network
              },
              {
                step: '06',
                title: 'Mainnet Deployment & Monitoring',
                description: 'Deploy contracts to mainnet with multi-sig wallets, verify source code on Etherscan/Blockscout, set up monitoring (Tenderly/Defender), and prepare incident response plan.',
                duration: '1 week',
                icon: Zap
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-purple-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-purple-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Blockchain Projects We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore smart contracts, NFT platforms, and DeFi protocols we've deployed
            </p>
          </div>
          
          <PortfolioSlider 
            projects={projects}
            technologies={technologies}
            autoplay={true}
            showNavigation={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Blockchain Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from Web3 projects we've launched
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'Which blockchain platform should I choose?',
                  answer: 'For DeFi, NFTs, and enterprise DApps: Ethereum (most mature ecosystem). For high-frequency trading or gaming: Solana (50,000 TPS). For lower costs: Polygon or BSC. For privacy: Secret Network. We analyze your use case, transaction volume, budget, and ecosystem requirements to recommend the best network.'
                },
                {
                  question: 'How secure are smart contracts?',
                  answer: 'Smart contracts are immutable once deployed, so security is critical. We follow industry best practices: formal verification, third-party audits (CertiK, OpenZeppelin), 100% test coverage, reentrancy guards, access controls, and safe math. All contracts undergo rigorous testing before mainnet deployment.'
                },
                {
                  question: 'What is gas optimization and why does it matter?',
                  answer: 'Gas fees are transaction costs on blockchain networks. Poorly optimized contracts can cost 2-10x more. We reduce gas by: using storage efficiently, batching operations, minimizing loops, using events instead of storage for logs, and leveraging assembly for critical sections. This saves users money and improves adoption.'
                },
                {
                  question: 'Can smart contracts be upgraded after deployment?',
                  answer: 'Smart contracts are immutable by default. However, we implement upgrade patterns: Proxy contracts (delegate calls to implementation), Diamond pattern (modular upgrades), or multi-sig governance for controlled updates. This allows bug fixes and feature additions while maintaining decentralization.'
                },
                {
                  question: 'How long does blockchain development take?',
                  answer: 'Simple token contract: 2-4 weeks. NFT marketplace: 6-10 weeks. DeFi protocol: 10-16 weeks. Enterprise blockchain solution: 3-6 months. Timeline includes development, testing, security audit, frontend integration, and deployment across mainnet and testnets.'
                },
                {
                  question: 'How much does blockchain development cost?',
                  answer: 'Smart contract (ERC-20/721): $5,000-15,000. NFT marketplace: $25,000-75,000. DeFi protocol: $50,000-150,000. Enterprise blockchain solution: $100,000-500,000+. Additional costs: security audit ($10,000-50,000), gas fees for deployment, ongoing maintenance, and infrastructure.'
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Build on the Blockchain?"
        description="Launch your Web3 project with secure smart contracts, DApps, and decentralized infrastructure. From concept to mainnet deployment, we handle the complexity of blockchain development."
        primaryButtonText="Start Your Web3 Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="#services"
        showContactInfo={true}
      />
    </div>
  )
}
