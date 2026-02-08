import PublicationAction from "./component/action";
import { ExpertCTA } from "./component/cta";
import { GET_PRACTICE_SLUG } from "@/app/utils/service/index.query";
import { fetchData } from "@/app/utils/service";
import { ClientPracticeAreaDetail } from "@/app/utils/interface/index.query";
import Image from "next/image";
import NoData from "@/components/internal/nodata";

type Props = {
  params: { slug: Promise<string> };
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const currentSlug = await slug;

  const pageData = await fetchData<ClientPracticeAreaDetail>({
    query: GET_PRACTICE_SLUG,
    path: "data.getClientPracticeAreaDetailBySlug",
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
          <meta itemProp="description" content={pageData?.metaData || ""} />

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
                <h1
                  className="text-4xl md:text-7xl font-serif text-[#1a1c1e] mb-6 leading-[1.1] tracking-tight text-left"
                  itemProp="headline"
                >
                  {pageData?.title}
                </h1>
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

              {/* Rich Text Body Content */}
              <div className="prose-container" itemProp="articleBody">
                <div
                  className="publication-content text-gray-700 leading-relaxed font-light text-xl space-y-10"
                  dangerouslySetInnerHTML={{
                    __html: pageData?.content,
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
