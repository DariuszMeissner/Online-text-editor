import React, { FC, useState, useEffect } from 'react'
import Dropdown from '../../dropdown/Dropdown'
import formatText from '../../format-text/formatText'

const SizeText: FC = () => {
  const options = [
    { label: '10px', value: '1' },
    { label: '13px', value: '2' },
    { label: '16px', value: '3' },
    { label: '18px', value: '4' },
    { label: '24px', value: '5' },
    { label: '32px', value: '6' },
    { label: '48px', value: '7' }
  ]

  const [value, setValue] = useState<string>('1')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    size('fontSize', value)
  }, [value])

  const size = (command: string, valueSize: string) => {
    formatText(command, false, valueSize)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <Dropdown value={value} options={options} onChangeSize={handleChange} />
  )
}

export default SizeText
