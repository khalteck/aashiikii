import ColorNameConverter from "../common/ColorNameConverter";

const SummaryList = ({ item }) => {
  const price = item?.itemData?.price * item?.quantity;

  return (
    <div className="w-full flex gap-3 items-center justify-between">
      <div className="flex gap-3 text-neutral-950/60">
        <p className="w-10">X{item?.quantity}</p>
        <div className="flex flex-col gap-2">
          <p>{item?.itemData?.name}</p>
          <div className="font-bold text-neutral-950/70">
            {" "}
            {<ColorNameConverter hexCode={item?.color} />}
          </div>
          <p className="font-bold text-neutral-950/70">Sixe: {item?.size}</p>
        </div>
      </div>
      <p className="mt-auto">NGN {price?.toLocaleString()}</p>
    </div>
  );
};

export default SummaryList;
