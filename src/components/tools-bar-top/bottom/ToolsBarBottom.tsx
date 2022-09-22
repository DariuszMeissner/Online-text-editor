import React, { FC } from 'react'

const style = {
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',
  borderTop: '1px solid lightgray'
} as const

const ToolsBarBottom: FC = () => {
  return <div style={style}>bottom bar</div>
}

export default ToolsBarBottom
