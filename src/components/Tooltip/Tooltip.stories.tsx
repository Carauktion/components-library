import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
}

export const WithLongText = {
  args: {
    label: 'This is a longer tooltip that explains more details about the element you are hovering over.',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover for details</button>,
  },
}

export const WithMultilineText = {
  args: {
    label: 'Line 1\nLine 2\nLine 3',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Multiline tooltip</button>,
  },
}

export const WithReactNode = {
  args: {
    label: (
      <div>
        <strong>Bold text</strong>
        <br />
        <em>Italic text</em>
      </div>
    ),
    children: <button className="px-4 py-2 bg-primary text-white rounded">Rich content</button>,
  },
}

export const WithCustomStyling = {
  args: {
    label: 'Custom styled tooltip',
    className: 'bg-danger text-white',
    style: { backgroundColor: 'rgba(220, 38, 38, 0.9)' },
    children: <button className="px-4 py-2 bg-danger text-white rounded">Custom style</button>,
  },
}

export const WithInput = {
  args: {
    label: 'Enter your email address',
    children: <input type="email" placeholder="Email" className="px-3 py-2 border rounded" />,
  },
}

export const WithIcon = {
  args: {
    label: 'Click to get more information',
    children: (
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      </button>
    ),
  },
}
