type Props = {
  children?: React.ReactNode;
}

const ToolbarItem = ({ children }: Props) => {
  return (
    <div className="c-toolbar__item">{children}</div>
  );
}

export default ToolbarItem