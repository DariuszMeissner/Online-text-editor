import React, { FC } from 'react'
import Button from '../button/Button'

const PrintToPdf: FC = () => {
  const generatePDF = (): void => window.print()

  return <Button onClick={generatePDF} classValue="btn-primary" icon="Save as pdf" />
}

export default PrintToPdf
