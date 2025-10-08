import { ReactNode, FC } from 'react';
export declare const Accordion: FC<{
    className?: string;
    innerClassName?: string;
    innerContentClassName?: string;
    label: string;
    labelClassName?: string;
    labelHint?: string;
    icon?: ReactNode;
    value?: string;
    isOpened?: boolean;
    enableOverflow?: boolean;
    children: ReactNode;
    disableOpenHide?: boolean;
    headerRightItem?: ReactNode;
}>;
export declare const AccordionGroup: FC<{
    className?: string;
    initialValue?: string;
    children: ReactNode;
}>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map