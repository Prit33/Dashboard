import React from "react";
export default function CardHeader({ title, value, iconName, cardColor }) {
  return (
    // Header Cards
    <>
      <div
        className={
          "relative flex flex-col w-29 -m-2 items-center text-white rounded-2xl cursor-default " +
          cardColor
        }
      >
        <div className="flex-auto p-6">
          <div className="flex flex-col items-center w-12 ">
            <div className="relative mb-4">
              <div className={"text-center items-center  justify-center "}>
                <i className={iconName} style={{ fontSize: 25 }}></i>
              </div>
            </div>
            <div className="text-center mt-2">
              <h5 className="text-sm ">{title}</h5>
              <div className="mt-1">
                <span className="font-bold text-2xl  ">{value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
