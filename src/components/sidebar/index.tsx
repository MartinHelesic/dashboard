import {
  ShoppingBagIcon,
  DocumentCheckIcon,
  HeartIcon,
  CircleStackIcon,
  TagIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { ItemNames } from "../../enums/itemNames";

interface SidebarProps {
  onSectionSelect: (section: string) => void;
  selectedSection: string;
}

function Sidebar({ onSectionSelect, selectedSection }: SidebarProps) {
  const sections = [
    { name: ItemNames.MY_ORDERS, icon: ShoppingBagIcon },
    { name: ItemNames.INVOICES, icon: DocumentCheckIcon },
    { name: ItemNames.WISH_LIST, icon: HeartIcon },
    { name: ItemNames.LOYALTY_PROGRAM, icon: CircleStackIcon },
    { name: ItemNames.DISCOUNT_CODES, icon: TagIcon },
    { name: ItemNames.MONITORING_OF_GOODS, icon: MagnifyingGlassIcon },
    { name: ItemNames.ACCOUNT_SETTINGS, icon: Cog6ToothIcon },
  ];

  return (
    <>
      <div className="bg-body px-6 py-8 rounded-xl w-full md:w-[304px] mb-6">
        {/* User */}
        <div className="text-center mb-6">
          <h2 className="text-main font-medium text-[28px] leading-7 mb-1">
            Daniil Filatov
          </h2>
          <p className="text-main-tertiary text-sm leading-[22px]">
            daniil.filatov@newlogic.cz
          </p>
        </div>

        <nav className="mb-6">
          <ul>
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <li className="mb-3" key={section.name}>
                  <button
                    className={`flex items-center w-full text-left p-3 rounded-lg 
                    ${
                      selectedSection === section.name
                        ? "bg-primary text-body"
                        : "text-main"
                    }
                  `}
                    onClick={() => onSectionSelect(section.name)}
                  >
                    <Icon className="h-5 w-5 mr-2" aria-hidden="true" />

                    {section.name}

                    <ChevronRightIcon
                      className="ml-auto h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <button className="bg-log-out text-red-500 font-normal p-3 rounded-lg w-full">
          Odhlásit se
        </button>
      </div>
    </>
  );
}

export default Sidebar;
