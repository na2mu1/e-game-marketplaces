'use client';

import InventoryViewer from '../../../components/InventoryViewer';

export default function ListingDetail({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const listings = {
    1: {
      game: "freefire",
      title: "Heroic Rank + Rare Skins",
      price: "85 USDT",
      uid: "147098967",
      level: 82
    }
  };

  const listing = listings[id as keyof typeof listings] || listings[1];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="text-green-500 text-sm font-medium">AI VERIFIED</div>
        <h1 className="text-4xl font-bold mt-2">{listing.title}</h1>
        <p className="text-3xl text-green-400 mt-2">{listing.price}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <InventoryViewer 
            gameType={listing.game as any} 
            uid={listing.uid} 
          />
        </div>

        <div className="space-y-8">
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Account Information</h3>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between">
                <span className="text-gray-400">Level</span>
                <span className="font-medium">{listing.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">UID</span>
                <span className="font-mono">{listing.uid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Server</span>
                <span>India</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-500 py-6 rounded-3xl text-2xl font-bold transition">
            Buy with USDT
          </button>

          <p className="text-center text-sm text-gray-500">
            Escrow Protected • 8% Platform Fee
          </p>
        </div>
      </div>
    </div>
  );
}
