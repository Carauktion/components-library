import packageJson from '../../package.json'

export const getVersion = (): string => {
  return packageJson.version
}

export const getPackageName = (): string => {
  return packageJson.name
}
