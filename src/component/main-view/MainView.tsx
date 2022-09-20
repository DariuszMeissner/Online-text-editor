import React, { FC } from 'react'
import ToolsBarBottom from '../tools-bar-top/bottom/ToolsBarBottom'
import ToolsBarTop from '../tools-bar-top/top/ToolsBarTop'
import Workspace from '../workspace/Workspace'
import './MainView.scss'

const MainView: FC = () => {
  return (
    <main>
      <ToolsBarTop />
      <Workspace />
      <ToolsBarBottom />
    </main>
  )
}

export default MainView
