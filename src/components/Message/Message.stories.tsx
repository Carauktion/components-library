import Message from './Message'

export default {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Success = {
  args: {
    id: '1',
    type: 'success',
    title: 'Success!',
    content: 'Your action was completed successfully.',
    onClose: () => console.log('Message closed'),
  },
}

export const Warning = {
  args: {
    id: '2',
    type: 'warning',
    title: 'Warning',
    content: 'Please review your input before proceeding.',
    onClose: () => console.log('Message closed'),
  },
}

export const Error = {
  args: {
    id: '3',
    type: 'error',
    title: 'Error',
    content: 'Something went wrong. Please try again.',
    onClose: () => console.log('Message closed'),
  },
}

export const SuccessWithoutContent = {
  args: {
    id: '4',
    type: 'success',
    title: 'Success!',
    onClose: () => console.log('Message closed'),
  },
}

export const WarningWithoutContent = {
  args: {
    id: '5',
    type: 'warning',
    title: 'Warning',
    onClose: () => console.log('Message closed'),
  },
}

export const ErrorWithoutContent = {
  args: {
    id: '6',
    type: 'error',
    title: 'Error',
    onClose: () => console.log('Message closed'),
  },
}

export const WithoutCloseButton = {
  args: {
    id: '7',
    type: 'success',
    title: 'Success!',
    content: 'This message cannot be closed.',
  },
}

export const WithReactContent = {
  args: {
    id: '8',
    type: 'success',
    title: 'Success!',
    content: (
      <div>
        <p>Your action was completed successfully.</p>
        <p className="mt-2 text-sm">You can now proceed to the next step.</p>
      </div>
    ),
    onClose: () => console.log('Message closed'),
  },
}
