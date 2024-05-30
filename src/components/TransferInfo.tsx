import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const TransferInfo: React.FC = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-blue-700 text-xl font-bold">Havale İşlemi</h2>
        <p className="text-gray-700 py-4">
          Lütfen yan tarafta bulunan banka bilgilerini kullanarak havale veya
          EFT işlemi gerçekleştiriniz. İşleminizi tamamladıktan sonra, dekontu
          veya ödeme bilgilerini{" "}
          <span className="text-blue-700">satis@isbul.net</span> adresine
          göndermeyi unutmayınız.{" "}
          <span className="text-red-500 underline">
            Açıklama kısmına mutlaka firma adınızı yazınız.
          </span>
        </p>
        <span className="font-bold text-lg">
          Detaylı Bilgi İçin:
          <a
            href="tel:+902124521604"
            className="flex items-center gap-2 hover:scale-95 transition-all text-xl font-semibold text-blue-500"
          >
            <BiPhoneCall /> 0(212) 452 16 04
          </a>
        </span>
      </div>
      <div className="  w-full">
        <h2 className="text-blue-700 text-xl font-bold">Havale Bilgileri</h2>
        <p className=" py-4 underline text-red-500 ">
          Akbank Şirinevler Şubesi
        </p>
        <p className="text-gray-700 py-4">
          <span className="font-bold">Şube Kodu:</span> 0188
        </p>
        <p className="text-gray-700 py-4">
          <span className="font-bold">Hesap No: </span> 0197523
        </p>
        <p className="text-gray-700 py-4">
          <span className="font-bold">Hesap Adı: </span> Gezer Grup İnsan
          Kaynakları Eğit.ve Danışmanlık Tic. Anonim Şti.
        </p>
        <p className="text-gray-700 py-4">
          <span className="font-bold">IBAN No: </span> TR82 0004 6001 8888 8000
          1975 23
        </p>
      </div>
    </div>
  );
};

export default TransferInfo;
