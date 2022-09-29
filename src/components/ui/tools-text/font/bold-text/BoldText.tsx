import React, { FC } from 'react'
import { FaBold } from 'react-icons/fa'
import Button from '../../../button/Button'
import formatText from '../../../../../function/format-text/formatText'

const BoldText: FC = () => {
  const toBold = () => {
    formatText('bold', false)
  }

  return <Button onClick={toBold} classValue="btn btn-light" icon={FaBold} />
}

export default BoldText
