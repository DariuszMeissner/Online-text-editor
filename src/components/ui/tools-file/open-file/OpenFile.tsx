import React, { FC, useState, useContext, useEffect } from 'react'
import { OpenDocumentContext } from '../../../../contexts/document'

interface IReadedFile {
  status: string
}

const OpenFile: FC = () => {
  const [readedFile, setReadedFile] = useState<IReadedFile>({ status: '' })

  // eslint-disable-next-line
  const { data, updateData } = useContext(OpenDocumentContext)

  useEffect(() => {
    updateData(readedFile.status)
  }, [readedFile.status])

  const setFileLoad = (status: string[]) => {
    return (event: ProgressEvent<FileReader>) => {
      const fileObj = event.target?.result

      if (typeof fileObj === 'string') {
        status.push(fileObj)
      }

      setReadedFile(prevState => ({
        ...prevState,
        status: status.join('\n')
      }))
    }
  }

  const openFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status: string[] = []
    const fileReader: FileReader = new FileReader()
    const onfileLoad = setFileLoad(status)

    fileReader.onload = onfileLoad

    if (e.target.files instanceof FileList) {
      fileReader.readAsText(e.target.files[0])
    }
  }

  return (
    <input type="file" multiple={false} accept=".txt" onChange={openFile} />
  )
}

export default OpenFile
