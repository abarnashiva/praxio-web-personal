"use client"
import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const router = () => {

     const currentPage = window.location.pathname.split("/")[1].charAt(0).toUpperCase() + window.location.pathname.split("/")[1].slice(1)

    return (
        <>
        {currentPage !== "Home" ?
        <div className='flex mt-6 pt-6 lg:pl-0 pl-6 container'>
            <div className='flex' key="1">
                <p className='hover:underline font-semibold' >
                    <a href="/home">
                        Home
                    </a>
                </p>
                <p className='ml-2 mt-1.5 font-bold'><FaChevronRight /></p>
                <p className='ml-2  font-semibold'>{window.location.pathname.split("/")[1].charAt(0).toUpperCase() + window.location.pathname.split("/")[1].slice(1)}</p>
            </div>

        </div>:
        <></>
        }
        </>
    )
}

export default router
