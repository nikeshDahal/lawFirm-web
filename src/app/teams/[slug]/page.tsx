import { GET_TEAM_SLUG } from "@/app/utils/service/index.query";
import { fetchData } from "@/app/utils/service";
import { ClientTeamDetail } from "@/app/utils/interface/index.query";
import NoData from "@/components/internal/nodata";
import { Metadata } from "next";
import Link from "next/link";
import ProfileImage from "./component/ProfileImage";

type Props = {
  params: { slug: Promise<string> };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const pageData = await fetchData<ClientTeamDetail>({
    query: GET_TEAM_SLUG,
    path: "data.getClientTeamDetailBySlug.page",
    variables: {
      slug,
    },
  });
  console.log("Page Data for Metadata:", pageData);
  if (!pageData) {
    return {
      title: "Team Member",
      description: "Team Member Details",
    };
  }
  return {
    title: pageData?.seoTags?.title || pageData.name,
    description: pageData?.seoTags?.description || pageData.designation,
    keywords:
      pageData?.seoTags?.tags?.split(",").map((tag) => tag.trim()) || [],
    openGraph: {
      title: pageData.name,
      description: pageData.designation,
      images: [
        {
          url: pageData.profileImage || "/user.jpg",
        },
      ],
    },
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const currentSlug = await slug;

  console.log("Fetching team detail for slug:", currentSlug);

  try {
    const pageData = await fetchData<ClientTeamDetail>({
      query: GET_TEAM_SLUG,
      path: "data.getClientTeamDetailBySlug.page",
      variables: {
        slug: currentSlug,
      },
    });

    console.log("✓ Fetched Team Detail:", pageData);
    if (!pageData) {
      console.warn("⚠ No data returned for slug:", currentSlug);
      return <NoData />;
    }

    return (
      <>
        {/* Breadcrumb Navigation
        <nav className="max-w-7xl mx-auto px-6 pt-8 pb-4">
          <ul className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/teams"
                className="text-primary hover:text-gradient-gold transition-colors"
              >
                Our Team
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-medium">{pageData?.name}</li>
          </ul>
        </nav> */}
        <main className="grow pb-16" id="main-content">
          <article
            className="max-w-7xl mx-auto px-6"
            itemScope
            itemType="https://schema.org/Person"
          >
            <meta itemProp="name" content={pageData?.name || ""} />
            <meta itemProp="jobTitle" content={pageData?.designation || ""} />
            <meta itemProp="image" content={pageData?.profileImage || ""} />

            {/* Hero Section with Profile */}
            <div className="grid lg:grid-cols-12 gap-8 mb-16">
              {/* Left Column: Image & Quick Info */}
              <aside className="lg:col-span-4">
                <div className="sticky top-8 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
                  {/* Profile Image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <ProfileImage
                      src={
                        pageData?.profileImage?.startsWith("http")
                          ? pageData.profileImage
                          : "/user.jpg"
                      }
                      alt={pageData?.name}
                      fallback="/user.jpg"
                    />
                  </div>

                  {/* Info Section */}
                  <div className="p-6">
                    {/* Name */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {pageData?.name}
                    </h2>

                    {/* Designation */}
                    <p className="text-sm text-primary font-semibold mb-4">
                      {pageData?.designation}
                    </p>

                    {/* Practice Area */}
                    {pageData?.practiceArea && (
                      <div className="mb-5 pb-5 border-b border-gray-200">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                          Practice Area
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          {pageData?.practiceArea}
                        </p>
                      </div>
                    )}

                    {/* Contact Section */}
                    <div className="mb-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                        Contact & Connect
                      </p>
                      <div className="space-y-3">
                        {pageData?.socialLinks?.contactNumber && (
                          <div className="pb-3 border-b border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">Phone</p>
                            <a
                              href={`tel:${pageData.socialLinks.contactNumber}`}
                              className="flex items-center gap-3 px-3 py-2 border border-gray-200 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group/link text-sm font-medium"
                              title="Call"
                            >
                              <svg
                                className="w-4 h-4 text-primary group-hover/link:text-white transition-colors flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.394 1.409 2.601 2.753 3.297l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57C7.18 19.802 2.695 15.25 2.695 9.43V3z"></path>
                              </svg>
                              <span>{pageData.socialLinks.contactNumber}</span>
                            </a>
                          </div>
                        )}

                        {pageData?.socialLinks?.email && (
                          <div className="pb-3 border-b border-gray-200">
                            <p className="text-xs text-gray-500 mb-1">Email</p>
                            <a
                              href={`mailto:${pageData.socialLinks.email}`}
                              className="flex items-center gap-3 px-3 py-2 border border-gray-200 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group/link text-sm font-medium break-all"
                              title="Send Email"
                            >
                              <svg
                                className="w-4 h-4 text-primary group-hover/link:text-white transition-colors flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                              </svg>
                              <span>{pageData.socialLinks.email}</span>
                            </a>
                          </div>
                        )}

                        {/* Social Icons Row */}
                        <div className="flex gap-2 pt-2">
                          {pageData?.socialLinks?.linkedIn && (
                            <a
                              href={pageData.socialLinks.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-3 py-2 border border-gray-200 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group/link"
                              title="LinkedIn"
                            >
                              <svg
                                className="w-4 h-4 text-primary group-hover/link:text-white transition-colors"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.553-1.553-2.553-1.554 0-1.792 1.214-1.792 2.468v3.663H8.635V9.101h2.601v1.235h.036c.363-.686 1.246-1.41 2.564-1.41 2.738 0 3.244 1.803 3.244 4.151v4.761zM4.462 7.773c-.846 0-1.524-.645-1.524-1.439 0-.794.678-1.44 1.524-1.44.846 0 1.524.646 1.524 1.44 0 .794-.678 1.439-1.524 1.439zm1.213 8.565H3.249V9.101h2.426v7.237zM17.452 0H.548C.245 0 0 .245 0 .548v18.904c0 .303.245.548.548.548h16.904c.303 0 .548-.245.548-.548V.548c0-.303-.245-.548-.548-.548z"></path>
                              </svg>
                            </a>
                          )}

                          {pageData?.socialLinks?.twitter && (
                            <a
                              href={pageData.socialLinks.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-3 py-2 border border-gray-200 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group/link"
                              title="Twitter"
                            >
                              <svg
                                className="w-4 h-4 text-primary group-hover/link:text-white transition-colors"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                              </svg>
                            </a>
                          )}

                          {pageData?.socialLinks?.facebook && (
                            <a
                              href={pageData.socialLinks.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-3 py-2 border border-gray-200 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group/link"
                              title="Facebook"
                            >
                              <svg
                                className="w-4 h-4 text-primary group-hover/link:text-white transition-colors"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-3.25-7.5h-2.5a2.5 2.5 0 00-2.5 2.5v2.5h-2.5v2.5h2.5v6.25h2.5V10h2.5V7.5h-2.5V5a1.25 1.25 0 011.25-1.25h1.25V2.5z"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Right Column: Main Content */}
              <div className="lg:col-span-8">
                {/* Header */}
                <header className="mb-12">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 leading-tight">
                    {pageData?.name}
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-gradient-gold mb-8"></div>
                </header>

                {/* About Section */}
                {pageData?.about && (
                  <section className="mb-14 pb-14 border-b border-gray-200">
                    <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-3">
                      <span className="inline-block w-1 h-7 bg-primary rounded-full"></span>
                      About
                    </h2>
                    <div
                      className="text-gray-700 leading-relaxed space-y-4 text-base prose prose-sm max-w-none [&>p]:mb-4 [&>p]:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: pageData.about }}
                    />
                  </section>
                )}

                {/* Qualifications Section */}
                {pageData?.qualifications && (
                  <section className="mb-14 pb-14 border-b border-gray-200">
                    <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-3">
                      <span className="inline-block w-1 h-7 bg-primary rounded-full"></span>
                      Qualifications & Education
                    </h2>
                    <div
                      className="text-gray-700 leading-relaxed space-y-4 text-base prose prose-sm max-w-none [&>p]:mb-4 [&>p]:leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: pageData.qualifications,
                      }}
                    />
                  </section>
                )}

                {/* Experience Section */}
                {pageData?.experiences && (
                  <section className="mb-14 pb-14 border-b border-gray-200">
                    <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-3">
                      <span className="inline-block w-1 h-7 bg-primary rounded-full"></span>
                      Experience & Expertise
                    </h2>
                    <div
                      className="text-gray-700 leading-relaxed space-y-4 text-base prose prose-sm max-w-none [&>p]:mb-4 [&>p]:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: pageData.experiences }}
                    />
                  </section>
                )}

                {/* Languages Section */}
                {pageData?.languages && (
                  <section className="mb-14 pb-14 border-b border-gray-200">
                    <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-3">
                      <span className="inline-block w-1 h-7 bg-primary rounded-full"></span>
                      Languages
                    </h2>
                    <div
                      className="text-gray-700 leading-relaxed space-y-4 text-base prose prose-sm max-w-none [&>p]:mb-4 [&>p]:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: pageData.languages }}
                    />
                  </section>
                )}

                {/* Others Section */}
                {pageData?.others && (
                  <section className="mb-12">
                    <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-3">
                      <span className="inline-block w-1 h-7 bg-primary rounded-full"></span>
                      Additional Information
                    </h2>
                    <div
                      className="text-gray-700 leading-relaxed space-y-4 text-base prose prose-sm max-w-none [&>p]:mb-4 [&>p]:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: pageData.others }}
                    />
                  </section>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-12 mb-16 border border-primary/10">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-serif text-gray-900 mb-4">
                  Need Legal Assistance?
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Connect with {pageData?.name} to discuss your legal matters
                  and explore how we can help.
                </p>
                <div className="flex flex-wrap gap-4">
                  {pageData?.socialLinks?.email && (
                    <a
                      href={`mailto:${pageData.socialLinks.email}`}
                      className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Send Email
                    </a>
                  )}
                  <Link
                    href="/contact-us"
                    className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </main>
      </>
    );
  } catch (error) {
    console.error("❌ Error fetching team detail:", error);
    return <NoData />;
  }
};

export default page;
