import React, { FC } from 'react'
import Button from '../../button/Button'
import formatText from '../../format-text/formatText'

const AlignText: FC = () => {
  const align = (value: string): void => {
    formatText(value, false)
  }

  return (
    <>
      <Button onClick={() => align('justifyLeft')} classValue="btn-light" icon="L" />
      <Button onClick={() => align('justifyRight')} classValue="btn-light" icon="R" />
      <Button onClick={() => align('justifyCenter')} classValue="btn-light" icon="C" />
    </>
  )
}

export default AlignText
