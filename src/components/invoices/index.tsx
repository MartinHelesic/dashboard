import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";

interface Invoice {
  invoiceNumber: string;
  orderNumber: string;
  amount: string;
}

const invoices: Invoice[] = [
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    invoiceNumber: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
];

function Invoices() {
  return (
    <div className="md:ml-8 flex-grow">
      <div className="overflow-auto rounded">
        <table className="min-w-full bg-body">
          <thead>
            <tr>
              <th className="p-4 border-b border-borders text-left text-sm font-semibold leading-[22px] text-main">
                Číslo faktury
              </th>
              <th className="p-4 border-b border-borders text-left text-sm font-semibold leading-[22px] text-main">
                Číslo objednávky
              </th>
              <th className="p-4 border-b border-borders text-left text-sm font-semibold leading-[22px] text-main">
                Cena celkem
              </th>
              <th className="p-4 border-b border-borders text-right text-sm font-semibold leading-[22px] text-main">
                Stažení
              </th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td className="px-6 pt-6 pb-4 whitespace-nowrap text-base font-normal leading-6 text-main">
                  {invoice.invoiceNumber}
                </td>

                <td className="px-6 pt-6 pb-4 whitespace-nowrap text-base font-normal leading-6 text-main">
                  {invoice.orderNumber}
                </td>

                <td className="px-6 pt-6 pb-4 whitespace-nowrap text-base font-normal leading-6 text-main">
                  {invoice.amount}
                </td>

                <td className="px-6 pt-6 pb-4 whitespace-nowrap text-xs font-normal leading-6 text-blue-600 flex justify-end">
                  <button className="flex items-center">
                    <ArrowDownOnSquareStackIcon
                      className="h-4 w-4 mr-2"
                      aria-hidden="true"
                    />
                    Stáhnout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Invoices;
