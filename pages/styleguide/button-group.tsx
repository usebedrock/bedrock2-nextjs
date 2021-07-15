import Layout from '../../components/layout'
import StyleguideLayout from '../../components/bedrock/styleguide-layout'
import StyleguideSample from "../../components/bedrock/styleguide-sample";

import Button from "../../components/button";
import ButtonGroup from "../../components/button-group";


export default function Page() {
  return (
    <div>

      <h3>Button group</h3>

      <StyleguideSample title="Button group">
        <ButtonGroup>
          <Button skin="primary">I am a button 2</Button>
          <Button>OI</Button>
        </ButtonGroup>
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
