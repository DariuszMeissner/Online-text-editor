import React, { FC } from 'react'
import Button from '../../button/Button'

const SaveFile: FC = () => {
  const onClick = () => {
    const getDocument = document.getElementById('workspace')
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

  return <Button onClick={onClick} classValue="btn-light" icon="Save" />
}

export default SaveFile