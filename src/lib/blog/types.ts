export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  /** Fecha de última actualización significativa. Si no se define, se usa `date`. */
  dateModified?: string;
  category: string;
  tags: string[];
  readTime: string;
  content: string;
}
