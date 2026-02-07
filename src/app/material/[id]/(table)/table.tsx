"use client"

import { TableData } from "@/app/constants";
import { Table } from "antd";

const columns = [
  { title: "No", dataIndex: "key", key: "key", render:(text:string) =><span className="text-[#212529] font-semibold">{text}</span> },
  {
    title: "Rasm",
    dataIndex: "rasm",
    key: "rasm",
    render: (img: string) => <div className="bg-[#dfe1e9] p-2"><img src={img} className="w-12 h-12" alt="product" /></div>,
  },
  { title: "Kompaniya nomi", dataIndex: "kompaniya", key: "kompaniya",
    render:(text:string) =><span className="text-third underline">{text}</span>
   },
  { title: "E’lon tavsifi", dataIndex: "tavsif", key: "tavsif" },
  { title: "Sertifikat", dataIndex: "sertifikat", key: "sertifikat", render:(text:string) =><span><svg width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_509_2854)">
    <path d="M17 3V7C17 7.26522 17.1054 7.51957 17.2929 7.70711C17.4804 7.89464 17.7348 8 18 8H22" stroke="#017EFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10.8V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H17L22 8V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H12" stroke="#017EFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 17C10.6569 17 12 15.6569 12 14C12 12.3431 10.6569 11 9 11C7.34315 11 6 12.3431 6 14C6 15.6569 7.34315 17 9 17Z" stroke="#017EFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 17L6 22L9 20.5L12 22L10.5 17" stroke="#017EFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_509_2854">
      <rect width={24} height={24} fill="white" transform="translate(3)" />
    </clipPath>
  </defs>
</svg>

    </span> },
  {
    title: "Narxi (so’m)",
    dataIndex: "narx",
    key: "narx",
    render: (text: string) => <span className="text-[14px] text-[#212529] font-semibold">{text}</span>, 
  },
  { title: "Kompaniya telefon raqami", dataIndex: "telefon", key: "telefon", render:(text:string) =><span className="text-third font-semibold">{text}</span> },
  { title: "Miqdori, kg", dataIndex: "miqdor", key: "miqdor" },
  { title: "Joylangan vaqt", dataIndex: "joylanVaqt", key: "joylanVaqt" },
];

const ProductTable =() => {
  return <Table columns={columns} dataSource={TableData} pagination={{ pageSize: 10 }} />;
}

export default ProductTable
