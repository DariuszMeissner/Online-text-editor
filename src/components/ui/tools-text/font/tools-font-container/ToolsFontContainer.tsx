import React, { FC } from 'react'
import BoldText from '../bold-text/BoldText'
import ItalicText from '../italic-text/ItalicText'
import SizeText from '../size-text/SizeText'

const ToolsFontContainer: FC = () => {
  return (
    <>
      <BoldText />
      <ItalicText />
      <SizeText />
    </>
  )
}

export default ToolsFontContainer
