import React, { FC, useState } from 'react'

interface IReadedFile {
  status: string
  data: string
}

const OpenFile: FC = () => {
  const [readedFile, setReadedFile] = useState<IReadedFile>({
    status: '',
    data: ''
  })

  const openFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status: any[] = []
    const fileReader: FileReader = new FileReader()

    const fileLoad = (event: ProgressEvent<FileReader>) => {
      status.push(event.target?.result)
      setReadedFile(prevState => ({
        ...prevState,
        status: status.join('\n')
      }))
    }

    fileReader.onload = fileLoad
    if (e.target.files instanceof FileList) {
      fileReader.readAsText(e.target.files[0])
    }
  }

  return (
    <>
      <input type="file" multiple={false} accept=".txt" onChange={openFile} />
      <p>{readedFile.status}</p>
    </>
  )
}

export default OpenFile
