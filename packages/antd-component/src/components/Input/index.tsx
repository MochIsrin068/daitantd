import styles from "./styles.module.scss";

export interface InputProps {
  value: string;
  placeholder?: string;
}

export const Input = ({
  value,
  placeholder = "Search...",
  ...props
}: InputProps) => {
  return (
    <input
      type="text"
      // style={{ backgroundColor: '#ddd', padding: 6 }}
      className={styles.input}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;