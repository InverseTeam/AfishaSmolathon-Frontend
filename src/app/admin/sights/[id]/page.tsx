'use client';

import { Gapped } from '@/shared/gapped/ui/ui';
import { SightPreview } from '@/widgets/sightsPreview';
export default function EditEvent({ params }: { params: { id: number } }) {
  
  return (
    <>
      <Gapped vertical gap="32px">
        <main>
          <SightPreview id={params.id} />
        </main>
      </Gapped>
    </>
  );
}
