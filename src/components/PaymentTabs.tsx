import React, { useState } from "react";
import CreditCardForm from "./CreditCardForm";
import TransferInfo from "./TransferInfo";
import { CiCreditCard1, CiMoneyBill } from "react-icons/ci";

const PaymentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"creditCard" | "transfer">(
    "creditCard"
  );

  return (
    <div className="">
      <div className="w-full flex justify-center space-x-4 mb-6">
        <button
          className={`py-2 px-4 w-full rounded-full flex items-center gap-x-2 shadow-lg ${
            activeTab === "creditCard"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("creditCard")}
        >
          <CiCreditCard1 size={26} />
          Kredi Kartı
        </button>
        <button
          className={`py-2 px-4 w-full rounded-full flex items-center gap-x-2 shadow-lg ${
            activeTab === "transfer"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700"
          } rounded-full`}
          onClick={() => setActiveTab("transfer")}
        >
          <CiMoneyBill size={26} />
          Havale
        </button>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        {activeTab === "creditCard" && <CreditCardForm />}
        {activeTab === "transfer" && <TransferInfo />}
      </div>
    </div>
  );
};

export default PaymentTabs;
