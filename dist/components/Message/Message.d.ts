export type Message = {
    id: string;
    type: 'success' | 'warning' | 'error';
    title: string;
    content?: string | React.ReactNode;
    className?: string;
};
type Props = Message & {
    onClose?: () => void;
};
declare const Message: React.FC<Props>;
export default Message;
//# sourceMappingURL=Message.d.ts.map