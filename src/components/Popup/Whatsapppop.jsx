import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Whatsapppop() {
  const [show, setShow] = useState(false);
  const handlePopup = () => {
    setShow(!show);
  };
  return (
    <div className="flex justify-center items-end">
      <div>
        {show && (
          <div className="w-72 h-44 bg-white rounded-lg">
            <div>
              <div>
                <h4 className="bg-lime-900 px-2 py- text-center">
                  <span className="text-4xl text-white">
                    <FaWhatsapp />
                  </span>
                  <span className="pb-8">Raise Your Query</span>
                  <br />
                  <span className="text-sm">
                    Hi! Simply click below and type your query.
                  </span>
                </h4>
              </div>
              <div className="bg-slate-400 py-7">
                Our experts will reply you very soon.
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <div
          className="active:scale-90 p-3 m-2 bg-green-700 rounded-full"
          // onClick={() => {
          //   setShow(!show);
          // }}
          onClick={handlePopup}
        >
          <span className="text-4xl text-white">
            <FaWhatsapp />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Whatsapppop;
