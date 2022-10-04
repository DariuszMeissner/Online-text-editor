/* eslint-disable react/require-default-props */
import React, { FC } from 'react'
import { GiSave } from 'react-icons/gi'
import Button from '../../button/Button'

interface IProps {
  children?: React.ReactNode
}

const SaveFile: FC<IProps> = ({ children }) => {
  const onClick = () => {
    const getDocument = document.querySelector('.workspace')
    const linkToDownload = document.createElement('a')

    const serializeDocument =
      getDocument !== null && new XMLSerializer().serializeToString(getDocument)

    linkToDownload.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${serializeDocument}`
    )
    linkToDownload.setAttribute('download', 'test')

    linkToDownload.click()
  }

  return (
    <Button
      onClick={onClick}
      classValue="btn btn-light btn-lg"
      title="Save file to txt"
      icon={GiSave}>
      {children}
    </Button>
  )
}

export default SaveFile
