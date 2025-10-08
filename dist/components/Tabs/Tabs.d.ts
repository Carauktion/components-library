import { Dispatch, FC, SetStateAction } from 'react';
import { TabProps } from './Tab/Tab';
type Props = {
    className?: string;
    isSmall?: boolean;
    layoutId: string;
    items: TabProps[];
    isActive: string;
    onClick: Dispatch<SetStateAction<string>>;
};
declare const Tabs: FC<Props>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map