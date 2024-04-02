import React from "react";
export default function CardStats({ title, value, iconName, iconColor }) {
  return (
    // Header stats
    <>
      <div className="relative flex flex-col w-29  h-32 items-center  bg-slate-800 text-white rounded-2xl cursor-pointer">
        <div className="flex-auto p-4">
          <div className="flex flex-col items-center w-12 ">
            <div className="relative mb-4">
              <div
                className={
                  "text-center items-center  justify-center  " + iconColor
                }
              >
                <i className={iconName}></i>
              </div>
            </div>
            <div className="text-center ">
              <h5 className="text-xs ">{title}</h5>
              <span className="font-bold text-2xl  hover:text-emerald-500">
                {value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
