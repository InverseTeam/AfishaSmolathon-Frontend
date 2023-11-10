'use client';
import { PageLayout } from '@/shared/layouts/pageLayout';
import { EventPageHeader } from '@/features/eventPageHeader';

import { Gapped } from '@/shared/gapped/ui/ui';
import { useState } from 'react';

import { SightsCard } from '@/features/cards/sights';

export const SightsForm = () => {
  const [moderatorBtnActive, setModeratorBtnActive] = useState<boolean>(true);
  return (
    <>
      <PageLayout>
        <Gapped vertical gap="16px">
          <EventPageHeader
            pageTitle="Достопримечательности"
            rightBtnTitle="Опубликованные"
            setActive={setModeratorBtnActive}
          />
          <SightsCard />
        </Gapped>
      </PageLayout>
    </>
  );
};
