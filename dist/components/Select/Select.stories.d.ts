declare const _default: {
    title: string;
    component: import('react').FC<{
        className?: string;
        inputClassName?: string;
        optionClassName?: string;
        beforeOptionName?: string;
        tickClassName?: string;
        dropdownClassName?: string;
        name?: string;
        selectedOption: import('./Select').Option | import('./Select').Option[] | null;
        options: import('./Select').Option[];
        error?: any;
        onChange: (option: import('./Select').Option) => void;
        label?: string;
        placeholder?: string;
        noOptionsLabel?: string;
        required?: boolean;
        isDisabled?: boolean;
        multiple?: boolean;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Default: {
    args: {
        placeholder: string;
        options: {
            name: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        onChange: (option: any) => void;
    };
};
export declare const WithLabel: {
    args: {
        label: string;
        placeholder: string;
        options: {
            name: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        onChange: (option: any) => void;
    };
};
export declare const WithRequired: {
    args: {
        label: string;
        placeholder: string;
        options: {
            name: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        required: boolean;
        onChange: (option: any) => void;
    };
};
export declare const Selected: {
    args: {
        placeholder: string;
        options: {
            name: string;
            unavailable: boolean;
        }[];
        selectedOption: {
            name: string;
            unavailable: boolean;
        };
        onChange: (option: any) => void;
    };
};
export declare const Disabled: {
    args: {
        placeholder: string;
        options: {
            name: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        isDisabled: boolean;
        onChange: (option: any) => void;
    };
};
export declare const WithError: {
    args: {
        label: string;
        placeholder: string;
        options: {
            name: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        error: string;
        onChange: (option: any) => void;
    };
};
export declare const WithImages: {
    args: {
        label: string;
        placeholder: string;
        options: {
            name: string;
            image: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        onChange: (option: any) => void;
    };
};
export declare const WithOtherText: {
    args: {
        label: string;
        placeholder: string;
        options: {
            name: string;
            other: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        onChange: (option: any) => void;
    };
};
export declare const WithBeforeOptionName: {
    args: {
        label: string;
        placeholder: string;
        options: {
            name: string;
            unavailable: boolean;
        }[];
        selectedOption: null;
        beforeOptionName: string;
        onChange: (option: any) => void;
    };
};
export declare const NoOptions: {
    args: {
        label: string;
        placeholder: string;
        options: never[];
        selectedOption: null;
        noOptionsLabel: string;
        onChange: (option: any) => void;
    };
};
//# sourceMappingURL=Select.stories.d.ts.map