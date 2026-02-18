"use client";
import { Content } from "@/components/internal/markup";
import { MainHeading } from "@/components/internal/texture";
import { contactSchema } from "@/interface/contact.schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Send,
  Mail,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ClientContactUsResponse,
  ClientPracticeArea,
  ClientPracticeAreasResponse,
} from "../utils/interface/index.query";
import { fetchData } from "../utils/service";
import { POST_CONTACT } from "../utils/service/index.mutation";
import { GET_PRACTICE_HEADER } from "../utils/service/index.query";
import GradientIcon from "@/components/ui/gradientIcon";

const ContactUs = ({
  contactData,
}: {
  contactData: ClientContactUsResponse;
}) => {
  const [publicationData, setPublicationData] = React.useState<
    ClientPracticeArea[] | null
  >();
  const [formStatus, setFormStatus] = useState("idle");

  const getPublicationData = async () => {
    const pubData = await fetchData<ClientPracticeAreasResponse>({
      query: GET_PRACTICE_HEADER,
      path: "data.findAllClientPracticeAreas",
      variables: {
        input: {
          limit: 50,
          order: "desc",
          orderBy: "_id",
          skip: 0,
        },
      },
    });
    setPublicationData(() => pubData.data);
  };

  React.useEffect(() => {
    getPublicationData();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      practiceArea: "General Inquery",
      message: "",
    },
  });

  const onContactSubmit = async () => {
    setFormStatus("sending");
    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    const response = await fetchData<ClientPracticeAreasResponse>({
      query: POST_CONTACT,
      variables: {
        input: watch(),
      },
    });
    if (!response.errors) {
      setFormStatus("success");
      reset();
      setTimeout(() => setFormStatus("idle"), 5000);
      return;
    } else {
      setFormStatus("failed");
      setTimeout(() => setFormStatus("idle"), 5000);
      return console.warn("contact form error", response.errors);
    }
  };
  const pathname = usePathname();

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact-section"
        className={cn([
          "py-15 ",
          ["/contact-us"].includes(pathname) ? "" : "bg-slate-100",
        ])}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <MainHeading
              title={contactData?.title || "Get In Touch"}
              description={contactData?.subTitle || "Let`s Discuss Your Case"}
              customClass="mb-6"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mt-15">
            {/* Contact Info Column */}

            <div className="space-y-5">
              <Content
                className="text-gray-600 leading-relaxed max-w-md"
                html={contactData?.content as string}
              />
              <div className="space-y-4">
                {/* Location Card */}
                {contactData?.location && (
                  <a
                    href={"https://maps.app.goo.gl/ktTvj1bT1wNwBmQx6"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-6 group border-2 border-primary w-80 p-3 rounded-[12px] hover:bg-primary/10 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <GradientIcon icon={MapPin} size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1e] mb-1">
                        {contactData.location.label || "Our Location"}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {contactData.location.city}
                        <br />
                        {contactData.location.address},{" "}
                        {contactData.location.country}
                      </p>
                    </div>
                  </a>
                )}

                {/* Phone Card */}
                {contactData?.contactInfo && (
                  <a
                    href={`tel:${contactData.contactInfo.primaryPhone}`}
                    className="flex gap-6 group border-2 border-primary w-80 p-3 rounded-[12px] hover:bg-primary/10 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <GradientIcon icon={Phone} size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1e] mb-1">
                        Phone Number
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {contactData.contactInfo.primaryPhone}
                        <br />
                        {contactData.contactInfo.secondaryPhone}
                      </p>
                    </div>
                  </a>
                )}

                {/* Email Card */}
                {contactData?.contactInfo && (
                  <a
                    href={`mailto:${contactData.contactInfo.primaryEmail}`}
                    className="flex gap-6 group border-2 border-primary w-80 p-3 rounded-[12px] hover:bg-primary/10 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <GradientIcon icon={Mail} size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1e] mb-1">Email</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {contactData.contactInfo.primaryEmail}
                        <br />
                        {contactData.contactInfo.secondaryEmail}
                      </p>
                    </div>
                  </a>
                )}

                {/* Office Hours Card */}
                {contactData?.officeHour && (
                  <div className="flex gap-6 group border-2 border-primary w-80 p-3 rounded-[12px]">
                    <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <GradientIcon icon={Clock} size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1c1e] mb-1">
                        Office Hours
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {contactData.officeHour.day}
                        <br />
                        {contactData.officeHour.note}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-[#f9f9f9] p-8 md:p-12 rounded-2xl shadow-sm  border-2 border-primary">
              {formStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h4 className="text-2xl font-serif text-[#1a1c1e] mb-3">
                    Message Received
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. One of our partners will contact
                    you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-secondary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onContactSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                        Full Name
                      </label>

                      <div className="rounded-xl focus-within:ring-0 transition-all">
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="Full Name"
                          className={`w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none transition-all ${
                            errors.name
                              ? "border-red-500"
                              : "focus:border-[2px] focus:border-transparent focus:ring-2 focus:ring-gradient-gold"
                          }`}
                        />
                      </div>

                      {errors.name && (
                        <p className="text-red-500 text-[11px] flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                        Email Address
                      </label>

                      <div className="rounded-xl focus-within:ring-0 transition-all">
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email Address"
                          className={`w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none transition-all ${
                            errors.email
                              ? "border-red-500"
                              : "focus:border-[2px] focus:border-transparent focus:ring-2 focus:ring-gradient-gold"
                          }`}
                        />
                      </div>

                      {errors.email && (
                        <p className="text-red-500 text-[11px] flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                      Practice Area
                    </label>

                    <select
                      {...register("practiceArea")}
                      className={`w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none transition-all ${
                        errors.practiceArea
                          ? "border-red-500"
                          : "focus:border-[2px] focus:border-transparent focus:ring-2 focus:ring-gradient-gold"
                      } appearance-none cursor-pointer`}
                    >
                      <option value={"General Inquiry"}>General Inquiry</option>
                      {publicationData?.map((item, index: number) => (
                        <option key={index} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>

                    {errors.practiceArea && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.practiceArea.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                      Phone Number
                    </label>

                    <input
                      {...register("phone")}
                      type="phone"
                      placeholder="Phone Number"
                      className={`w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none transition-all ${
                        errors.phone
                          ? "border-red-500"
                          : "focus:border-[2px] focus:border-transparent focus:ring-2 focus:ring-gradient-gold"
                      }`}
                    />

                    {errors.phone && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                      Your Message
                    </label>

                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Briefly describe your situation..."
                      className={`w-full bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 focus:outline-none transition-all resize-y ${
                        errors.message
                          ? "border-red-500"
                          : "focus:border-[2px] focus:border-transparent focus:ring-2 focus:ring-gradient-gold"
                      }`}
                    ></textarea>

                    {errors.message && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting || formStatus === "sending"}
                    type="submit"
                    className="group mx-auto w-full justify-center flex items-center gap-3 px-6 py-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-md active:scale-95"
                  >
                    {isSubmitting || formStatus === "sending" ? (
                      "Processing..."
                    ) : (
                      <>
                        Request Consultation <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-[12px] text-gray-400 text-center leading-relaxed">
                    By submitting this form, you acknowledge that this contact
                    does not establish an attorney-client relationship.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
