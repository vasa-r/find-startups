interface Author {
  _id: number;
  name: string;
  image: string;
}

export interface StartupCardType {
  _createdAt: Date;
  views: number;
  author: Author;
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}
