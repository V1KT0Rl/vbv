import { Placeholder, Steps, Button, } from '@telegram-apps/telegram-ui';
import {miniApp} from "@tma.js/sdk";
import type { FC } from 'react';

import { Page} from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <Steps
        count={10}
        progress={5}
      />
      <Button
        mode="filled"
        size="s"
        onClick={() => {
          miniApp.close();
        }}
      >
        Action
      </Button>
    </Page>
  );
};
