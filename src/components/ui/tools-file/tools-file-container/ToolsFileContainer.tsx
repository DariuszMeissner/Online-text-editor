/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react'
import Menu from '../../../menu/Menu'

const ToolsFileContainer: FC = () => {
  return (
    <div>
      <div style={style.editorName}>Online text editor</div>
      <Menu />
    </div>
  )
}

const style = {
  editorName: {
    fontSize: '12px',
    textAlign: 'center',
    paddingBottom: '4px',
    paddingTop: '4px',
    borderBottom: '1px solid #F5F5F5',
    color: '#7B7B7B'
  }
} as const

export default ToolsFileContainer
