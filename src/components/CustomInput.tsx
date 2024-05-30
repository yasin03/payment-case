import React, { useState } from "react";

interface CustomInputProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "numeric") {
      const inputValue = e.target.value;
      const textInput = inputValue.replace(/\D/g, "");
      onChange({
        ...e,
        target: {
          ...e.target,
          value: textInput,
        },
      });
    } else {
      onChange(e);
    }
  };

  return (
    <div className="relative mt-6">
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || value
            ? "-top-3 text-xs text-blue-500 bg-white p-2"
            : "top-4 text-gray-500"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
      />
    </div>
  );
};

export default CustomInput;
