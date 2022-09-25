import React, { FC, useEffect, useState } from 'react'
import Dropdown from '../../../dropdown/Dropdown'
import formatText from '../../../format-text/formatText'

const FontName: FC = () => {
  const options = [
    { label: 'Arial', value: 'Arial' },
    { label: 'Calibri', value: 'Calibri' },
    { label: 'Comic Sans MS', value: 'Comic Sans MS' }
  ]

  const [value, setValue] = useState<string>('Arial')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    font('fontName', value)
  }, [value])

  const font = (command: string, valueFont: string) => {
    formatText(command, false, valueFont)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <Dropdown value={value} options={options} onChangeSize={handleChange} />
  )
}

export default FontName
