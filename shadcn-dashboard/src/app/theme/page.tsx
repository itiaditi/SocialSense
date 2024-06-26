/**
 * @format
 */

"use client";

import { useState, useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";

const OrdersPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    // Retrieve the saved color from localStorage on component mount
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      setSelectedColor(savedColor);
    } 
  }, []);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleColortext = (color: string) => {
    setTextColor(color);
  };

  const handleSaveClick = () => {
    localStorage.setItem("selectedColor", selectedColor);
    alert("Color is saved.");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Theme Changer" />
      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 px-6 bg-gray-50 border-b space-y-3 md:space-y-0 md:space-x-6">
          <h1 className="text-black text-2xl md:text-4xl">Themes</h1>
          <button style={{border:"1px solid gray"}}className="flex justify-evenly rounded-md items-center pt-2 pb-2 pl-2 pr-2">
            Aditi Dhiman
            <div className="ml-4 w-10 h-10 rounded-full bg-slate-700"></div>
          </button>
        </div>
        <main>
          <div className="flex flex-col md:flex-row m-4 p-4 md:p-8 justify-between items-center bg-gray-300 rounded-md shadow-sm">
            <div className="ml-4 rounded-md text-lg md:text-2xl font-bold">Apply a Skin to your profile</div>
            <div className="flex justify-evenly gap-4 mt-4 md:mt-0">
              <button style={{ border: "2px solid black" }} className="border pt-2 pb-2 pl-8 pr-8 rounded-md">
                + Custom
              </button>
              <button
                className="rounded-md bg-black text-white pt-2 pb-2 pl-8 pr-8"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="m-4 w-full md:w-[500px]">
              <h1 className="text-lg font-bold">Solids</h1>
              <div className="grid grid-cols-6 md:grid-cols-7 gap-1">
                {[
                  "bg-black",
                  "bg-gray-200",
                  "bg-white",
                  "bg-blue-500",
                  "bg-red-500",
                  "bg-green-500",
                  "bg-yellow-500",
                  "bg-purple-500",
                  "bg-pink-500",
                  "bg-indigo-500",
                  "bg-teal-500",
                  "bg-orange-500",
                ].map((item) => (
                  <div
                    key={item}
                    className={`w-10 h-10 ${item} border cursor-pointer ${selectedColor === item ? 'border-black' : ''}`}
                    onClick={() => handleColorClick(item)}
                  />
                ))}
              </div>
              <h1 className="text-lg font-bold">Linear Gradient</h1>
              <div className="grid grid-cols-6 md:grid-cols-7 gap-2">
                {[
                  "bg-gradient-to-r from-cyan-500 to-blue-500",
                  "bg-gradient-to-r from-sky-500 to-indigo-500",
                  "bg-gradient-to-r from-white to-gray-300",
                  "bg-gradient-to-r from-blue-500 to-green-500",
                  "bg-gradient-to-r from-red-500 to-yellow-500",
                  "bg-gradient-to-r from-green-500 to-teal-500",
                  "bg-gradient-to-r from-yellow-500 to-orange-500",
                  "bg-gradient-to-r from-purple-500 to-pink-500",
                  "bg-gradient-to-r from-pink-500 to-red-500",
                  "bg-gradient-to-r from-indigo-500 to-purple-500",
                  "bg-gradient-to-r from-teal-500 to-blue-500",
                  "bg-gradient-to-r from-orange-500 to-red-500",
                ].map((gradient) => (
                  <div
                    key={gradient}
                    className={`w-10 h-10 ${gradient} border cursor-pointer ${selectedColor === gradient ? 'border-black' : ''}`}
                    onClick={() => handleColorClick(gradient)}
                  />
                ))}
              </div>
              <h1 className="text-lg font-bold">Radial Gradient</h1>
              <div className="grid grid-cols-6 md:grid-cols-7 gap-1">
                {[
                  "radial-gradient-1",
                  "radial-gradient-2",
                  "radial-gradient-3",
                  "radial-gradient-4",
                  "radial-gradient-5",
                  "radial-gradient-6",
                  "radial-gradient-7",
                  "radial-gradient-8",
                  "radial-gradient-9",
                  "radial-gradient-10",
                  "radial-gradient-11",
                  "radial-gradient-12",
                ].map((gradient) => (
                  <div
                    key={gradient}
                    className={`w-10 h-10 ${gradient} border cursor-pointer ${selectedColor === gradient ? 'border-black' : ''}`}
                    onClick={() => handleColorClick(gradient)}
                  />
                ))}
              </div>
              <h1 className="text-lg font-bold">Foreground Color</h1>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-1">
                {["black", "white"].map((color) => (
                  <div
                    key={color}
                    className={`w-10 h-10 bg-${color} border cursor-pointer ${textColor === `text-${color}` ? 'border-black' : ''}`}
                    onClick={() => handleColortext(`text-${color}`)}
                  />
                ))}
              </div>
            </div>
            <div className="w-full border rounded-lg" id="preview">
              <div
                className={`w-full ${selectedColor}`}
                style={{ color: textColor.includes("white") ? "white" : "black" }}
              >
                <div className={`p-2 border-dashed ${selectedColor} rounded-md `}>
                  <div className="font-sans  leading-tight min-h-screen bg-grey-lighter p-8">
                    <div className="max-w-lg  mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="bg-cover h-40" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80')"}}></div>
                      <div className={`border-black ${selectedColor} px-4 pb-6`}>
                        <div className="text-center sm:text-left sm:flex mb-4">
                          <Image
                            className="h-32 w-32 rounded-full border-4 border-dashed border-slate -mt-16 mr-4"
                            src="/images/profile.jpg" 
                            alt="Profile Image"
                            width={128}
                            height={128}
                          />
                        </div>

                        <div className="py-2">
                          <h3 className="font-bold text-2xl mb-1">Aditi Dhiman</h3>
                          <div className="inline-flex text-grey-dark sm:flex items-center">
                            Full Stack Developer
                          </div>
                          <div className="inline-flex text-grey-dark sm:flex items-center">
                            <svg className="h-5 w-5 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                            Himachal Pradesh
                          </div>
                          <div className="mt-4 inline-flex text-grey-dark sm:flex items-center rounded-lg" style={{border: "2px dashed #ccc", padding: "12px"}}>
                            <p>As a seasoned full stack developer, I thrive on crafting robust web applications that seamlessly integrate front-end and back-end technologies.</p>
                          </div>
                        <div className="mt-4">
                          <p>Biography</p>
                        </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrdersPage;
