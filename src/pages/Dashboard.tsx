import React from 'react';
import { BarChart, Users, FileText, Package } from 'lucide-react';
import SalesKPI from '../components/dashboard/SalesKPI';
import CollectorKPI from '../components/dashboard/CollectorKPI';

const Dashboard = () => {
  const stats = [
    { name: 'Total Sales', value: '$24,890', icon: BarChart, change: '+12%' },
    { name: 'Active Customers', value: '456', icon: Users, change: '+5%' },
    { name: 'Pending Invoices', value: '23', icon: FileText, change: '-2%' },
    { name: 'Low Stock Items', value: '12', icon: Package, change: '0%' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isPositive = stat.change.startsWith('+');
          return (
            <div
              key={stat.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-indigo-500 rounded-md p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    isPositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesKPI />
        <CollectorKPI />
      </div>
    </div>
  );
};

export default Dashboard;