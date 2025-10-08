import { FC } from 'react';
import { FilterType, SortState } from '../Sort/Sort';
import { Option } from '../../Select/Select';
type Props = {
    item: {
        id: string;
        name: string;
        state?: SortState;
        filterType?: FilterType;
        options?: Option[];
        value?: string;
    };
    withSeparator?: boolean;
    onChange: (id: string) => void;
    className?: string;
    wrapperClassName?: string;
};
declare const Search: FC<Props>;
export default Search;
//# sourceMappingURL=Search.d.ts.map