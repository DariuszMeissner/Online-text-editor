import React, { FC } from 'react'
import { GiSave } from 'react-icons/gi'
import Button from '../../button/Button'

const SaveFile: FC = () => {
  const onClick = () => {
    const getDocument = document.querySelector('#workspace main')
    const linkToDownload = document.createElement('a')

    const serializeDocument =
      getDocument !== null && new XMLSerializer().serializeToString(getDocument)

    linkToDownload.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${serializeDocument}`
    )
    linkToDownload.setAttribute('download', 'test')

    if (document.createEvent) {
      const event = document.createEvent('MouseEvents')
      event.initEvent('click', true, true)
      linkToDownload.dispatchEvent(event)
    } else {
      linkToDownload.click()
    }
  }

  return (
    <Button
      onClick={onClick}
      classValue="btn btn-light"
      title="Save file to txt"
      icon={GiSave}
    />
  )
}

export default SaveFile
