import Button from './Button'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Button',
    onClick: () => console.log('Button clicked'),
  },
}

export const Primary = {
  args: {
    label: 'Primary Button',
    isPrimary: true,
    onClick: () => console.log('Primary button clicked'),
  },
}

export const WithIcon = {
  args: {
    label: 'Button with Icon',
    icon: <ChevronDownIcon className="h-4 w-4" />,
    onClick: () => console.log('Button with icon clicked'),
  },
}

export const PrimaryWithIcon = {
  args: {
    label: 'Primary with Icon',
    isPrimary: true,
    icon: <ChevronDownIcon className="h-4 w-4" />,
    onClick: () => console.log('Primary button with icon clicked'),
  },
}

export const Loading = {
  args: {
    label: 'Loading Button',
    isLoading: true,
    onClick: () => console.log('Loading button clicked'),
  },
}

export const PrimaryLoading = {
  args: {
    label: 'Primary Loading',
    isPrimary: true,
    isLoading: true,
    onClick: () => console.log('Primary loading button clicked'),
  },
}

export const Disabled = {
  args: {
    label: 'Disabled Button',
    isDisabled: true,
    onClick: () => console.log('Disabled button clicked'),
  },
}

export const PrimaryDisabled = {
  args: {
    label: 'Primary Disabled',
    isPrimary: true,
    isDisabled: true,
    onClick: () => console.log('Primary disabled button clicked'),
  },
}

export const IconOnly = {
  args: {
    icon: <ChevronDownIcon className="h-4 w-4" />,
    onClick: () => console.log('Icon only button clicked'),
  },
}
