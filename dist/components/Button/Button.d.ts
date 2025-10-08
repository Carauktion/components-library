type Props = {
    className?: string;
    iconClassName?: string;
    label?: string;
    onClick?: () => void;
    isPrimary?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onMouseUp?: () => void;
};
declare const Button: React.FC<Props>;
export default Button;
//# sourceMappingURL=Button.d.ts.map