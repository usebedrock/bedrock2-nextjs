import Link from 'next/link';

export default function StyleguideLayout(props) {
  return (
    <div className="br-styleguide-wrapper">
      <div className="br-styleguide__sidebar">
        <h3>Components</h3>
        <ul className="br-component-tree-list">
          <li><Link href="/styleguide/alert">Alert</Link></li>
          <li><Link href="/styleguide/avatar">Avatar</Link></li>
          <li><Link href="/styleguide/button">Button</Link></li>
          <li><Link href="/styleguide/button-group">Button group</Link></li>
          <li><Link href="/styleguide/toolbar">Toolbar</Link></li>
        </ul>
      </div>
      <div className="br-styleguide__content">
        {props.children}
      </div>
    </div>
  );
}
