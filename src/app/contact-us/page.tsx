"use client";
import {
  AlertCircle,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactProps, contactSchema } from "@/interface/contact.schema";
import { MainHeading } from "@/components/internal/texture";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const ContactUs = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      practiceArea: "Corporate Law",
      message: "",
    },
  });

  const onContactSubmit = async (data: ContactProps) => {
    console.log("🚀 ~ onContactSubmit ~ data:", data);
    setFormStatus("sending");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
    reset();
    setTimeout(() => setFormStatus("idle"), 5000);
  };
  const pathname = usePathname();

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact-section"
        className={cn([
          "py-24 ",
          ["/contact-us"].includes(pathname) ? "" : "bg-slate-200",
        ])}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Column */}
            <div className="space-y-6">
              <div>
                <MainHeading
                  title="Get In Touch"
                  description="Let`s Discuss Your Case"
                  customClass="mb-6"
                />
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Our expert legal team is ready to provide you with the
                  guidance and representation you deserve. Send us a message or
                  visit our office.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <MapPin
                      className="text-secondary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1c1e] mb-1">
                      Our Location
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      123 Legal Plaza, Suite 400
                      <br />
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
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
                      (+977) 123-4567
                      <br />
                      (+977) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
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
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-[#f9f9f9] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
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
                        {...register("fullName")}
                        type="text"
                        placeholder="John Doe"
                        className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                          errors.fullName
                            ? "border-red-500"
                            : "border-gray-200 focus:border-secondary"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-[11px] flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.fullName.message}
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
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Other">Other</option>
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
                      {...register("phoneNumber")}
                      type="phoneNumber"
                      placeholder="+977 9806089009"
                      className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-200 focus:border-secondary"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phoneNumber.message}
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
                    className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting || formStatus === "sending"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-secondary"
                    }`}
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
