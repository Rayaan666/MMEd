import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { editorialPosts } from '../data/editorialPosts';

const formatDate = (date) => new Intl.DateTimeFormat('en-AE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date(`${date}T00:00:00`));

const BlogArticle = () => {
  const { slug } = useParams();
  const post = editorialPosts.find((article) => article.slug === slug);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 pt-28 text-center text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold">MME Journal</p>
          <h1 className="mt-5 text-4xl font-display font-semibold">Article not found</h1>
          <Link to="/blogs" className="mt-8 inline-flex items-center gap-2 text-luxury-gold"><ArrowLeft size={17} /> Back to Blogs</Link>
        </div>
      </main>
    );
  }

  const articleUrl = `https://mmeeventmanagement.com/blogs/${post.slug}`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mmeeventmanagement.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://mmeeventmanagement.com/blogs' },
      { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
    ],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: articleUrl,
    headline: post.title,
    description: post.excerpt,
    image: `https://mmeeventmanagement.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'MME Event Management LLC' },
    publisher: {
      '@type': 'Organization',
      name: 'MME Event Management LLC',
      logo: { '@type': 'ImageObject', url: 'https://mmeeventmanagement.com/logo.png' },
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | MME Event Management</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={`https://mmeeventmanagement.com${post.image}`} />
        <meta property="og:image:alt" content={post.alt} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-[#050505] text-white">
        <article>
          <header className="container mx-auto px-6 pb-14 pt-36 md:px-12 md:pb-20 md:pt-44">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-luxury-gold">
              <ArrowLeft size={15} /> Back to Blogs
            </Link>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="mt-12 max-w-5xl">
              <p className="text-xs uppercase tracking-[0.22em] text-luxury-gold">
                {post.category} <span className="mx-2 text-white/25">•</span> <time dateTime={post.date}>{formatDate(post.date)}</time> <span className="mx-2 text-white/25">•</span> {post.readTime}
              </p>
              <h1 className="mt-7 text-4xl font-display font-semibold leading-[1.04] sm:text-5xl md:text-7xl">{post.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/55">{post.excerpt}</p>
            </motion.div>
          </header>

          <figure className="container mx-auto px-6 md:px-12">
            <div className="aspect-[16/8] min-h-[320px] overflow-hidden rounded-3xl">
              <img src={post.image} alt={post.alt} loading="eager" className="h-full w-full object-cover" />
            </div>
          </figure>

          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            {post.body.map((section) => (
              <section key={section.heading} className="mb-14 last:mb-0">
                <h2 className="text-3xl font-display font-semibold leading-tight md:text-4xl">{section.heading}</h2>
                <div className="mt-6 space-y-6">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-white/65 md:text-lg">{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>
        </article>

        <section className="border-t border-white/10 bg-[#0a0a0a] py-20 text-center" aria-labelledby="article-cta-heading">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.3em] text-luxury-gold">Plan with MME</p>
            <h2 id="article-cta-heading" className="mx-auto mt-5 max-w-3xl text-3xl font-display font-semibold md:text-5xl">Turn Your Next Event Idea into an Extraordinary Experience</h2>
            <Link to="/contact?request=proposal" className="mt-9 inline-flex items-center gap-2 rounded-full bg-luxury-gold px-7 py-4 text-sm font-semibold text-[#050505] hover:bg-white">
              Request Proposal <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogArticle;
