type Props = {
  children?: React.ReactNode,
  title?: string,
  code?: string
}

const StyleguideSample = ({ children, title, code }: Props) => {
  return (
    <div className="br-styleguide-sample">
        <h3>{title}</h3>
        <div className="br-styleguide-sample-inner">{children}</div>
        <pre><code>{code}</code></pre>
    </div>
  );
}

export default StyleguideSample