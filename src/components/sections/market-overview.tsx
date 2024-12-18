import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Star,
  Info,
  Filter,
  LayoutGrid,
  Settings2
} from 'lucide-react';
import { Section } from '../ui/section';

export function MarketOverview() {
  const [activeTab, setActiveTab] = useState('all');

  const marketStats = {
    marketCap: '$3.46T',
    change: '-5.10%',
    fearGreedIndex: 76,
    btcDominance: '55.96%',
    ethDominance: '12.80%'
  };

  const cryptoData = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$98,029.35',
      change1h: '+0.05%',
      change24h: '-1.76%',
      change7d: '+2.39%',
      marketCap: '$1,940,363,206,401',
      volume: '$113,949,267,471',
      supply: '19,793,696 BTC',
      isPositive1h: true,
      isPositive24h: false,
      isPositive7d: true
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$3,677.88',
      change1h: '-1.17%',
      change24h: '-6.10%',
      change7d: '+2.30%',
      marketCap: '$442,982,182,879',
      volume: '$65,741,656,988',
      supply: '120,444,957 ETH',
      isPositive1h: false,
      isPositive24h: false,
      isPositive7d: true
    }

  ];

  const categories = [
    { id: 'all', label: 'All', icon: null },
    { id: 'nfts', label: 'NFTs', icon: null },
    { id: 'defi', label: '🔥 DeFi', icon: null },
    { id: 'gaming', label: '🔥 Gaming', icon: null },
    { id: 'ai', label: '🔥 AI', icon: null }
  ];

  return (
    <Section id="market" className="bg-black/50">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Today's Cryptocurrency Prices by Market Cap</h2>
        <p className="text-gray-400">
          The global crypto market cap is {marketStats.marketCap}, a{' '}
          <span className="text-red-500">{marketStats.change}</span> decrease over the last day.{' '}
          {/* <button className="text-blue-400 hover:underline">Read More</button> */}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Market Stats Cards */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Market Cap</h3>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{marketStats.marketCap}</span>
            <span className="text-red-500 text-sm">{marketStats.change}</span>
          </div>
        </div>

        {/* Fear & Greed Index */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Fear & Greed</h3>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-xl font-bold">{marketStats.fearGreedIndex}</span>
            </div>
            <span className="text-green-500">Greed</span>
          </div>
        </div>

        {/* Dominance */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Dominance</h3>
            <ChevronRight className="text-gray-400" size={20} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">₿</div>
                <span>BTC</span>
              </div>
              <span className="text-xl font-bold">{marketStats.btcDominance}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">Ξ</div>
                <span>ETH</span>
              </div>
              <span className="text-xl font-bold">{marketStats.ethDominance}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Market Table */}
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">#</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Name</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Price</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">1h %</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">24h %</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">7d %</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Market Cap</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Volume(24h)</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Circulating Supply</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto) => (
                <tr key={crypto.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-yellow-500">
                      <Star size={16} />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center font-bold">
                        {crypto.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{crypto.name}</div>
                        <div className="text-sm text-gray-400">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold">{crypto.price}</td>
                  <td className={`px-6 py-4 text-right ${crypto.isPositive1h ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change1h}
                  </td>
                  <td className={`px-6 py-4 text-right ${crypto.isPositive24h ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change24h}
                  </td>
                  <td className={`px-6 py-4 text-right ${crypto.isPositive7d ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change7d}
                  </td>
                  <td className="px-6 py-4 text-right">{crypto.marketCap}</td>
                  <td className="px-6 py-4 text-right">{crypto.volume}</td>
                  <td className="px-6 py-4 text-right">{crypto.supply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table Controls */}
      {/* <div className="flex items-center justify-end gap-4 mt-4">
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400">
          <Filter size={20} />
        </button>
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400">
          <LayoutGrid size={20} />
        </button>
        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400">
          <Settings2 size={20} />
        </button>
      </div> */}
    </Section>
  );
}