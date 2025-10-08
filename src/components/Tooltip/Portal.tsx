import * as React from 'react'
import { createPortal } from 'react-dom'

type Props = {
  preventScrolling?: boolean
  children: React.ReactNode
}

export const Portal: React.FC<Props> = ({
  preventScrolling = false,
  children,
}) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    if (preventScrolling) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'inherit'
    }
  }, [])

  return mounted ? createPortal(children, document.body) : null
}

export default Portal
