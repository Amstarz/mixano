import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer, Send } from 'lucide-react';

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual API call
  const invoice = {
    id,
    number: 'INV-001',
    customer: {
      name: 'Acme Corp',
      email: 'billing@acme.com',
      address: '123 Business St, Suite 100, Business City, 12345'
    },
    items: [
      { description: 'Website Development', quantity: 1, price: 1000 },
      { description: 'Hosting (Annual)', quantity: 1, price: 234.56 }
    ],
    status: 'PENDING',
    dueDate: new Date(),
    subtotal: 1234.56,
    tax: 123.46,
    total: 1358.02
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/invoices')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Invoices
          </button>
          <div className="space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              <Send className="h-4 w-4 mr-2" />
              Send Invoice
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Invoice Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{invoice.number}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Customer</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div>{invoice.customer.name}</div>
                <div className="text-gray-600">{invoice.customer.email}</div>
                <div className="text-gray-600">{invoice.customer.address}</div>
              </dd>
            </div>
            <div className="py-4">
              <dt className="text-sm font-medium text-gray-500 mb-2">Items</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {invoice.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{item.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">${item.price.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-sm text-gray-500 text-right">Subtotal</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">${invoice.subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-sm text-gray-500 text-right">Tax</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">${invoice.tax.toFixed(2)}</td>
                    </tr>
                    <tr className="font-bold">
                      <td colSpan={3} className="px-6 py-4 text-sm text-gray-900 text-right">Total</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right">${invoice.total.toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;