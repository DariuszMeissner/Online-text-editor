import React, { FC } from 'react'
import AlignText from '../ui/tools-text/align-text/AlignText'
import BoldText from '../ui/tools-text/bold-text/BoldText'
import PrintToPdf from '../ui/tools-text/print-to-pdf/PrintToPdf'
import SizeText from '../ui/tools-text/size-text/SizeText'
import './ToolsBarTop.scss'

const ToolsBarTop: FC = () => {
  return (
    <div className="tools-bar-top">
      <BoldText />
      <AlignText />
      <PrintToPdf />
      <SizeText />
    </div>
  )
}

export default ToolsBarTop
