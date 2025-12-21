import { MainHeading, TitleHeading } from "@/components/internal/texture";

const page = () => {
  return (
    <section className="lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center py-4">
        <MainHeading description="Privacy Policy" />
        <div className="text-start">
          <TitleHeading
            title="PERSONAL INFORMATION WE COLLECT"
            description={
              <>
                We use cookies, log files, pixel tags, local storage objects and
                other tracking technologies to automatically collect information
                when users access or use the services or visit our Site, such as
                an IP address, general location information, domain name, page
                views, a date/time stamp, browser type, device type, device ID,
                Internet Service Provider (“ISP”), referring/exit URLs,
                operating system, language, clickstream data, and other
                information about the links clicked, features used, size of
                files uploaded, streamed or deleted, and similar device and
                usage information. We refer to this automatically collected
                information as “Device Information”.
                <br />
                <br />
                Additionally, when you contact us by filling out the contact
                forms through the Site, we collect your name, address, phone
                number and email address. This also includes your submission of
                certain material or request for further services. When you post
                a comment on a discussion board or other public forum, by
                default your username will be displayed within the forum along
                with your comment. We refer to this automatically collected
                information as “Personal Information”.
              </>
            }
          />

          <TitleHeading
            title="USE OF YOUR PERSONAL INFORMATION"
            description={
              <>
                We use the Personal Information we collect generally to respond
                to any of your queries or service requests sent to us through
                the Site. Additionally we use this Personal Information to:
                <ul className="flex flex-col gap-3 list-disc space-y-2">
                  <li>
                    To provide support to you and monitor, operate and analyze
                    our site;
                  </li>
                  <li>To communicate with you about your use of the sites;</li>
                  <li>
                    To contact you and respond to your enquiries in a prompt and
                    efficient manner;
                  </li>
                  <li>To conduct our recruitment and selection process;</li>
                  <li>
                    When you or the organization you work for, engages with us
                    for the services we provide;
                  </li>
                  <li>To facilitate our internal business operation;</li>
                  <li>To enter into or carry out contract of various kinds;</li>
                  <li>To identify services you may be interested in; and</li>
                  <li>
                    Protect, establish, exercise or defend legal rights as
                    required by the law.
                  </li>
                </ul>
                We will only disclose your Personal Information for as long as
                is reasonably necessary in the circumstances or to comply with
                legal requirements. Personal Information provided in connection
                with us providing legal services will be retained in accordance
                with the firm’s retention policies unless we agree otherwise
                with you, in writing.
              </>
            }
          />

          <TitleHeading
            title="PERSONAL INFORMATION WE COLLECT"
            description={
              <>
                We use cookies, log files, pixel tags, local storage objects and
                other tracking technologies to automatically collect information
                when users access or use the services or visit our Site, such as
                an IP address, general location information, domain name, page
                views, a date/time stamp, browser type, device type, device ID,
                Internet Service Provider (“ISP”), referring/exit URLs,
                operating system, language, clickstream data, and other
                information about the links clicked, features used, size of
                files uploaded, streamed or deleted, and similar device and
                usage information. We refer to this automatically collected
                information as “Device Information”.
                <br />
                <br />
                Additionally, when you contact us by filling out the contact
                forms through the Site, we collect your name, address, phone
                number and email address. This also includes your submission of
                certain material or request for further services. When you post
                a comment on a discussion board or other public forum, by
                default your username will be displayed within the forum along
                with your comment. We refer to this automatically collected
                information as “Personal Information”.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default page;
