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
  const displaySwatch = (): JSX.Element[] => {
    return options.map((color) => {
      return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <MenuDropdownSwatch
          color={color.value}
          label={color.label}
          onChangeColor={onChangeColor}
          onChangeActive={onChangeActive}
        />
      )
    })
  }
  return (
    <div className="position-absolute" style={style.menuDropdown}>
      {displaySwatch()}
    </div>
  )
}

const style = {
  menuDropdown: {
    height: 'auto',
    width: '150px',
    backgroundColor: 'white',
    padding: '4px',
    paddingTop: '10px',
    border: '1px solid lightgray'
  }
}

export default MenuDropdown
