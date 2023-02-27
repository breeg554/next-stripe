import React from "react";

interface DonateButtonsProps {
  name: string;
  options: { value: number }[];
  defaultValue: number;
}

export const DonateButtons: React.FC<DonateButtonsProps> = ({
  name,
  options,
  defaultValue,
}) => {
  return (
    <ul className="flex flex-col items-center gap-2">
      {options.map((option) => (
        <li key={option.value} className="w-full">
          <DonateButton
            name={name}
            value={option.value}
            defaultChecked={option.value === defaultValue}
          />
        </li>
      ))}
    </ul>
  );
};

interface DonateButtonProps {
  name: string;
  value: number;
  defaultChecked?: boolean;
}

const DonateButton: React.FC<DonateButtonProps> = ({
  value,
  name,
  defaultChecked,
}) => {
  return (
    <div className="w-full">
      <input
        type="radio"
        id={`radio-${value}`}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="sr-only peer"
      />

      <label
        htmlFor={`radio-${value}`}
        className="block rounded-xl w-full py-3 px-5 focus:outline-none ring-1 ring-gray-300 peer-checked:ring-2 peer-checked:ring-green-400 peer-checked:bg-green-300/5 cursor-pointer "
      >
        ${value}
      </label>
    </div>
  );
};
