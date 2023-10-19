"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import {
    ArrowDown2,
    Buildings,
    Profile2User,
    RecordCircle,
    Message,
} from "iconsax-react";
import Image from "next/image";
import { ArrowDown, Category } from "react-iconly";

const Sidebar = ({ business }) => {
    const [isCollapsible, setIsCollapsible] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const wrapperClasses = classNames(
        "h-full sidebar pb-4 bg-white flex justify-between shadow-sm scrollbar-change flex-col overflow-y-auto overflow-x-hidden border-r border-[#E1E2E4] w-80"
    );

    const menuLinks = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: <Category size={20} />,
        },
        {
            label: "Transactions",
            href: "/transactions",
            icon: <Profile2User size={20} />,
        },
        {
            label: "Integrations",
            href: "/integrations",
            icon: <RecordCircle size={20} />,
        },
        {
            label: "Support",
            href: "mailto:contact@streamprotocol.org",
            icon: <Message size={20} />,
        },
    ];

    return (
        <>
            <div
                className={wrapperClasses}
                style={{
                    transition: "width 0s ease-in-out 0s ",
                }}
            >
                <div className="flex flex-col px-4">
                    <div className="flex items-center justify-center py-5 relative border-b  border-[#bfbfbf] h-20">
                        <div className="px-3 w-full block h-full">
                            <Link
                                href={"/"}
                                className="flex items-center w-full justify-center h-full"
                            >
                                <Image
                                    src="/logo/mainLogo.svg"
                                    height={30}
                                    width={30}
                                    className="transition 300ms ease object-contain w-auto h-auto mr-2"
                                    priority
                                    alt="logo"
                                />
                                <Image
                                    src="/logo/streampay.svg"
                                    height={100}
                                    width={70}
                                    className="transition 300ms ease object-contain w-auto h-auto"
                                    priority
                                    alt="logo"
                                />
                                {/* <Logo className="transition 300ms ease" /> */}
                            </Link>
                        </div>
                    </div>
                    <nav className="mt-6 md:mt-3 grow ">
                        <div className=" flex-wrap px-4">
                            <div className="bg-[#F1F3F5] px-5 py-4 mb-3 rounded-lg">
                                <button className="flex items-start justify-between w-full">
                                    <div className="flex items-start justify-start gap-2">
                                        <Buildings
                                            variant="Outline"
                                            size={16}
                                            className="mt-1 text-[#111827]"
                                        />
                                        <div className="flex items-start flex-col">
                                            <span className="text-[#111827] text-sm font-medium">
                                                {business.business_name}
                                            </span>
                                            <span className="text-[#a6a6a6] text-xs ">
                                                {business.business_ref}
                                            </span>
                                        </div>
                                    </div>

                                    <ArrowDown2
                                        variant="Outline"
                                        size={12}
                                        className="text-[#81899E]"
                                    />
                                </button>
                            </div>
                            {menuLinks.map((menuItem) => (
                                <Link
                                    key={menuItem.label}
                                    href={`${menuItem.href}`}
                                    className={`menu-item w-full font-thin ${
                                        pathname == menuItem.href ||
                                        pathname.startsWith(`${menuItem.href}/`)
                                            ? "bg-[#F1F3f5] text-[#111827]"
                                            : "text-[#808080]"
                                    }  flex items-center py-4 px-5  my-2 rounded-lg transition-colors duration-200 ease-in hover:bg-[#F1F3f5] hover:text-[#111827] justify-start text-sm`}
                                >
                                    <span className="text-left px-3">
                                        {menuItem.icon}
                                    </span>
                                    <span
                                        className={classNames(
                                            "mx-2 text-sm font-normal "
                                        )}
                                    >
                                        {menuItem.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
