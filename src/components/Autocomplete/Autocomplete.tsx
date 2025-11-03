import { useRef, useState, useEffect } from 'react'
import { Combobox, ComboboxButton, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import cx from 'classnames'
import Spinner from '../Spinner/Spinner'

export type AutocompleteOption = {
  name: string
  value: string | number
}

type Props = {
  className?: string
  selectedOption?: AutocompleteOption | null
  options: AutocompleteOption[]
  error?: any
  errorMsg?: string
  onChange: (value: string) => void
  onSelect: (option: AutocompleteOption | null) => void
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  labelClassName?: string
  multiple?: boolean
  onLoadMore?: () => void
  hasMore?: boolean
  isLoadingMore?: boolean
  noResultsLabel?: string
}

const Autocomplete: React.FC<Props> = ({
  className,
  selectedOption,
  labelClassName,
  options,
  error,
  errorMsg,
  onChange,
  onSelect,
  label,
  placeholder,
  required,
  disabled,
  multiple = false,
  onLoadMore,
  hasMore = false,
  isLoadingMore = false,
  noResultsLabel = 'No results found',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)
  const innerDivRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const isLoadingRef = useRef(false)
  const [optionsElementReady, setOptionsElementReady] = useState(false)

  useEffect(() => {
    const findScrollableElement = () => {
      if (!rootRef.current) {
        return false
      }

      const scrollableElement = rootRef.current.querySelector(
        '[class*="overflow-auto"]'
      ) as HTMLDivElement

      if (scrollableElement) {
        optionsRef.current = scrollableElement
        setOptionsElementReady(true)
        return true
      }

      if (innerDivRef.current) {
        let parent = innerDivRef.current.parentElement
        let depth = 0
        while (parent && depth < 10) {
          const style = getComputedStyle(parent)
          const hasOverflowAuto = parent.classList.contains('overflow-auto')
          const overflowStyle = style.overflow === 'auto' || style.overflowY === 'auto'
          const isScrollable =
            parent.scrollHeight > parent.clientHeight && style.overflow !== 'hidden'

          if (hasOverflowAuto || overflowStyle || isScrollable) {
            optionsRef.current = parent as HTMLDivElement
            setOptionsElementReady(true)
            return true
          }
          parent = parent.parentElement
          depth++
        }
      }

      setOptionsElementReady(false)
      return false
    }

    const timeouts = [
      setTimeout(findScrollableElement, 0),
      setTimeout(findScrollableElement, 50),
      setTimeout(findScrollableElement, 150),
      setTimeout(findScrollableElement, 300),
    ]

    const observer = new MutationObserver(() => {
      findScrollableElement()
    })

    if (rootRef.current) {
      observer.observe(rootRef.current, {
        childList: true,
        subtree: true,
      })
    }

    return () => {
      timeouts.forEach(clearTimeout)
      observer.disconnect()
    }
  }, [options.length, query])

  useEffect(() => {
    const checkAndSetup = () => {
      const optionsElement = optionsRef.current

      if (!optionsElement || !onLoadMore || !hasMore) {
        isLoadingRef.current = false
        return false
      }

      return true
    }

    if (!checkAndSetup()) {
      return
    }

    const optionsElement = optionsRef.current

    const handleLoadMoreData = () => {
      if (isLoadingRef.current || isLoadingMore || !hasMore || !onLoadMore) {
        return
      }

      isLoadingRef.current = true
      onLoadMore()
      setTimeout(() => {
        isLoadingRef.current = false
      }, 500)
    }

    const handleScroll = () => {
      const element = optionsRef.current
      if (!element || isLoadingRef.current || isLoadingMore || !hasMore) return

      const { scrollTop, scrollHeight, clientHeight } = element
      const threshold = 100
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight

      if (distanceFromBottom < threshold) {
        handleLoadMoreData()
      }
    }

    const checkInitialLoad = () => {
      const element = optionsRef.current
      if (!element || isLoadingRef.current || isLoadingMore || !hasMore) {
        return
      }

      const { scrollHeight, clientHeight, scrollTop } = element
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight
      const threshold = 100

      if (scrollHeight <= clientHeight + 10 || distanceFromBottom < threshold) {
        handleLoadMoreData()
      }
    }

    const timeouts = [
      setTimeout(checkInitialLoad, 50),
      setTimeout(checkInitialLoad, 150),
      setTimeout(checkInitialLoad, 300),
      setTimeout(checkInitialLoad, 500),
    ]

    const intervalId = setInterval(() => {
      const element = optionsRef.current
      if (!element || !hasMore || isLoadingMore || isLoadingRef.current) {
        return
      }

      const { scrollTop, scrollHeight, clientHeight } = element
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight
      const threshold = 100

      if (distanceFromBottom < threshold) {
        handleLoadMoreData()
      }
    }, 150)

    if (optionsElement) {
      optionsElement.addEventListener('scroll', handleScroll, { passive: true })

      const observer = new MutationObserver(() => {
        checkInitialLoad()
      })

      observer.observe(optionsElement, {
        childList: true,
        subtree: true,
      })

      return () => {
        optionsElement.removeEventListener('scroll', handleScroll)
        observer.disconnect()
        timeouts.forEach(clearTimeout)
        clearInterval(intervalId)
        isLoadingRef.current = false
      }
    }

    return () => {
      timeouts.forEach(clearTimeout)
      clearInterval(intervalId)
      isLoadingRef.current = false
    }
  }, [onLoadMore, hasMore, isLoadingMore, options.length, optionsElementReady])

  return (
    <div ref={rootRef} className={cx('relative max-w-[572px]', className)}>
      {label && (
        <label
          className={cx('block mb-1.5 text-sm text-light-dark truncate', labelClassName)}
          title={label}
        >
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}
      <Combobox
        value={selectedOption}
        disabled={disabled}
        onChange={(value: any) => {
          if (multiple && Array.isArray(value)) {
            onSelect(value as any)
          } else {
            onSelect(value as AutocompleteOption | null)
          }
        }}
        // @ts-ignore
        multiple={multiple}
      >
        <>
          <div className="relative">
            <Combobox.Input
              className={cx(
                'relative w-full min-h-[40px] border border-light-3 cursor-pointer rounded-[3px] bg-white py-[7px] pl-[15px] pr-[25px] text-left transition-colors duration-100 !outline-offset-0 hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent focus:outline-none focus:ring-0 focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent truncate',
                selectedOption?.name && 'pr-[45px]',
                error &&
                  'border-2 border-primary-shade py-[6px] px-[14px] hover:bg-fo-accent-light hover:border-fo-accent focus:border-fo-accent',
                disabled &&
                  '!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !pl-[15px] !pr-[45px]'
              )}
              onChange={(event) => {
                onChange(event.target.value)
                setQuery(event.target.value)
              }}
              placeholder={placeholder}
              displayValue={(option: any) => (Array.isArray(option) ? null : option?.name || '')}
              onClick={() => buttonRef.current?.click()}
            />
            <ComboboxButton
              className={cx(
                'absolute w-[20px] inset-y-0 flex justify-end items-center right-[10px]',
                disabled && 'cursor-not-allowed'
              )}
              ref={buttonRef}
            >
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.13013 4.37044L0 0H8.26025L4.13013 4.37044Z" fill="currentColor" />
              </svg>
            </ComboboxButton>
            {selectedOption?.name && (
              <ComboboxButton
                className={cx(
                  'absolute inset-y-0 flex justify-end items-center right-[25px]',
                  disabled && 'cursor-not-allowed'
                )}
                onClick={(e: any) => {
                  e.preventDefault()
                  onSelect(null)
                  onChange('')
                }}
              >
                <XMarkIcon className="h-4 w-4 text-light-dark" />
              </ComboboxButton>
            )}
          </div>
          <ComboboxOptions className="absolute z-10 mt-[1px] max-w-[572px] min-w-[259px] max-h-[220px] w-full overflow-auto rounded-b-[3px] bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div ref={innerDivRef}>
              {options.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-light-dark">
                  {noResultsLabel}
                </div>
              ) : (
                <>
                  {options.map((option) => (
                    <ComboboxOption
                      key={option.value}
                      title={option.name}
                      value={option}
                      className={({ focus }) =>
                        `relative cursor-pointer select-none py-2 pl-[45px] pr-4 transition-colors duration-100 ${
                          focus && 'bg-fo-accent-tint'
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className="block truncate">{option.name}</span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-fo-accent">
                              <CheckIcon className="h-4 w-4" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </ComboboxOption>
                  ))}
                  {isLoadingMore && (
                    <div className="px-[10px] py-2 flex justify-center items-center">
                      <Spinner className="w-5 h-5" />
                    </div>
                  )}
                </>
              )}
            </div>
          </ComboboxOptions>
        </>
      </Combobox>
      {error && <p className="text-danger text-xs mt-2.5">{errorMsg || `${label} is required`}</p>}
    </div>
  )
}

export default Autocomplete
