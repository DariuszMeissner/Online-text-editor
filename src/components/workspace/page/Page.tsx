/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC, memo, useContext, useRef } from 'react'
import { OpenDocumentContext } from '../../../contexts/document'

interface IProps {
  forwardedRef: React.RefObject<HTMLDivElement>
}

const Page: FC<IProps> = ({ forwardedRef }) => {
  const { data } = useContext(OpenDocumentContext)
  const ref = useRef<HTMLDivElement>(null)

  const insertOpenedFile = (): string | null => {
    const getSection = ref.current
    const insertHTML = getSection && (getSection.innerHTML = data)

    return insertHTML
  }

  return (
    <main
      className="workspace"
      ref={forwardedRef}
      contentEditable="true"
      suppressContentEditableWarning
      tabIndex={0}
      style={style.documentSize}>
      <div>{insertOpenedFile()}</div>
    </main>
  )
}

const style = {
  documentSize: {
    border: '1px solid lightgray', // size of workspace without margin
    width: '170mm',
    minHeight: '28px',
    height: 'auto',
    maxHeight: '100000mm'
  }
} as const

export default memo(Page)
