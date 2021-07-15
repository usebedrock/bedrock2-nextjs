import Layout from '../../components/layout'
import StyleguideLayout from '../../components/bedrock/styleguide-layout';
import StyleguideSample from "../../components/bedrock/styleguide-sample";

import Alert from "../../components/alert";

export default function Page() {
  return (
    <div>

      <h3>Alert</h3>

      <StyleguideSample title="Alert (default)" code="&lt;Alert&gt;I am an alert&lt;/Alert&gt;">
        <Alert>I am an alert</Alert>
      </StyleguideSample>

      <StyleguideSample title="Alert (warning)" code="&lt;Alert type=&quot;warning&quot;&gt;I am an alert&lt;/Alert&gt;">
        <Alert type="warning">I am an alert</Alert>
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
