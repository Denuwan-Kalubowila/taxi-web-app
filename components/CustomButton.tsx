"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

import React from 'react'

const CustomButton = ({title,containerStyle,handleClick,textStyles,rightIcon,btnType}:CustomButtonProps) => {
  return (
   <button
   disabled={true}
   type={btnType||"button"}
   className={`custom-btn ${containerStyle}`}
   onClick={handleClick}
   >
        <span className={`flex -1 ${textStyles}`}>{title}</span>
        {rightIcon &&(
            <div className="relative w-6 h-6">
              <Image
                src={rightIcon}
                alt="right-icon"
                fill
                className="object-contain"
              />
            </div>
        )}
   </button>
  )
}

export default CustomButton