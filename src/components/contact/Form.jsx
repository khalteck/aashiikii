import { IoIosSend } from "react-icons/io";

const Form = () => {
  return (
    <form className="w-full bg-neutral-50 md:w-1/2 px-5 py-7 md:p-12 flex flex-col gap-4 text-center md:text-start">
      <h1 className="text-[2rem] font-bold text-[#C2A284]">Contact Us</h1>
      <p className="mb-7">Get in touch and let us know how we can help</p>

      <input
        type="text"
        id="name"
        placeholder="Name"
        className="w-full pb-4 border-b border-neutral-950 bg-transparent mb-8 outline-none"
      />
      <input
        type="text"
        id="email"
        placeholder="Email"
        className="w-full pb-4 border-b border-neutral-950 bg-transparent mb-8 outline-none"
      />
      <textarea
        id="message"
        placeholder="Your message..."
        className="w-full h-[200px] p-4 border border-neutral-950/50 bg-transparent mb-8 outline-none"
      />
      <button className="w-full max-w-[600px] p-5 bg-[#F1E4D8] flex gap-3 items-center justify-center">
        <p>Send Message</p>
        <IoIosSend size="25px" color="black" />
      </button>
    </form>
  );
};

export default Form;
