import React, { FC, useState } from 'react'

interface IProps {
  icon: string
  onClick: () => void
}

const Button: FC<IProps> = ({ icon, onClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const activeClass = isActive ? 'active' : ''

  const handleActive = () => {
    setIsActive(prev => !prev)
  }

  return (
    <button
      className={`btn btn-light ${activeClass}`}
      type="button"
      onClick={() => {
        onClick()
        handleActive()
      }}
    >
      {icon}
    </button>
  )
}

export default Button
