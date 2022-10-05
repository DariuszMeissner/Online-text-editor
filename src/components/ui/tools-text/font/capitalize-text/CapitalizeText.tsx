import React, { FC } from 'react'
import { FaTextHeight } from 'react-icons/fa'
import Button from '../../../button/Button'
import tags from '../../../../../function/custom-format-text/CustomFormatText'

const CapitalizeText: FC = () => {
  const toCapitalize = () => {
    tags('span', 'capitalize')
  }

  return (
    <Button
      onClick={toCapitalize}
      classValue="btn btn-sm btn-light"
      icon={FaTextHeight}
      title="capitalize text"
    />
  )
}

export default CapitalizeText
