import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-6 ">
          <hr className="mb-4 border-gray-300 border-1 w-full " />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm font-semibold py-1 text-left">
                Copyright © 2024
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
