/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react'
import MenuDropdownSwatch from './menu-dropdown-swatch/MenuDropdownSwatch'

interface IProps {
  options: IOptions[]
  onChangeColor: (e: React.MouseEvent<HTMLButtonElement>) => void
  onChangeActive: () => void
}

interface IOptions {
  label: string
  value: string
}

const MenuDropdown: FC<IProps> = ({
  options,
  onChangeColor,
  onChangeActive
}) => {
  return (
    <div className="position-absolute" style={style.menuDropdown}>
      <MenuDropdownSwatch
        options={options}
        onChangeColor={onChangeColor}
        onChangeActive={onChangeActive}
      />
    </div>
  )
}

const style = {
  menuDropdown: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    padding: '4px',
    border: '1px solid lightgray'
  }
}

export default MenuDropdown
