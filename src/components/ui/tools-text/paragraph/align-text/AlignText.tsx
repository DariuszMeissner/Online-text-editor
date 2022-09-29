import React, { FC } from 'react'
import { FaAlignRight, FaAlignLeft, FaAlignCenter } from 'react-icons/fa'
import Button from '../../../button/Button'
import formatText from '../../../../../function/format-text/formatText'

const AlignText: FC = () => {
  const align = (value: string): void => {
    formatText(value, false)
  }

  return (
    <>
      <Button
        onClick={() => align('justifyLeft')}
        classValue="btn btn-light"
        icon={FaAlignLeft}
      />
      <Button
        onClick={() => align('justifyCenter')}
        classValue="btn btn-light"
        icon={FaAlignCenter}
      />
      <Button
        onClick={() => align('justifyRight')}
        classValue="btn btn-light"
        icon={FaAlignRight}
      />
    </>
  )
}

export default AlignText
