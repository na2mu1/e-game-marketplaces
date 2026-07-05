import Link from 'next/link';
import InventoryViewer from '../components/InventoryViewer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🎮</div>
            <h1 className="text-2xl font-bold">e-Game Marketplace</h1>
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <Link href="/marketplace" className="hover:text-green-400">Marketplace</Link>
            <Link href="/sell" className="hover:text-green-400">Sell Account</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            Buy & Sell <span className="text-green-500">Gaming Accounts</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Free Fire, PUBG Mobile, eFootball — Secure Marketplace with AI Valuation
          </p>
        </div>

        {/* Demo Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Demo: Free Fire Account</h2>
          <InventoryViewer 
            gameType="freefire" 
            uid="147098967" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="card p-8 rounded-3xl text-center">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold">Free Fire</h3>
            <p className="text-gray-400 mt-2">Outfits, Guns, Pets</p>
          </div>
          <div className="card p-8 rounded-3xl text-center">
            <div className="text-5xl mb-4">🚁</div>
            <h3 className="text-xl font-semibold">PUBG Mobile</h3>
            <p className="text-gray-400 mt-2">Skins & Weapons</p>
          </div>
          <div className="card p-8 rounded-3xl text-center">
            <div className="text-5xl mb-4">⚽</div>
            <h3 className="text-xl font-semibold">eFootball</h3>
            <p className="text-gray-400 mt-2">Players & Kits</p>
          </div>
        </div>
      </div>
    </div>
  );
}
