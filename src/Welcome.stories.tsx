import type { Meta, StoryObj } from '@storybook/react'
import { getVersion } from './utils/version'

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Welcome to the @carauktion/component-library! This is a typed React component library built with Vite.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Welcome: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">@carauktion/component-library</h1>
        <p className="text-xl text-gray-600 mb-8">
          A typed React component library built with Vite.
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span className="font-semibold">Version:</span>
          <span className="ml-2 font-mono">{getVersion()}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Development</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <code className="bg-gray-200 px-2 py-1 rounded text-sm">yarn install</code>
            </div>
            <div className="flex items-center">
              <code className="bg-gray-200 px-2 py-1 rounded text-sm">yarn dev</code>
              <span className="ml-2 text-gray-600"># http://localhost:6006</span>
            </div>
            <div className="flex items-center">
              <code className="bg-gray-200 px-2 py-1 rounded text-sm">yarn build</code>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Installation</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-1">Install directly from GitHub:</p>
              <code className="bg-gray-200 px-2 py-1 rounded text-sm block">
                yarn add github:Carauktion/components-library
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Import components and the bundled CSS in your app:
            </p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
              {`import { Button, DatePicker, Modal, Table } from '@carauktion/component-library'
import '@carauktion/component-library/dist/style.css'`}
            </pre>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Ensure Tailwind scans the library output:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
              {`// tailwind.config.js or tailwind.config.ts
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@carauktion/component-library/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: { extend: {} },
  plugins: []
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Type Safe</h3>
          <p className="text-sm text-gray-600">Full TypeScript support with type definitions</p>
        </div>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Fast Build</h3>
          <p className="text-sm text-gray-600">Built with Vite for lightning-fast development</p>
        </div>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Modern</h3>
          <p className="text-sm text-gray-600">Built with React 19 and modern tooling</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Requirements</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Node 22+ required</li>
          <li>• Yarn package manager</li>
          <li>• React 19+ for consuming applications</li>
        </ul>
      </div>
    </div>
  ),
}
