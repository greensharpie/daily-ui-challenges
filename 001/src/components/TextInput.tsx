import React from "react";
import '../styles/TextInput.css'

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

export const TextInput: React.FC<TextInputProps> = ({ name, label, placeholder, type ='text', required, maxLength, minLength, onChange }) => {
  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
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