"use client";

import React, { use } from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowLeft, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";
import { BlogCard } from "@/components/blog/BlogCard";
import { notFound } from "next/navigation";

export default function BlogTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Find matching category casing from database
  let exactTopicName = "";
  for (const post of BLOG_POSTS) {
    const match = post.categories.find(cat => cat.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase());
    if (match) {
      exactTopicName = match;
      break;
    }
  }
  const topicName = exactTopicName || slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // Filter posts that contain this category
  const filteredPosts = BLOG_POSTS.filter(post =>
    post.categories.some(cat => cat.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase())
  ).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  if (filteredPosts.length === 0) {
    const allCategories = Array.from(new Set(BLOG_POSTS.flatMap(p => p.categories.map(c => c.toLowerCase().replace(/\s+/g, '-')))));
    if (!allCategories.includes(slug.toLowerCase())) {
        notFound();
    }
  }

  // Extract unique topics and count them for the Taxonomy Explorer
  const topicsMap: Record<string, number> = {};
  BLOG_POSTS.forEach((post) => {
    post.categories.forEach((cat) => {
      topicsMap[cat] = (topicsMap[cat] || 0) + 1;
    });
  });
  const uniqueTopics = Object.entries(topicsMap).map(([name, count]) => ({
    name,
    count,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <div className="min-h-screen bg-[#06080a] text-white pt-28 pb-20 overflow-hidden relative selection:bg-sinai-glow-orange selection:text-black lg:pt-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sinai-glow-orange/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sinai-glow-orange/5 blur-[120px] rounded-full" />
      </div>

      <div className="apex-container-wide relative z-10">
        {/* Breadcrumb / Back */}
        <SectionReveal>
          <div className="mb-8">
            <Link href="/blog" className="group inline-flex items-center gap-4 text-[10px] tracking-[0.5em] text-zinc-500 hover:text-white transition-colors uppercase font-semibold">
              <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-sinai-glow-orange group-hover:border-sinai-glow-orange transition-all">
                <ArrowLeft className="w-4 h-4 text-white" />
              </div>
              Back to Archive
            </Link>
          </div>
        </SectionReveal>

        {/* Header */}
        <SectionReveal>
          <div className="max-w-4xl mb-16 lg:mb-20 flex flex-col gap-2.5 items-center text-center mx-auto">
            <h1 className="font-black text-4xl md:text-[68px] leading-[38px] md:leading-[60px] tracking-[-1.5px] text-white">
              <span className="text-sinai-glow-orange">{topicName}</span>
            </h1>
            <p className="md:text-lg md:leading-[29.25px] tracking-normal text-zinc-400">
              Dispatches and architectural research focused on {topicName.toLowerCase()} within the APEX intelligence ecosystem.
            </p>
          </div>
        </SectionReveal>

        {/* Taxonomy Explorer (Topics) */}
        <SectionReveal>
          <div className="mb-16 space-y-7 lg:mb-20 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start gap-[14px]">
              <Badge>Latest Insights</Badge>
              <h2 className="font-bold text-white text-3xl md:text-5xl leading-[30px] md:leading-[70px] tracking-[-1.6px]">
                Engineering{" "}
                <span className="text-sinai-glow-orange">the Future</span>
              </h2>
            </div>
            <div className="flex flex-wrap items-center w-full gap-4 sm:gap-5">
              {uniqueTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/blog/topic/${topic.slug}`}
                  className={`group flex-1 relative flex items-center justify-center text-center gap-6 px-8 py-4 rounded-2xl border transition-all duration-500 ${
                    topic.slug === slug.toLowerCase()
                      ? "border-sinai-glow-orange bg-sinai-glow-orange/[0.08]"
                      : "bg-white/2 border-white/5 hover:border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/[0.05]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`text-sm font-black tracking-widest transition-colors ${
                      topic.slug === slug.toLowerCase()
                        ? "text-sinai-glow-orange"
                        : "text-white group-hover:text-sinai-glow-orange"
                    }`}>
                      {topic.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredPosts.map((post) => (
            <SectionReveal key={post.id}>
              <BlogCard post={post} />
            </SectionReveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="py-14 lg:py-16 text-center space-y-8 border border-dashed border-white/10 rounded-[2rem]">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-sinai-glow-orange/5 flex items-center justify-center border border-sinai-glow-orange/10 animate-pulse text-sinai-glow-orange/40">
                <Clock className="w-10 h-10" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-black tracking-normal uppercase">
                No entries found.
              </h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">
                No articles match the selected category.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
