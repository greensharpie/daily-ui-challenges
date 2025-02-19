import '../styles/Button.css'
interface ButtonProps {
  title: string
  onClick: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ title, onClick, disabled}) => {
  return (
    <button className='button' onClick={onClick} disabled={disabled}>
      {title} 
    </button>
  )
}
