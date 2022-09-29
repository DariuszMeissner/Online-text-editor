import React, { FC, useState, useEffect } from 'react'
import './SizeText.scss'
import Dropdown from '../../../dropdown/Dropdown'
import formatText from '../../../../../function/format-text/formatText'

const SizeText: FC = () => {
  const options = [
    { label: '8pt', value: '1' },
    { label: '10pt', value: '2' },
    { label: '12pt', value: '3' },
    { label: '14pt', value: '4' },
    { label: '16pt', value: '5' },
    { label: '20pt', value: '6' },
    { label: '36pt', value: '7' }
  ]

  const [value, setValue] = useState<string>('4')

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
