import React, { FC } from 'react'
import { FaUnderline } from 'react-icons/fa'
import Button from '../../../button/Button'
import formatText from '../../../format-text/formatText'

const UnderlineText: FC = () => {
  const toUnderline = () => {
    formatText('underline', false)
  }

  return (
    <Button
      onClick={toUnderline}
      classValue="btn btn-light"
      icon={FaUnderline}
    />
  )
}

export default UnderlineText
