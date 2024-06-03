import type { FC } from 'react';
import { Button } from '@telegram-apps/telegram-ui';
import { useExpand } from '@vkruglikov/react-telegram-web-app';
import './IndexPage.css';

export const IndexPage: FC = () => {
  const [isExpanded, expand] = useExpand();

  return (
    <div><Button onClick={expand}>
    {`isExpanded: ${isExpanded}, call expand()`}
  </Button>
  </div>
  );
};
