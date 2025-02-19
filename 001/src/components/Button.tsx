import '../styles/Button.css'
interface ButtonProps {
  title: string
  onClick: () => void
  disabled?: boolean
}

export function Button({ title, onClick, disabled}: ButtonProps) {
  return (
    <button className='button' onClick={onClick} disabled={disabled}>
      {title} 
    </button>
  )
}
