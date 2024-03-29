import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyle?:string;
    textStyles?:string;
    rightIcon?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    isDisable?:boolean;
}

export interface SearchManufaturerProps{
    manufacturer:string;
    setManufacturer:(manufacture:string)=>void;
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}