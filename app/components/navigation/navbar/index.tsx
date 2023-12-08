import React from 'react';

import Link from "next/link";
import Image from 'next/image';

export default function index() {
  return (
        <nav className="bg-white dark:bg-black sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                </button>
                <Image src="/assets/logo.svg" alt='audiofile logo' width={143} height={25} />
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white text-center">
                        <Image src="/assets/icon-cart.svg" alt='cart' width={23.33} height={20} />
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pr-28" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black uppercase text-sm">
                        <li>
                            <Link href="/">
                                <p className="text-white">Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/headphones">
                                <p className="text-white">Headphones</p>
                            </Link>
                        </li>
                        <li>
                        <Link href="/speakers">
                                <p className="text-white">Speakers</p>
                            </Link>
                        </li>
                        <li>
                        <Link href="/earphones">
                                <p className="text-white">Earphones</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
