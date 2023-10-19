const MainComponent = ({ children }) => {
  return (
    <>
      <section className="bg-white rounded-lg py-2 mb-5 border border-[#F1F3F5]">
        <div className=" w-full relative shadow-box py-4 px-4">
            {children}
        </div>
      </section>
    </>
  );
};

export default MainComponent;
