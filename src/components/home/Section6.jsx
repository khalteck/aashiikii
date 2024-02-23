const Section6 = () => {
  return (
    <section className="w-full px-5 md:px-[100px] pt-[60px] md:pt-[100px] pb-[80px] bg-neutral-50 flex flex-col items-center gap-5">
      <div className="w-full md:w-[80%] md:max-w-[1500px] md:h-[500px] flex md:flex-row flex-col bg-[#F1E4D8]">
        <img
          alt="newsletter image"
          src="/images/newsletter.jpg"
          className="w-full md:w-[45%] h-full object-cover"
        />
        <div className="w-full md:w-[55%] flex flex-col justify-center gap-6 py-7 px-5 md:p-10">
          <h2 className="text-[1.5rem] md:text-[3rem] font-bold">
            Stay Updated
          </h2>
          <p className="text-[1.2rem] font-medium">
            Subscribe to our Newsletter
          </p>
          <p className="opacity-70">
            Sign up for our mailing list and get weekly updates on new
            additions, sales, promotions, and more!
          </p>

          <div className="w-full flex bg-white rounded-r-full">
            <input
              type="text"
              className="bg-white w-full text-black p-4 outline-none text-[.85rem] placeholder:text-black/50"
              placeholder="Email address"
            />
            <div className="w-[150px] md:h-[55px] p-2 md:p-3 text-[.85rem] md:text-[1rem] flex items-center justify-center bg-neutral-950 text-white rounded-r-full rounded-bl-full">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
