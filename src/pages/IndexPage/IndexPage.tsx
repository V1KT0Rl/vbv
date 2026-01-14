import { Placeholder } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';
import { useLaunchParams } from '@tma.js/sdk-react';

export const IndexPage: FC = () => {
  const i = useLaunchParams();
  return (
    <Page back={false}>
      <Placeholder
        header="Telegram Mini App"
        description="Приложение готово к работе"
      >
      <p>{JSON.stringify(i)}</p>
      </Placeholder>
    </Page>
  );
};
