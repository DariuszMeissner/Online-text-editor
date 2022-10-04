/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/require-default-props */
import React, { FC, useState, useContext, useEffect, useRef } from 'react'
import { FaRegFolderOpen } from 'react-icons/fa'
import { OpenDocumentContext } from '../../../../contexts/document'
import Button from '../../button/Button'

interface IProps {
  children?: React.ReactNode
}
interface IReadedFile {
  status: string
}

const OpenFile: FC<IProps> = ({ children }) => {
  const [readedFile, setReadedFile] = useState<IReadedFile>({ status: '' })
  const { updateData } = useContext(OpenDocumentContext)
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
        style={style.inputFile}
        type="file"
        multiple={false}
        accept=".txt"
        onChange={openFile}
      />
      <Button
        title="Open file from txt"
        classValue="btn btn-lg btn-light"
        icon={FaRegFolderOpen}
        onClick={handleClick}>
        {children}
      </Button>
    </>
  )
}

const style = {
  inputFile: {
    display: 'none'
  }
}

export default OpenFile
