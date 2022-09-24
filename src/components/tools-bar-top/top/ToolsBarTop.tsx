import React, { FC } from 'react'
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
