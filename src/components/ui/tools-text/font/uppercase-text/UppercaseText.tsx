import React, { FC } from 'react'
import { TbLetterCaseUpper } from 'react-icons/tb'
import Button from '../../../button/Button'
import tags from '../../../../../function/custom-format-text/CustomFormatText'

const UppercaseText: FC = () => {
  const toUppercase = () => {
    tags('span', 'uppercase')
  }

  return (
    <Button
      onClick={toUppercase}
      classValue="btn btn-sm btn-light"
      icon={TbLetterCaseUpper}
      title="uppercase text"
    />
  )
}

export default UppercaseText
