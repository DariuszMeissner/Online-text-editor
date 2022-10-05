import React, { FC } from 'react'
import { TbLetterCase } from 'react-icons/tb'
import Button from '../../../button/Button'
import tags from '../../../../../function/custom-format-text/CustomFormatText'

const RegularText: FC = () => {
  const toRegular = () => {
    tags('span', 'regular')
  }

  return (
    <Button
      onClick={toRegular}
      classValue="btn btn-sm btn-light"
      icon={TbLetterCase}
      title="regular text"
    />
  )
}

export default RegularText
