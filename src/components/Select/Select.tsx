import { Fragment } from 'react'
import type { FC } from 'react'
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import cx from 'classnames'

export type Option = {
  name: string
  value?: any
  unavailable?: boolean
  image?: string
  other?: string
}

type Props = {
  className?: string
  inputClassName?: string
  optionClassName?: string
  beforeOptionName?: string
  tickClassName?: string
  dropdownClassName?: string
  name?: string
  selectedOption: Option | Option[] | null
  options: Option[]
  error?: any
  onChange: (option: Option) => void
  label?: string
  placeholder?: string
  noOptionsLabel?: string
  required?: boolean
  isDisabled?: boolean
  multiple?: boolean
}

const Select: FC<Props> = ({
  className = '',
  inputClassName = '',
  optionClassName = '',
  dropdownClassName = '',
  tickClassName = '',
  selectedOption,
  beforeOptionName,
  options,
  onChange,
  error,
  label,
  name,
  placeholder,
  noOptionsLabel,
  required,
  isDisabled = false,
  multiple = false,
}) => {
  const selectedOptions: Option[] = Array.isArray(selectedOption)
    ? selectedOption
    : selectedOption
      ? [selectedOption]
      : []

  return (
    <div className={cx('relative', className)}>
      {label && (
        <label
          className={cx(
            'block mb-1.5 text-sm text-light-dark truncate',
            isDisabled && '!text-light-3'
          )}
          title={label}
        >
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}
      <Listbox
        as="div"
        name={name}
        disabled={isDisabled}
        // @ts-ignore
        value={selectedOption}
        onChange={onChange}
        multiple={multiple}
      >
        <ListboxButton
          className={({ open }) =>
            `${'relative w-full max-w-[572px] min-h-[40px] border border-light-3 cursor-pointer rounded-[3px] bg-white py-[7px] pl-[15px] pr-[30px] text-left transition-colors duration-100 !outline-offset-0 truncate'}
          ${'hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent'}
          ${'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-warning focus:outline focus:!outline-[1px] focus:outline-fo-accent'}
          ${
            error &&
            'border-danger hover:bg-fo-accent-light hover:border-fo-accent focus:border-fo-accent outline !outline-[1px] outline-danger'
          }
          ${
            open && '!border-fo-accent outline !outline-[1px] outline-fo-accent'
          }
          ${
            isDisabled &&
            '!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !px-[15px] hover:!outline-0 !cursor-not-allowed'
          }
          ${inputClassName}`
          }
          title={selectedOptions.map((o) => o.name).join(', ') || placeholder}
          onKeyDown={(e: any) => {
            if (!selectedOption) {
              const option = options.find(
                (el) => el.name[0].toLowerCase() === e.key.toLowerCase()
              )

              if (option) {
                onChange(option)
              }
            }
          }}
        >
          {selectedOptions.length > 0 ? (
            <span
              className={cx(
                'text-dark truncate flex items-center flex-wrap gap-[6px]',
                isDisabled && 'text-light-3'
              )}
              title={
                selectedOptions.map((o) => o.name).join(', ') || placeholder
              }
            >
              {beforeOptionName}
              {selectedOptions.map((option, index) => (
                <div
                  className="flex flex-row gap-[10px] items-center"
                  key={option.value}
                >
                  {option.image && (
                    <img
                      className="w-[20px] h-[20px] object-contain"
                      src={option.image}
                      alt={option.name}
                    />
                  )}
                  <span className="truncate">
                    {option.name}
                    {index < selectedOptions.length - 1 && ','}
                  </span>
                </div>
              ))}
            </span>
          ) : (
            <span
              className={cx('text-light-dark', isDisabled && 'text-light-3')}
            >
              {placeholder}
            </span>
          )}
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[10px]">
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            className={cx(
              'absolute mt-[1px] z-10 max-w-[572px] max-h-[200px] w-full overflow-auto rounded-b-[3px] bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
              dropdownClassName
            )}
          >
            {options.length > 0 ? (
              <>
                {options.map((option, index) => (
                  <ListboxOption
                    key={index}
                    value={option}
                    title={option.name}
                    disabled={option.unavailable}
                    className={({ focus }) =>
                      `relative cursor-pointer select-none py-2 pl-[35px] pr-4 transition-colors duration-100 ${
                        focus && 'bg-fo-accent-tint'
                      }
                  ${optionClassName}`
                    }
                  >
                    {({ selected }) => (
                      <div className="flex flex-row gap-[10px] items-center">
                        {option.image && (
                          <img
                            className="w-[40px] h-[40px] object-contain"
                            src={option.image}
                            alt={'Promotion logo'}
                          />
                        )}
                        {option.other ? (
                          <div className="flex flex-col mb-[4px]">
                            <span className="block truncate">
                              {beforeOptionName}
                              {option.name}
                            </span>
                            <span className="text-sm">{option.other}</span>
                          </div>
                        ) : (
                          <span className="block truncate">
                            {beforeOptionName}
                            {option.name}
                          </span>
                        )}

                        {selected && (
                          <span
                            className={cx(
                              'absolute inset-y-0 left-0 flex items-center pl-3 text-fo-accent',
                              tickClassName
                            )}
                          >
                            <CheckIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )}
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </>
            ) : (
              <p
                title={noOptionsLabel}
                className="px-[10px] text-[14px] w-full truncate text-light-dark"
              >
                {noOptionsLabel}
              </p>
            )}
          </ListboxOptions>
        </Transition>
      </Listbox>
      {error && <p className="text-danger text-xs mt-2.5">{error}</p>}
    </div>
  )
}

export default Select
