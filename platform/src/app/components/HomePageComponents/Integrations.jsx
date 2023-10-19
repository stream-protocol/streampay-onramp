import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IntegrationCard = ({ logoSrc, title, description, linkHref, linkText, isComingSoon }) => (
  <div className="flex items-start justify-start gap-4 flex-col max-w-full p-4 py-5 text-center mx-auto bg-white ">
    <div className="w-full relative">
      <Image src={logoSrc} width={130} height={150} alt={title} className="object-cover w-auto h-auto" />
    </div>
    <div className="text-left space-y-2">
      <h4 className="text-2xl text-[#111827] font-semibold ">{title}</h4>
      <p className="text-base text-[#6F7072]">{description}</p>
      <div className="mt-5">
        {isComingSoon ? (
          <button className="bg-[#FFFFFF] text-[F111827] rounded-[80px] py-2 px-10 w-auto mt-4 whitespace-nowrap">
            Coming soon
          </button>
        ) : (
          <Link href={linkHref} className="border border-[#3366CC] text-[#3366CC] rounded-[80px] py-2 px-10 w-1/3 lg:w-1/3 mt-4 whitespace-nowrap block">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default function Integrations() {
  return (
    <section className="py-20 bg-[#F1F3F5]">
      <div className="container">
        <div className="mb-12 text-center max-w-md mx-auto text-[#1A202B]">
          <h2 className=" text-4xl h2 mb-4 font-semibold">Integrations</h2>
        </div>
        <div className="flex items-center justify-center flex-wrap pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-[1000px] mx-auto">
            <IntegrationCard
              logoSrc="/logo/react.png"
              title="ReactJS"
              description="Integrate StreamPay™ with your ReactJS app for a smooth crypto checkout. Cater to everyone, crypto experts and beginners alike."
              linkHref="/integrations"
              linkText="Integrate"
            />
            <IntegrationCard
              logoSrc="/logo/vue.png"
              title="VueJS"
              description="Supercharge your VueJS applications with StreamPay, the crypto checkout solution. StreamPay not only bridges the gap between traditional and crypto payments but also empowers non-crypto users with the flexibility to pay via bank transfers, Wise, and various wallet options. Dive into the future of payments by seamlessly integrating cryptocurrency transactions into your VueJS endeavors."
              linkHref="/integrations"
              linkText="Integrate"
            />
            <IntegrationCard
              logoSrc="/logo/shopify.png"
              title="Shopify"
              description="Elevate your Shopify store to new heights with StreamPay integration, turning it into a cutting-edge, crypto-accepting e-commerce hub. Cater to a diverse clientele by enabling non-crypto users to effortlessly transact using bank transfers, Wise, and various wallet options. With StreamPay, seamlessly usher in the future of cryptocurrency transactions, enhancing the shopping experience on your Shopify platform."
              isComingSoon
            />
            <IntegrationCard
              logoSrc="/logo/wordpress.png"
              title="WordPress"
              description="Empower your WordPress site with StreamPay, the ultimate cryptocurrency payment gateway. Whether you run a blog, e-commerce store, or a portfolio site on WordPress, StreamPay makes it simple for non-crypto users to transact using bank transfers, Wise, and wallet payments. Integrate StreamPay and redefine the way your audience interacts with your WordPress platform, embracing the future of cryptocurrency payments."
              isComingSoon
            />
          </div>
        </div>
      </div>
    </section>
  );
}