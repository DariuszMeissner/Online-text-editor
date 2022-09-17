import React, { FC } from 'react'
import Button from '../button/Button'
import formatText from '../format-text/formatText'

interface IProps {
  value: string
}

const AlignText: FC<IProps> = ({ value }) => {
  const toAlign = () => {
    formatText(value, false)
  }
  return <Button onClick={toAlign} icon={value} />
}

export default AlignText
