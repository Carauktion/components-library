import Dropdown from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const simpleItems = [
  { name: 'Option 1', onClick: () => console.log('Option 1 clicked') },
  { name: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  { name: 'Option 3', onClick: () => console.log('Option 3 clicked') },
]

const nestedItems = [
  { name: 'Option 1', onClick: () => console.log('Option 1 clicked') },
  { 
    name: 'Submenu', 
    items: [
      { name: 'Sub Option 1', onClick: () => console.log('Sub Option 1 clicked') },
      { name: 'Sub Option 2', onClick: () => console.log('Sub Option 2 clicked') },
    ]
  },
  { name: 'Option 3', onClick: () => console.log('Option 3 clicked') },
]

export const Default = {
  args: {
    label: 'Select Option',
    items: simpleItems,
  },
}

export const WithNestedItems = {
  args: {
    label: 'Menu with Submenu',
    items: nestedItems,
  },
}

export const Disabled = {
  args: {
    label: 'Disabled Dropdown',
    items: simpleItems,
    isDisabled: true,
  },
}

export const Loading = {
  args: {
    label: 'Loading Dropdown',
    items: simpleItems,
    isLoading: true,
  },
}

export const NoArrow = {
  args: {
    label: 'No Arrow',
    items: simpleItems,
    noArrow: true,
  },
}

export const CustomAlignment = {
  args: {
    label: 'End Aligned',
    items: simpleItems,
    align: 'end',
  },
}

export const LongLabel = {
  args: {
    label: 'This is a very long dropdown label that might wrap',
    items: simpleItems,
  },
}

export const ManyItems = {
  args: {
    label: 'Many Items',
    items: Array.from({ length: 10 }, (_, i) => ({
      name: `Option ${i + 1}`,
      onClick: () => console.log(`Option ${i + 1} clicked`)
    })),
  },
}
