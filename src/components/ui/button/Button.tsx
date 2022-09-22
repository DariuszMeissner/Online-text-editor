import React, { FC } from 'react'

interface IProps {
  icon: string
  onClick: () => void
  // eslint-disable-next-line react/require-default-props
  classValue?: string
}

const Button: FC<IProps> = ({ icon, onClick, classValue }) => {
  return (
    <button className={`btn ${classValue}`} type="button" onClick={onClick}>
      {icon}
    </button>
  )
}

export default Button
