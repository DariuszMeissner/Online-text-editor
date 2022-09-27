/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useContext, useRef } from 'react'
import { OpenDocumentContext } from '../../contexts/document'
import './Workspace.scss'

const Workspace: FC = () => {
  // eslint-disable-next-line
  const { data, updateData } = useContext(OpenDocumentContext)
  const ref = useRef<HTMLDivElement>(null)

  const insertOpenedFile = () => {
    const getSection = ref.current
    const insertHTML = getSection && (getSection.innerHTML = data)

    return insertHTML
  }

  return (
    <div className="content">
      <div id="workspace">
        <main
          className="workspace"
          ref={ref}
          contentEditable="true"
          suppressContentEditableWarning
          tabIndex={0}
          style={{ ...style.documentSize, ...style.documentMargin }}>
          <div>{insertOpenedFile()}</div>
        </main>
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
