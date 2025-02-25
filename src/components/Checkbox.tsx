import React, { useState } from "react"; 
import '../styles/Checkbox.css'
interface CheckboxProps {
  label: string
  title: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export const CheckBox: React.FC<CheckboxProps> = ({ label, title, defaultChecked = false, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    if(onChange){
      onChange && onChange(event.target.checked)
    }
  }
  return (
    <label className="checkbox-container">
      <input 
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      aria-label={label}
      />
      <span>{title}</span>
    </label>
  )
}