import React, { FC } from 'react'
import Button from '../../../button/Button'
import formatText from '../../../format-text/formatText'

const ItalicText: FC = () => {
  const toItalic = () => {
    formatText('italic', false)
  }

  return <Button onClick={toItalic} classValue="btn-light" icon="/" />
}

export default ItalicText
