import styles from './ui.module.scss';
import { Get } from '../model/index';
import { useEffect, useState } from 'react';
import { Sights } from '@/shared/interfaces/event';
import { Gapped } from '@/shared/gapped/ui/ui';
import Link from 'next/link';
import { MainButton } from '@/entities/buttons/mainButton';
export const SightsCard = () => {
  const [postData, setPostData] = useState<Sights[]>([]);
  useEffect(() => {
    const getEvent = async () => {
      const fetchEvent: Sights[] = await Get();
      setPostData(fetchEvent);
    };
    getEvent();
  }, []);

  return (
    <>
      <div className={styles.cardRenderWrap}>
        {postData &&
          postData.map((event: Sights) => {
            return (
              <Link key={event.id} href={`/admin/sights/${event.id}`}>
                <div className={styles.card}>
                  <div className={styles.cover}>
                    <div
                      style={{
                        backgroundImage: `url(${event.cover})`,
                        display: 'block',
                      }}
                      className={styles.bg}></div>
                  </div>
                  <main className={styles.info}>
                    <Gapped vertical gap="4px">
                      <h2 className={styles.cardTitle}>{event.name}</h2>
                      <MainButton
                        onClick={() => null}
                        height="large"
                        width="fit-content"
                        bgColor="#7AAC5C"
                        textColor="white">
                        Информация
                      </MainButton>
                    </Gapped>
                  </main>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
