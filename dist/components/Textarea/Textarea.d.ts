import { FC } from 'react';
type Props = {
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
    actionPosition?: 'left' | 'right';
    onActionClick?: () => void;
};
declare const Textarea: FC<Props>;
export default Textarea;
//# sourceMappingURL=Textarea.d.ts.map