"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface LegalTemplateProps {
  title: string;
  content: string;
}

const parseHeadings = (markdown: string): HeadingItem[] => {
  const lines = markdown.split("\n");
  const items: HeadingItem[] = [];

  lines.forEach((line) => {
    const match = line.match(/^(#{2,3})\s+(.*)$/);
    if (match) {
      const level = match[1].length;
      const rawText = match[2].trim();
      const text = rawText.replace(/\*\*|\*|\[(.*?)\]\(.*?\)/g, "$1");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      items.push({ id, text, level });
    }
  });

  return items;
};

const getTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return children.toString();
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }
  if (React.isValidElement(children)) {
    const element = children as React.ReactElement<{
      children?: React.ReactNode;
    }>;
    return getTextFromChildren(element.props.children);
  }
  return "";
};

const generateHeadingId = (children: React.ReactNode): string => {
  const text = getTextFromChildren(children);
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function LegalTemplate({ title, content }: LegalTemplateProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const headings = React.useMemo(() => parseHeadings(content), [content]);

  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const isAtBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom && headings.length > 0) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let currentActive = headings[0]?.id || "";

      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPosition) {
            currentActive = heading.id;
          } else {
            break;
          }
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const handleHeadingClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      isClickScrolling.current = true;
      setActiveId(id);
      setIsMobileTocOpen(false);

      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top,
        behavior: "smooth",
      });

      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }

      clickTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  const customRenderers = {
    h1: () => null,
    h2: ({ children, ...props }: React.PropsWithChildren) => {
      const id = generateHeadingId(children);
      return (
        <h2
          id={id}
          className="text-2xl font-bold mt-12 mb-5 text-white scroll-mt-28"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.PropsWithChildren) => {
      const id = generateHeadingId(children);
      return (
        <h3
          id={id}
          className="text-xl font-semibold mt-8 mb-4 text-white/90 scroll-mt-28"
          {...props}
        >
          {children}
        </h3>
      );
    },
    p: ({ children, ...props }: React.PropsWithChildren) => (
      <p className="text-base text-zinc-400 leading-relaxed mb-6" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: React.PropsWithChildren) => (
      <ul
        className="list-disc pl-6 mb-6 space-y-2 text-zinc-400 text-base"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: React.PropsWithChildren) => (
      <ol
        className="list-decimal pl-6 mb-6 space-y-2 text-zinc-400 text-base"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: React.PropsWithChildren) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    strong: ({ children, ...props }: React.PropsWithChildren) => (
      <strong className="text-white font-semibold" {...props}>
        {children}
      </strong>
    ),
    a: ({ children, ...props }: React.PropsWithChildren) => (
      <a
        className="text-sinai-glow-orange hover:text-white transition-colors underline decoration-sinai-glow-orange/30 underline-offset-4"
        {...props}
      >
        {children}
      </a>
    ),
  };

  return (
    <div className="relative min-h-screen bg-sinai-bg-base text-zinc-400 font-sans pt-28 pb-20 px-4 md:px-8">
      {/* Subtle premium ambient background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sinai-glow-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-sinai-glow-orange/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-sinai-glow-orange transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="border-b border-white/10 pb-8 mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {title}
          </h1>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-12 relative"
        >
          {/* Mobile Table of Contents (Dropdown style) */}
          <div className="col-span-1 block lg:hidden relative z-40">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <span>Table of Contents</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isMobileTocOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isMobileTocOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 max-h-[60vh] overflow-y-auto"
                >
                  <nav className="p-4 space-y-4">
                    {headings.map((heading) => {
                      const isActive = activeId === heading.id;
                      return (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          onClick={(e) => handleHeadingClick(e, heading.id)}
                          className={`block transition-all duration-300 ${
                            heading.level === 3
                              ? "pl-4 text-sm"
                              : "text-base font-medium"
                          } ${
                            isActive
                              ? "text-sinai-glow-orange translate-x-1"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          {heading.text}
                        </a>
                      );
                    })}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Sidebar - Table of Contents */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-10rem)] overflow-y-auto pr-4 scrollbar-hide">
              <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-6">
                Table of Contents
              </h2>
              <nav className="space-y-3">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;
                  return (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      onClick={(e) => handleHeadingClick(e, heading.id)}
                      className={`block text-sm transition-all duration-300 ${
                        heading.level === 3 ? "pl-4 text-xs" : "font-medium"
                      } ${
                        isActive
                          ? "text-sinai-glow-orange translate-x-1"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {heading.text}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Article Content */}
          <main className="lg:col-span-9 col-span-12">
            <article className="prose prose-invert max-w-none font-sans">
              <ReactMarkdown components={customRenderers}>
                {content}
              </ReactMarkdown>
            </article>
          </main>
        </motion.div>
      </div>
    </div>
  );
}
