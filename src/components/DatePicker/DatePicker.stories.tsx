import DatePicker from './DatePicker'
import { LANGUAGES } from '../../enums/LANGUAGES'

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Select Date',
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const WithInitialValue = {
  args: {
    label: 'Date with Initial Value',
    initialValue: '2024-01-15',
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const WithEraseButton = {
  args: {
    label: 'Date with Erase',
    initialValue: '2024-01-15',
    onChange: (value: string) => console.log('Date selected:', value),
    onErase: () => console.log('Date erased'),
  },
}

export const Disabled = {
  args: {
    label: 'Disabled Date Picker',
    disabled: true,
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const WithError = {
  args: {
    label: 'Date with Error',
    error: 'Please select a valid date',
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const WithMinMaxDate = {
  args: {
    label: 'Date with Min/Max',
    minDate: '2024-01-01',
    maxDate: '2024-12-31',
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const CustomFormat = {
  args: {
    label: 'Custom Format',
    displayFormat: 'MM/DD/YYYY',
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const StartWeekOnSunday = {
  args: {
    label: 'Start Week on Sunday',
    startWeekOn: 'sun',
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const GermanLocale = {
  args: {
    label: 'German Locale',
    i18n: LANGUAGES.DE,
    onChange: (value: string) => console.log('Date selected:', value),
  },
}

export const FrenchLocale = {
  args: {
    label: 'French Locale',
    i18n: LANGUAGES.FR,
    onChange: (value: string) => console.log('Date selected:', value),
  },
}
