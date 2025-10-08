type Props = {
    className?: string;
    dropdownClassName?: string;
    buttonClassName?: string;
    label: string | React.ReactNode;
    items: {
        name: string;
        onClick?: () => void;
        items?: Props['items'];
    }[];
    isDisabled?: boolean;
    isLoading?: boolean;
    noArrow?: boolean;
    align?: 'start' | 'center' | 'end';
};
declare const Dropdown: React.FC<Props>;
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map