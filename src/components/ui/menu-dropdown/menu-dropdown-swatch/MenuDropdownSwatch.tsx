/* eslint-disable @typescript-eslint/no-use-before-define */
import Radium from 'radium'
import React, { FC } from 'react'

interface IProps {
  options: IOptions[]
  onChangeColor: (e: React.MouseEvent<HTMLButtonElement>) => void
  onChangeActive: () => void
}

interface IOptions {
  label: string
  value: string
}

const MenuDropdownSwatch: FC<IProps> = ({
  options,
  onChangeColor,
  onChangeActive
}) => {
  const displaySwatch = (): JSX.Element[] => {
    return options.map((color) => {
      return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          style={{ ...style.swatch, backgroundColor: `#${color.value}` }}
          type="button"
          value={color.value}
          key={color.value}
          onClick={(e) => {
            onChangeColor(e)
            onChangeActive()
          }}
        />
      )
    })
  }

  return <>{displaySwatch()}</>
}

const style = {
  swatch: {
    display: 'block',
    width: '15px',
    height: '15px',
    border: 'none'
  }
}

export default Radium(MenuDropdownSwatch)
