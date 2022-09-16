import React, { FC } from 'react'
import getSelectionHandler from './get-selection-handler/getSelectionHandler'

const BoldText: FC = () => {
  const toBold = () => {
    const colorElement = document.createElement('strong')
    const selectedTextRange = getSelectionHandler()?.getRangeAt(0)
    selectedTextRange?.surroundContents(colorElement)
  }

  return (
    <button type="button" onClick={toBold}>
      Bold
    </button>
  )
}

export default BoldText
