import { fetchData } from "@/app/utils/service";
import { Metadata } from "next";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import TableOfContents from "@/components/internal/tableOfContent";
import ShareRail from "@/components/internal/shareRails";
import NoData from "@/components/internal/nodata";
import { GET_TEAM_SLUG } from "@/app/utils/service/index.query";
import { MOCK_TEAM_DETAILS } from "@/constant/teamDetail";

type Props = {
  params: { slug: Promise<string> };
};

interface ClientTeamDetail {
  _id: string;
  name: string;
  designation: string;
  practiceArea?: string;
  profileImage?: string | null;
  email?: string | null;
  phone?: string | null;
  bio?: string | null; // may contain HTML
  education?: string | null;
  experience?: string | null;
  qualifications?: string | null;
  socialLinks?: {
    facebook?: string;
    email?: string;
    linkedIn?: string;
    twitter?: string;
  };
  seoTags?: { title?: string; description?: string; tags?: string };
  pageImage?: string;
  content?: string;
  other?: string; // for any additional content from text editor
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentSlug = await slug;

  // try {
  //   const pageData = await fetchData<ClientTeamDetail>({
  //     query: GET_TEAM_SLUG,
  //     path: "data.getClientTeamBySlug",
  //     variables: { slug: currentSlug },
  //   });

  //   if (pageData) {
  //     return {
  //       title: pageData.seoTags?.title || pageData.name,
  //       description: pageData.seoTags?.description || pageData.designation,
  //       keywords: pageData.seoTags?.tags?.split(",").map((t) => t.trim()) || [],
  //       openGraph: {
  //         title: pageData.name,
  //         description: pageData.bio || pageData.designation || "",
  //         images: [
  //           { url: pageData.profileImage || pageData.pageImage || "/noimage.png" },
  //         ],
  //       },
  //     };
  //   }
  // } catch (error) {
  //   console.warn("API error, using mock data for metadata");
  // }

  // Fallback to mock data
  const mockData =
    MOCK_TEAM_DETAILS[currentSlug as keyof typeof MOCK_TEAM_DETAILS];
  if (mockData) {
    return {
      title: mockData.name,
      description: mockData.designation,
      openGraph: {
        title: mockData.name,
        description: mockData.designation,
        images: [{ url: mockData.profileImage }],
      },
    };
  }

  return { title: "Team Member", description: "Team detail" };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const currentSlug = await slug;

  let pageData: ClientTeamDetail | null = null;

  try {
    pageData = await fetchData<ClientTeamDetail>({
      query: GET_TEAM_SLUG,
      path: "data.getClientTeamBySlug",
      variables: { slug: currentSlug },
    });
  } catch (error) {
    console.warn("API error, falling back to mock data");
  }

  // Fallback to mock data
  if (!pageData) {
    const mockData =
      MOCK_TEAM_DETAILS[currentSlug as keyof typeof MOCK_TEAM_DETAILS];
    if (mockData) {
      pageData = mockData as ClientTeamDetail;
    }
  }

  if (!pageData) return <NoData />;

  return (
    <>
      <main className="min-h-screen bg-gray-100 py-12">
        <article className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-col gap-12">
          {/* TOP SECTION: PHOTO LEFT & MAIN DETAILS RIGHT */}
          <div className="lg:flex lg:gap-12">
            {/* LEFT SIDE - SHORT PHOTO + CONTACT INFO + SOCIAL ICONS */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
              <div className="w-72 h-96 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={pageData.profileImage || "/noimage.png"}
                  alt={pageData.name}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4U69XWAAAAABJRU5ErkJggg=="
                />
              </div>

              {/* CONTACT INFO BELOW IMAGE */}
              <div className="mt-6 flex flex-col gap-2 text-lg font-medium text-gray-700">
                {pageData.email && (
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${pageData.email}`}
                      className="text-primary hover:underline"
                    >
                      {pageData.email}
                    </a>
                  </p>
                )}
                {pageData.phone && (
                  <p>
                    Phone:{" "}
                    <a
                      href={`tel:${pageData.phone}`}
                      className="text-primary hover:underline"
                    >
                      {pageData.phone}
                    </a>
                  </p>
                )}

                {/* SOCIAL LINKS BELOW CONTACT INFO */}
                <div className="flex gap-4 mt-3">
                  {pageData.socialLinks?.linkedIn && (
                    <a
                      href={pageData.socialLinks.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="text-gray-700 hover:text-blue-600 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2" />
                      </svg>
                    </a>
                  )}
                  {pageData.socialLinks?.facebook && (
                    <a
                      href={pageData.socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="text-gray-700 hover:text-blue-500 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - PROFILE DETAILS */}
            <div className="lg:w-2/3 flex flex-col gap-10 mt-8 lg:mt-0">
              {/* NAME & TITLE */}
              <header>
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gradient-gold leading-tight mb-2">
                  {pageData.name}
                </h1>
                <p className="text-2xl text-gray-700 mb-2">
                  {pageData.designation}
                </p>
                {pageData.practiceArea && (
                  <p className="text-primary font-semibold mb-4">
                    Practice Area: {pageData.practiceArea}
                  </p>
                )}
              </header>

              {/* MAIN SECTIONS */}
              <section className="flex flex-col gap-10">
                {pageData.bio && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                      About
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(pageData.bio),
                      }}
                    />
                  </div>
                )}

                {pageData.education && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                      Education
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(pageData.education),
                      }}
                    />
                  </div>
                )}

                {pageData.experience && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                      Experience
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(pageData.experience),
                      }}
                    />
                  </div>
                )}

                {pageData.qualifications && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                      Qualifications
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(pageData.qualifications),
                      }}
                    />
                  </div>
                )}
              </section>
            </div>
          </div>

          {/* OTHER SECTION - FULL WIDTH BELOW EVERYTHING */}
          {pageData.other && (
            <section className="mt-16 bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                Other
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(pageData.other),
                }}
              />
            </section>
          )}

          {/* ADDITIONAL CONTENT */}
          {pageData.content && (
            <section
              className="mt-12 prose max-w-full"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(pageData.content),
              }}
            />
          )}
        </article>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .prose img, .prose video, .prose iframe { max-width:100%; height:auto }
          .prose * { box-sizing: border-box }
        `,
          }}
        />
      </main>
    </>
  );
};

export default page;
