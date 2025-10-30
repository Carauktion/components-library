import { FC } from 'react';
export type Option = {
    name: string;
    value?: any;
    unavailable?: boolean;
    image?: string;
    other?: string;
};
type Props = {
    className?: string;
    inputClassName?: string;
    optionClassName?: string;
    beforeOptionName?: string;
    tickClassName?: string;
    dropdownClassName?: string;
    name?: string;
    selectedOption: Option | Option[] | null;
    options: Option[];
    error?: any;
    onChange: (option: Option | null) => void;
    label?: string;
    placeholder?: string;
    noOptionsLabel?: string;
    required?: boolean;
    isDisabled?: boolean;
    multiple?: boolean;
    clearable?: boolean;
};
declare const Select: FC<Props>;
export default Select;
//# sourceMappingURL=Select.d.ts.map