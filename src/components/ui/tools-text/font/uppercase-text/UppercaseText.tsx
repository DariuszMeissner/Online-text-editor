import React, { FC } from 'react'
import { TbLetterCaseUpper } from 'react-icons/tb'
import Button from '../../../button/Button'
import formatText from '../../../../../function/format-text/formatText'
import tags from '../../../../../function/custom-format-text/CustomFormatText'

const UppercaseText: FC = () => {
  const toUppercase = () => {
    formatText('removeFormat', false)
    tags('span', 'uppercase')
  }

  return (
    <Button
      onClick={toUppercase}
      classValue="btn btn-light"
      icon={TbLetterCaseUpper}
      title="uppercase text"
    />
  )
}

export default UppercaseText
