import Link from 'next/link';

const demoListings = [
  {
    id: 1,
    game: "Free Fire",
    title: "Heroic Rank + Rare Skins",
    price: "85 USDT",
    uid: "147098967",
    level: 82,
    image: "🔥"
  },
  {
    id: 2,
    game: "PUBG Mobile",
    title: "Conqueror + Legendary Set",
    price: "120 USDT",
    uid: "987654321",
    level: 75,
    image: "🚁"
  },
  {
    id: 3,
    game: "eFootball",
    title: "High Rated Players Pack",
    price: "65 USDT",
    uid: "1122334455",
    level: 68,
    image: "⚽"
  }
];

export default function Marketplace() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-bold">Marketplace</h1>
          <p className="text-gray-400 text-xl mt-2">AI Verified Gaming Accounts</p>
        </div>
        <Link href="/sell" className="bg-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-500">
          + Sell Your Account
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoListings.map((listing) => (
          <Link key={listing.id} href={`/listing/${listing.id}`} className="group">
            <div className="card rounded-3xl overflow-hidden h-full hover:border-green-500">
              <div className="h-64 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-8xl">
                {listing.image}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-green-500 text-sm font-medium">{listing.game}</span>
                    <h3 className="text-xl font-semibold mt-1">{listing.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{listing.price}</div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-400">
                  <div>Level {listing.level}</div>
                  <div>UID: {listing.uid}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
