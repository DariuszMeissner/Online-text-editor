import React, { FC } from 'react'
import jsPDF from 'jspdf'
import Button from '../button/Button'

const PrintToPdf: FC = () => {
  const generatePDF = () => {
    // eslint-disable-next-line new-cap
    const createDocument = new jsPDF('p', 'mm', 'a4')
    const elementToPDF = window.document.getElementById('workspace') as HTMLElement
    createDocument.html(elementToPDF, {
      callback: pdf => {
        pdf.save('pdf')
      }
    })
  }

  return (
    <div>
      <Button onClick={generatePDF} classValue="btn-primary" icon="Print to pdf" />
    </div>
  )
}

export default PrintToPdf
