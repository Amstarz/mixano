import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import InvoiceList from '../components/invoices/InvoiceList';
import InvoiceCreate from '../components/invoices/InvoiceCreate';
import InvoiceDetail from '../components/invoices/InvoiceDetail';

const Invoices = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Invoices</h1>
        <button
          onClick={() => navigate('/invoices/create')}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Invoice
        </button>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search invoices..."
            />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<InvoiceList searchTerm={searchTerm} />} />
        <Route path="/create" element={<InvoiceCreate />} />
        <Route path="/:id" element={<InvoiceDetail />} />
      </Routes>
    </div>
  );
};

export default Invoices;