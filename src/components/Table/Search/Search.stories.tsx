import { useState } from 'react'
import Search from './Search'
import { FilterType } from '../Sort/Sort'

export default {
  title: 'Components/Table/Search',
  component: Search,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export const TextInputClearable = () => {
  const [value, setValue] = useState('Durward Reynolds')
  return (
    <div className="w-[320px]">
      <Search
        item={{ id: 'test', name: 'Search', value, filterType: FilterType.TextInput }}
        onChange={(v: string) => setValue(v)}
      />
    </div>
  )
}


