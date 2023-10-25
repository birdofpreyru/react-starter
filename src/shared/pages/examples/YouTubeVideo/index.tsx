import { Link, PageLayout, YouTubeVideo } from '@dr.pogodin/react-utils';

const YouTubeVideoExample: React.FunctionComponent = () => (
  <PageLayout>
    <Link to="..">&lArr; Content</Link>
    <h1>YouTube video example</h1>
    <YouTubeVideo
      src="https://youtu.be/NdF6Rmt6Ado"
    />
  </PageLayout>
);

export default YouTubeVideoExample;
