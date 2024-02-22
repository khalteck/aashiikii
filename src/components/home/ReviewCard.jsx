import { FaStar } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";

const ReviewCard = () => {
  return (
    <div className="w-full sm:w-[350px] p-7 flex flex-col gap-4 rounded-lg bg-neutral-800">
      <div className="flex gap-2 items-center">
        <FaStar color="#eab308" />
        <FaStar color="#eab308" />
        <FaStar color="#eab308" />
        <FaStar color="#eab308" />
        <FaStar color="#eab308" />
      </div>
      <p>
        “ I really loved the dress I got, Perfect size and the material is
        wonderful”
      </p>
      <div className="flex gap-3 items-center mt-5">
        <FiUser color="#fff" size="30px" />
        <p>Anna Madueke</p>
      </div>
    </div>
  );
};

export default ReviewCard;
