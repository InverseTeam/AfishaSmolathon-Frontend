export interface EventData {
  id: string;
  name: string;
  cover: string;
  description: string;
  date: string;
  total_tickets: string;
  age_limit: string;
  time: string;
  price: number;
  artist: string;
  pushkin_payment: boolean;
  platform: Platform;
  tags: Tags[];
  category: Category[];
  images: Images[];
}

export interface Platform {
  id: number;
  name: string;
  description: string;
  location_data?: string;
}
export interface Tags {
  id: number;
  name: string;
}
export interface Category {
  id: number;
  name: string;
  tags: Tags[];
}

export interface Images {
  id: number;
  image: string;
}

export interface Sights {
  id: string;
  name: string;
  description: string;
  address: string;
  musculoskeletal_disorders: string;
  visual_impairment: string;
  intellectual_impairment: string;
  cover: string;
}
