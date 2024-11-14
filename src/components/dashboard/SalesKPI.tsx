import React from 'react';
import { BarChart2, TrendingUp, Target, Award } from 'lucide-react';

const SalesKPI = () => {
  // Mock data - replace with API call
  const kpiData = {
    totalSales: 24890,
    monthlyTarget: 30000,
    commission: 2489,
    conversionRate: 68,
    recentSales: [
      { date: '2024-02-01', amount: 1200 },
      { date: '2024-02-02', amount: 890 },
      { date: '2024-02-03', amount: 1500 },
      { date: '2024-02-04', amount: 2100 },
    ]
  };

  const progressPercentage = (kpiData.totalSales / kpiData.monthlyTarget) * 100;

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Performance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-indigo-600 font-medium">Total Sales</p>
                <p className="text-2xl font-bold text-indigo-900">${kpiData.totalSales.toLocaleString()}</p>
              </div>
              <BarChart2 className="h-8 w-8 text-indigo-500" />
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Commission Earned</p>
                <p className="text-2xl font-bold text-green-900">${kpiData.commission.toLocaleString()}</p>
              </div>
              <Award className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Monthly Target Progress</span>
            <span className="text-sm font-medium text-gray-900">{progressPercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full" 
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            ${kpiData.totalSales.toLocaleString()} of ${kpiData.monthlyTarget.toLocaleString()}
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Sales</h3>
          <div className="space-y-2">
            {kpiData.recentSales.map((sale, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{sale.date}</span>
                <span className="font-medium text-gray-900">${sale.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesKPI;