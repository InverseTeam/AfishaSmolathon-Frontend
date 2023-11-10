'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
import { SightsForm } from '@/widgets/sightsRender';
export default function Home() {
  return (
    <>
      <Gapped style={{ width: '100%', display: 'flex' }} vertical gap="0px">
        <SightsForm />
      </Gapped>
    </>
  );
}
