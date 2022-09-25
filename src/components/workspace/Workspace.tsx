/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useContext } from 'react'
import { OpenDocumentContext } from '../../contexts/document'
import './Workspace.scss'

const Workspace: FC = () => {
  // eslint-disable-next-line
  const { data, updateData } = useContext(OpenDocumentContext)

  const insertOpenedFile = () => {
    const getSection = document.getElementById('workspace')
    const insertHTML = getSection && (getSection.innerHTML = data)
    return insertHTML
  }

  return (
    <div className="content">
      <div
        id="workspace"
        className="workspace"
        style={{ ...style.documentSize, ...style.documentMargin }}
        contentEditable="true"
        suppressContentEditableWarning
        tabIndex={0}
      >
        <div>{insertOpenedFile()}</div>
      </div>
    </div>
  )
}

const style = {
  documentSize: {
    width: '210mm',
    height: '297mm',
    maxHeight: '297mm',
    overflowY: 'hidden' // block new line on end of the page
  },
  documentMargin: {
    padding: '20mm'
  }
} as const

export default Workspace
