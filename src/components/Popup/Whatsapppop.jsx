import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Whatsapppop() {
  const [show, setShow] = useState(false);
  const handlePopup = () => {
    setShow(!show);
  };
  return (
    <div className="flex justify-center items-end">
      <div className="w-90">
        {show && (
          <div className=" bg-white  rounded-xl border-0 ">
            <div className="flex flex-row p-3 justify-center items-center bg-green-500 rounded-t-xl  ">
              <div className="div">
                <span className="text-4xl text-white">
                  <FaWhatsapp />
                </span>
              </div>
              <div className="div">
                {" "}
                <h4 className=" ">
                  <span className="pb-8 px-4 font-semibold">
                    Raise Your Query
                  </span>
                  <br />
                  <span className="text-sm px-4 text-wrap text-right">
                    Hi! Simply click below and type your query.
                  </span>
                </h4>
              </div>
              <div className="div">
                <RxCross2 />
              </div>
            </div>
            <div className="bg-white  text-center items-center rounded-b-xl ">
              {/* <span className="mt-1">
                Our experts will reply you very soon.
              </span> */}
              <br />
              <a
                href="https://wa.me/
9403455116?text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white text-black px-4 py-2 rounded-lg inline-flex  "
              >
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12c0 2.05.496 4.032 1.446 5.848L.049 23.828l6.095-1.577C8.92 23.46 10.46 24 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0zm-.013 22c-1.295 0-2.662-.361-4.117-.988l-.236-.091L2.82 22.283l1.253-3.782c-.67-1.293-1.072-2.739-1.072-4.308C2.998 6.803 7.356 2.445 12 2.445c4.645 0 9.003 4.358 9.003 9.003 0 5.606-4.56 9.997-9.016 9.997z" />
                    <path d="M17.59 14.272c-.218-.108-1.29-.634-1.491-.707-.2-.074-.347-.108-.495.11-.148.218-.569.707-.696.855-.127.148-.27.167-.497.057-.228-.111-.964-.359-1.833-1.143-.679-.583-1.137-1.308-1.271-1.537-.133-.228-.013-.35.1-.466.101-.102.228-.27.34-.403.113-.132.151-.219.228-.366.077-.147.038-.274-.01-.383-.057-.109-.495-1.205-.679-1.654-.173-.42-.347-.365-.495-.365-.133 0-.295-.02-.458-.02-.162 0-.406.057-.619.274-.213.218-.84.823-.84 2.007 0 1.183.87 2.328 1.003 2.484.127.157 1.707 2.704 4.193 3.713.586.249 1.046.398 1.405.511.591.187 1.129.16 1.553.097.473-.072 1.448-.59 1.654-1.16.206-.571.206-1.06.145-1.16-.061-.099-.201-.148-.42-.26z" />
                  </svg>
                  Click here to send a message
                </span>
              </a>
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
