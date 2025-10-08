import { default as React } from 'react';
type Props = {
    title: string | React.ReactNode;
    onClose?: () => void;
    afterLeave?: () => void;
    isOpen: boolean;
    innerClassName?: string;
    overlayClassName?: string;
    wrapperClassName?: string;
    children: React.ReactNode;
    headless?: boolean;
};
declare const Modal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map