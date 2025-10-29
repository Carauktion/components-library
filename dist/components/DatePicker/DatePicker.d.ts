import { FC } from 'react';
import { LANGUAGES } from '../../enums/LANGUAGES';
type DateType = string | null | Date;
type Props = {
    label?: string;
    emptyLabel?: string;
    fillLabel?: string;
    onChange: (value: string) => void;
    onErase?: () => void;
    disabled?: boolean;
    invalid?: boolean;
    invalidText?: string;
    invalidColor?: string;
    startWeekOn?: 'mon' | 'sun';
    displayFormat?: string;
    i18n?: LANGUAGES | string;
    accentColor?: string;
    className?: string;
    inputClass?: string;
    maxDate?: DateType;
    minDate?: DateType;
    calendarColors?: {
        disabled: string;
        activeText: string;
        text: string;
        hoverBgClass: string;
        background: string;
        border: string;
        otherMonth: string;
    };
    initialValue?: string;
    error?: string;
    containerClass?: string;
    direction?: 'left' | 'right';
};
declare const DatePicker: FC<Props>;
export default DatePicker;
//# sourceMappingURL=DatePicker.d.ts.map