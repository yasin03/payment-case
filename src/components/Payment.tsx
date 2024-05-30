import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import DiscountCoupon from "./DiscountCoupon";
import TermsAgreement from "./TermsAgreement";

const Payment: React.FC = () => {
  const [couponApplied, setCouponApplied] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleApplyCoupon = (couponCode: string) => {
    // Burada indirim kuponu kontrolü ve uygulanması gerçekleştirilir
    // Şu an için sadece uygulandı olarak işaretleniyor
    setCouponApplied(true);
  };

  const handlePlaceOrder = () => {
    // Siparişin tamamlandığını işaretleyen fonksiyon
    setIsOrderPlaced(true);
  };

  const toggleAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div className="bg-white rounded-md h-full">
      <OrderSummary totalPrice={750} tax={150} />
      {!couponApplied && <DiscountCoupon applyCoupon={handleApplyCoupon} />}
      <TermsAgreement isAgreed={isAgreed} toggleAgreement={toggleAgreement} />
      <div className="p-4">

      <button
        onClick={handlePlaceOrder}
        disabled={!isAgreed}
        className={`w-full bg-green-500 text-white p-4 rounded-md ${
          !isAgreed ? "opacity-50" : ""
        }`}
      >
        SİPARİŞİ TAMAMLA
      </button>
      </div>
    </div>
  );
};

export default Payment;
