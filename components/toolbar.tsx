type Props = {
  children?: React.ReactNode;
}

const Toolbar = ({ children }: Props) => {
  return (
    <div className="c-toolbar">{children}</div>
  );
}

export default Toolbar