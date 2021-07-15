type Props = {
  align?: string
  children?: React.ReactNode
}

const ToolbarGroup = ({ children, align }: Props) => {
  return (
    <div className={`c-toolbar-group c-toolbar-group--${align}`}>{children}</div>
  );
}

export default ToolbarGroup
