declare const _default: {
    title: string;
    component: import('react').FC<{
        className?: string;
        inputClassName?: string;
        id?: string;
        placeholder?: string;
        label?: string;
        name?: string;
        value?: string;
        onChange?: (value: string) => void;
        error?: string;
        disabled?: boolean;
        register?: any;
        isRequired?: boolean;
        actionLabel?: string;
        actionPosition?: "left" | "right";
        onActionClick?: () => void;
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
        onChange: (value: string) => void;
    };
};
export declare const WithLabel: {
    args: {
        label: string;
        placeholder: string;
        onChange: (value: string) => void;
    };
};
export declare const WithRequired: {
    args: {
        label: string;
        placeholder: string;
        isRequired: boolean;
        onChange: (value: string) => void;
    };
};
export declare const WithValue: {
    args: {
        label: string;
        placeholder: string;
        value: string;
        onChange: (value: string) => void;
    };
};
export declare const WithError: {
    args: {
        label: string;
        placeholder: string;
        error: string;
        onChange: (value: string) => void;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        placeholder: string;
        disabled: boolean;
        onChange: (value: string) => void;
    };
};
export declare const WithActionButton: {
    args: {
        label: string;
        placeholder: string;
        actionLabel: string;
        actionPosition: string;
        onActionClick: () => void;
        onChange: (value: string) => void;
    };
};
export declare const WithActionButtonLeft: {
    args: {
        label: string;
        placeholder: string;
        actionLabel: string;
        actionPosition: string;
        onActionClick: () => void;
        onChange: (value: string) => void;
    };
};
export declare const WithErrorAndAction: {
    args: {
        label: string;
        placeholder: string;
        error: string;
        actionLabel: string;
        actionPosition: string;
        onActionClick: () => void;
        onChange: (value: string) => void;
    };
};
//# sourceMappingURL=Textarea.stories.d.ts.map