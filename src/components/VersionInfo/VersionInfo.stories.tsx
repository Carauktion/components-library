import VersionInfo from './VersionInfo'

export default {
  title: 'Components/VersionInfo',
  component: VersionInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}

export const WithPackageName = {
  args: {
    showPackageName: true,
  },
}

export const Compact = {
  args: {
    className: 'text-xs',
  },
}
