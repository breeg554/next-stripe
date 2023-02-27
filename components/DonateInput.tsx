import React, { ChangeEvent, useEffect, useState } from "react";

interface DonateInputProps {
  name: string;
}

export const DonateInput: React.FC<DonateInputProps> = ({ name }) => {
  return (
    <input
      name={name}
      id={`${name}-input`}
      placeholder="Enter custom price"
      className="block w-full rounded-xl py-3 px-5 bg-gray-50 border border-gray-50 text-neutral-700 text-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-green-300/5"
      pattern="[1-9]{1,10}"
    />
  );
};
