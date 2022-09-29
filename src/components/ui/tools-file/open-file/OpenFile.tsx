import React, { FC, useState, useContext, useEffect, useRef } from 'react'
import { FaRegFolderOpen } from 'react-icons/fa'
import { OpenDocumentContext } from '../../../../contexts/document'
import Button from '../../button/Button'

interface IReadedFile {
  status: string
}

const style = {
  inputFileOpenHide: {
    display: 'none'
  }
}

const OpenFile: FC = () => {
  const [readedFile, setReadedFile] = useState<IReadedFile>({ status: '' })
  // eslint-disable-next-line
  const { data, updateData } = useContext(OpenDocumentContext)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    updateData(readedFile.status)
  }, [readedFile.status])

  const setFileLoad = (status: string[]) => {
    return (event: ProgressEvent<FileReader>) => {
      const fileObj = event.target?.result

      if (typeof fileObj === 'string') {
        status.push(fileObj)
      }

      setReadedFile((prevState) => ({
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

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <>
      <input
        // eslint-disable-next-line react/no-string-refs
        ref={inputRef}
        style={style.inputFileOpenHide}
        type="file"
        multiple={false}
        accept=".txt"
        onChange={openFile}
      />
      <Button
        title="Open file from txt"
        classValue="btn btn-light"
        icon={FaRegFolderOpen}
        onClick={handleClick}
      />
    </>
  )
}

export default OpenFile
