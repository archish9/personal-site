import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';
import SectionDivider from '../components/SectionDivider';
import SectionHeader from '../components/SectionHeader';
import ArticleItem from '../components/ArticleItem';
import posts from '../post.json';
import styles from './page.module.css';

// Sort posts by date descending and take the last 3
function getRecentPosts(allPosts, count = 3) {
  return [...allPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

// JSON-LD structured data for SEO
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Archish Patel',
    url: 'https://archish.dev',
    jobTitle: 'Senior Full-Stack Developer & AI Engineer',
    description:
      'Senior full-stack engineer with 11+ years of experience building scalable systems, AI-powered applications, and RAG architectures.',
    sameAs: [
      'https://github.com/archish9',
      'https://linkedin.com/in/archishpatel',
    ],
    image: 'https://archish.dev/images/archish-patel.png',
    knowsAbout: [
      'Full-Stack Development',
      'AI Engineering',
      'RAG Architectures',
      'GenAI',
      'Scalable Systems',
    ],
  };
}

export const metadata = {
  title: 'Archish Patel — Senior Full-Stack Developer & AI Engineer',
  description:
    'Archish Patel is a senior full-stack engineer with 11+ years of experience building scalable systems, AI-powered applications, and RAG architectures.',
  alternates: {
    canonical: 'https://archish.dev',
  },
};

export default function HomePage() {
  const recentPosts = getRecentPosts(posts, 3);
  const jsonLd = generateJsonLd();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className={styles.hero} aria-label="Introduction">
        {/* Left: Text */}
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>The Evolving Veteran · 11+ Years</p>
          <h1 className={styles.heroHeading}>
            Hey, I&#39;m Archish.
            <br />
            I build <em>intelligent systems</em>
            <br />
            and write about AI.
          </h1>
          <p className={styles.heroBio}>
            I&#39;m a senior full-stack engineer with over a decade of experience
            building scalable systems, automation tools, and AI-powered
            applications. Recently I&#39;ve been focused on GenAI, RAG
            architectures, and practical AI engineering.
          </p>
          <SocialLinks />
        </div>

        {/* Right: Portrait */}
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/archish-patel.webp"
              alt="Archish Patel — Senior Full-Stack Developer and AI Engineer"
              width={320}
              height={320}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* RECENT WRITING SECTION */}
      <section
        className={styles.writingSection}
        aria-labelledby="writing-title"
      >
        <SectionHeader
          title="Recent writing"
          titleId="writing-title"
          linkHref="/writing"
          linkText="All posts →"
          subtitle="Thoughts on engineering, AI systems, and the craft of building."
        />

        <ol className={styles.articleList} aria-label="Recent articles">
          {recentPosts.map((post, index) => (
            <ArticleItem
              key={post.url}
              title={post.title}
              excerpt={post.description}
              date={post.date}
              url={post.url}
              index={index}
            />
          ))}
        </ol>
      </section>
    </>
  );
}
