/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'

interface IProps {
  icon: IconType
  onClick?: () => void
  classValue?: string
  title?: string
  children?: React.ReactNode
}

const Button: FC<IProps> = ({ icon, title, onClick, classValue, children }) => {
  const Icon = icon
  return (
    <button
      className={`${classValue}`}
      type="button"
      title={title}
      onClick={onClick}>
      <Icon />
      {children}
    </button>
  )
}

export default Button
