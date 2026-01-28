// Central author data management
// Add new authors here

export interface Author {
  name: string;
  slug: string;
  avatar: string;
  role: string;
  bio: string;
  fullBio: string;
  expertise: string[];
  social: {
    linkedin: string;
    twitter: string;
  };
}

export const AUTHORS_DATA: Record<string, Author> = {
  'khul-anwar': {
    name: 'Khul Anwar',
    slug: 'khul-anwar',
    avatar: '/profile-khulanwar.jpg',
    role: 'SaaS Founder & Digital Marketing Strategist',
    bio: 'Khul is a SaaS entrepreneur and digital marketing strategist focused on building and scaling online businesses. As the founder of Arek, he specializes in SEO strategy, marketing automation, and product growth.',
    fullBio: 'Khul Anwar is a SaaS entrepreneur and digital marketing strategist with a passion for building and scaling online businesses. As the founder of Arek and multiple other digital ventures, Khul has hands-on experience in selecting and implementing the right SEO tools for different business stages. With a focus on practical, results-driven marketing strategies, Khul specializes in helping SaaS founders and entrepreneurs navigate the complex landscape of SEO tools and digital marketing platforms.',
    expertise: ['SEO Strategy', 'SaaS Marketing', 'Content Marketing', 'Marketing Automation', 'Product Growth'],
    social: {
      linkedin: 'https://www.linkedin.com/in/khulanwar/',
      twitter: 'https://x.com/khulanwar'
    }
  }
  // Add more authors here as you expand your team
};

// Helper function to get author by name
export function getAuthorByName(name: string): Author | undefined {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  return AUTHORS_DATA[slug];
}

// Helper function to get all authors
export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS_DATA);
}
