import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Search } from 'lucide-react';
import { gsap } from 'gsap';
import { blogCategories, editorialPosts } from '../data/editorialPosts';

const formatDate = (date) => new Intl.DateTimeFormat('en-AE', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
}).format(new Date(`${date}T00:00:00`));

const ArticleMeta = ({ post }) => (
  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-white/50">
    <span className="text-luxury-gold">{post.category}</span>
    <span aria-hidden="true">•</span>
    <time dateTime={post.date}>{formatDate(post.date)}</time>
    <span aria-hidden="true">•</span>
    <span>{post.readTime}</span>
  </p>
);

const ArticleCard = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.32) }}
    className="group flex h-full flex-col"
  >
    <Link to={`/blogs/${post.slug}`} className="mb-6 block overflow-hidden rounded-2xl" aria-label={`Read ${post.title}`}>
      <div className="aspect-[4/3] overflow-hidden bg-white/5">
        <img
          src={post.image}
          alt={post.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </Link>
    <ArticleMeta post={post} />
    <h3 className="mt-4 text-2xl font-display font-semibold leading-tight text-white transition-colors group-hover:text-luxury-gold">
      <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
    </h3>
    <p className="mt-4 line-clamp-2 text-sm leading-7 text-white/55">{post.excerpt}</p>
    <Link
      to={`/blogs/${post.slug}`}
      className="mt-6 inline-flex w-fit items-center gap-2 border-b border-luxury-gold/40 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-luxury-gold transition-colors hover:border-white hover:text-white"
    >
      Read More <ArrowUpRight size={15} />
    </Link>
  </motion.article>
);

const Blogs = () => {
  const headingRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = editorialPosts[0];
  const isFiltering = searchQuery.trim() !== '' || activeCategory !== 'All';

  const visiblePosts = useMemo(() => {
    if (!isFiltering) return editorialPosts.slice(1, 7);

    const query = searchQuery.trim().toLowerCase();
    return editorialPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = !query || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, isFiltering, searchQuery]);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.querySelectorAll('[data-hero-line]'),
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.15 },
      );
    }, headingRef);

    return () => context.revert();
  }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mmeeventmanagement.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://mmeeventmanagement.com/blogs' },
    ],
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'MME Event Management Insights',
    description: 'Expert insights on luxury event planning, corporate events, exhibition design, event production, and brand activations in Dubai and the UAE.',
    url: 'https://mmeeventmanagement.com/blogs',
    publisher: {
      '@type': 'Organization',
      name: 'MME Event Management LLC',
      logo: { '@type': 'ImageObject', url: 'https://mmeeventmanagement.com/logo.png' },
    },
    blogPost: editorialPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: `https://mmeeventmanagement.com${post.image}`,
      url: `https://mmeeventmanagement.com/blogs/${post.slug}`,
    })),
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <>
      <Helmet>
        <title>Event Management Blog Dubai | Ideas & Insights | MME</title>
        <meta
          name="description"
          content="Explore expert insights from MME on corporate event management, luxury event planning, exhibition stand design, event production, and brand activations in Dubai."
        />
        <meta
          name="keywords"
          content="Event Management Company Dubai, Luxury Event Planner Dubai, Corporate Event Management Dubai, Exhibition Stand Design Dubai, Event Production Dubai, Brand Activation Dubai, Conference Management Dubai, Luxury Events UAE"
        />
        <link rel="canonical" href="https://mmeeventmanagement.com/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Event Insights & Inspiration | MME Event Management Dubai" />
        <meta property="og:description" content="Premium ideas and practical guidance for extraordinary events in Dubai and across the UAE." />
        <meta property="og:url" content="https://mmeeventmanagement.com/blogs" />
        <meta property="og:image" content="https://mmeeventmanagement.com/images/services/event_production_1783864459690.png" />
        <meta property="og:image:alt" content="Luxury event production in Dubai by MME Event Management" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-[#050505] text-white">
        <section className="relative min-h-[780px] overflow-hidden border-b border-white/[0.08] pt-32 md:pt-40">
          <div className="absolute inset-0">
            <img
              src="/images/services/event_production_1783864459690.png"
              alt="MME luxury event production and editorial insights in Dubai"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
          </div>

          <div ref={headingRef} className="container relative z-10 mx-auto px-6 pb-20 md:px-12">
            <div className="max-w-4xl overflow-hidden">
              <p data-hero-line className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-luxury-gold">Our Blogs</p>
              <h1 className="text-[2.65rem] font-display font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl md:leading-[0.98] lg:text-[5.6rem]">
                <span data-hero-line className="block">Insights, Ideas &</span>
                <span data-hero-line className="block text-gradient">Event Inspiration</span>
              </h1>
              <p data-hero-line className="mt-8 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
                Expert perspectives on corporate events, luxury celebrations, exhibitions, and event production from MME’s Dubai team.
              </p>
            </div>

            <div className="mt-12 max-w-2xl">
              <label htmlFor="blog-search" className="sr-only">Search MME event insights</label>
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-5 py-4 backdrop-blur-xl focus-within:border-luxury-gold/70">
                <Search size={19} className="shrink-0 text-luxury-gold" />
                <input
                  id="blog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search insights, ideas, and guides"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>
            </div>

            <nav aria-label="Filter blog articles by category" className="mt-7 flex max-w-5xl flex-wrap gap-2.5">
              {['All', ...blogCategories].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full border px-4 py-2 text-xs transition-all ${
                    activeCategory === category
                      ? 'border-luxury-gold bg-luxury-gold text-[#050505]'
                      : 'border-white/15 bg-black/25 text-white/65 hover:border-luxury-gold/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </section>

        {!isFiltering && (
          <section className="py-24 md:py-32" aria-labelledby="featured-heading">
            <div className="container mx-auto px-6 md:px-12">
              <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-gold">Editor’s Pick</p>
                  <h2 id="featured-heading" className="text-3xl font-display font-semibold md:text-5xl">Featured Insight</h2>
                </div>
                <span className="hidden h-px flex-1 bg-white/10 md:block" />
              </div>

              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75 }}
                className="group grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] lg:grid-cols-[1.18fr_0.82fr]"
              >
                <Link to={`/blogs/${featuredPost.slug}`} className="min-h-[340px] overflow-hidden lg:min-h-[520px]" aria-label={`Read ${featuredPost.title}`}>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                  />
                </Link>
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                  <ArticleMeta post={featuredPost} />
                  <h3 className="mt-6 text-3xl font-display font-semibold leading-tight md:text-5xl">{featuredPost.title}</h3>
                  <p className="mt-6 line-clamp-2 text-base leading-7 text-white/55">{featuredPost.excerpt}</p>
                  <Link
                    to={`/blogs/${featuredPost.slug}`}
                    className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-luxury-gold px-7 py-3.5 text-sm font-semibold text-[#050505] transition-colors hover:bg-white"
                  >
                    Read More <ArrowUpRight size={17} />
                  </Link>
                </div>
              </motion.article>
            </div>
          </section>
        )}

        <section className="pb-24 pt-8 md:pb-32" aria-labelledby="latest-heading">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-12 flex flex-col justify-between gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-gold">MME Journal</p>
                <h2 id="latest-heading" className="text-4xl font-display font-semibold md:text-6xl">
                  {isFiltering ? 'Matching Articles' : 'Latest Articles'}
                </h2>
              </div>
              {isFiltering && <p className="text-sm text-white/45">{visiblePosts.length} {visiblePosts.length === 1 ? 'article' : 'articles'} found</p>}
            </div>

            {visiblePosts.length > 0 ? (
              <div className="grid gap-x-7 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {visiblePosts.map((post, index) => <ArticleCard key={post.slug} post={post} index={index} />)}
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 px-6 py-20 text-center">
                <h3 className="text-2xl font-display font-semibold">No insights found</h3>
                <p className="mt-3 text-white/50">Try another keyword or category.</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-7 rounded-full border border-luxury-gold px-6 py-3 text-sm text-luxury-gold hover:bg-luxury-gold hover:text-[#050505]"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="border-y border-white/[0.08] bg-[#0a0a0a] py-20 md:py-24" aria-labelledby="newsletter-heading">
          <div className="container mx-auto grid items-center gap-10 px-6 md:px-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <div className="mb-5 flex items-center gap-3 text-luxury-gold"><Mail size={18} /><span className="text-xs font-semibold uppercase tracking-[0.3em]">MME Newsletter</span></div>
              <h2 id="newsletter-heading" className="max-w-2xl text-4xl font-display font-semibold leading-tight md:text-5xl">Stay Updated with the Latest Event Trends</h2>
              <p className="mt-5 text-white/50">Occasional insights from Dubai’s luxury event specialists—no clutter.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-luxury-gold"
              />
              <button type="submit" className="rounded-full bg-luxury-gold px-7 py-4 text-sm font-semibold text-[#050505] transition-colors hover:bg-white">Subscribe</button>
              <span className="sr-only" role="status">{subscribed ? 'Thank you for subscribing.' : ''}</span>
            </form>
          </div>
          {subscribed && <p className="container mx-auto mt-5 px-6 text-right text-sm text-luxury-gold md:px-12">Thank you—you're on the list.</p>}
        </section>

        <section className="relative overflow-hidden py-28 md:py-40" aria-labelledby="blog-cta-heading">
          <div className="absolute inset-0">
            <img src="/images/services/final_cta_1783864494363.png" alt="Extraordinary luxury gala event in Dubai" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/65" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container relative z-10 mx-auto px-6 text-center md:px-12"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-luxury-gold">Bring Your Vision to Life</p>
            <h2 id="blog-cta-heading" className="mx-auto max-w-4xl text-4xl font-display font-semibold leading-tight md:text-6xl lg:text-7xl">Ready to Create Your Next Extraordinary Event?</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/60">Partner with MME for creative event management and flawless production across Dubai and the UAE.</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact?request=proposal" className="rounded-full bg-luxury-gold px-8 py-4 text-sm font-semibold text-[#050505] transition-colors hover:bg-white">Request Proposal</Link>
              <Link to="/contact" className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-luxury-gold hover:text-luxury-gold">Contact Us</Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Blogs;
