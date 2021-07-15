type Props = {
  children?: React.ReactNode;
}

const ButtonGroup = ({ children }: Props) => {
  return (
    <div className="t-button-group">{children}</div>
  );
}

export default ButtonGroup