import React, { FC } from 'react'
import { TbLetterCase } from 'react-icons/tb'
import Button from '../../../button/Button'
import formatText from '../../../../../function/format-text/formatText'
import tags from '../../../../../function/custom-format-text/CustomFormatText'

const RegularText: FC = () => {
  const toRegular = () => {
    formatText('removeFormat', false)
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
