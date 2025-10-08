import Switcher from './Switcher'

export default {
  title: 'Components/Switcher',
  component: Switcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    enabled: false,
    onChange: () => console.log('Switched'),
  },
}

export const WithLabel = {
  args: {
    enabled: false,
    label: 'Enable notifications',
    onChange: () => console.log('Switched'),
  },
}

export const Enabled = {
  args: {
    enabled: true,
    label: 'Enable notifications',
    onChange: () => console.log('Switched'),
  },
}

export const Disabled = {
  args: {
    enabled: false,
    label: 'Disabled switcher',
    isDisabled: true,
    onChange: () => console.log('Switched'),
  },
}

export const DisabledEnabled = {
  args: {
    enabled: true,
    label: 'Disabled enabled switcher',
    isDisabled: true,
    onChange: () => console.log('Switched'),
  },
}

export const LongLabel = {
  args: {
    enabled: false,
    label: 'This is a very long label that might wrap to multiple lines',
    onChange: () => console.log('Switched'),
  },
}
