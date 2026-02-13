"use client";
import { ClientFaqsResponse } from "@/app/utils/interface/index.query";
import { fetchData } from "@/app/utils/service";
import { GET_FAQ } from "@/app/utils/service/index.query";
import { MainHeading } from "@/components/internal/texture";
// import { FAQS } from "@/constant/faq";
import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const FAQOverview: React.FC = () => {
  const [data, setData] = React.useState<ClientFaqsResponse | null>();
  const getData = async () => {
    const faqData = await fetchData<ClientFaqsResponse>({
      query: GET_FAQ,
      path: "data.getClientFaqsPageContent",
      variables: {
        input: {
          limit: 50,
          order: "desc",
          orderBy: "_id",
          skip: 0,
        },
      },
    });
    setData(() => faqData);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const pathname = usePathname();
  const isPreview = !["/faq"].includes(pathname);
  return (
    <>
      {/* FAQ Section */}
      <section id="faq-section" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <MainHeading
              title="Legal Clarity"
              description="Common Inquiries"
              customClass={!isPreview ? "mb-12" : ""}
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-500 mt-4 font-light max-w-lg leading-relaxed mb-10">
            Find answers to the most frequent questions regarding our legal
            processes and consultancy standards.
          </p>
          <div className="space-y-4">
            {Array.isArray(data?.page.items) && data?.page.items.length > 0
              ? data?.page.items?.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                      openFaqIndex === idx
                        ? "border-secondary bg-secondary/2 shadow-xl shadow-secondary/5"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)
                      }
                      className="w-full px-8 py-6 flex items-center justify-between text-left group"
                    >
                      <span
                        className={`text-lg font-serif transition-colors duration-300 ${
                          openFaqIndex === idx
                            ? "text-primary"
                            : "text-gray-700 group-hover:text-secondary"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                          openFaqIndex === idx
                            ? "bg-secondary text-white rotate-180"
                            : "bg-gray-50 text-gray-400 group-hover:bg-secondary/10 group-hover:text-secondary"
                        }`}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        openFaqIndex === idx
                          ? "max-h-75 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-8 pb-8 text-gray-500 leading-relaxed font-light text-sm">
                        <div className="pt-2 border-t border-gray-50">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : `No FAQ's`}
          </div>

          <div className="mt-16 mb-4 p-8 bg-primary rounded-3xl text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
              <HelpCircle size={120} className="text-white" />
            </div>
            <h4 className="text-xl text-white font-serif mb-2 relative z-10">
              Still have questions?
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light relative z-10">
              Our legal experts are available for a detailed case review.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all duration-300 relative z-10"
            >
              Contact Specialist <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQOverview;
