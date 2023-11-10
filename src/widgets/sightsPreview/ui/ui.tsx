import styles from './ui.module.scss';
import { useState, useEffect } from 'react';
import { Get } from '../model';
import { Button, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import { useRouter } from 'next/navigation';
import { Sights } from '@/shared/interfaces/event';

export const SightPreview = ({ id }: { id: number }) => {
  const [data, setData] = useState<Sights | null>(null);
  const router = useRouter();
  useEffect(() => {
    const getEvent = async () => {
      const fetchEvent: Sights = await Get(id.toString());
      setData(fetchEvent);
    };
    getEvent();
  }, [id]);

  return (
    <>
      <ThemeContext.Provider value={myTheme}>
        <div className={styles.layout}>
          <h2 className={styles.title}>{data?.name}</h2>
          <h4 className={styles.address}>{data?.address}</h4>
          <div
            className={styles.cover}
            style={{
              backgroundImage: `url(${data?.cover})`,
              display: 'block',
            }}></div>
          <p className={styles.description}>{data?.description}</p>
          <Button onClick={() => router.back()} width={'80%'} size="large">
            Назад
          </Button>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

const myTheme = ThemeFactory.create({
  borderColorFocus: '#7AAC5C',
  btnBorderRadiusLarge: '8px',
});
