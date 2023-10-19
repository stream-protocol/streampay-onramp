"use client";
import Link from "next/link";
import React from "react";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    YoutubeIcon,
} from "../IconComponent";

const Footer = () => {
    const socialIcons = [
        { component: FacebookIcon, className: "w-6 h-6" },
        { component: TwitterIcon, className: "w-6 h-6" },
        { component: InstagramIcon, className: "w-6 h-6" },
        { component: LinkedInIcon, className: "w-6 h-6" },
        { component: YoutubeIcon, className: "w-6 h-6" },
    ];

    return (
        <footer className="bg-white py-12">
            <div className="container px-4">
                <div className="flex items-center justify-between flex-wrap gap-4 px-4">
                    <div>
                        <h4 className="text-[#111827] font-semibold text-lg mb-4">
                            Contact
                        </h4>
                        <Link href="mailto:contact@streamprotocol.org">
                            contact@streamprotocol.org
                        </Link>

                        <div className="flex items-center justify-start gap-3 mt-5">
                            {socialIcons.map((Icon, index) => (
                                <Icon.component key={index} className={Icon.className} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#111827] font-semibold text-lg mb-4">
                            Developer
                        </h4>
                        <div className="text-[#344054] text-sm flex items-center justify-start gap-4 font-medium flex-wrap mb-4">
                            <Link href="https://docs.streampayments.org/streampay/onramp/">Documentation</Link>
                            <Link href="https://docs.streampayments.org/streampay/onramp/integration">Integrations</Link>
                            <Link href="https://docs.streampayments.org/system_design/">System Design</Link>
                        </div>
                        <p className="text-[#a6a6a6] text-sm">
                            &copy; 2023 StreamPayments™. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;