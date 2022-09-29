import React, { FC } from 'react'
import BoldText from '../bold-text/BoldText'
import FontName from '../font-name/FontName'
import ItalicText from '../italic-text/ItalicText'
import SizeText from '../size-text/SizeText'
import UnderlineText from '../underline-text/UnderlineText'

const ToolsFontContainer: FC = () => {
  return (
    <div className="d-flex align-content-center">
      <BoldText />
      <ItalicText />
      <UnderlineText />
      <FontName />
      <SizeText />
    </div>
  )
}

export default ToolsFontContainer
