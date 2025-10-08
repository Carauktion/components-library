import { ArrowType } from './Arrow';
declare const _default: {
    title: string;
    component: import('react').FC<{
        className?: string;
        withBackground?: boolean;
        onClick: () => void;
        arrowType: ArrowType;
        disabled?: boolean;
    }>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        arrowType: {
            control: {
                type: string;
            };
            options: ArrowType[];
            mapping: {
                0: ArrowType;
                1: ArrowType;
                2: ArrowType;
                3: ArrowType;
                4: ArrowType;
            };
        };
    };
};
export default _default;
export declare const ExtraSmall: {
    args: {
        arrowType: ArrowType;
        onClick: () => void;
    };
};
export declare const Small: {
    args: {
        arrowType: ArrowType;
        onClick: () => void;
    };
};
export declare const Medium: {
    args: {
        arrowType: ArrowType;
        onClick: () => void;
    };
};
export declare const Large: {
    args: {
        arrowType: ArrowType;
        onClick: () => void;
    };
};
export declare const Pagination: {
    args: {
        arrowType: ArrowType;
        onClick: () => void;
    };
};
export declare const WithBackground: {
    args: {
        arrowType: ArrowType;
        withBackground: boolean;
        onClick: () => void;
    };
};
export declare const Disabled: {
    args: {
        arrowType: ArrowType;
        disabled: boolean;
        onClick: () => void;
    };
};
//# sourceMappingURL=Arrow.stories.d.ts.map