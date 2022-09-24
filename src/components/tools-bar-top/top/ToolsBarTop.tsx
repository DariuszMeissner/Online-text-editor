import React, { FC } from 'react'
import AlignText from '../../ui/tools-text/paragraph/align-text/AlignText'
import BoldText from '../../ui/tools-text/font/bold-text/BoldText'
import ItalicText from '../../ui/tools-text/font/italic-text/ItalicText'
import OpenFile from '../../ui/tools-file/open-file/OpenFile'
import PrintToPdf from '../../ui/tools-file/print-to-pdf/PrintToPdf'
import SizeText from '../../ui/tools-text/font/size-text/SizeText'
import SaveFile from '../../ui/tools-file/save-file/SaveFile'
import ToolsFileContainer from '../../ui/tools-file/tools-file-container/ToolsFileContainer'
import ToolsFontContainer from '../../ui/tools-text/font/tools-font-container/ToolsFontContainer'
import ToolsParagrapgContainer from '../../ui/tools-text/paragraph/tools-paragraph-container/ToolsParagrapgContainer'

const style = {
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',
  borderBottom: '1px solid lightgray'
} as const

const ToolsBarTop: FC = () => {
  return (
    <div className="tools-bar-top" style={style}>
      <ToolsFileContainer />
      <ToolsFontContainer />
      <ToolsParagrapgContainer />
    </div>
  )
}

export default ToolsBarTop
