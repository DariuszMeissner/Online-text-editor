import React, { FC } from 'react'

const style = {
  position: 'sticky',
  bottom: 0,
  backgroundColor: 'white',
  borderTop: '1px solid lightgray'
} as const

const ToolsBarBottom: FC = () => {
  return (
    <div className="tools-bar-bottom" style={style}>
      bottom bar
    </div>
  )
}

export default ToolsBarBottom
