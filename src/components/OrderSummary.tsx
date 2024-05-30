import React from "react";

interface OrderSummaryProps {
  totalPrice: number;
  tax: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice, tax }) => {
  const discount = 0; // İndirim miktarı, şu an için sıfır varsayıldı

  return (
    <div className="bg-white text-gray-600">
      <h2 className="text-blue-700 border-b-2 p-4 w-full text-lg  mb-4">
        Sipariş Özeti
      </h2>
      <div className="flex justify-between mb-2 px-4 py-3 border m-2 ">
        <span>Tek İlan Paketi:</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 px-4 py-3 border m-2 ">
        <span>KDV ( %20 )</span>
        <span>{tax.toFixed(2)}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-2 px-4 py-3 border m-2 font-bold">
        <span>TOPLAM TUTAR</span>
        <span>{(totalPrice + tax - discount).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
