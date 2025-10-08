import { Dispatch, FC, SetStateAction } from 'react';
export declare enum TabStatus {
    success = "success",
    warning = "warning"
}
export type TabProps = {
    id: string;
    name: string;
    status?: TabStatus;
    counter?: number;
    multistep?: {
        stepsAmount: number;
        currentStep: number;
    };
    hidden?: boolean;
    isSmall?: boolean;
};
interface Props extends TabProps {
    isActive: string;
    layoutId: string;
    onClick: Dispatch<SetStateAction<string>>;
}
declare const Tab: FC<Props>;
export default Tab;
//# sourceMappingURL=Tab.d.ts.map