import { FC } from 'react';
export declare enum ArrowType {
    ExtraSmall = 0,
    Small = 1,
    Medium = 2,
    Large = 3,
    Pagination = 4
}
type Props = {
    className?: string;
    withBackground?: boolean;
    onClick: () => void;
    arrowType: ArrowType;
    disabled?: boolean;
};
declare const Arrow: FC<Props>;
export default Arrow;
//# sourceMappingURL=Arrow.d.ts.map