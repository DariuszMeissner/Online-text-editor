/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useState } from 'react'
import { useOutClick } from '../../hooks'
import OpenFile from '../ui/tools-file/open-file/OpenFile'
import PrintToPdf from '../ui/tools-file/print-to-pdf/PrintToPdf'
import SaveFile from '../ui/tools-file/save-file/SaveFile'

const Menu: FC = () => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => {
    setActive((prevState) => !prevState)
  }

  const handleClickOut = () => {
    setActive(false)
  }

  const ref = useOutClick(handleClickOut)

  return (
    <span style={style.container} ref={ref}>
      <button style={style.button} type="button" onClick={handleClick}>
        File
      </button>
      {active && (
        <div style={style.content} onClick={handleClick}>
          <SaveFile>
            <span style={style.buttonText}>Save to file</span>
          </SaveFile>
          <PrintToPdf>
            <span style={style.buttonText}>Save as pdf</span>
          </PrintToPdf>
          <OpenFile>
            <span style={style.buttonText}>Open file</span>
          </OpenFile>
        </div>
      )}
    </span>
  )
}

const style = {
  container: {
    position: 'relative'
  },
  content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '200px'
  },
  button: {
    backgroundColor: '#1893E3',
    fontSize: '14px',
    border: 'none',
    color: 'white',
    width: '80px'
  },
  buttonText: {
    fontSize: '14px',
    marginLeft: '10px'
  }
} as const

export default Menu
