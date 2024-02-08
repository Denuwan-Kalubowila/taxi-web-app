"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

import React from 'react'

const CustomButton = ({title,containerStyle,handleClick}:CustomButtonProps) => {
  return (
   <button
   disabled={true}
   type={"button"}
   className={`custom-btn ${containerStyle}`}
   onClick={handleClick}
   >
        <span>{title}</span>
   </button>
  )
}

export default CustomButton