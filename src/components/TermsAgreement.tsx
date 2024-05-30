import React from "react";

interface TermsAgreementProps {
  isAgreed: boolean;
  toggleAgreement: () => void;
}

const TermsAgreement: React.FC<TermsAgreementProps> = ({
  isAgreed,
  toggleAgreement,
}) => {
  return (
    <div className="m-4 flex items-center">
      <input
        type="checkbox"
        checked={isAgreed}
        onChange={toggleAgreement}
        className="mr-2"
      />
      <label className="text-sm text-gray-500">
        <span className="underline">Mesafeli Satış Sözleşmesi</span>
        'ni ve
        <span className="underline"> Ön Bilgi Formu</span>
        'nu okudum, onaylıyorum.
      </label>
    </div>
  );
};

export default TermsAgreement;
