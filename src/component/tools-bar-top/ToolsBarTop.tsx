import React, { FC } from 'react'
import AlignText from '../ui/align-text/AlignText'
import BoldText from '../ui/bold-text/BoldText'
import PrintToPdf from '../ui/print-to-pdf/PrintToPdf'
import './ToolsBarTop.scss'

const ToolsBarTop: FC = () => {
  return (
    <div className="tools-bar-top">
      <BoldText />
      <AlignText />
      <PrintToPdf />
    </div>
  )
}

export default ToolsBarTop
