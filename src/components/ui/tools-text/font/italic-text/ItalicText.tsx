import React, { FC } from 'react'
import { FaItalic } from 'react-icons/fa'
import Button from '../../../button/Button'
import formatText from '../../../../../function/format-text/formatText'

const ItalicText: FC = () => {
  const toItalic = () => {
    formatText('italic', false)
  }

  return (
    <Button
      onClick={toItalic}
      classValue="btn btn-sm btn-light"
      icon={FaItalic}
      title="italic text"
    />
  )
}

export default ItalicText
