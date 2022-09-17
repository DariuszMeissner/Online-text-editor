import React, { FC } from 'react'
import AlignText from '../ui/align-text/AlignText'
import BoldText from '../ui/bold-text/BoldText'
import './ToolsBarTop.scss'

const ToolsBarTop: FC = () => {
  return (
    <div className="tools-bar-top">
      <BoldText />
      <AlignText value="justifyRight" />
      <AlignText value="justifyLeft" />
      <AlignText value="justifyCenter" />
      <AlignText value="justifyFull" />
    </div>
  )
}

export default ToolsBarTop
