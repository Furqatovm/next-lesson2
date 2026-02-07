"use client";

import MySelect from "./select";
import MaterialHeader from "./header";
import { useState } from "react";
import { useRouter } from "next/navigation";


const Materials = () => {
    const router =useRouter()
  return (
    <div className="w-max-w mx-auto">
      <h2 className="text-primary text-[1.5rem] text-center my-4">
        qurilish materiallari
      </h2>

      <div className="flex flex-col gap-5">
        <div>
          <span className="text-primary text-[14px] block my-2">
            Tanlangan mahsulot turi
          </span>
          <MySelect />
        </div>

        <div>
          <span className="text-primary text-[14px] block my-2">
            Tanlangan bo‘lim
          </span>
          <MySelect />
        </div>

        <div>
          <span className="text-primary text-[14px] block my-2">
            Tanlangan kategoriya
          </span>
          <MySelect />
        </div>

        <div>
          <span className="text-primary text-[14px] block my-2">
            Tanlangan guruh
          </span>
          <MySelect />
        </div>
      </div>

      <MaterialHeader />
      <div className='flex gap-2 items-center my-4'>
        <div onClick={() =>router.push("material")}>
  <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_477_3217)">
    <path d="M7.33325 11H17.4166" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.33325 18.3333H17.4166" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.33325 25.6667H17.4166" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.33325 33H17.4166" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.5833 11H36.6666" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.5833 18.3333H36.6666" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.5833 25.6667H36.6666" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.5833 33H36.6666" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_477_3217">
      <rect width={44} height={44} rx={5} fill="white" />
    </clipPath>
  </defs>
</svg>
        </div>
        <div onClick={() =>router.push("/material/items1")}>
    <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_477_3200)">
    <rect width={44} height={44} rx={5} fill="#fff" />
    <path d="M7.33325 9.16659C7.33325 8.68036 7.52641 8.21404 7.87022 7.87022C8.21404 7.52641 8.68036 7.33325 9.16659 7.33325H16.4999C16.9861 7.33325 17.4525 7.52641 17.7963 7.87022C18.1401 8.21404 18.3333 8.68036 18.3333 9.16659V16.4999C18.3333 16.9861 18.1401 17.4525 17.7963 17.7963C17.4525 18.1401 16.9861 18.3333 16.4999 18.3333H9.16659C8.68036 18.3333 8.21404 18.1401 7.87022 17.7963C7.52641 17.4525 7.33325 16.9861 7.33325 16.4999V9.16659Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25.6667 9.16659C25.6667 8.68036 25.8599 8.21404 26.2037 7.87022C26.5475 7.52641 27.0139 7.33325 27.5001 7.33325H34.8334C35.3196 7.33325 35.786 7.52641 36.1298 7.87022C36.4736 8.21404 36.6667 8.68036 36.6667 9.16659V16.4999C36.6667 16.9861 36.4736 17.4525 36.1298 17.7963C35.786 18.1401 35.3196 18.3333 34.8334 18.3333H27.5001C27.0139 18.3333 26.5475 18.1401 26.2037 17.7963C25.8599 17.4525 25.6667 16.9861 25.6667 16.4999V9.16659Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.33325 27.5001C7.33325 27.0139 7.52641 26.5475 7.87022 26.2037C8.21404 25.8599 8.68036 25.6667 9.16659 25.6667H16.4999C16.9861 25.6667 17.4525 25.8599 17.7963 26.2037C18.1401 26.5475 18.3333 27.0139 18.3333 27.5001V34.8334C18.3333 35.3196 18.1401 35.786 17.7963 36.1298C17.4525 36.4736 16.9861 36.6667 16.4999 36.6667H9.16659C8.68036 36.6667 8.21404 36.4736 7.87022 36.1298C7.52641 35.786 7.33325 35.3196 7.33325 34.8334V27.5001Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25.6667 27.5001C25.6667 27.0139 25.8599 26.5475 26.2037 26.2037C26.5475 25.8599 27.0139 25.6667 27.5001 25.6667H34.8334C35.3196 25.6667 35.786 25.8599 36.1298 26.2037C36.4736 26.5475 36.6667 27.0139 36.6667 27.5001V34.8334C36.6667 35.3196 36.4736 35.786 36.1298 36.1298C35.786 36.4736 35.3196 36.6667 34.8334 36.6667H27.5001C27.0139 36.6667 26.5475 36.4736 26.2037 36.1298C25.8599 35.786 25.6667 35.3196 25.6667 34.8334V27.5001Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_477_3200">
      <rect width={44} height={44} rx={5} fill="#fff" />
    </clipPath>
  </defs>
</svg>


          </div>
        <div>
      <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_477_3206)">
    <path d="M7.33325 9.16659C7.33325 9.65282 7.52641 10.1191 7.87022 10.4629C8.21404 10.8068 8.68036 10.9999 9.16659 10.9999C9.65282 10.9999 10.1191 10.8068 10.4629 10.4629C10.8068 10.1191 10.9999 9.65282 10.9999 9.16659C10.9999 8.68036 10.8068 8.21404 10.4629 7.87022C10.1191 7.52641 9.65282 7.33325 9.16659 7.33325C8.68036 7.33325 8.21404 7.52641 7.87022 7.87022C7.52641 8.21404 7.33325 8.68036 7.33325 9.16659Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.1667 9.16659C20.1667 9.65282 20.3599 10.1191 20.7037 10.4629C21.0475 10.8068 21.5139 10.9999 22.0001 10.9999C22.4863 10.9999 22.9526 10.8068 23.2964 10.4629C23.6403 10.1191 23.8334 9.65282 23.8334 9.16659C23.8334 8.68036 23.6403 8.21404 23.2964 7.87022C22.9526 7.52641 22.4863 7.33325 22.0001 7.33325C21.5139 7.33325 21.0475 7.52641 20.7037 7.87022C20.3599 8.21404 20.1667 8.68036 20.1667 9.16659Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 9.16659C33 9.65282 33.1932 10.1191 33.537 10.4629C33.8808 10.8068 34.3471 10.9999 34.8333 10.9999C35.3196 10.9999 35.7859 10.8068 36.1297 10.4629C36.4735 10.1191 36.6667 9.65282 36.6667 9.16659C36.6667 8.68036 36.4735 8.21404 36.1297 7.87022C35.7859 7.52641 35.3196 7.33325 34.8333 7.33325C34.3471 7.33325 33.8808 7.52641 33.537 7.87022C33.1932 8.21404 33 8.68036 33 9.16659Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.33325 22.0001C7.33325 22.4863 7.52641 22.9526 7.87022 23.2964C8.21404 23.6403 8.68036 23.8334 9.16659 23.8334C9.65282 23.8334 10.1191 23.6403 10.4629 23.2964C10.8068 22.9526 10.9999 22.4863 10.9999 22.0001C10.9999 21.5139 10.8068 21.0475 10.4629 20.7037C10.1191 20.3599 9.65282 20.1667 9.16659 20.1667C8.68036 20.1667 8.21404 20.3599 7.87022 20.7037C7.52641 21.0475 7.33325 21.5139 7.33325 22.0001Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.1667 22.0001C20.1667 22.4863 20.3599 22.9526 20.7037 23.2964C21.0475 23.6403 21.5139 23.8334 22.0001 23.8334C22.4863 23.8334 22.9526 23.6403 23.2964 23.2964C23.6403 22.9526 23.8334 22.4863 23.8334 22.0001C23.8334 21.5139 23.6403 21.0475 23.2964 20.7037C22.9526 20.3599 22.4863 20.1667 22.0001 20.1667C21.5139 20.1667 21.0475 20.3599 20.7037 20.7037C20.3599 21.0475 20.1667 21.5139 20.1667 22.0001Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 22.0001C33 22.4863 33.1932 22.9526 33.537 23.2964C33.8808 23.6403 34.3471 23.8334 34.8333 23.8334C35.3196 23.8334 35.7859 23.6403 36.1297 23.2964C36.4735 22.9526 36.6667 22.4863 36.6667 22.0001C36.6667 21.5139 36.4735 21.0475 36.1297 20.7037C35.7859 20.3599 35.3196 20.1667 34.8333 20.1667C34.3471 20.1667 33.8808 20.3599 33.537 20.7037C33.1932 21.0475 33 21.5139 33 22.0001Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.33325 34.8333C7.33325 35.3196 7.52641 35.7859 7.87022 36.1297C8.21404 36.4735 8.68036 36.6667 9.16659 36.6667C9.65282 36.6667 10.1191 36.4735 10.4629 36.1297C10.8068 35.7859 10.9999 35.3196 10.9999 34.8333C10.9999 34.3471 10.8068 33.8808 10.4629 33.537C10.1191 33.1932 9.65282 33 9.16659 33C8.68036 33 8.21404 33.1932 7.87022 33.537C7.52641 33.8808 7.33325 34.3471 7.33325 34.8333Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.1667 34.8333C20.1667 35.3196 20.3599 35.7859 20.7037 36.1297C21.0475 36.4735 21.5139 36.6667 22.0001 36.6667C22.4863 36.6667 22.9526 36.4735 23.2964 36.1297C23.6403 35.7859 23.8334 35.3196 23.8334 34.8333C23.8334 34.3471 23.6403 33.8808 23.2964 33.537C22.9526 33.1932 22.4863 33 22.0001 33C21.5139 33 21.0475 33.1932 20.7037 33.537C20.3599 33.8808 20.1667 34.3471 20.1667 34.8333Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 34.8333C33 35.3196 33.1932 35.7859 33.537 36.1297C33.8808 36.4735 34.3471 36.6667 34.8333 36.6667C35.3196 36.6667 35.7859 36.4735 36.1297 36.1297C36.4735 35.7859 36.6667 35.3196 36.6667 34.8333C36.6667 34.3471 36.4735 33.8808 36.1297 33.537C35.7859 33.1932 35.3196 33 34.8333 33C34.3471 33 33.8808 33.1932 33.537 33.537C33.1932 33.8808 33 34.3471 33 34.8333Z" stroke="#28366D" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_477_3206">
      <rect width={44} height={44} fill="white" />
    </clipPath>
  </defs>
</svg>
        </div>
      
      </div>
     
    </div>
  );
};

export default Materials;
