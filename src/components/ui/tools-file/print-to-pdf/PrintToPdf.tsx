import React, { FC } from 'react'
import { GrDocumentPdf } from 'react-icons/gr'
import Button from '../../button/Button'

const PrintToPdf: FC = () => {
  const generatePDF = (): void => window.print()

  return (
    <Button
      classValue="btn btn-light"
      icon={GrDocumentPdf}
      title="Save file to pdf"
      onClick={generatePDF}
    />
  )
}

export default PrintToPdf
