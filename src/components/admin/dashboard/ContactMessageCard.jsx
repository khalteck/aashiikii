const ContactMessageCard = ({ item }) => {
  return (
    <div className="w-full flex flex-col gap-3 bg-slate-800/10 p-3 rounded-md">
      <p className="text-[.85rem]">
        From:{" "}
        <span className="font-bold">
          {" "}
          {item?.name} - {item?.email}
        </span>
      </p>
      <p className="text-[.9rem]">{item?.message}</p>
      <p className="ml-auto opacity-70 text-[.8rem]">{item?.time}</p>
    </div>
  );
};

export default ContactMessageCard;
