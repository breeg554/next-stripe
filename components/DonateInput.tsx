import React from "react";
import classNames from "classnames";
import CurrencyInput from "react-currency-input-field";

interface DonateInputProps {
  name: string;
  value: string | number;
  onChange: (value?: string) => void;
}

export const DonateInput: React.FC<DonateInputProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <CurrencyInput
      prefix="$"
      id={`${name}-input`}
      name={name}
      value={value}
      placeholder="Enter custom price"
      decimalsLimit={2}
      maxLength={5}
      allowNegativeValue={false}
      onValueChange={onChange}
      className={classNames(
        "block w-full rounded-xl py-3 px-5 bg-gray-50 border border-gray-50 text-neutral-700 text-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-green-300/5",
        {
          "ring-2 ring-green-400 bg-green-300/5": !!value,
        }
      )}
    />
  );
};
