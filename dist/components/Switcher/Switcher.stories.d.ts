declare const _default: {
    title: string;
    component: import('react').FC<{
        className?: string;
        enabled: boolean;
        isDisabled?: boolean;
        onChange: () => void;
        label?: string;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Default: {
    args: {
        enabled: boolean;
        onChange: () => void;
    };
};
export declare const WithLabel: {
    args: {
        enabled: boolean;
        label: string;
        onChange: () => void;
    };
};
export declare const Enabled: {
    args: {
        enabled: boolean;
        label: string;
        onChange: () => void;
    };
};
export declare const Disabled: {
    args: {
        enabled: boolean;
        label: string;
        isDisabled: boolean;
        onChange: () => void;
    };
};
export declare const DisabledEnabled: {
    args: {
        enabled: boolean;
        label: string;
        isDisabled: boolean;
        onChange: () => void;
    };
};
export declare const LongLabel: {
    args: {
        enabled: boolean;
        label: string;
        onChange: () => void;
    };
};
//# sourceMappingURL=Switcher.stories.d.ts.map