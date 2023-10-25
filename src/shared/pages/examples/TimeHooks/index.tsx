import UTC from 'dayjs/plugin/utc';
import { Link, PageLayout, time } from '@dr.pogodin/react-utils';

time.extend(UTC);

const TimeHooks: React.FunctionComponent = () => {
  const now = time.useCurrent({
    autorefresh: true,
    precision: time.SEC_MS / 10,
  });
  const offset = time.useTimezoneOffset();
  return (
    <PageLayout>
      <Link to="..">&lArr; Content</Link>
      <h1>Time Hooks</h1>
      <div>UTC time: {time.utc(now).format('HH:mm:ss')}</div>
      <div>Local time: {time(now).utcOffset(-offset).format('HH:mm:ss')}</div>
    </PageLayout>
  );
};

export default TimeHooks;
