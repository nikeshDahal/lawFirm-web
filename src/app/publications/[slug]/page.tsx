import { ExpertCTA } from "@/app/practice-area/[slug]/component/cta";
import { ClientPracticeAreaDetail } from "@/app/utils/interface/index.query";
import { fetchData } from "@/app/utils/service";
import { GET_PUBLICATION_SLUG } from "@/app/utils/service/index.query";
import Image from "next/image";
import PublicationAction from "./component/action";
import React from "react";
import Link from "next/link";
import NoData from "@/components/internal/nodata";

type Props = {
  params: { slug: Promise<string> };
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const currentSlug = await slug;

  const pageData = await fetchData<ClientPracticeAreaDetail>({
    query: GET_PUBLICATION_SLUG,
    path: "data.getClientPublicationBySlug",
    variables: {
      slug: currentSlug,
    },
  });

  if (!pageData) return <NoData />;
  return (
    <>
      {/* Main Publication Layout - Semantic <article> */}
      <main className="grow pt-8" id="main-content">
        <article
          className="max-w-7xl mx-auto px-6"
          itemScope
          itemType="https://schema.org/TechArticle"
        >
          <meta itemProp="description" content={pageData.metaData} />

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Sidebar: Utility & Engagement */}
            <aside
              className="hidden lg:block lg:col-span-1 order-2 lg:order-1 pt-24"
              aria-label="Article utilities"
            >
              <PublicationAction />
            </aside>

            {/* Main Content Column */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <header className="mb-12">
                {/* <div className="flex items-center gap-3 mb-8">
                  <span
                    className="bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded"
                    itemProp="articleSection"
                  >
                    {ACTIVE_PUBLICATION.category}
                  </span>
                  <time
                    dateTime={ACTIVE_PUBLICATION.date}
                    itemProp="datePublished"
                    className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.1em] flex items-center gap-1.5 pl-4 border-l border-gray-100"
                  >
                    <Calendar size={12} className="text-[#c5a059]" />{" "}
                    {ACTIVE_PUBLICATION.displayDate}
                  </time>
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.1em] flex items-center gap-1.5 pl-4 border-l border-gray-100">
                    <Clock size={12} className="text-[#c5a059]" />{" "}
                    {ACTIVE_PUBLICATION.readTime}
                  </span>
                </div> */}

                <h1
                  className="text-4xl md:text-7xl font-serif text-[#1a1c1e] mb-6 leading-[1.1] tracking-tight text-left"
                  itemProp="headline"
                >
                  {pageData.title || ""}
                </h1>

                {/* <p
                  className="text-xl md:text-2xl font-light text-gray-500 italic leading-relaxed text-left border-l-4 border-[#c5a059]/20 pl-6"
                  itemProp="alternativeHeadline"
                >
                  {ACTIVE_PUBLICATION.subtitle}
                </p> */}
              </header>

              <figure className="relative aspect-video mb-16 rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  height={400}
                  width={800}
                  src={pageData?.pageImage || "/noimage.png"}
                  alt="Legal professionals discussing AI implementation in a modern office"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  itemProp="image"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4U69XWAAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                <figcaption className="sr-only">{pageData?.title}</figcaption>
              </figure>

              {/* Author Bio (Semantic Link for SEO) */}
              {/* <section
                className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl mb-12 border border-gray-100"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <img
                    src={TEAM_MEMBERS[0].image}
                    className="w-full h-full object-cover"
                    alt={ACTIVE_PUBLICATION.author}
                    itemProp="image"
                  />
                </div>
                <div>
                  <p
                    className="text-[#1a1c1e] font-black text-xs uppercase tracking-widest"
                    itemProp="name"
                  >
                    {ACTIVE_PUBLICATION.author}
                  </p>
                  <p
                    className="text-[#c5a059] text-[11px] font-bold uppercase tracking-tight mt-0.5"
                    itemProp="jobTitle"
                  >
                    {TEAM_MEMBERS[0].role}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 font-medium">
                    {TEAM_MEMBERS[0].specialty}
                  </p>
                </div>
              </section> */}

              {/* Rich Text Body Content */}
              <div className="prose-container" itemProp="articleBody">
                <div
                  className="publication-content text-gray-700 leading-relaxed font-light text-xl space-y-10"
                  dangerouslySetInnerHTML={{
                    __html: pageData.content,
                  }}
                />
              </div>

              {/* Resource Downloads - CTA Section */}
              {/* <AttachmentCTA /> */}
            </div>

            {/* Right Sidebar: Related & Call to Action */}
            <aside className="lg:col-span-3 order-3 space-y-12">
              <section
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-32"
                aria-labelledby="sidebar-practice-title"
              >
                {/* <h2
                  id="sidebar-practice-title"
                  className="text-[#1a1c1e] font-black text-[10px] uppercase tracking-[0.3em] mb-6 border-b border-gray-200 pb-4"
                >
                  Specialized Practice
                </h2>
                <nav className="space-y-6">
                  <a href="#" className="block group">
                    <p className="text-[#c5a059] text-[10px] font-bold uppercase mb-1">
                      Upcoming Journal
                    </p>
                    <h3 className="text-[#1a1c1e] font-serif group-hover:text-[#c5a059] transition-colors text-lg">
                      Liability in Decentralized Systems
                    </h3>
                  </a>
                  <a href="#" className="block group">
                    <p className="text-[#c5a059] text-[10px] font-bold uppercase mb-1">
                      Case Study
                    </p>
                    <h3 className="text-[#1a1c1e] font-serif group-hover:text-[#c5a059] transition-colors text-lg">
                      Cross-Border Data Compliance
                    </h3>
                  </a>
                </nav> */}

                <ExpertCTA />
              </section>
            </aside>
          </div>
        </article>
      </main>

      {/* Global Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .publication-content h3 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: 2.25rem;
          color: #1a1c1e;
          margin-top: 4.5rem;
          margin-bottom: 2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .publication-content p {
          margin-bottom: 2rem;
          line-height: 1.8;
          text-align: left;
        }
        .publication-content p.lead {
          font-size: 1.5rem;
          color: #1a1c1e;
          font-weight: 400;
          line-height: 1.6;
        }
        .publication-content blockquote {
          border-left: 5px solid #c5a059;
          padding: 2rem 0 2rem 3rem;
          margin: 4rem 0;
          font-style: italic;
          font-size: 1.75rem;
          color: #1a1c1e;
          font-family: ui-serif, Georgia, serif;
          background: #fcfcfc;
          border-radius: 0 1rem 1rem 0;
          text-align: left;
        }
        @media print {
          header, footer, aside, .cta-section { display: none !important; }
          main { pt: 0 !important; }
          .lg\\:col-span-8 { width: 100% !important; grid-column: span 12 / span 12 !important; }
          .publication-content { font-size: 12pt !important; }
        }
      `,
        }}
      />
    </>
  );
};

export default page;
