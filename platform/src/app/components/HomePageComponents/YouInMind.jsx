import { Coin, Convert, Messages, Wallet } from "iconsax-react";
import Image from "next/image";
import React from "react";

export default function YouInMind() {
    return (
        <section className="py-20" id="features">
            <div className="">
                <div className="text-center max-w-md mx-auto text-[#111827]">
                    <h2 className=" text-4xl h2 font-semibold">
                        Dashboard
                    </h2>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-y-8 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full lg:w-1/2 container">
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F1F3f5]">
                                <Wallet
                                    variant="Linear"
                                    className="text-[#111827]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#111827] font-medium ">
                                    Multiple Payment Options
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Flexibility at your fingertips.
                                    Pay via Bank Transfer, StreamPay, or opt for wallet payments through Slope Wallet or Phantom Wallet.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F1F3f5]">
                                <Coin
                                    variant="Outline"
                                    className="text-[#111827]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#111827] font-medium ">
                                    Transparent Pricing
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Benefit from our competitive transaction fees.
                                    Pay as low as a 1.0% fee on each transaction, with a maximum limit of just $10.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F1F3f5]">
                                <Messages
                                    variant="Outline"
                                    className="text-[#111827]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#111827] font-medium ">
                                    Real-Time Communication
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Bridge the gap between buyers and sellers with instant messaging.
                                    Stay connected and foster seamless transactions through real-time interactions.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F1F3f5]">
                                <Convert
                                    variant="Outline"
                                    className="text-[#111827]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#111827] font-medium ">
                                    Webhook/Callback Support
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Allows you to build a better user experience fo your customers and track your transactions. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="  w-full lg:w-1/2 max-w-full flex items-center justify-end ">
                        <div className="w-[550px] h-[550px] relative  bg-gray-300 rounded-l-lg">
                            <Image
                                src="/images/MacbookPro16.png"
                                alt=""
                                fill
                                className={"object-contain w-full h-full"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
