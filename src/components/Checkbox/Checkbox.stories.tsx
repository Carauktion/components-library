import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when checkbox state changes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Checkbox label',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked checkbox',
  },
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled checkbox',
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled checked checkbox',
  },
}

export const Indeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    label: 'Indeterminate checkbox',
  },
}

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
}

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="space-y-4">
        <Checkbox
          checked={checked}
          onChange={setChecked}
          label={`Checkbox is ${checked ? 'checked' : 'unchecked'}`}
        />
        <button
          onClick={() => setChecked(!checked)}
          className="block px-4 py-2 bg-primary text-white rounded"
        >
          Toggle
        </button>
      </div>
    )
  },
}

export const MultipleCheckboxes: Story = {
  render: () => {
    const [options, setOptions] = useState({
      option1: false,
      option2: true,
      option3: false,
    })

    const handleChange = (key: keyof typeof options) => (checked: boolean) => {
      setOptions((prev) => ({ ...prev, [key]: checked }))
    }

    return (
      <div className="space-y-3">
        <Checkbox
          checked={options.option1}
          onChange={handleChange('option1')}
          label="Option 1"
        />
        <Checkbox
          checked={options.option2}
          onChange={handleChange('option2')}
          label="Option 2"
        />
        <Checkbox
          checked={options.option3}
          onChange={handleChange('option3')}
          label="Option 3"
        />
      </div>
    )
  },
}

export const SelectAll: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 1, checked: false, label: 'Item 1' },
      { id: 2, checked: true, label: 'Item 2' },
      { id: 3, checked: false, label: 'Item 3' },
    ])

    const allChecked = items.every((item) => item.checked)
    const someChecked = items.some((item) => item.checked) && !allChecked

    const handleSelectAll = (checked: boolean) => {
      setItems(items.map((item) => ({ ...item, checked })))
    }

    const handleItemChange = (id: number) => (checked: boolean) => {
      setItems(items.map((item) => (item.id === id ? { ...item, checked } : item)))
    }

    return (
      <div className="space-y-3 p-4 border border-light-3 rounded-lg">
        <div className="pb-2 border-b border-light-3">
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={handleSelectAll}
            label="Select All"
            className="font-semibold"
          />
        </div>
        <div className="space-y-2 pl-6">
          {items.map((item) => (
            <Checkbox
              key={item.id}
              checked={item.checked}
              onChange={handleItemChange(item.id)}
              label={item.label}
            />
          ))}
        </div>
      </div>
    )
  },
}

