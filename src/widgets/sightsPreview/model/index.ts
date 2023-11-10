import { instanceLogged } from '@/shared/api/axios';

export const Get = async (id: string) => {
  try {
    const getEvent: any = await instanceLogged.get(`/attractions/${id}/`);
    return getEvent.data;
  } catch (error) {
    return error;
  }
};
