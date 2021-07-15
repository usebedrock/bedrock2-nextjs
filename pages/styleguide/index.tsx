import Layout from '../../components/layout'
import StyleguideLayout from '../../components/bedrock/styleguide-layout';
import StyleguideSample from "../../components/bedrock/styleguide-sample";

export default function Page() {
  return (
    <div>

      <h3>Style guide</h3>
      <p>Welcome to the style guide. Please choose a component in the menu.</p>

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
