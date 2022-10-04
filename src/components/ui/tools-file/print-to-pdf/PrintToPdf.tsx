/* eslint-disable react/require-default-props */
import React, { FC } from 'react'
import { GrDocumentPdf } from 'react-icons/gr'
import Button from '../../button/Button'

interface IProps {
  children?: React.ReactNode
}

const PrintToPdf: FC<IProps> = ({ children }) => {
  const generatePDF = (): void => window.print()

  return (
    <Button
      classValue="btn btn-lg btn-light"
      icon={GrDocumentPdf}
      title="Save file to pdf"
      onClick={generatePDF}>
      {children}
    </Button>
  )
}

export default PrintToPdf
