import React, { FC } from 'react'

interface IProps {
  value: string
  options: IOptions[]
  onChangeSize: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

interface IOptions {
  label: string
  value: string
}

const Dropdown: FC<IProps> = ({ value, options, onChangeSize }) => {
  return (
    <label htmlFor={value}>
      <select id={value} value={value} onChange={onChangeSize}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Dropdown
