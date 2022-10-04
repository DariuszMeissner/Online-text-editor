/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useState, useEffect } from 'react'
import { ImTextColor } from 'react-icons/im'
import formatText from '../../../../../function/format-text/formatText'
import { useOutClick } from '../../../../../hooks'
import Button from '../../../button/Button'
import MenuDropdown from '../../../menu-dropdown/MenuDropdown'
import colors from './dataColors'

const ColorText: FC = () => {
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

  const handleClickOut = () => {
    setActive(false)
  }

  const ref = useOutClick(handleClickOut)

  return (
    <div>
      <div ref={ref}>
        <Button
          onClick={handleClick}
          classValue="btn btn-light"
          icon={ImTextColor}
          title="color text"
        />
      </div>
      <div style={{ backgroundColor: `#${value}`, ...style.barColor }} />
      {active && (
        <div className="position-relative" ref={ref}>
          <MenuDropdown
            options={colors}
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
