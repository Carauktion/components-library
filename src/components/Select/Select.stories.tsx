import Select from './Select'

const options = [
  { name: 'Durward Reynolds awdawdawd awd awd w', unavailable: false },
  { name: 'Kenton Towne', unavailable: false },
  { name: 'Therese Wunsch', unavailable: false },
  { name: 'Benedict Kessler', unavailable: true },
  { name: 'Katelyn Rohan', unavailable: false },
]

const optionsWithImages = [
  { name: 'Option 1', image: 'https://via.placeholder.com/20x20', unavailable: false },
  { name: 'Option 2', image: 'https://via.placeholder.com/20x20', unavailable: false },
  { name: 'Option 3', image: 'https://via.placeholder.com/20x20', unavailable: false },
]

const optionsWithOther = [
  { name: 'John Doe', other: 'Software Engineer', unavailable: false },
  { name: 'Jane Smith', other: 'Product Manager', unavailable: false },
  { name: 'Bob Johnson', other: 'Designer', unavailable: false },
]

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    placeholder: 'Please select an option',
    options,
    selectedOption: null,
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const WithLabel = {
  args: {
    label: 'Select an option',
    placeholder: 'Please select an option',
    options,
    selectedOption: null,
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const WithRequired = {
  args: {
    label: 'Required Field',
    placeholder: 'Please select an option',
    options,
    selectedOption: null,
    required: true,
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const Selected = {
  args: {
    placeholder: 'Please select an option',
    options,
    selectedOption: options[0],
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const Disabled = {
  args: {
    placeholder: 'Please select an option',
    options,
    selectedOption: null,
    isDisabled: true,
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const WithError = {
  args: {
    label: 'Select with Error',
    placeholder: 'Please select an option',
    options,
    selectedOption: null,
    error: 'This field is required',
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const WithImages = {
  args: {
    label: 'Select with Images',
    placeholder: 'Please select an option',
    options: optionsWithImages,
    selectedOption: null,
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const WithOtherText = {
  args: {
    label: 'Select with Additional Info',
    placeholder: 'Please select a person',
    options: optionsWithOther,
    selectedOption: null,
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const WithBeforeOptionName = {
  args: {
    label: 'Select with Prefix',
    placeholder: 'Please select an option',
    options,
    selectedOption: null,
    beforeOptionName: 'Mr. ',
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const NoOptions = {
  args: {
    label: 'Select with No Options',
    placeholder: 'Please select an option',
    options: [],
    selectedOption: null,
    noOptionsLabel: 'No options available',
    onChange: (option: any) => console.log('Selected:', option),
  },
}

export const Clearable = {
  args: {
    label: 'Clearable Select',
    placeholder: 'Please select an option',
    options,
    selectedOption: options[0],
    clearable: true,
    onChange: (option: any) => console.log('Selected:', option),
  },
}
