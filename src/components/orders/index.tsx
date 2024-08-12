import {
  ArrowUturnLeftIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { BadgeStatus } from "../../enums/badgeStatus";

interface Order {
  id: string;
  date: string;
  price: string;
  status: string;
}

const orders: Order[] = [
  {
    id: "2200245834",
    date: "6. 12. 2022",
    price: "1 500 Kč",
    status: "Zaplaceno",
  },
  {
    id: "2200245834",
    date: "6. 12. 2022",
    price: "1 500 Kč",
    status: "Zaplaceno",
  },

  {
    id: "2200245834",
    date: "6. 12. 2022",
    price: "1 500 Kč",
    status: "Zaplaceno",
  },

  {
    id: "2200245834",
    date: "6. 12. 2022",
    price: "1 500 Kč",
    status: "Nezaplaceno",
  },
];

function Orders() {
  return (
    <div className="md:ml-8 flex-grow">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-body p-6 rounded-xl mb-8 flex justify-between"
        >
          <div>
            <h2 className="text-main text-[26px] leading-[26px] font-semibold mb-6">
              Číslo objednávky: {order.id}
            </h2>

            <p className="text-main text-base font-normal leading-6">
              Datum objednávky:
              <span className="text-main-tertiary"> {order.date}</span>
            </p>
            <p className="text-main text-base font-normal leading-6 mb-6">
              Cena celkem:
              <span className="text-main-tertiary"> {order.price}</span>
            </p>

            <div className="flex flex-col md:flex-row">
              <button className="text-base font-semibold leading-6 bg-primary text-body py-3 px-6 rounded-md mr-6">
                Detail
              </button>

              <button className="flex items-center text-main text-sm font-medium leading-6">
                <span className="mr-1">Zopakovat</span>

                <ArrowUturnLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="text-right">
            <div className="mb-6">
              {order.status === BadgeStatus.PAID ? (
                <div className="bg-green-100 text-green-700 inline-block rounded-sm text-xs font-medium leading-5 py-1 px-2">
                  {order.status}
                </div>
              ) : (
                <div className="bg-red-100 text-red-700 inline-block rounded-sm text-xs font-medium leading-5 py-1 px-2">
                  {order.status}
                </div>
              )}
            </div>

            <p className="text-primary text-sm font-medium leading-6">
              Potřebujete poradit?
            </p>
            <p className="text-main text-sm font-semibold mb-6">
              <a href="tel:314004540">314 004 540</a> (po-pá 8:00-16:00)
            </p>

            <a
              href="mailto:karel@newlogic.cz"
              className="flex flex-col md:flex-row py-3.5 text-xs font-normal leading-5 items-center justify-end"
            >
              <ChatBubbleLeftRightIcon className="h-4 w-4 mr-0.5" />
              Napište nám prosím hodnocení
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
