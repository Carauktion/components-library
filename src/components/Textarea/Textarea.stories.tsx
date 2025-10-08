import Textarea from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    placeholder: 'Enter your message here...',
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const WithLabel = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const WithRequired = {
  args: {
    label: 'Required Message',
    placeholder: 'Enter your message here...',
    isRequired: true,
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const WithValue = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    value: 'This is a sample message that has been pre-filled.',
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const WithError = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    error: 'This field is required',
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const Disabled = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This textarea is disabled',
    disabled: true,
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const WithActionButton = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    actionLabel: 'Clear',
    actionPosition: 'right',
    onActionClick: () => console.log('Clear clicked'),
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const WithActionButtonLeft = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    actionLabel: 'Reset',
    actionPosition: 'left',
    onActionClick: () => console.log('Reset clicked'),
    onChange: (value: string) => console.log('Value:', value),
  },
}

export const WithErrorAndAction = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    error: 'This field is required',
    actionLabel: 'Clear',
    actionPosition: 'right',
    onActionClick: () => console.log('Clear clicked'),
    onChange: (value: string) => console.log('Value:', value),
  },
}
