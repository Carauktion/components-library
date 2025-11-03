export type AutocompleteOption = {
    name: string;
    value: string | number;
};
type Props = {
    className?: string;
    selectedOption?: AutocompleteOption | null;
    options: AutocompleteOption[];
    error?: any;
    errorMsg?: string;
    onChange: (value: string) => void;
    onSelect: (option: AutocompleteOption | null) => void;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    labelClassName?: string;
    multiple?: boolean;
    onLoadMore?: () => void;
    hasMore?: boolean;
    isLoadingMore?: boolean;
    noResultsLabel?: string;
    clearable?: boolean;
};
declare const Autocomplete: React.FC<Props>;
export default Autocomplete;
//# sourceMappingURL=Autocomplete.d.ts.map