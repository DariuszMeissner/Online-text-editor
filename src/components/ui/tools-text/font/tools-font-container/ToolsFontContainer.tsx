import React, { FC } from 'react'
import BoldText from '../bold-text/BoldText'
import FontName from '../font-name/FontName'
import ItalicText from '../italic-text/ItalicText'
import LowercaseText from '../lowercase-text/LowercaseText'
import SizeText from '../size-text/SizeText'
import UnderlineText from '../underline-text/UnderlineText'
import UppercaseText from '../uppercase-text/UppercaseText'

const ToolsFontContainer: FC = () => {
  return (
    <div className="d-flex align-content-center">
      <BoldText />
      <ItalicText />
      <UnderlineText />
      <FontName />
      <SizeText />
      <UppercaseText />
      <LowercaseText />
    </div>
  )
}

export default ToolsFontContainer
