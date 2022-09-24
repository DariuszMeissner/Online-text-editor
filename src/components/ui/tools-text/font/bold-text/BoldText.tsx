import React, { FC } from 'react'
import Button from '../../../button/Button'
import formatText from '../../../format-text/formatText'

const BoldText: FC = () => {
  const toBold = () => {
    formatText('bold', false)
  }

  return <Button onClick={toBold} classValue="btn-light" icon="B" />
}

export default BoldText