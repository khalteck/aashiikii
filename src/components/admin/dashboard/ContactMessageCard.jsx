import getTimeAgo from "../../../utils/getTimeAgo";

const ContactMessageCard = ({ item }) => {
  const timeAgo = getTimeAgo(item?.timestamp);
  return (
    <div className="w-full flex flex-col gap-3 bg-slate-800/10 p-3 rounded-md">
      <p className="text-[.85rem]">
        From:{" "}
        <span className="font-bold">
          {" "}
          {item?.name} -{" "}
          <a href={`mailto:${item?.email}`} className="hover:underline">
            {item?.email}
          </a>
        </span>
      </p>
      <p className="text-[.9rem]">{item?.message}</p>
      <p className="ml-auto opacity-70 text-[.8rem]">{timeAgo}</p>
    </div>
  );
};

export default ContactMessageCard;
