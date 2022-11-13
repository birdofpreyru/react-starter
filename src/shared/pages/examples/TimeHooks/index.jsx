import UTC from 'dayjs/plugin/utc';
import { Link, PageLayout, time } from '@dr.pogodin/react-utils';

time.extend(UTC);

export default function TimeHooks() {
  const now = time.useCurrent({
    autorefresh: true,
    precision: time.SEC_MS / 3,
  });
  const offset = time.useTimezoneOffset();
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Time Hooks</h1>
      <div>UTC time: {time.utc(now).format('HH:mm:ss')}</div>
      <div>Local time: {time.utc(now + offset).format('HH:mm:ss')}</div>
    </PageLayout>
  );
}
