
export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
}
