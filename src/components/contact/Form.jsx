import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useAppContext } from "../../contexts/AppContext";
import { ClipLoader } from "react-spinners";

const Form = () => {
  const { handleContact, loading1 } = useAppContext();
  const [error, seterror] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  //=========================================to handle register data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { value, id } = e.target;
    let isValidEmail = true;

    if (id === "email") {
      // Define a regex pattern for email validation
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      isValidEmail = emailPattern.test(value);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    setIsValidEmail(isValidEmail);
    seterror(false);
  }

  async function handleSubmit() {
    try {
      if (formData?.name && formData?.email && formData?.message) {
        const data = {
          ...formData,
          name: formData?.name?.trim(),
          email: formData?.email?.trim(),
        };
        await handleContact(data);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        seterror(true);
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <form className="w-full bg-neutral-50 md:w-1/2 px-5 py-7 md:p-12 flex flex-col gap-4 text-center md:text-start">
      <h1 className="text-[2rem] font-bold text-[#C2A284]">Contact Us</h1>
      <p className="mb-7">Get in touch and let us know how we can help</p>

      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formData?.name}
        placeholder="Name"
        className="w-full pb-4 border-b border-neutral-950/50 bg-transparent mb-8 outline-none rounded-none"
      />
      <div className="w-full relative">
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={formData?.email}
          placeholder="Email"
          className={`w-full pb-4 border-b bg-transparent mb-8 outline-none rounded-none ${
            isValidEmail ? "border-neutral-950/50" : "border-red-500"
          }`}
        />
        {!isValidEmail && (
          <p className="text-red-500 absolute bottom-1 text-sm">
            Please enter a valid email address.
          </p>
        )}
      </div>
      <textarea
        id="message"
        onChange={handleChange}
        value={formData?.message}
        placeholder="Your message..."
        className="w-full h-[200px] p-4 border border-neutral-950/50 bg-transparent mb-8 outline-none rounded-none"
      />
      {error && (
        <p className="w-full text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
          All fields are required
        </p>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full max-w-[600px] p-5 bg-[#F1E4D8] flex gap-3 items-center justify-center"
      >
        {loading1 ? (
          <>
            <p>Processing</p>
            <ClipLoader color={"#000"} size={20} />
          </>
        ) : (
          <>
            <p>Send Message</p>
            <IoIosSend size="25px" color="black" />
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
