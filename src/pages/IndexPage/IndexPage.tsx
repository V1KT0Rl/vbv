import { Steps, Button, Placeholder } from '@telegram-apps/telegram-ui';
import { miniApp } from "@tma.js/sdk";
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';
import { useLaunchParams } from '@tma.js/sdk-react';

export const IndexPage: FC = () => {
  const i = useLaunchParams();
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
      <Placeholder
        description="Description"
        header="Title"
      >
        <img
          alt="Telegram sticker"
          className="blt0jZBzpxuR4oDhJc8s"
          src="https://xelene.me/telegram.gif"
        />
      </Placeholder>
      <p>{JSON.stringify(i)}</p>
    </Page>
  );
};
