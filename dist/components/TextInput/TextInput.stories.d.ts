declare const _default: {
    title: string;
    component: import('react').ForwardRefExoticComponent<{
        className?: string;
        inputClassName?: string;
        label?: string;
        subLabel?: string;
        id?: string;
        placeholder?: string;
        name?: string;
        type?: import('react').HTMLInputTypeAttribute;
        isRequired?: boolean;
        value?: string | number;
        onChange?: (e: any) => void;
        onInput?: (e: any) => void;
        onKeyDown?: (e: any) => void;
        onKeyUp?: (e: any) => void;
        onFocus?: (e: any) => void;
        onBlur?: (e: any) => void;
        onBeforeInput?: (e: any) => void;
        supportingText?: string;
        supportingTextWidth?: number;
        error?: any;
        actionLabel?: string;
        actionPosition?: "left" | "right";
        onActionClick?: () => void;
        disabled?: boolean;
        withoutErrorMessage?: boolean;
        icon?: import('react').ReactNode;
        iconClassName?: string;
        onIconClick?: () => void;
        readOnly?: boolean;
        warning?: string;
    } & import('react').RefAttributes<HTMLInputElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Default: {
    args: {
        label: string;
        placeholder: string;
    };
};
export declare const WithValue: {
    args: {
        label: string;
        value: string;
        placeholder: string;
    };
};
export declare const Required: {
    args: {
        label: string;
        isRequired: boolean;
        placeholder: string;
    };
};
export declare const WithSubLabel: {
    args: {
        label: string;
        subLabel: string;
        placeholder: string;
    };
};
export declare const WithError: {
    args: {
        label: string;
        placeholder: string;
        error: string;
    };
};
export declare const WithWarning: {
    args: {
        label: string;
        placeholder: string;
        warning: string;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        placeholder: string;
        disabled: boolean;
    };
};
export declare const WithIcon: {
    args: {
        label: string;
        placeholder: string;
        icon: import("react/jsx-runtime").JSX.Element;
        onIconClick: () => void;
    };
};
export declare const WithSupportingText: {
    args: {
        label: string;
        supportingText: string;
        placeholder: string;
    };
};
export declare const WithAction: {
    args: {
        label: string;
        placeholder: string;
        actionLabel: string;
        onActionClick: () => void;
    };
};
export declare const ReadOnly: {
    args: {
        label: string;
        value: string;
        readOnly: boolean;
    };
};
//# sourceMappingURL=TextInput.stories.d.ts.map