/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-use-before-define */
import Radium from 'radium'
import React, { FC } from 'react'

interface IProps {
  color: string
  label: string
  onChangeColor: (e: React.MouseEvent<HTMLButtonElement>) => void
  onChangeActive: () => void
}

const MenuDropdownSwatch: FC<IProps> = ({
  color,
  label,
  onChangeColor,
  onChangeActive
}) => {
  return (
    <button
      style={{ ...style.swatch, backgroundColor: `#${color}` }}
      type="button"
      value={color}
      key={color}
      title={label}
      onClick={(e) => {
        onChangeColor(e)
        onChangeActive()
      }}
    />
  )
}

const style = {
  swatch: {
    width: '15px',
    height: '15px',
    border: 'none'
  }
}

export default Radium(MenuDropdownSwatch)
