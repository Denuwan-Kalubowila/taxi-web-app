"use client"

import React, { useState } from 'react'
import { SearchManufaturer } from './'
import Image from 'next/image'

const SearchBar = () => {
    const [manufacturer,setManufacturer]=useState(" ")

    const handleSearch=()=>{

    }
  return (
    <form className='searchbar ' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufaturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar