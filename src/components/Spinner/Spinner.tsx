import cx from 'classnames'

type Props = { 
  className?: string
  innerClassName?: string 
}

const Spinner: React.FC<Props> = ({ className, innerClassName }) => {
  return (
    <div className={className}>
      <div className={cx('spinner', innerClassName)} />
    </div>
  )
}

export default Spinner
