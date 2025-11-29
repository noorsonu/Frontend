import React, { useState } from 'react';

const ZakatCalculator = () => {
  const [wealth, setWealth] = useState({
    cash: '',
    gold: '',
    silver: '',
    business: '',
    investments: '',
    debts: ''
  });

  const [goldPrice, setGoldPrice] = useState(6000); // per gram in INR
  const [silverPrice, setSilverPrice] = useState(80); // per gram in INR

  const nisabGold = 87.48; // grams
  const nisabSilver = 612.36; // grams
  const zakatRate = 0.025; // 2.5%

  const calculateZakat = () => {
    const totalCash = parseFloat(wealth.cash) || 0;
    const totalGold = (parseFloat(wealth.gold) || 0) * goldPrice;
    const totalSilver = (parseFloat(wealth.silver) || 0) * silverPrice;
    const totalBusiness = parseFloat(wealth.business) || 0;
    const totalInvestments = parseFloat(wealth.investments) || 0;
    const totalDebts = parseFloat(wealth.debts) || 0;

    const totalWealth = totalCash + totalGold + totalSilver + totalBusiness + totalInvestments - totalDebts;
    
    const nisabValueGold = nisabGold * goldPrice;
    const nisabValueSilver = nisabSilver * silverPrice;
    const nisabValue = Math.min(nisabValueGold, nisabValueSilver); // Use lower nisab

    const isZakatDue = totalWealth >= nisabValue;
    const zakatAmount = isZakatDue ? totalWealth * zakatRate : 0;

    return {
      totalWealth,
      nisabValue,
      isZakatDue,
      zakatAmount
    };
  };

  const result = calculateZakat();

  const handleInputChange = (field, value) => {
    setWealth(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-600/30">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center space-x-2">
          <span className="text-2xl">💰</span>
          <span>Zakat Calculator</span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
      </div>

      {/* Current Prices */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
          <label className="block text-yellow-400 text-xs font-semibold mb-1">Gold Price (₹/gram)</label>
          <input
            type="number"
            value={goldPrice}
            onChange={(e) => setGoldPrice(parseFloat(e.target.value) || 0)}
            className="w-full p-2 bg-gray-700/50 border border-gray-600/50 rounded text-white text-sm"
          />
        </div>
        <div className="p-3 bg-gray-600/20 rounded-lg border border-gray-500/30">
          <label className="block text-gray-300 text-xs font-semibold mb-1">Silver Price (₹/gram)</label>
          <input
            type="number"
            value={silverPrice}
            onChange={(e) => setSilverPrice(parseFloat(e.target.value) || 0)}
            className="w-full p-2 bg-gray-700/50 border border-gray-600/50 rounded text-white text-sm"
          />
        </div>
      </div>

      {/* Wealth Inputs */}
      <div className="space-y-4 mb-6">
        <h4 className="text-lg font-semibold text-white">Enter Your Wealth</h4>
        
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block text-green-400 text-sm font-semibold mb-1">💵 Cash & Bank Balance (₹)</label>
            <input
              type="number"
              value={wealth.cash}
              onChange={(e) => handleInputChange('cash', e.target.value)}
              placeholder="Enter cash amount"
              className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-yellow-400 text-sm font-semibold mb-1">🥇 Gold (grams)</label>
            <input
              type="number"
              value={wealth.gold}
              onChange={(e) => handleInputChange('gold', e.target.value)}
              placeholder="Enter gold weight"
              className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">🥈 Silver (grams)</label>
            <input
              type="number"
              value={wealth.silver}
              onChange={(e) => handleInputChange('silver', e.target.value)}
              placeholder="Enter silver weight"
              className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-blue-400 text-sm font-semibold mb-1">🏪 Business Assets (₹)</label>
            <input
              type="number"
              value={wealth.business}
              onChange={(e) => handleInputChange('business', e.target.value)}
              placeholder="Enter business value"
              className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-purple-400 text-sm font-semibold mb-1">📈 Investments (₹)</label>
            <input
              type="number"
              value={wealth.investments}
              onChange={(e) => handleInputChange('investments', e.target.value)}
              placeholder="Enter investment value"
              className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-red-400 text-sm font-semibold mb-1">💳 Debts (₹)</label>
            <input
              type="number"
              value={wealth.debts}
              onChange={(e) => handleInputChange('debts', e.target.value)}
              placeholder="Enter total debts"
              className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-blue-900/30 rounded-lg border border-blue-600/50 text-center">
            <p className="text-blue-400 text-xs font-semibold mb-1">Total Wealth</p>
            <p className="text-white text-lg font-bold">₹{result.totalWealth.toLocaleString()}</p>
          </div>
          <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-600/50 text-center">
            <p className="text-purple-400 text-xs font-semibold mb-1">Nisab Value</p>
            <p className="text-white text-lg font-bold">₹{result.nisabValue.toLocaleString()}</p>
          </div>
        </div>

        <div className={`p-4 rounded-lg border text-center ${
          result.isZakatDue 
            ? 'bg-green-900/30 border-green-600/50' 
            : 'bg-gray-700/30 border-gray-600/50'
        }`}>
          <p className={`text-sm font-semibold mb-2 ${
            result.isZakatDue ? 'text-green-400' : 'text-gray-400'
          }`}>
            {result.isZakatDue ? '✅ Zakat is Due' : '❌ Zakat is Not Due'}
          </p>
          <p className="text-white text-2xl font-bold">
            ₹{result.zakatAmount.toLocaleString()}
          </p>
          {result.isZakatDue && (
            <p className="text-green-300 text-xs mt-1">
              Pay 2.5% of your wealth above Nisab
            </p>
          )}
        </div>

        {/* Zakat Information */}
        <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
          <h5 className="font-semibold text-yellow-400 mb-2">📚 Zakat Information</h5>
          <ul className="text-gray-300 text-xs space-y-1">
            <li>• Zakat is 2.5% of wealth above Nisab threshold</li>
            <li>• Gold Nisab: {nisabGold} grams (₹{(nisabGold * goldPrice).toLocaleString()})</li>
            <li>• Silver Nisab: {nisabSilver} grams (₹{(nisabSilver * silverPrice).toLocaleString()})</li>
            <li>• Wealth must be held for 1 lunar year</li>
            <li>• Debts are deducted from total wealth</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ZakatCalculator;