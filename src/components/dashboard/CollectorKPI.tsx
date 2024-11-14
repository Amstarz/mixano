import React from 'react';
import { DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const CollectorKPI = () => {
  // Mock data - replace with API call
  const kpiData = {
    totalCollected: 18650,
    pendingAmount: 6240,
    successRate: 75,
    commission: 1865,
    recentCollections: [
      { date: '2024-02-01', amount: 2500, status: 'collected' },
      { date: '2024-02-02', amount: 1800, status: 'pending' },
      { date: '2024-02-03', amount: 3200, status: 'collected' },
      { date: '2024-02-04', amount: 1500, status: 'overdue' },
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'collected':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'overdue':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Collection Performance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Total Collected</p>
                <p className="text-2xl font-bold text-green-900">${kpiData.totalCollected.toLocaleString()}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600 font-medium">Pending Collection</p>
                <p className="text-2xl font-bold text-yellow-900">${kpiData.pendingAmount.toLocaleString()}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Collection Success Rate</span>
            <span className="text-sm font-medium text-gray-900">{kpiData.successRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full" 
              style={{ width: `${kpiData.successRate}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Commission Earned</p>
              <p className="text-xl font-bold text-gray-900">${kpiData.commission.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-gray-400" />
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Collections</h3>
          <div className="space-y-2">
            {kpiData.recentCollections.map((collection, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span className="text-gray-600">{collection.date}</span>
                  <span className={`ml-2 ${getStatusColor(collection.status)} capitalize`}>
                    • {collection.status}
                  </span>
                </div>
                <span className="font-medium text-gray-900">${collection.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectorKPI;