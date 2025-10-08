declare const _default: {
    title: string;
    component: import('react').FC<{
        className?: string;
        innerClassName?: string;
        innerContentClassName?: string;
        label: string;
        labelClassName?: string;
        labelHint?: string;
        icon?: import('react').ReactNode;
        value?: string;
        isOpened?: boolean;
        enableOverflow?: boolean;
        children: import('react').ReactNode;
        disableOpenHide?: boolean;
        headerRightItem?: import('react').ReactNode;
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
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const WithIcon: {
    args: {
        label: string;
        icon: import("react/jsx-runtime").JSX.Element;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const WithHint: {
    args: {
        label: string;
        labelHint: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const InitiallyOpen: {
    args: {
        label: string;
        isOpened: boolean;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        disableOpenHide: boolean;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const WithHeaderRightItem: {
    args: {
        label: string;
        headerRightItem: import("react/jsx-runtime").JSX.Element;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const AccordionGroupExample: {
    render: () => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=Accordion.stories.d.ts.map