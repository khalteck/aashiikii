const Divider = () => {
  const paragraphs = [];
  for (let i = 0; i < 50; i++) {
    paragraphs.push(
      <div key={i} className="w-[180px] flex gap-2 font-bold">
        <div>A</div>
        <div>a</div>
        <div>s</div>
        <div>h</div>
        <div>i</div>
        <div>i</div>
        <div>k</div>
        <div>i</div>
        <div>i</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  }
  return (
    <div className="w-full overflow-x-auto h-[50px] text-[.85rem] flex gap-2 items-center bg-[#F1E4D8] px-3 no-scrollbar">
      {paragraphs}
    </div>
  );
};

export default Divider;
