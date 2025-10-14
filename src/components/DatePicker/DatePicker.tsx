import { useEffect, useState } from 'react'
import type { FC } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import { XMarkIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'

import { LANGUAGES } from '../../enums/LANGUAGES'
import { getCSSVariable } from '../../utils/getCSSVariable'
import styles from './DatePicker.module.scss'

type DateType = string | null | Date

type Props = {
  label?: string
  emptyLabel?: string
  fillLabel?: string
  onChange: (value: string) => void
  onErase?: () => void
  disabled?: boolean
  invalid?: boolean
  invalidText?: string
  invalidColor?: string
  startWeekOn?: 'mon' | 'sun'
  displayFormat?: string
  i18n?: LANGUAGES | string
  accentColor?: string
  className?: string
  inputClass?: string
  maxDate?: DateType
  minDate?: DateType
  calendarColors?: {
    disabled: string
    activeText: string
    text: string
    hoverBgClass: string
    background: string
    border: string
    otherMonth: string
  }
  initialValue?: string
  error?: string
  containerClass?: string
}

const DatePicker: FC<Props> = ({
  onChange,
  onErase,
  disabled = false,
  invalid = false,
  startWeekOn = 'mon',
  label = '',
  emptyLabel = '',
  fillLabel = '',
  invalidText = '',
  displayFormat = 'DD.MM.YYYY',
  i18n,
  accentColor = getCSSVariable('--color-primary'),
  invalidColor = getCSSVariable('--color-danger'),
  maxDate = '',
  minDate = '',
  className,
  inputClass,
  calendarColors = {
    disabled: getCSSVariable('--color-light-3-tint'),
    activeText: getCSSVariable('--color-background'),
    text: getCSSVariable('--color-dark'),
    hoverBgClass: 'hover:bg-light-4-tint',
    background: getCSSVariable('--color-background'),
    border: getCSSVariable('--color-light-4'),
    otherMonth: getCSSVariable('--color-light-dark'),
  },
  initialValue,
  containerClass,
  error,
}) => {
  const [value, setValue] = useState<{
    startDate: string | null
    endDate: string | null
  }>({
    startDate: null,
    endDate: null,
  })

  const locale = 'en'

  useEffect(() => {
    setValue({
      startDate: initialValue || null,
      endDate: initialValue || null,
    })
  }, [initialValue])

  const handleChange = (value: any) => {
    setValue(value)
    onChange(value.startDate)
  }

  const handleErase = () => {
    setValue({
      startDate: null,
      endDate: null,
    })
    onErase?.()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onErase) {
      const target = e.target as HTMLInputElement
      if (target.value === '') {
        onErase()
      }
    }
  }

  return (
    <div className={cx('max-w-[174px] relative', className)}>
      {label && <p className="text-sm text-light-dark mb-1">{label}</p>}
      <div onKeyDown={handleKeyDown}>
        <Datepicker
          readOnly={false}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          displayFormat={displayFormat}
          startWeekOn={startWeekOn}
          invalid={invalid}
          invalidColor={invalidColor}
          invalidText={invalidText}
          emptyLabel={emptyLabel}
          fillLabel={fillLabel}
          i18n={i18n || locale}
          accentColor={accentColor}
          inputClassName={cx(
            'fill-medium icon-fill-medium icon-hover-fill-fo-accent hover-border-fo-accent transition-colors duration-100 border-2 !outline-offset-0 active:outline active:!outline-[1px] active:outline-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent border-color-light-3 text-medium disabled:border-light-3 hover:disabled:border-light-3 disabled:bg-4-tint hover:border-2 hover:disabled:bg-4-tint',
            (invalid || error) && 'outline !outline-[1px] outline-danger',
            inputClass
          )}
          minDate={minDate}
          maxDate={maxDate}
          calendarColors={{
            ...calendarColors,
            hoverBgClass: cx(
              calendarColors.hoverBgClass,
              'hover:disabled:bg-background disabled:cursor-not-allowed'
            ),
          }}
          containerClassName={cx(styles.DatePickerContainer, containerClass)}
        />
      </div>
      {onErase && value.startDate && value.startDate !== '' && (
        <XMarkIcon
          className="cursor-pointer absolute right-3 top-3"
          height={16}
          onClick={handleErase}
        />
      )}
      {error && (
        <p className={cx('text-danger text-xs mt-1 truncate')}>{error}</p>
      )}
    </div>
  )
}

export default DatePicker
