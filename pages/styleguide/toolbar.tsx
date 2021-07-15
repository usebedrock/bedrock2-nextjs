import Layout from '../../components/layout'
import StyleguideLayout from '../../components/bedrock/styleguide-layout';
import StyleguideSample from "../../components/bedrock/styleguide-sample";

import Toolbar from "../../components/toolbar";
import ToolbarGroup from "../../components/toolbar-group";
import ToolbarItem from "../../components/toolbar-item";

import Button from "../../components/button";

export default function Page() {
  return (
    <div>

      <h3>Toolbar</h3>

      <StyleguideSample title="Toolbar" code="&lt;Toolbar&gt;
  &lt;ToolbarGroup align=&quot;left&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;Button&gt;I am a button on the left&lt;/Button&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;
  &lt;ToolbarGroup align=&quot;right&quot;&gt;
    &lt;ToolbarItem&gt;
      &lt;Button&gt;I am a button on the right&lt;/Button&gt;
    &lt;/ToolbarItem&gt;
  &lt;/ToolbarGroup&gt;">
        <Toolbar>
          <ToolbarGroup align="left">
            <ToolbarItem>
              <Button>I am a button on the left</Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup align="right">
            <ToolbarItem>
              <Button>I am a button on the right</Button>
            </ToolbarItem>
          </ToolbarGroup>
        </Toolbar>

      </StyleguideSample>
    </div>
  );
}

Page.getLayout = (page) => (
  <Layout>
    <StyleguideLayout>
      {page}
    </StyleguideLayout>
  </Layout>
)



