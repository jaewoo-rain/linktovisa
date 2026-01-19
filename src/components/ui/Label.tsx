type LabelProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Label({ children, className = "" }: LabelProps) {
    return (
        <label
            className={`block text-base font-bold mb-2 ${className}`}
        >
            {children}
        </label>
    );
}
