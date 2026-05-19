"use client";

import React, { use, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Copy,
  Calendar,
  Clock,
} from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { BLOG_POSTS, Post } from "@/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { CtaTemplate } from "@/components/ui/CtaTemplate";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
  nonce?: string;
}

export default function BlogPostPage({ params, nonce }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  const calculateReadTime = (post: Post) => {
    const body = post.body;
    let wordCount = 0;
    body.forEach((block) => {
      if (
        "type" in block &&
        block.type === "p" &&
        "text" in block &&
        block.text &&
        typeof block.text === "string"
      ) {
        wordCount += block.text.split(/\s+/).length;
      } else if (
        "type" in block &&
        block.type === "ul" &&
        "items" in block &&
        block.items &&
        Array.isArray(block.items)
      ) {
        block.items.forEach((item: string) => {
          wordCount += item.split(/\s+/).length;
        });
      }
    });
    return Math.max(1, Math.ceil(wordCount / 200));
  };

  const readTime = post ? calculateReadTime(post) : 5;

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "APEX Experts AI Solutions",
      url: "https://apexexperts.net",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://apexexperts.net/blog/${post.slug}`,
    },
    keywords: post.categories.join(", "),
  };
  let headingIndex = 0;

  return (
    <article className="min-h-screen bg-[#06080a] text-white pt-28 pb-20 overflow-hidden relative lg:pt-32 lg:pb-24">
      <script
        nonce={nonce}
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1000px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-sinai-glow-orange/10 blur-[150px] rounded-full" />
      </div>

      <div className="apex-container-wide relative z-10">
        {/* Navigation / Back Button */}
        <SectionReveal>
          <div className="flex items-center justify-between mb-10 lg:mb-12">
            <Link
              href="/blog"
              className="group flex items-center gap-4 text-[10px] tracking-[0.3em] text-zinc-500 hover:text-white transition-colors uppercase font-semibold"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-sinai-glow-orange group-hover:border-sinai-glow-orange group-hover:text-white transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to Archive
            </Link>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-zinc-500 hover:text-white">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-zinc-500 hover:text-white">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </SectionReveal>

        {/* Header Section */}
        <SectionReveal>
          <div className="max-w-5xl mx-auto mb-10 lg:mb-12 flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              {post.categories?.map((cat: string) => (
                <Link
                  key={cat}
                  href={`/blog/topic/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[10px] font-semibold uppercase tracking-wider hover:bg-sinai-glow-orange hover:text-white transition-all"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h1 className="text-[32px] md:text-[48px] font-bold tracking-[-1.8px] leading-tight md:leading-[79.2px] text-white">
                {post.title}
              </h1>

              <p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed md:leading-[30.6px] max-w-3xl">
                {post.excerpt}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 pt-6 border-t border-white/5 w-full">
              {/* Avatar + Author and Job on top of each other */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-base leading-tight">
                    {post.author.name}
                  </span>
                  <span className="text-zinc-400 text-xs mt-1">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/10" />

              {/* Calendar Icon + Date */}
              <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/10" />

              {/* x min read */}
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Main Image */}
        <SectionReveal>
          <div className="w-full max-w-[1241px] aspect-[1241/575] relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 mx-auto mb-10 lg:mb-12">
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </SectionReveal>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            {/* Synopsis Card */}
            <div className="mb-10 p-6 lg:p-8 rounded-3xl bg-sinai-glow-orange/[0.03] border border-sinai-glow-orange/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Bookmark className="w-8 h-8 text-sinai-glow-orange" />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] text-sinai-glow-orange tracking-[0.2em] uppercase font-bold">
                  Overview
                </div>
                <p className="text-xl text-zinc-300 font-light leading-relaxed italic">
                  {post.synopsis ?? post.excerpt}
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  const headingNumber = String(++headingIndex).padStart(2, "0");
                  return (
                    <h2
                      key={i}
                      className="text-xl md:text-2xl font-bold tracking-normal uppercase mt-10 mb-4 text-white leading-tight flex items-center gap-3 group/h2"
                    >
                      <span className="text-sinai-glow-orange/30 text-base font-semibold">
                        {headingNumber}
                      </span>
                      <span className="relative">
                        {block.text}
                        <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-sinai-glow-orange/40 rounded-full" />
                      </span>
                    </h2>
                  );
                }
                if (block.type === "p")
                  return (
                    <div
                      key={i}
                      className="text-base text-zinc-300 font-normal leading-snug mb-3"
                    >
                      <ReactMarkdown
                        components={{
                          strong: ({ node, ...props }) => (
                            <span className="font-bold text-white" {...props} />
                          ),
                          a: ({ node, ...props }) => (
                            <a
                              className="text-sinai-glow-orange hover:underline underline-offset-2 transition-all"
                              {...props}
                            />
                          ),
                          code: ({ node, ...props }) => (
                            <code
                              className="px-1 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-sinai-glow-orange"
                              {...props}
                            />
                          ),
                        }}
                      >
                        {block.text}
                      </ReactMarkdown>
                    </div>
                  );
                if (block.type === "ul")
                  return (
                    <ul key={i} className="space-y-1.5 my-4 list-none">
                      {block.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-base text-zinc-400 font-normal leading-snug group/item"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-sinai-glow-orange/40 shrink-0" />
                          <div className="flex-1">
                            <ReactMarkdown
                              components={{
                                strong: ({ node, ...props }) => (
                                  <span
                                    className="font-bold text-white"
                                    {...props}
                                  />
                                ),
                                a: ({ node, ...props }) => (
                                  <a
                                    className="text-sinai-glow-orange hover:underline underline-offset-2 transition-all"
                                    {...props}
                                  />
                                ),
                                code: ({ node, ...props }) => (
                                  <code
                                    className="px-1 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-sinai-glow-orange"
                                    {...props}
                                  />
                                ),
                              }}
                            >
                              {item}
                            </ReactMarkdown>
                          </div>
                        </li>
                      ))}
                    </ul>
                  );
                if (block.type === "code")
                  return (
                    <div
                      key={i}
                      className="my-8 rounded-xl bg-[#0d1117] border border-white/10 overflow-hidden group"
                    >
                      <div className="flex items-center justify-between px-4 py-2 bg-white/[0.03] border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                          <span className="ml-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            {block.language}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(block.code);
                            // Optional: Add toast notification here if available
                          }}
                          className="p-1.5 rounded-md hover:bg-white/5 transition-colors text-zinc-500 hover:text-white"
                          title="Copy Code"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="p-4 overflow-x-auto custom-scrollbar">
                        <pre className="font-mono text-xs md:text-sm leading-normal text-zinc-300 whitespace-pre">
                          <code>{block.code}</code>
                        </pre>
                      </div>
                    </div>
                  );
                if (block.type === "image")
                  return (
                    <div key={i} className="my-10 space-y-4 lg:my-12">
                      <div className="relative aspect-video rounded-[1.5rem] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
                        <Image
                          src={block.src}
                          alt={block.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 896px"
                          className="object-cover brightness-90 hover:brightness-100 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                      </div>
                      <div className="flex items-center gap-4 px-6">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? "" : "animate-pulse"}`}
                        />
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                          {block.caption}
                        </span>
                      </div>
                    </div>
                  );
                return null;
              })}
            </div>
          </SectionReveal>
        </div>

        {/* Related Posts / Next Steps */}
        <SectionReveal>
          <div className="mt-16 pt-10 border-t border-white/5 space-y-10 lg:mt-20 lg:pt-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <div className="text-sinai-glow-orange text-[10px] tracking-[0.2em] uppercase font-bold">
                  Related Research
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-normal uppercase text-white">
                  Related Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-[10px] text-zinc-500 hover:text-white transition-colors uppercase tracking-wider font-semibold border-b border-white/10 pb-2"
              >
                Explore Full Archive
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {BLOG_POSTS.filter(
                (p) =>
                  p.slug !== post.slug &&
                  p.categories.some((cat) => post.categories.includes(cat))
              )
                .slice(0, 2)
                .map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
            </div>
          </div>
        </SectionReveal>

        {/* Footer / CTA */}
        <SectionReveal>
          <div className="mt-16 lg:mt-20">
            <CtaTemplate
              title="Was this insight valuable?"
              description="Join our private network to receive tactical AI intelligence directly in your inbox."
              buttonText="Subscribe to Intelligence"
              buttonHref="/contact"
            />
          </div>
        </SectionReveal>
      </div>
    </article>
  );
}
