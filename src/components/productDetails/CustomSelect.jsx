import React, { useState } from "react";

const CustomSelect = ({
  customValue,
  setCustomValue,
  selectedQuantity,
  setSelectedQuantity,
  setaddError,
}) => {
  const handleSelectChange = (e) => {
    setaddError(false);
    const value = e.target.value;

    // If the user selects "Custom", reset the custom value
    if (value === "Custom") {
      setSelectedQuantity(value);
      setCustomValue("");
    } else {
      setSelectedQuantity(Number(value));
    }
  };

  const handleCustomInputChange = (e) => {
    setaddError(false);

    const value = e.target.value;
    setCustomValue(Number(value));
  };

  return (
    <div className="flex gap-3">
      <div className="flex gap-3 items-center">
        <p className="text-[1.2rem]">Qty</p>
        <select
          value={selectedQuantity}
          onChange={handleSelectChange}
          className="w-[80px] p-3 border border-neutral-950 outline-none bg-transparent"
        >
          <option value="DEFAULT" hidden>
            1
          </option>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
          <option value="Custom">Custom</option>
        </select>
      </div>

      {/* Display the input field only if "Custom" is selected */}
      {selectedQuantity === "Custom" && (
        <input
          type="number"
          value={customValue}
          onChange={handleCustomInputChange}
          placeholder="Enter Qty"
          className="w-[100px] px-3 py-2 border border-neutral-950 outline-none bg-transparent placeholder:text-[.85rem]"
        />
      )}
    </div>
  );
};

export default CustomSelect;
