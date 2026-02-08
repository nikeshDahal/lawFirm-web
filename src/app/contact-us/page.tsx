"use client";
import MarkUpHTML from "@/components/internal/markup";
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
import { GET_CONTACT, GET_PRACTICE_HEADER } from "../utils/service/index.query";
const ContactUs = () => {
  const [data, setData] = React.useState<ClientContactUsResponse | null>();
  const [publicationData, setPublicationData] = React.useState<
    ClientPracticeArea[] | null
  >();
  const [formStatus, setFormStatus] = useState("idle");

  const getData = async () => {
    const contactData = await fetchData<ClientContactUsResponse>({
      query: GET_CONTACT,
      path: "data.getClientContactUsPageContent",
      variables: {
        input: {
          limit: 50,
          order: "desc",
          orderBy: "_id",
          skip: 0,
        },
      },
    });
    setData(() => contactData);
  };
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
    getData();
  }, []);

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
          "py-24 ",
          ["/contact-us"].includes(pathname) ? "" : "bg-slate-100",
        ])}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Column */}
            <div className="space-y-6">
              <div>
                <MainHeading
                  title={data?.title || "Get In Touch"}
                  description={data?.subTitle || "Let`s Discuss Your Case"}
                  customClass="mb-6"
                />
                <MarkUpHTML
                  className="text-gray-600 leading-relaxed max-w-md"
                  content={data?.content as string}
                />
                {/* <p className="text-gray-600 leading-relaxed max-w-md">
                  Our expert legal team is ready to provide you with the
                  guidance and representation you deserve. Send us a message or
                  visit our office.
                </p> */}
              </div>

              <div className="space-y-4">
                <div className="flex gap-6 group border-2 border-primary w-75 p-3 rounded-[12px]">
                  <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <MapPin
                      className="text-secondary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1c1e] mb-1">
                      {data?.location.label || "Our Location"}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {data?.location.city}
                      <br />
                      {data?.location.address}, {data?.location.country}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group border-2 border-primary w-75 p-3 rounded-[12px]">
                  <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <Phone
                      className="text-secondary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1c1e] mb-1">
                      Phone Number
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {data?.contactInfo.primaryPhone}
                      <br />
                      {data?.contactInfo.secondaryPhone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group border-2 border-primary w-75 p-3 rounded-[12px]">
                  <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <Clock
                      className="text-secondary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1c1e] mb-1">
                      Office Hours
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {data?.officeHour.day}
                      <br />
                      {data?.officeHour.note}
                    </p>
                  </div>
                </div>
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
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="John Doe"
                        className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                          errors.name
                            ? "border-red-500"
                            : "border-gray-200 focus:border-secondary"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-[11px] flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                          errors.email
                            ? "border-red-500"
                            : "border-gray-200 focus:border-secondary"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[11px] flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                      Practice Area
                    </label>
                    <select
                      {...register("practiceArea")}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none cursor-pointer"
                    >
                      <option value={"General Inquery"}>General Inquery</option>
                      {publicationData?.map((item, index: number) => {
                        return (
                          <option key={index} value={item.title}>
                            {item.title}
                          </option>
                        );
                      })}
                    </select>
                    {errors.practiceArea && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.practiceArea.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      type="phone"
                      placeholder="+977 9806089009"
                      className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                        errors.phone
                          ? "border-red-500"
                          : "border-gray-200 focus:border-secondary"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-gray-400">
                      Your Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Briefly describe your situation..."
                      className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none ${
                        errors.message
                          ? "border-red-500"
                          : "border-gray-200 focus:border-secondary"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    disabled={isSubmitting || formStatus === "sending"}
                    type="submit"
                    // className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 ${
                    //   isSubmitting || formStatus === "sending"
                    //     ? "bg-gray-400 cursor-not-allowed"
                    //     : "bg-primary text-white hover:bg-secondary"
                    // }`}
                    className="group mx-auto w-full  justify-center cursor-pointer flex items-center gap-3 px-8 py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95"
                  >
                    {isSubmitting || formStatus === "sending" ? (
                      "Processing..."
                    ) : (
                      <>
                        Request Consultation <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">
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
