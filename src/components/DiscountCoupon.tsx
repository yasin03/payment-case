import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface DiscountCouponProps {
  applyCoupon: (couponCode: string) => void;
}

const DiscountCoupon: React.FC<DiscountCouponProps> = ({ applyCoupon }) => {
  const [couponCode, setCouponCode] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
    setCouponCode("");
    setIsExpanded(!isExpanded);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="p-2 mt-4">
      <div
        className="text-gray-600 text-xs flex justify-between items-center cursor-pointer mb-2 transition-all px-1"
        onClick={toggleExpand}
      >
        <span>Varsa İndirim Kodu Gir</span>

        {isExpanded ? <LuChevronUp /> : <LuChevronDown />}
      </div>
      {isExpanded && (
        <div className="p-2 border border-gray-300 flex justify-between items-center transition-all">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className=" p-2 rounded-md mr-2"
          />
          <span className="absolute text-xs text-gray-500 italic">
            İndirim Kodunuz Varsa Giriniz
          </span>
          <button
            onClick={handleApplyCoupon}
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md"
          >
            UYGULA
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountCoupon;
