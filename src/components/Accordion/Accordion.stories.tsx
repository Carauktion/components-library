import { Accordion, AccordionGroup } from './Accordion'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Accordion Title',
    children: (
      <div>
        <p>This is the accordion content. You can put any content here.</p>
        <p className="mt-2">Multiple paragraphs, components, or any React elements.</p>
      </div>
    ),
  },
}

export const WithIcon = {
  args: {
    label: 'Accordion with Icon',
    icon: <InformationCircleIcon className="h-5 w-5" />,
    children: (
      <div>
        <p>This accordion has an icon in the header.</p>
      </div>
    ),
  },
}

export const WithHint = {
  args: {
    label: 'Accordion with Hint',
    labelHint: '(Optional)',
    children: (
      <div>
        <p>This accordion has a hint text next to the label.</p>
      </div>
    ),
  },
}

export const InitiallyOpen = {
  args: {
    label: 'Initially Open',
    isOpened: true,
    children: (
      <div>
        <p>This accordion starts in the open state.</p>
      </div>
    ),
  },
}

export const Disabled = {
  args: {
    label: 'Disabled Accordion',
    disableOpenHide: true,
    children: (
      <div>
        <p>This accordion cannot be toggled.</p>
      </div>
    ),
  },
}

export const WithHeaderRightItem = {
  args: {
    label: 'With Right Item',
    headerRightItem: (
      <span className="text-sm text-light-dark">Badge</span>
    ),
    children: (
      <div>
        <p>This accordion has a right-aligned item in the header.</p>
      </div>
    ),
  },
}

export const AccordionGroupExample = {
  render: () => (
    <AccordionGroup className="space-y-2">
      <Accordion
        label="First Accordion"
        value="first"
        children={
          <div>
            <p>This is the first accordion in a group.</p>
          </div>
        }
      />
      <Accordion
        label="Second Accordion"
        value="second"
        children={
          <div>
            <p>This is the second accordion in a group.</p>
          </div>
        }
      />
      <Accordion
        label="Third Accordion"
        value="third"
        children={
          <div>
            <p>This is the third accordion in a group.</p>
          </div>
        }
      />
    </AccordionGroup>
  ),
}
