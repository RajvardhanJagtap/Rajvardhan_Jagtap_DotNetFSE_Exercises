// Shared course model for the student course portal.
export interface Course {
  id?: number;
  title: string;
  category: string;
  instructor: string;
  duration: string;
  price: number;
  description: string;
  featured?: boolean;
  startDate?: string;
}
