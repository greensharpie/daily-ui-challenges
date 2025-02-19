import React from "react";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  onChange?: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({ name, label, placeholder, type, required, maxLength, minLength, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        onChange={onChange}
      />
    </div>
  )
}