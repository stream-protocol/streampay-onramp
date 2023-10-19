import Image from 'next/image';

const Layout = ({ children }) => (
  <div className="min-h-screen py-0 sm:py-0 md:py-3 lg:py-6 bg-[#F1F3F5]">
    <div className="container mx-auto mt-0 lg:mt-7 mb-0 lg:mb-8 max-w-[800px] px-3 pb-7">
      <div className="h-full pb-3">
        <div className="flex justify-center items-center px-3 py-6 box-shadow sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl lg:text-4xl font-semibold text-gray-700">
            <Image src="/logo/logo-white.svg" width={150} height={150} alt="logo" />
          </div>
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
