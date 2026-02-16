import { ExpertCTA } from "@/app/practice-area/[slug]/component/cta";
import { ClientPracticeAreaDetail } from "@/app/utils/interface/index.query";
import { fetchData } from "@/app/utils/service";
import { GET_PUBLICATION_SLUG } from "@/app/utils/service/index.query";
import NoData from "@/components/internal/nodata";
import { Metadata } from "next";
import Image from "next/image";
import PublicationAction from "./component/action";

type Props = {
  params: { slug: Promise<string> };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  const pageData = await fetchData<ClientPracticeAreaDetail>({
    query: GET_PUBLICATION_SLUG,
    path: "data.getClientPublicationBySlug",
    variables: {
      slug,
    },
  });

  if (!pageData) {
    return {
      title: "Publication",
      description: "Publication page",
    };
  }

  return {
    title: pageData.title,
    description: pageData.metaData || pageData.title,
    keywords: pageData.metaData || [],
    openGraph: {
      title: pageData.title,
      description: pageData.metaData,
      images: [
        {
          url: pageData.pageImage || "/noimage.png",
        },
      ],
    },
  };
}

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

  console.log("Publication Page Data:", pageData.content);
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
                <h1
                  className="text-4xl md:text-7xl font-serif text-[#1a1c1e] mb-6 leading-[1.1] tracking-tight text-left"
                  itemProp="headline"
                >
                  {pageData.title || ""}
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
              {/* <div className="prose-container" itemProp="articleBody"> */}
              <div
                className="publication-content"
                dangerouslySetInnerHTML={{
                  __html: pageData.content,
                }}
              />
              {/* </div> */}
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

/* Minimal content renderer — preserves API HTML */

.publication-content {
  all: revert;
}

/* Ensure responsiveness */
.publication-content img,
.publication-content video,
.publication-content iframe {
  max-width: 100%;
  height: auto;
}

/* Tables scroll on mobile */
.publication-content table {
  display: block;
  overflow-x: auto;
  width: 100%;
  border-collapse: collapse;
}

/* Preserve alignment attributes */
.publication-content [align="center"] { text-align: center; }
.publication-content [align="right"] { text-align: right; }
.publication-content [align="justify"] { text-align: justify; }

/* Prevent layout breaking */
.publication-content * {
  box-sizing: border-box;
}

/* Remove unwanted inherited styles from parent */
.publication-content p,
.publication-content h1,
.publication-content h2,
.publication-content h3,
.publication-content h4,
.publication-content h5,
.publication-content h6,
.publication-content ul,
.publication-content ol,
.publication-content li,
.publication-content table,
.publication-content tr,
.publication-content td,
.publication-content th {
  margin: revert;
  padding: revert;
  font-size: revert;
  font-weight: revert;
  line-height: revert;
  text-align: revert;
}

`,
        }}
      />
    </>
  );
};

export default page;
