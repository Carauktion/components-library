import { useState } from 'react'
import Modal from './Modal'
import Button from '../Button/Button'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const ModalExample = ({ headless = false, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        headless={headless}
        {...props}
      >
        <div className="space-y-4">
          <p>This is the modal content. You can put any content here.</p>
          <div className="flex gap-2">
            <Button label="Cancel" onClick={() => setIsOpen(false)} />
            <Button label="Confirm" isPrimary onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export const Default = {
  render: () => <ModalExample />,
}

export const Headless = {
  render: () => <ModalExample headless={true} />,
}

export const WithoutCloseButton = {
  render: () => <ModalExample onClose={undefined} />,
}

export const CustomSize = {
  render: () => (
    <ModalExample 
      innerClassName="max-w-[800px]"
    />
  ),
}

export const WithCustomContent = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button label="Open Custom Modal" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Custom Modal"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Custom Content</h3>
            <p>This modal has custom content with multiple sections.</p>
            <div className="bg-light-4-tint p-4 rounded-lg">
              <h4 className="font-medium mb-2">Section 1</h4>
              <p className="text-sm text-light-dark">Some additional information goes here.</p>
            </div>
            <div className="bg-light-4-tint p-4 rounded-lg">
              <h4 className="font-medium mb-2">Section 2</h4>
              <p className="text-sm text-light-dark">More content can be added here.</p>
            </div>
            <div className="flex gap-2 pt-4">
              <Button label="Close" onClick={() => setIsOpen(false)} />
              <Button label="Save Changes" isPrimary onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </Modal>
      </>
    )
  },
}
