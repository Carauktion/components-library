import { useState, useCallback } from 'react'
import Autocomplete from './Autocomplete'
import type { AutocompleteOption } from './Autocomplete'

const options: AutocompleteOption[] = [
  { name: 'John Doe', value: '1' },
  { name: 'Jane Smith', value: '2' },
  { name: 'Bob Johnson', value: '3' },
  { name: 'Alice Williams', value: '4' },
  { name: 'Charlie Brown', value: '5' },
  { name: 'Diana Prince', value: '6' },
  { name: 'Edward Norton', value: '7' },
  { name: 'Fiona Apple', value: '8' },
  { name: 'George Washington', value: '9' },
  { name: 'Helen Keller', value: '10' },
]

const generateManyOptions = (count: number): AutocompleteOption[] =>
  Array.from({ length: count }, (_, i) => ({
    name: `Employee ${i + 1}`,
    value: `${i + 1}`,
  }))

const allOptions = generateManyOptions(100)

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    placeholder: 'Type to search...',
    options,
    selectedOption: null,
    onChange: () => {},
    onSelect: () => {},
  },
}

export const WithLabel = {
  args: {
    label: 'Select an employee',
    placeholder: 'Type to search...',
    options,
    selectedOption: null,
    onChange: () => {},
    onSelect: () => {},
  },
}

export const WithRequired = {
  args: {
    label: 'Required Field',
    placeholder: 'Type to search...',
    options,
    selectedOption: null,
    required: true,
    onChange: () => {},
    onSelect: () => {},
  },
}

export const Selected = {
  args: {
    placeholder: 'Type to search...',
    options,
    selectedOption: options[0],
    onChange: () => {},
    onSelect: () => {},
  },
}

export const Disabled = {
  args: {
    placeholder: 'Type to search...',
    options,
    selectedOption: null,
    disabled: true,
    onChange: () => {},
    onSelect: () => {},
  },
}

export const WithError = {
  args: {
    label: 'Autocomplete with Error',
    placeholder: 'Type to search...',
    options,
    selectedOption: null,
    error: true,
    errorMsg: 'This field is required',
    onChange: () => {},
    onSelect: () => {},
  },
}

export const WithInfiniteScroll = () => {
  const [loadedOptions, setLoadedOptions] = useState<AutocompleteOption[]>(
    allOptions.slice(0, 10)
  )
  const [selectedOption, setSelectedOption] =
    useState<AutocompleteOption | null>(null)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const ITEMS_PER_PAGE = 10
  const currentPage = Math.ceil(loadedOptions.length / ITEMS_PER_PAGE)
  const hasMore = loadedOptions.length < allOptions.length

  const filteredOptions = loadedOptions.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) {
      return
    }

    setIsLoadingMore(true)

    setTimeout(() => {
      const nextPage = currentPage + 1
      const startIndex = nextPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE
      const endIndex = startIndex + ITEMS_PER_PAGE
      const newOptions = allOptions.slice(startIndex, endIndex)

      setLoadedOptions((prev) => {
        return [...prev, ...newOptions]
      })
      setIsLoadingMore(false)
    }, 500)
  }, [currentPage, hasMore, isLoadingMore])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const handleSelect = (option: AutocompleteOption | null) => {
    setSelectedOption(option)
  }

  return (
    <Autocomplete
      label="Autocomplete with Infinite Scroll"
      placeholder="Type to search or scroll to load more..."
      options={filteredOptions}
      selectedOption={selectedOption}
      hasMore={hasMore}
      isLoadingMore={isLoadingMore}
      onChange={handleSearch}
      onSelect={handleSelect}
      onLoadMore={handleLoadMore}
      noResultsLabel="No employees found"
    />
  )
}

WithInfiniteScroll.storyName = 'With Infinite Scroll'

export const NoResults = {
  args: {
    label: 'Autocomplete',
    placeholder: 'Type to search...',
    options: [],
    selectedOption: null,
    noResultsLabel: 'No employees found',
    onChange: () => {},
    onSelect: () => {},
  },
}

