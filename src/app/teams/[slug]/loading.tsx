export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Skeleton */}
      <nav className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
      </nav>

      <main className="grow pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Left Column Skeleton */}
            <aside className="lg:col-span-5">
              <div className="sticky top-8">
                {/* Profile Image Skeleton */}
                <div className="aspect-[3/4] rounded-2xl bg-gray-300 animate-pulse mb-8"></div>

                {/* Quick Info Card Skeleton */}
                <div className="bg-gray-100 rounded-xl p-6 mb-8 space-y-5">
                  <div>
                    <div className="h-3 bg-gray-300 rounded w-24 mb-2 animate-pulse"></div>
                    <div className="h-5 bg-gray-300 rounded w-32 animate-pulse"></div>
                  </div>
                  <div className="pt-5 border-t border-gray-200">
                    <div className="h-3 bg-gray-300 rounded w-28 mb-2 animate-pulse"></div>
                    <div className="h-5 bg-gray-300 rounded w-40 animate-pulse"></div>
                  </div>
                </div>

                {/* Social Links Skeleton */}
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-12 bg-gray-200 rounded-lg animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Column Skeleton */}
            <div className="lg:col-span-7">
              {/* Header Skeleton */}
              <header className="mb-12">
                <div className="h-12 bg-gray-300 rounded animate-pulse mb-4 w-3/4"></div>
                <div className="h-1 w-20 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
              </header>

              {/* Content Sections */}
              {[...Array(3)].map((_, i) => (
                <section
                  key={i}
                  className="mb-14 pb-14 border-b border-gray-200"
                >
                  <div className="h-7 bg-gray-300 rounded animate-pulse mb-6 w-48"></div>
                  <div className="space-y-3">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="h-5 bg-gray-200 rounded animate-pulse"
                      ></div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* CTA Section Skeleton */}
          <section className="bg-gray-100 rounded-2xl p-12 mb-16">
            <div className="max-w-2xl">
              <div className="h-8 bg-gray-300 rounded animate-pulse mb-4 w-64"></div>
              <div className="h-5 bg-gray-300 rounded animate-pulse mb-8 w-96"></div>
              <div className="flex gap-4">
                <div className="h-12 bg-gray-300 rounded-lg animate-pulse w-32"></div>
                <div className="h-12 bg-gray-300 rounded-lg animate-pulse w-32"></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
