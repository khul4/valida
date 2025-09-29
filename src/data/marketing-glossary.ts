export type GlossaryTerm = {
  term: string;
  definition: string;
  category?: string;
};

export const marketingGlossary: GlossaryTerm[] = [
  {
    term: 'A/B Testing',
    definition: 'A method of comparing two versions of a webpage or app against each other to determine which one performs better.',
    category: 'Analytics',
  },
  {
    term: 'Bounce Rate',
    definition: 'The percentage of visitors who navigate away from the site after viewing only one page.',
    category: 'Analytics',
  },
  {
    term: 'Conversion Rate',
    definition: 'The percentage of users who take a desired action, such as making a purchase or filling out a form.',
    category: 'Analytics',
  },
  {
    term: 'CPC (Cost Per Click)',
    definition: 'The amount paid by an advertiser for each click on their ad.',
    category: 'Advertising',
  },
  {
    term: 'CTR (Click-Through Rate)',
    definition: 'The ratio of users who click on a specific link to the number of total users who view a page, email, or advertisement.',
    category: 'Advertising',
  },
  {
    term: 'Impression',
    definition: 'A single instance of an online ad being displayed.',
    category: 'Advertising',
  },
  {
    term: 'Keyword',
    definition: 'A word or phrase that is used to match ads with terms people are searching for.',
    category: 'SEO',
  },
  {
    term: 'Organic Traffic',
    definition: 'Visitors who come to your website as a result of unpaid search results.',
    category: 'SEO',
  },
  {
    term: 'PPC (Pay Per Click)',
    definition: 'An online advertising model in which advertisers pay each time a user clicks on one of their online ads.',
    category: 'Advertising',
  },
  {
    term: 'SERP (Search Engine Results Page)',
    definition: 'The page displayed by a search engine in response to a query by a searcher.',
    category: 'SEO',
  },
];