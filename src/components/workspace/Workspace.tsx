/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useRef } from 'react'
import Page from './page/Page'
import './Workspace.scss'

const Workspace: FC = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  return (
    <div className="content">
      <div className="bg-workspace">
        <Page forwardedRef={pageRef} />
      </div>
    </div>
  )
}

export default Workspace
