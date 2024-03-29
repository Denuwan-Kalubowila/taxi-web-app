import Image from "next/image"

import { footerLinks } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
   <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src="/logo.svg" alt="carhub" width={118} height={18} className="object-contain"/>
                <p className="text-base text-gray-700 ">
                    carhub 2024 <br />
                    All right recived &copy;
                </p>

            </div>
            <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                {footerLinks.map((link)=>(
                    <div key={link.title} className=" flex flex-col gap-6 text-base min-w-[170px]">  
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((sublink)=>(
                            <Link key={sublink.title} href={sublink.url} className="text-gray-500">
                                {sublink.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>@2024. All Rights Reserved.</p>
            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                    <Link href="/" className="text-gray-500">
                        Privacy and Policy
                    </Link>
                    <Link href="/" className="text-gray-500">
                        Terms and Conditions.
                    </Link>
            </div>

        </div>
        
   </footer>
  )
}

export default Footer