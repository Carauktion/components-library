import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import cx from 'classnames'

import Portal from './Portal'

type Props = {
  label: string | React.ReactNode
  children: React.ReactNode
  className?: string
  style?: {}
}

const Tooltip: React.FC<Props> = ({ children, label, className, style }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null)

  return (
    <div className="relative">
      <Portal>
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.5,
              }}
              className={cx(
                'absolute p-2 text-white text-xs rounded-md -translate-x-1/2 whitespace-pre-line pointer-events-none z-20',
                className
              )}
              style={{
                top: boundingRect
                  ? window.scrollY + boundingRect.bottom + 8
                  : 0,
                left: boundingRect
                  ? window.scrollX + boundingRect.left + boundingRect.width / 2
                  : 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                ...(style || {}),
              }}
            >
              {label}
              <span
                className="absolute -top-[10px] left-1/2 -translate-x-1/2 border-[5px]"
                style={{
                  borderColor:
                    'transparent transparent rgba(0, 0, 0, 0.7) transparent',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>

      <div
        onMouseEnter={(e) => {
          if (!showTooltip) {
            setShowTooltip(true)
            setBoundingRect(e.currentTarget.getBoundingClientRect())
          }
        }}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
    </div>
  )
}

export default Tooltip
