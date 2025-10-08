declare const _default: {
    title: string;
    component: import('react').FC<import('./Message').Message & {
        onClose?: () => void;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Success: {
    args: {
        id: string;
        type: string;
        title: string;
        content: string;
        onClose: () => void;
    };
};
export declare const Warning: {
    args: {
        id: string;
        type: string;
        title: string;
        content: string;
        onClose: () => void;
    };
};
export declare const Error: {
    args: {
        id: string;
        type: string;
        title: string;
        content: string;
        onClose: () => void;
    };
};
export declare const SuccessWithoutContent: {
    args: {
        id: string;
        type: string;
        title: string;
        onClose: () => void;
    };
};
export declare const WarningWithoutContent: {
    args: {
        id: string;
        type: string;
        title: string;
        onClose: () => void;
    };
};
export declare const ErrorWithoutContent: {
    args: {
        id: string;
        type: string;
        title: string;
        onClose: () => void;
    };
};
export declare const WithoutCloseButton: {
    args: {
        id: string;
        type: string;
        title: string;
        content: string;
    };
};
export declare const WithReactContent: {
    args: {
        id: string;
        type: string;
        title: string;
        content: import("react/jsx-runtime").JSX.Element;
        onClose: () => void;
    };
};
//# sourceMappingURL=Message.stories.d.ts.map