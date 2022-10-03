/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useState, useEffect } from 'react'
import { ImTextColor } from 'react-icons/im'
import formatText from '../../../../../function/format-text/formatText'
import Button from '../../../button/Button'
import MenuDropdown from '../../../menu-dropdown/MenuDropdown'

const ColorText: FC = () => {
  const options = [
    { label: 'red', value: 'ff0000' },
    { label: 'black', value: '000000' },
    { label: 'yellow', value: 'ffff00' },
    { label: 'green', value: '00ff40' },
    { label: 'pink', value: 'ff0080' },
    { label: 'orange', value: 'ff8000' }
  ]

  const [value, setValue] = useState<string>('000000')
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    toColorText('foreColor', value)
  }, [value])

  const toColorText = (command: string, valueSize: string) => {
    formatText(command, false, valueSize)
  }

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement
    setValue(target.value)
  }

  const handleClick = () => {
    setActive((prevState) => !prevState)
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        classValue="btn btn-light"
        icon={ImTextColor}
        title="color text"
      />
      <div style={{ backgroundColor: `#${value}`, ...style.barColor }} />
      {active && (
        <div className="position-relative">
          <MenuDropdown
            options={options}
            onChangeColor={handleChange}
            onChangeActive={handleClick}
          />
        </div>
      )}
    </div>
  )
}

const style = {
  barColor: {
    height: '5px',
    width: '100%'
  }
}

export default ColorText
