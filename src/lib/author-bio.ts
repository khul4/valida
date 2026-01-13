export const AUTHOR_BIO = {
  name: "Khul Anwar",
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQHif-7tB-iyvg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721016736149?e=1769644800&v=beta&t=OmhelGKv3eUOvr3COMioESeI61iIBSqfflOAk68wqUg",
  role: "SaaS Founder & Digital Marketing Strategist",
  bio: "Khul is a SaaS entrepreneur and digital marketing strategist focused on building and scaling online businesses. As the founder of Arek, he specializes in SEO strategy, marketing automation, and product growth. With extensive experience in the SaaS space, Khul helps businesses choose the right tools and implement effective marketing strategies to drive sustainable growth.",
  fullBio: `**Khul Anwar** is a SaaS entrepreneur and digital marketing strategist with a passion for building and scaling online businesses. As the founder of Arek and multiple other digital ventures, Khul has hands-on experience in selecting and implementing the right SEO tools for different business stages.

With a focus on practical, results-driven marketing strategies, Khul specializes in helping SaaS founders and entrepreneurs navigate the complex landscape of SEO tools and digital marketing platforms. His expertise spans from early-stage startups to established SaaS businesses, with a particular emphasis on tool selection, marketing automation, and sustainable growth strategies.

Khul's approach to SEO and marketing is rooted in real-world experience of building businesses from the ground up, making his insights particularly valuable for entrepreneurs and business owners looking to make informed decisions about their marketing stack.

*Connect with Khul on [LinkedIn](https://www.linkedin.com/in/khulanwar/) or follow his business insights on [X](https://x.com/khulanwar).*

<!-- Image placeholder for author bio -->
<img src="placeholder-author-bio-image" alt="Khul Anwar, SaaS Founder and Digital Marketing Strategist" width="150" height="150" style="border-radius: 50%; float: left; margin: 0 20px 20px 0;" />`,
  social: {
    linkedin: "https://www.linkedin.com/in/khulanwar/",
    x: "https://x.com/khulanwar"
  }
};

export const generateAuthorSchema = (baseUrl: string = "https://arek.pro") => ({
  "@type": "Person",
  "name": AUTHOR_BIO.name,
  "url": `${baseUrl}/about`,
  "sameAs": [
    AUTHOR_BIO.social.linkedin,
    AUTHOR_BIO.social.x
  ]
});