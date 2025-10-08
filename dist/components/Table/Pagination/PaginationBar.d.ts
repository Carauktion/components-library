import { FC } from 'react';
import { Option } from '../../Select/Select';
export declare const defaultSizeOptions: Option[];
type Props = {
    className?: string;
    pagesAmount?: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onSizeChange: any;
    onListClick?: () => void;
    onDocumentClick?: () => void;
    onSaveClick?: () => void;
    currentSize: number;
    dropdownClassName?: string;
    optionClassName?: string;
    sizeOptions?: Option[];
};
declare const PaginationBar: FC<Props>;
export default PaginationBar;
//# sourceMappingURL=PaginationBar.d.ts.map