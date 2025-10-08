import { useState } from 'react'
import Tabs from './Tabs'
import { TabStatus } from './Tab/Tab'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

const basicTabs = [
  { id: 'tab1', name: 'Tab 1' },
  { id: 'tab2', name: 'Tab 2' },
  { id: 'tab3', name: 'Tab 3' },
]

const tabsWithCounters = [
  { id: 'tab1', name: 'Inbox', counter: 5 },
  { id: 'tab2', name: 'Sent', counter: 12 },
  { id: 'tab3', name: 'Drafts', counter: 3 },
]

const tabsWithStatus = [
  { id: 'tab1', name: 'Completed', status: TabStatus.success },
  { id: 'tab2', name: 'In Progress', status: TabStatus.warning },
  { id: 'tab3', name: 'Pending' },
]

const tabsWithMultistep = [
  { id: 'tab1', name: 'Step 1', multistep: { stepsAmount: 3, currentStep: 1 } },
  { id: 'tab2', name: 'Step 2', multistep: { stepsAmount: 3, currentStep: 2 } },
  { id: 'tab3', name: 'Step 3', multistep: { stepsAmount: 3, currentStep: 3 } },
]

const mixedTabs = [
  { id: 'tab1', name: 'Overview', counter: 10 },
  { id: 'tab2', name: 'Details', status: TabStatus.success },
  { id: 'tab3', name: 'Settings', multistep: { stepsAmount: 2, currentStep: 1 } },
  { id: 'tab4', name: 'Help' },
]

export const Default = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1')
    return (
      <div className="w-full max-w-4xl">
        <Tabs
          layoutId="default"
          items={basicTabs}
          isActive={activeTab}
          onClick={setActiveTab}
        />
        <div className="p-4">
          <p>Active tab: {activeTab}</p>
        </div>
      </div>
    )
  },
}

export const WithCounters = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1')
    return (
      <div className="w-full max-w-4xl">
        <Tabs
          layoutId="counters"
          items={tabsWithCounters}
          isActive={activeTab}
          onClick={setActiveTab}
        />
        <div className="p-4">
          <p>Active tab: {activeTab}</p>
        </div>
      </div>
    )
  },
}

export const WithStatus = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1')
    return (
      <div className="w-full max-w-4xl">
        <Tabs
          layoutId="status"
          items={tabsWithStatus}
          isActive={activeTab}
          onClick={setActiveTab}
        />
        <div className="p-4">
          <p>Active tab: {activeTab}</p>
        </div>
      </div>
    )
  },
}

export const WithMultistep = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1')
    return (
      <div className="w-full max-w-4xl">
        <Tabs
          layoutId="multistep"
          items={tabsWithMultistep}
          isActive={activeTab}
          onClick={setActiveTab}
        />
        <div className="p-4">
          <p>Active tab: {activeTab}</p>
        </div>
      </div>
    )
  },
}

export const MixedFeatures = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1')
    return (
      <div className="w-full max-w-4xl">
        <Tabs
          layoutId="mixed"
          items={mixedTabs}
          isActive={activeTab}
          onClick={setActiveTab}
        />
        <div className="p-4">
          <p>Active tab: {activeTab}</p>
        </div>
      </div>
    )
  },
}

export const SmallTabs = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1')
    return (
      <div className="w-full max-w-4xl">
        <Tabs
          layoutId="small"
          items={basicTabs}
          isActive={activeTab}
          onClick={setActiveTab}
          isSmall
        />
        <div className="p-4">
          <p>Active tab: {activeTab}</p>
        </div>
      </div>
    )
  },
}

export const ManyTabs = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1')
    const manyTabs = Array.from({ length: 10 }, (_, i) => ({
      id: `tab${i + 1}`,
      name: `Tab ${i + 1}`,
    }))
    
    return (
      <div className="w-full max-w-4xl">
        <Tabs
          layoutId="many"
          items={manyTabs}
          isActive={activeTab}
          onClick={setActiveTab}
        />
        <div className="p-4">
          <p>Active tab: {activeTab}</p>
        </div>
      </div>
    )
  },
}
