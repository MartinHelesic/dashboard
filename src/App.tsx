import { useState } from "react";
import Sidebar from "./components/sidebar";
import { ItemNames } from "./enums/itemNames";
import Orders from "./components/orders";
import Invoices from "./components/invoices";
import AccountSettings from "./components/account-settings";

function App() {
  const [selectedSection, setSelectedSection] = useState<string>("Dashboard");

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="bg-neutral-50 h-screen">
      <h1 className="text-main py-8 px-16 font-semibold text-[32px] leading-10">
        {selectedSection}
      </h1>

      <div className="flex flex-col md:flex-row px-4 md:px-16 items-start">
        <Sidebar
          selectedSection={selectedSection}
          onSectionSelect={handleSectionSelect}
        />

        <div className="flex-grow">
          {selectedSection === ItemNames.MY_ORDERS && <Orders />}
          {selectedSection === ItemNames.INVOICES && <Invoices />}
          {selectedSection === ItemNames.ACCOUNT_SETTINGS && (
            <AccountSettings />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
