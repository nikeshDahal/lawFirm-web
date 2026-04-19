import { ExpertCTA } from "@/app/practice-area/[slug]/component/cta";
import { ClientPracticeAreaDetail } from "@/app/utils/interface/index.query";
import { fetchData } from "@/app/utils/service";
import { GET_PUBLICATION_SLUG } from "@/app/utils/service/index.query";
import NoData from "@/components/internal/nodata";
import { Metadata } from "next";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import TableOfContents from "@/components/internal/tableOfContent";
import ShareRail from "@/components/internal/shareRails";

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
    title: pageData.seoTags?.title || pageData.title,
    description: pageData.seoTags?.description || pageData.title,
    keywords: pageData.seoTags?.tags?.split(",").map((tag) => tag.trim()) || [],
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
              <ShareRail />
              {/* <PublicationAction /> */}
            </aside>

            {/* Main Content Column */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <header className="mb-8">
                <h1
                  className="text-2xl  md:text-3xl font-serif text-gradient-gold mb-6 leading-[1.1] tracking-tight text-left"
                  itemProp="headline"
                >
                  {pageData.title || ""}
                </h1>
              </header>
              <figure className="relative bg-gray-100 aspect-video mb-8 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={pageData?.pageImage || "/noimage.png"}
                  alt={pageData?.title || "Publication Image"}
                  className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4U69XWAAAAABJRU5ErkJggg=="
                  fill
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                <figcaption className="sr-only">{pageData?.title}</figcaption>
              </figure>

              {/* Rich Text Body Content */}
              {/* <div className="prose-container" itemProp="articleBody"> */}
              <div
                className="publication-content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(pageData.content),
                }}
              />
              {/* </div> */}
            </div>

            {/* Right Sidebar: Related & Call to Action */}
            <aside className="lg:col-span-3 order-3 space-y-8">
              {/* RELATED PUBLICATIONS */}
              {/* <RelatedPublicationsCard /> */}

              {/* PRIMARY FEATURE CARD */}
              {/* <section className="sticky top-28">
                <div className="bg-gradient-to-br from-primaryMain to-primaryLight text-white p-8 rounded-3xl shadow-xl">
                  <ExpertCTA />
                </div>
              </section> */}
              <TableOfContents />
            </aside>
          </div>

          {/* CTA Section at Bottom - Aligned with Content */}
          <div className="grid lg:grid-cols-12 gap-16 mt-2 mb-10">
            <div className="hidden lg:block lg:col-span-1 order-2 lg:order-1"></div>
            <section className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primaryMain to-primaryLight text-white rounded-3xl">
                <ExpertCTA />
              </div>
            </section>
            {/* <div className="hidden lg:block lg:col-span-3 order-3"></div> */}
          </div>
        </article>
      </main>

      {/* Global Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `

* Minimal content renderer — preserves API HTML */

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
},
.publication-content ul,
.publication-content ol {
  padding-left: 1.5rem; /* adjust spacing */
}

.publication-content li {
  list-style-position: outside; /* key fix */
}

`,
        }}
      />
    </>
  );
};

export default page;
