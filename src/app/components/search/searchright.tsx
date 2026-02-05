"use client";

import React from "react";
import { Table } from "antd";

const SearchRight = () => {
  const columns = [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Resurs kodi",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Resurs nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "O'lchov birligi",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <svg
          width="12"
          height="18"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 1H9C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3V17L6 14L1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1Z"
            stroke="#1890FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const dataSource = Array.from({ length: 15 }).map((_, index) => ({
    key: index,
    number: index + 1,
    code: "01.07.10.01-0001",
    name: "Глина пресс-порошок",
    unit: "панель",
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default SearchRight;
