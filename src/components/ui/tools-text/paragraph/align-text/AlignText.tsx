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
        classValue="btn btn-sm btn-light"
        icon={FaAlignLeft}
        title="align text to left"
      />
      <Button
        onClick={() => align('justifyCenter')}
        classValue="btn btn-sm btn-light"
        icon={FaAlignCenter}
        title="align text to center"
      />
      <Button
        onClick={() => align('justifyRight')}
        classValue="btn btn-sm btn-light"
        icon={FaAlignRight}
        title="align text to right"
      />
    </>
  )
}

export default AlignText
