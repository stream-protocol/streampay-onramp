'use client';
import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../navbar.css';
import { ArrowDown, ArrowDown2 } from 'iconsax-react';

const Navbar = () => {
  return (
    <>
      <header className="shadow-header shadow-slate-300 shadow-sm z-50">
        <div className="container mx-auto">
          <nav className="flex  flex-wrap items-center justify-between px-6 py-4">
            <div className="lg:order-1 w-auto lg:w-1/4 lg:text-center">
              <Link
                href="/"
                className="text-xl text-gray-800 font-semibold font-heading"
              >
                <Image
                  src="/logo/streampay.svg"
                  width={80}
                  height={80}
                  alt="logo"
                  priority
                  className='w-auto h-auto'
                />
              </Link>
            </div>
            <div className="block lg:hidden">
              <button className="navbar-burger flex items-center py-2 px-3 text-[#111827]  rounded relative transition-all duration-150 ease-linear ">
                menu
              </button>
            </div>
            <div className="hidden lg:order-2 lg:block w-full lg:w-auto lg:text-center">
              <div className="navbar-menu flex items-center justify-end gap-4  ">
                <Link
                  href="/"
                  className="block lg:inline-block mt-4 lg:mt-0 text-[#111827]  px-5 menu relative"
                >
                  Features
                </Link>
                <div className="block lg:inline-block mt-4 lg:mt-0 text-[#111827] px-5 menu relative cursor-default">
                  <span className="items-center flex justify-between gap-2">
                    Integration <ArrowDown2 variant="Linear" size={12} />
                  </span>
                  <div className="menu-dropdown">
                    <ul className="space-y-3 text-left text-[#344054] text-base">
                      <li>
                        <Link href={'/integrations'}>React SDK</Link>
                      </li>
                      <li className="flex items-center justify-between">
                        <Link href={'/integrations'}>Vue SDK</Link>
                      </li>
                      <li className="flex items-center justify-between">
                        Shopify{' '}
                        <span className="text-[11px] text-[F111827] bg-[#FFFFFF] rounded-full px-3 py-[0.125px]">
                          coming soon
                        </span>
                      </li>
                      <li className="flex items-center justify-between">
                        WordPress{' '}
                        <span className="text-[11px] text-[F111827] bg-[#FFFFFF] rounded-full px-3 py-[0.125px]">
                          coming soon
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block lg:inline-block mt-4 lg:mt-0 text-[#111827] px-5 menu relative cursor-default ">
                  <span className="items-center flex justify-between gap-2">
                    Developer Docs <ArrowDown2 variant="Linear" size={12} />
                  </span>

                  <div className="menu-dropdown">
                    <ul className="space-y-3 text-left text-[#344054] text-base">
                      <li>
                        <Link href={'https://docs.streampayments.org/streampay/onramp/'}>Documentation</Link>
                      </li>
                      <li className="flex items-center justify-between">
                        <Link href={'https://docs.streampayments.org/streampay/onramp/integration'}>Integration</Link>
                      </li>
                      <li className="flex items-center justify-between">
                        <Link href={'https://docs.streampayments.org/projects/'}>Projects</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href="/"
                  className="block lg:inline-block mt-4 lg:mt-0 text-[#111827] px-5 "
                >
                  Support ↗
                </Link>
                <Link
                  href="mailto:support@streampayments.org"
                  className="block lg:inline-block mt-4 lg:mt-0 text-[#111827] px-5"
                >
                  Pricing
                </Link>
                <Link
                  className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-[#111827] hover:bg-white  hover:border-[#111827] hover:border  border border-[#111827] bg-[#111827] rounded-full px-6 py-2 transition duration-300 ease text-sm"
                  href="/auth/login"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
