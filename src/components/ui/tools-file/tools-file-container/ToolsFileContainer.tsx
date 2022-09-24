import React, { FC } from 'react'
import OpenFile from '../open-file/OpenFile'
import PrintToPdf from '../print-to-pdf/PrintToPdf'
import SaveFile from '../save-file/SaveFile'

const ToolsFileContainer: FC = () => {
  return (
    <>
      <SaveFile />
      <PrintToPdf />
      <OpenFile />
    </>
  )
}

export default ToolsFileContainer
