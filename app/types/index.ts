export interface PricingPlan {
  id: string;
  tier: string;
  price: string;
  title: string;
  features: string[];
}
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  name: string;
  username: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
