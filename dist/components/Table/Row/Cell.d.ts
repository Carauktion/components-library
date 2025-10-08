import { FC, ReactNode } from 'react';
type Props = {
    children?: ReactNode;
    onMouseEnter?: (e: any) => any;
    onClick?: any;
    title?: string;
    className?: string;
    cellClassName?: string;
    noTruncate?: boolean;
};
declare const Cell: FC<Props>;
export default Cell;
//# sourceMappingURL=Cell.d.ts.map