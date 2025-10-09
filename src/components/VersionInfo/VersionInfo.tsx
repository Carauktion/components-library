import { getVersion, getPackageName } from '../../utils/version'

interface VersionInfoProps {
  showPackageName?: boolean
  className?: string
}

const VersionInfo = ({ showPackageName = false, className = '' }: VersionInfoProps) => {
  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      {showPackageName && (
        <div className="font-medium text-gray-800">{getPackageName()}</div>
      )}
      <div>Version: <span className="font-mono font-semibold">{getVersion()}</span></div>
    </div>
  )
}

export default VersionInfo
