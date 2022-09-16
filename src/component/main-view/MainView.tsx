import React, { FC } from 'react'
import ToolsBarTop from '../tools-bar-top/ToolsBarTop'
import Workspace from '../workspace/Workspace'
import './MainView.scss'

const MainView: FC = () => {
  return (
    <main>
      <ToolsBarTop />
      <Workspace />
    </main>
  )
}

export default MainView
