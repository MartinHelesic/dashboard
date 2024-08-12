import { useState } from "react";

function AccountSettings() {
  const [firstName, setFirstName] = useState("Lubomír");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("+420 123 456 789");
  const [email, setEmail] = useState("daniil.filatov@newlogic.cz");
  const [street, setStreet] = useState("Typin");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [ico, setIco] = useState("");
  const [dic, setDic] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div className="md:ml-8 p-6 flex-grow bg-body rounded">
      <div className="flex flex-col">
        {/* Contact Details ------------------------------------------------------------------------------------------------------ */}
        <div className="pb-8 border-b-[0.5px] border-body-secondary mb-8">
          <h2 className="text-main text-xl font-semibold mb-8">
            Kontaktní údaje
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative mb-3">
              <input
                type="text"
                id="hs-floating-input-name"
                className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                placeholder="Jméno*"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label
                htmlFor="hs-floating-input-name"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
              >
                Jméno<span className="text-error">*</span>
              </label>
            </div>

            <div className="relative mb-3">
              <input
                type="text"
                id="hs-floating-input-lastname"
                className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                placeholder="Příjmení*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label
                htmlFor="hs-floating-input-lastname"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
              >
                Příjmení<span className="text-error">*</span>
              </label>
            </div>
          </div>

          {/* --- */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <div className="relative mb-3">
                <input
                  type="tel"
                  id="hs-floating-input-phone"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="Telefon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label
                  htmlFor="hs-floating-input-phone"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  Telefon
                </label>
              </div>
            </div>

            <div className="relative mb-3">
              <input
                type="email"
                id="hs-floating-input-email"
                className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                placeholder="E-mail*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="hs-floating-input-email"
                className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
              >
                E-mail<span className="text-error">*</span>
              </label>
            </div>
          </div>
        </div>

        {/* Billing Details ------------------------------------------------------------------------------------------------------ */}
        <div className="pb-8 border-b-[0.5px] border-body-secondary mb-8">
          <h2 className="text-main text-xl font-semibold mb-8">
            Fakturační údaje
          </h2>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative mb-3 md:col-span-3">
                <input
                  type="text"
                  id="hs-floating-input-street"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="Ulice*"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                />

                <label
                  htmlFor="hs-floating-input-street"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  Ulice<span className="text-error">*</span>
                </label>
              </div>

              <div className="relative mb-3">
                <input
                  type="text"
                  id="hs-floating-input-street-number"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="Číslo popisné*"
                  value={streetNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                  required
                />
                <label
                  htmlFor="hs-floating-input-street-number"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  Číslo popisné<span className="text-error">*</span>
                </label>
              </div>
            </div>

            {/* --- */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative mb-3 col-span-2">
                <input
                  type="text"
                  id="hs-floating-input-city"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="Město*"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <label
                  htmlFor="hs-floating-input-city"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  Město<span className="text-error">*</span>
                </label>
              </div>

              <div className="relative mb-3">
                <input
                  type="text"
                  id="hs-floating-input-zip-code"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="PSČ*"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
                <label
                  htmlFor="hs-floating-input-zip-code"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  PSČ<span className="text-error">*</span>
                </label>
              </div>

              <div className="flex flex-col">
                <select
                  className="h-14 border border-gray-200 rounded-lg text-base text-main px-4"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  <option value="">Stát*</option>
                  <option value="cz">Česká republika</option>
                  <option value="sk">Slovensko</option>
                </select>
              </div>
            </div>
          </div>

          {/* Checkbox Firm Details ------------------------------------------------------------------------------------------------------ */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 shrink-0 h-4 w-4 border-gray-200 rounded-sm text-primary focus:ring-primary hover:cursor-pointer"
              id="hs-company-checkbox"
              checked={company}
              onChange={(e) => setCompany(e.target.checked)}
            />
            <label
              htmlFor="hs-company-checkbox"
              className="font-normal text-sm leading-[22px] hover:cursor-pointer"
            >
              Nakupuji na firmu
            </label>
          </div>

          {/* Firm Details ------------------------------------------------------------------------------------------------------ */}
          {company && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="relative mb-3 col-span-2">
                <input
                  type="text"
                  id="hs-floating-input-company-name"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="Název firmy*"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
                <label
                  htmlFor="hs-floating-input-company-name"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  Název firmy<span className="text-error">*</span>
                </label>
              </div>

              <div className="relative mb-3">
                <input
                  type="text"
                  id="hs-floating-input-ico"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="IČ*"
                  value={ico}
                  onChange={(e) => setIco(e.target.value)}
                  required
                />
                <label
                  htmlFor="hs-floating-input-ico"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  IČ<span className="text-error">*</span>
                </label>
              </div>

              <div className="relative mb-3">
                <input
                  type="text"
                  id="hs-floating-input-dic"
                  className="peer py-2.5 px-4 block w-full border border-gray-200 rounded-lg text-base placeholder:text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6 
                h-14
                "
                  placeholder="DIČ"
                  value={dic}
                  onChange={(e) => setDic(e.target.value)}
                />
                <label
                  htmlFor="hs-floating-input-dic"
                  className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:scale-90
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:text-main 
                peer-[:not(:placeholder-shown)]:scale-90
                peer-[:not(:placeholder-shown)]:translate-x-0.5
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-main"
                >
                  DIČ
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter check------------------------------------------------------------------------------------------------------ */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 shrink-0 h-4 w-4 border-gray-200 rounded-sm text-primary focus:ring-primary hover:cursor-pointer"
          id="hs-newsletter-checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
        <label
          htmlFor="hs-newsletter-checkbox"
          className="font-normal text-sm leading-[22px] hover:cursor-pointer"
        >
          Přeji si dostávat informace o novinkách a slevách nebo inspiraci
        </label>
      </div>
    </div>
  );
}

export default AccountSettings;
