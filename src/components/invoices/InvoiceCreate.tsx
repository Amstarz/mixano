import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

interface InvoiceForm {
  customerName: string;
  customerEmail: string;
  dueDate: string;
  salespersonId: string;
  collectorId: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
    description: string;
  }[];
}

const InvoiceCreate = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<InvoiceForm>({
    defaultValues: {
      items: [{ productId: '', quantity: 1, price: 0, description: '' }]
    }
  });

  // Mock data - replace with API calls
  const salespeople = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
  ];

  const collectors = [
    { id: '1', name: 'Mike Johnson' },
    { id: '2', name: 'Sarah Wilson' },
  ];

  const items = watch('items');

  const addItem = () => {
    setValue('items', [...items, { productId: '', quantity: 1, price: 0, description: '' }]);
  };

  const removeItem = (index: number) => {
    setValue('items', items.filter((_, i) => i !== index));
  };

  const onSubmit = (data: InvoiceForm) => {
    console.log(data);
    // Handle form submission
    navigate('/invoices');
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 divide-y divide-gray-200 p-6">
        <div className="space-y-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Customer Information</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Customer Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  {...register('customerName', { required: true })}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  {...register('customerEmail', { required: true })}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                Due Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  {...register('dueDate', { required: true })}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="salespersonId" className="block text-sm font-medium text-gray-700">
                Salesperson
              </label>
              <div className="mt-1">
                <select
                  {...register('salespersonId', { required: true })}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Select Salesperson</option>
                  {salespeople.map(person => (
                    <option key={person.id} value={person.id}>{person.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="collectorId" className="block text-sm font-medium text-gray-700">
                Collector
              </label>
              <div className="mt-1">
                <select
                  {...register('collectorId', { required: true })}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Select Collector</option>
                  {collectors.map(collector => (
                    <option key={collector.id} value={collector.id}>{collector.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Invoice Items</h3>
            <div className="mt-6 space-y-4">
              {items.map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register(`items.${index}.description`)}
                      placeholder="Description"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="w-24">
                    <input
                      type="number"
                      {...register(`items.${index}.quantity`)}
                      placeholder="Qty"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="w-32">
                    <input
                      type="number"
                      step="0.01"
                      {...register(`items.${index}.price`)}
                      placeholder="Price"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addItem}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/invoices')}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Invoice
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InvoiceCreate;