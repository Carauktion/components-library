import Loading from './Loading'

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}

export const CustomWidth = {
  args: {
    className: 'w-[300px]',
  },
}

export const Small = {
  args: {
    className: 'w-[150px]',
  },
}
