import BedrockPageTree from "./bedrock/page-tree";
import Link from 'next/link'

export default function Layout(props) {
  return (
    <>
      <div id="main-layout-wrapper">
        {props.children}
      </div>

      <BedrockPageTree>

          <ul className="br-page-tree-list">
            <li><Link className="br-page-tree-link" href="/styleguide">Styleguide</Link></li>
          </ul>
          <ul className="br-page-tree-list">
            <li><Link href="/">Page 1</Link></li>
            <li><Link href="/page-2">Page 2</Link></li>
            <li><Link href="/page-3">Page 3</Link></li>
          </ul>

      </BedrockPageTree>
    </>
  );
}
