import React, { FC } from 'react'
import AlignText from '../../ui/tools-text/align-text/AlignText'
import BoldText from '../../ui/tools-text/bold-text/BoldText'
import OpenFile from '../../ui/tools-text/open-file/OpenFile'
import PrintToPdf from '../../ui/tools-text/print-to-pdf/PrintToPdf'
import SizeText from '../../ui/tools-text/size-text/SizeText'

const style = {
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',
  borderBottom: '1px solid lightgray'
} as const

const ToolsBarTop: FC = () => {
  return (
    <div style={style}>
      <BoldText />
      <AlignText />
      <PrintToPdf />
      <OpenFile />
      <SizeText />
    </div>
  )
}

export default ToolsBarTop
