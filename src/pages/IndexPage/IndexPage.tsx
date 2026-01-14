import { Placeholder } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <Placeholder
        header="Telegram Mini App"
        description="Приложение готово к работе"
      >
        {/* Здесь будет ваш контент */}
      </Placeholder>
    </Page>
  );
};
