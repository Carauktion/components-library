import TextInput from './TextInput'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  },
}

export const WithValue = {
  args: {
    label: 'Label',
    value: 'Sample text',
    placeholder: 'Enter text...',
  },
}

export const Required = {
  args: {
    label: 'Required Field',
    isRequired: true,
    placeholder: 'Enter text...',
  },
}

export const WithSubLabel = {
  args: {
    label: 'Label',
    subLabel: 'Sub label',
    placeholder: 'Enter text...',
  },
}

export const WithError = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    error: 'This field is required',
  },
}

export const WithWarning = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    warning: 'This is a warning message',
  },
}

export const Disabled = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    disabled: true,
  },
}

export const WithIcon = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: <MagnifyingGlassIcon className="h-4 w-4" />,
    onIconClick: () => console.log('Icon clicked'),
  },
}

export const WithSupportingText = {
  args: {
    label: 'Amount',
    supportingText: '$',
    placeholder: '0.00',
  },
}

export const WithAction = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    actionLabel: 'Action',
    onActionClick: () => console.log('Action clicked'),
  },
}

export const ReadOnly = {
  args: {
    label: 'Read Only',
    value: 'This is read only',
    readOnly: true,
  },
}
