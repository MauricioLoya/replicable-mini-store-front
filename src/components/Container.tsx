import React from 'react'
type Props = {
  children: React.ReactNode
}
const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-6xl px-4 mx-auto py-6">{children}</div>
}

export default Container
