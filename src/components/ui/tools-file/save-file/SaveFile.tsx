/* eslint-disable react/require-default-props */
import React, { FC } from 'react'
import { GiSave } from 'react-icons/gi'
import Button from '../../button/Button'

interface IProps {
  children?: React.ReactNode
}

const SaveFile: FC<IProps> = ({ children }): JSX.Element => {
  const serialize = (node: ChildNode) => {
    return new XMLSerializer().serializeToString(node)
  }

  const createLink = (node: ChildNode): void => {
    const link = document.createElement('a')
    link.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${serialize(node)}`
    )
    link.setAttribute('download', 'test')
    link.click()
  }

  const onClick = (): void => {
    const getDocument = document.querySelector('.workspace')

    if (getDocument) {
      createLink(getDocument)
    }
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
