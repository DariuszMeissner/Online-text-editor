import React, { FC } from 'react'
import BoldText from '../bold-text/BoldText'
import CapitalizeText from '../capitalize-text/CapitalizeText'
import ColorText from '../color-text/ColorText'
import FontName from '../font-name/FontName'
import ItalicText from '../italic-text/ItalicText'
import RegularText from '../regular-text/RegularText'
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
      <ColorText />
      <UppercaseText />
      <RegularText />
      <CapitalizeText />
    </div>
  )
}

export default ToolsFontContainer
