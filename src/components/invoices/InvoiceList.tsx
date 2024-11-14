import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, MoreVertical } from 'lucide-react';
import { format } from 'date-fns';

interface InvoiceListProps {
  searchTerm: string;
}

const InvoiceList: React.FC<InvoiceListProps> = ({ searchTerm }) => {
  const navigate = useNavigate();
  
  // Mock data - replace with actual API call
  const invoices = [
    {
      id: '1',
      number: 'INV-001',
      customer: 'Acme Corp',
      total: 1234.56,
      status: 'PENDING',
      dueDate: new Date(),
    },
    // Add more mock invoices as needed
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'OVERDUE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <div className="px-4 py-4 flex items-center sm:px-6 hover:bg-gray-50 cursor-pointer"
                 onClick={() => navigate(`/invoices/${invoice.id}`)}>
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-indigo-600 truncate">
                      {invoice.number}
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-gray-600">
                        {invoice.customer}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-900">
                      ${invoice.total.toFixed(2)}
                    </div>
                    <div className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </div>
                    <div className="text-sm text-gray-500">
                      Due {format(invoice.dueDate, 'MMM d, yyyy')}
                    </div>
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;