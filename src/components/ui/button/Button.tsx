/* eslint-disable react/require-default-props */
import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'

interface IProps {
  icon: IconType
  onClick?: () => void
  classValue?: string
  title?: string
}

const Button: FC<IProps> = ({ icon, title, onClick, classValue }) => {
  const Icon = icon
  return (
    <button
      className={`btn-sm ${classValue}`}
      type="button"
      title={title}
      onClick={onClick}>
      <Icon />
    </button>
  )
}

export default Button
