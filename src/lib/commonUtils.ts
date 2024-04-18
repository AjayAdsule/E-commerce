export interface Carousel {
  href: string;
  src: string;
}

export const DesktopCarouselData: Carousel[] = [
  {
    href: '/men',
    src: '/assets/men.png',
  },
  {
    href: '/men1',
    src: '/assets/men2.png',
  },
  {
    href: '/women',
    src: '/assets/women.webp',
  },
  {
    href: '/women1',
    src: '/assets/women1.webp',
  },
];

export const MobileCarouselData: Carousel[] = [
  {
    href: '/men',
    src: '/assets/men_mob.jpg',
  },
  {
    href: '/men1',
    src: '/assets/men_2_mob.png',
  },
  {
    href: '/women',
    src: '/assets/women_mob.jpg',
  },
  {
    href: '/women1',
    src: '/assets/women_1_mob.webp',
  },
];

export interface ProductData {
  id: number;
  name: string;
  detail: string;
  price: number;
  discountPrice: number;
  src: string;
}

export const trendingData: ProductData[] = [
  {
    id: 1,
    name: 'Nike',
    detail: 'Nike shoes',
    price: 3999,
    discountPrice: 1999,
    src: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26616554/2024/4/1/75444f14-e9b6-4f94-b8bf-e6c9533398611711973156350-Nautica-Men-Shirts-1501711973155805-1.jpg',
  },
  {
    id: 2,
    name: 'Nike',
    detail: 'Nike shoes',
    price: 3999,
    discountPrice: 1999,
    src: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26616554/2024/4/1/75444f14-e9b6-4f94-b8bf-e6c9533398611711973156350-Nautica-Men-Shirts-1501711973155805-1.jpg',
  },
  {
    id: 3,
    name: 'Nike',
    detail: 'Nike shoes',
    price: 3999,
    discountPrice: 1999,
    src: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26616554/2024/4/1/75444f14-e9b6-4f94-b8bf-e6c9533398611711973156350-Nautica-Men-Shirts-1501711973155805-1.jpg',
  },
  {
    id: 4,
    name: 'Nike',
    detail: 'Nike shoes',
    price: 3999,
    discountPrice: 1999,
    src: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26616554/2024/4/1/75444f14-e9b6-4f94-b8bf-e6c9533398611711973156350-Nautica-Men-Shirts-1501711973155805-1.jpg',
  },
  {
    id: 5,
    name: 'Nike',
    detail: 'Nike shoes',
    price: 3999,
    discountPrice: 1999,
    src: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26616554/2024/4/1/75444f14-e9b6-4f94-b8bf-e6c9533398611711973156350-Nautica-Men-Shirts-1501711973155805-1.jpg',
  },
];
