import React from 'react'
import Menu from './Menu'

type Props = { children?: React.ReactElement }

export default function Layout({ children }: Props) {
  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      <Menu />
      {children}
    </div>
  )
}
