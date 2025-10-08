export declare enum SortState {
    'None' = "none",
    'Asc' = "asc",
    'Desc' = "desc",
    'Empty' = "empty"
}
export declare enum FilterType {
    'TextInput' = "TextInput",
    'Select' = "Select"
}
type Props = {
    item: {
        id: string;
        name: string;
        state?: SortState;
    };
    withSeparator?: boolean;
    className?: string;
    onClick?: () => void;
};
declare const Sort: React.FC<Props>;
export default Sort;
//# sourceMappingURL=Sort.d.ts.map