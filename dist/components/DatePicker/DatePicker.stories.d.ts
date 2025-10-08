import { LANGUAGES } from '../../enums/LANGUAGES';
declare const _default: {
    title: string;
    component: import('react').FC<{
        label?: string;
        emptyLabel?: string;
        fillLabel?: string;
        onChange: (value: string) => void;
        onErase?: () => void;
        disabled?: boolean;
        invalid?: boolean;
        invalidText?: string;
        invalidColor?: string;
        startWeekOn?: "mon" | "sun";
        displayFormat?: string;
        i18n?: LANGUAGES | string;
        accentColor?: string;
        className?: string;
        inputClass?: string;
        maxDate?: string | Date | null;
        minDate?: string | Date | null;
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
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Default: {
    args: {
        label: string;
        onChange: (value: string) => void;
    };
};
export declare const WithInitialValue: {
    args: {
        label: string;
        initialValue: string;
        onChange: (value: string) => void;
    };
};
export declare const WithEraseButton: {
    args: {
        label: string;
        initialValue: string;
        onChange: (value: string) => void;
        onErase: () => void;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        disabled: boolean;
        onChange: (value: string) => void;
    };
};
export declare const WithError: {
    args: {
        label: string;
        error: string;
        onChange: (value: string) => void;
    };
};
export declare const WithMinMaxDate: {
    args: {
        label: string;
        minDate: string;
        maxDate: string;
        onChange: (value: string) => void;
    };
};
export declare const CustomFormat: {
    args: {
        label: string;
        displayFormat: string;
        onChange: (value: string) => void;
    };
};
export declare const StartWeekOnSunday: {
    args: {
        label: string;
        startWeekOn: string;
        onChange: (value: string) => void;
    };
};
export declare const GermanLocale: {
    args: {
        label: string;
        i18n: LANGUAGES;
        onChange: (value: string) => void;
    };
};
export declare const FrenchLocale: {
    args: {
        label: string;
        i18n: LANGUAGES;
        onChange: (value: string) => void;
    };
};
//# sourceMappingURL=DatePicker.stories.d.ts.map