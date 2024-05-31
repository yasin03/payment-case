import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import CustomInput from "./CustomInput";

const CreditCardForm: React.FC = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState<"name" | "number" | "expiry" | "cvc">();

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center space-x-8 ">
      <form className="space-y-4 w-full ">
        <CustomInput
          id="name"
          label="Adınız Soyadınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocus("name")}
        />
        <CustomInput
          id="cardNumber"
          label="Kart Numarası"
          type="numeric"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          onFocus={() => setFocus("number")}
        />

        <CustomInput
          id="expiry"
          label="Son Kullanma Tarihi"
          type="numeric"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={() => setFocus("expiry")}
        />
        <CustomInput
          id="cvv"
          label="CVV"
          type="numeric"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          onFocus={() => setFocus("cvc")}
          onBlur={() => setFocus(undefined)}
        />
        <p className="text-blue-700 text-lg font-semibold">Bilgilendirme;</p>
        <p className="text-gray-500 text-sm">
          Faturanız aşağıda belirtilen e-posta adresinize gönderilecektir.
          habipagca@hotmail.com
        </p>
      </form>
      <div className="my-6">
        <Cards
          cvc={cvv}
          expiry={expiry}
          focused={focus}
          name={name}
          number={cardNumber}
        />
      </div>
    </div>
  );
};

export default CreditCardForm;
