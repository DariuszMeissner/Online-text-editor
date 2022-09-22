import React, { FC } from 'react'
import './Workspace.scss'

const Workspace: FC = () => {
  return (
    <div className="content">
      <div id="workspace" className="workspace" contentEditable="true" />
    </div>
  )
}

export default Workspace
