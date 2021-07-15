import Layout from '../../components/layout'
import StyleguideLayout from '../../components/bedrock/styleguide-layout';
import StyleguideSample from "../../components/bedrock/styleguide-sample";

import Avatar from "../../components/avatar";

export default function Page() {
  return (
    <div>

      <h3>Avatar</h3>

      <StyleguideSample title="Avatar" code="&lt;Avatar initials=&quot;JR&quot;/&gt;">
        <Avatar initials="JR"/>
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

