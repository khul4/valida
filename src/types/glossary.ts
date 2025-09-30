export type GlossarySection = {
  title?: string;
  content?: string;
  type?: 'text' | 'list';
  items?: string[];
} & (
  | { type?: 'text'; content: string }
  | { type: 'list'; items: string[] }
);

export type GlossaryContent = {
  sections: GlossarySection[];
};

export type GlossaryTerm = {
  term: string;
  slug: string;
  definition: string;
  category: string;
  content?: GlossaryContent;
};

export type GlossaryCategory = {
  name: string;
  slug: string;
  description: string;
};