type ButtonProps = {
  color?: "primary" | "secondary";
  style?: React.CSSProperties;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  color = "primary",
  style,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      style={{
        padding: "0 16px",
        height: "40px",
        backgroundColor: color === "primary" ? "#f50076" : "#773752",
        color: "white",
        borderRadius: "4px",
        fontSize: "14px",
        outline: "none",
        border: "none",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
