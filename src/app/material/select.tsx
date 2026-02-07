"use client"

import { Select } from 'antd'
import React from 'react'
import { ButtonStyle } from '../../../@types';

const { Option, OptGroup } = Select;

function handleChange(value:string) {
  console.log(`selected ${value}`);
}


const MySelect = () => {
    
  return (
    <Select defaultValue="a" style={ButtonStyle}  onChange={handleChange}>
      <Option value="a">Barcha bo'limlar</Option>
      <Option value="s">Barcha bo'limlar</Option>
      <Option value="b">Barcha bo'limlar</Option>
  </Select>
  )
}

export default MySelect