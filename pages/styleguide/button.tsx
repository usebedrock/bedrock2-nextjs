import Layout from '../../components/layout'
import StyleguideSample from "../../components/bedrock/styleguide-sample";
import StyleguideLayout from '../../components/bedrock/styleguide-layout';
import Button from "../../components/button";

export default function Page() {
  return (
    <div>

      <h3>Button</h3>

      <StyleguideSample title="Button">
        <Button>I am a button</Button>
      </StyleguideSample>

      <StyleguideSample title="Primary button">
        <Button skin="primary">I am a primary button</Button>
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
