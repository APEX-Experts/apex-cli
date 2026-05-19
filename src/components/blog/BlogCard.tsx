import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Post } from "@/data/blog";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const displayTopic = post.categories?.[0] || "Insight";

  return (
    <div className="group border border-white/20 hover:border-sinai-glow-orange bg-[linear-gradient(180deg,rgba(24,24,27,0.9)_0%,rgba(0,0,0,0.95)_100%)] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] flex flex-col items-center md:items-start text-center md:text-start p-6 gap-6 transition-all duration-300 w-full h-full justify-between">
      
      {/* Image Block */}
      <div className="w-full flex flex-col gap-6">
        <Link
          href={`/blog/${post.slug}`}
          className="aspect-[4/3] relative block rounded-[1.5rem] overflow-hidden border border-white/10 bg-zinc-950 transition-all duration-700 group-hover:border-sinai-glow-orange/30 w-full"
        >
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[3s] opacity-70 group-hover:opacity-100 brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Topic Badge over the Image */}
          <div className="absolute top-4 left-4 z-10 rounded-[6px] border border-sinai-glow-orange/30 bg-sinai-glow-orange/80 font-semibold text-white text-sm tracking-[1.5px] uppercase px-3 py-1.5 backdrop-blur-sm">
            {displayTopic}
          </div>

          {/* Hover Arrow Icon overlay */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
            <div className="w-10 h-10 rounded-full bg-sinai-glow-orange flex items-center justify-center text-white shadow-[0_0_20px_rgba(217,130,47,0.4)]">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>

        {/* Text Block after Image */}
        <div className="flex flex-col gap-4 items-center md:items-start w-full">
          <Link href={`/blog/${post.slug}`} className="block group/title">
            <h3 className="font-medium text-[26px] leading-[32.5px] tracking-[-0.65px] text-white hover:text-sinai-glow-orange transition-colors duration-300">
              {post.title}
            </h3>
          </Link>

          <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Metadata Block (Avatar + Date) */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-400 mt-2">
            {/* Avatar + Author Name */}
            <div className="flex items-center gap-2.5">
              {post.author.image ? (
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">
                  {post.author.name.charAt(0)}
                </div>
              )}
              <span className="text-zinc-300 font-medium">{post.author.name}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-zinc-500" />
              <span className="text-zinc-300">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Button Block */}
      <Link
        href={`/blog/${post.slug}`}
        className="w-full flex flex-row items-center justify-between rounded-[50px] pt-[14px] pb-[14px] px-[24px] bg-sinai-glow-orange/5 border border-sinai-glow-orange/30 text-sinai-glow-orange uppercase tracking-[1.56px] text-sm font-semibold hover:bg-sinai-glow-orange/10 hover:border-sinai-glow-orange transition-all duration-300"
      >
        <span>Read article</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

    </div>
  );
}
