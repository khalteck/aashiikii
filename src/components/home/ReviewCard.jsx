import { FaStar } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";

const ReviewCard = ({ item }) => {
  const stars = new Array(item?.stars).fill(null);
  return (
    <div className="w-full sm:w-[350px] p-7 flex flex-col gap-4 rounded-lg bg-neutral-800">
      <div className="flex gap-2 items-center">
        {stars?.map((star, index) => {
          return <FaStar color="#eab308" key={index} />;
        })}
      </div>
      <p className="mb-3">“{item?.comment}”</p>
      <div className="flex gap-3 items-center mt-auto">
        <FiUser color="#fff" size="30px" />
        <p>{item?.name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
