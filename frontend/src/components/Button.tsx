import { ButtonHTMLAttributes, CSSProperties } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  style?: CSSProperties;
}

function Btn({ children, style, ...rest }: BtnProps) {
  return (
    <button
      style={{
        padding: "5px 25px",
        borderRadius: "2.5px",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        fontWeight: 600,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Btn;
