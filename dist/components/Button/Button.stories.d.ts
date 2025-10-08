declare const _default: {
    title: string;
    component: import('react').FC<{
        className?: string;
        iconClassName?: string;
        label?: string;
        onClick?: () => void;
        isPrimary?: boolean;
        isLoading?: boolean;
        icon?: React.ReactNode;
        isDisabled?: boolean;
        type?: "button" | "submit" | "reset";
        onMouseUp?: () => void;
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
        onClick: () => void;
    };
};
export declare const Primary: {
    args: {
        label: string;
        isPrimary: boolean;
        onClick: () => void;
    };
};
export declare const WithIcon: {
    args: {
        label: string;
        icon: import("react/jsx-runtime").JSX.Element;
        onClick: () => void;
    };
};
export declare const PrimaryWithIcon: {
    args: {
        label: string;
        isPrimary: boolean;
        icon: import("react/jsx-runtime").JSX.Element;
        onClick: () => void;
    };
};
export declare const Loading: {
    args: {
        label: string;
        isLoading: boolean;
        onClick: () => void;
    };
};
export declare const PrimaryLoading: {
    args: {
        label: string;
        isPrimary: boolean;
        isLoading: boolean;
        onClick: () => void;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        isDisabled: boolean;
        onClick: () => void;
    };
};
export declare const PrimaryDisabled: {
    args: {
        label: string;
        isPrimary: boolean;
        isDisabled: boolean;
        onClick: () => void;
    };
};
export declare const IconOnly: {
    args: {
        icon: import("react/jsx-runtime").JSX.Element;
        onClick: () => void;
    };
};
//# sourceMappingURL=Button.stories.d.ts.map