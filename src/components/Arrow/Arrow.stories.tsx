import Arrow, { ArrowType } from './Arrow'

export default {
  title: 'Components/Arrow',
  component: Arrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    arrowType: {
      control: { type: 'select' },
      options: Object.values(ArrowType).filter(value => typeof value === 'number'),
      mapping: {
        0: ArrowType.ExtraSmall,
        1: ArrowType.Small,
        2: ArrowType.Medium,
        3: ArrowType.Large,
        4: ArrowType.Pagination,
      },
    },
  },
}

export const ExtraSmall = {
  args: {
    arrowType: ArrowType.ExtraSmall,
    onClick: () => console.log('ExtraSmall arrow clicked'),
  },
}

export const Small = {
  args: {
    arrowType: ArrowType.Small,
    onClick: () => console.log('Small arrow clicked'),
  },
}

export const Medium = {
  args: {
    arrowType: ArrowType.Medium,
    onClick: () => console.log('Medium arrow clicked'),
  },
}

export const Large = {
  args: {
    arrowType: ArrowType.Large,
    onClick: () => console.log('Large arrow clicked'),
  },
}

export const Pagination = {
  args: {
    arrowType: ArrowType.Pagination,
    onClick: () => console.log('Pagination arrow clicked'),
  },
}

export const WithBackground = {
  args: {
    arrowType: ArrowType.Medium,
    withBackground: true,
    onClick: () => console.log('Arrow with background clicked'),
  },
}

export const Disabled = {
  args: {
    arrowType: ArrowType.Medium,
    disabled: true,
    onClick: () => console.log('Disabled arrow clicked'),
  },
}
