declare const _default: {
    title: string;
    component: import('react').FC<{
        className?: string;
        dropdownClassName?: string;
        buttonClassName?: string;
        label: string | React.ReactNode;
        items: {
            name: string;
            onClick?: () => void;
            items?: {
                name: string;
                onClick?: () => void;
                items?: /*elided*/ any[];
            }[];
        }[];
        isDisabled?: boolean;
        isLoading?: boolean;
        noArrow?: boolean;
        align?: "start" | "center" | "end";
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
        items: {
            name: string;
            onClick: () => void;
        }[];
    };
};
export declare const WithNestedItems: {
    args: {
        label: string;
        items: ({
            name: string;
            onClick: () => void;
            items?: undefined;
        } | {
            name: string;
            items: {
                name: string;
                onClick: () => void;
            }[];
            onClick?: undefined;
        })[];
    };
};
export declare const Disabled: {
    args: {
        label: string;
        items: {
            name: string;
            onClick: () => void;
        }[];
        isDisabled: boolean;
    };
};
export declare const Loading: {
    args: {
        label: string;
        items: {
            name: string;
            onClick: () => void;
        }[];
        isLoading: boolean;
    };
};
export declare const NoArrow: {
    args: {
        label: string;
        items: {
            name: string;
            onClick: () => void;
        }[];
        noArrow: boolean;
    };
};
export declare const CustomAlignment: {
    args: {
        label: string;
        items: {
            name: string;
            onClick: () => void;
        }[];
        align: string;
    };
};
export declare const LongLabel: {
    args: {
        label: string;
        items: {
            name: string;
            onClick: () => void;
        }[];
    };
};
export declare const ManyItems: {
    args: {
        label: string;
        items: {
            name: string;
            onClick: () => void;
        }[];
    };
};
//# sourceMappingURL=Dropdown.stories.d.ts.map