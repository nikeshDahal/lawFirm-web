interface RecognitionItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface SeoTags {
  title: string;
  description: string;
  tags: string;
}

interface ClientLandingPageContent {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  content: string;
  status: "ACTIVE" | "INACTIVE";
  pageType: string; // or union if you know exact values
  author: string;
  subTitle: string;
  seoTags: SeoTags;
}

interface ClientRecognitionsPageContent {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  title: string;
  slug: string;
  content: string;
  status: "ACTIVE" | "INACTIVE";
  seoTags: SeoTags;
  pageType: "RECOGNITION";
  author: string;
  recognitions: RecognitionItem[];
}

interface MetaDataItem {
  title: string;
  description: string;
}
interface AboutUsMetaData {
  secondaryTitle: string;
  secondarySubTitle: string;
  description: string;
  items: MetaDataItem[];
}

interface ClientAboutUsPageContent {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  content: string;
  status: "ACTIVE" | "INACTIVE";
  pageType: string; // or union if fixed
  author: string;

  subTitle: string;
  yearsOfExperience: number;
  metaData: AboutUsMetaData;
}

interface ClientPracticeAreasResponse {
  message: string;
  pagination: {
    total: number;
    hasNextPage: boolean;
  };
  metaData: {
    title: string;
    subTitle: string;
    seoTags: {
      title: string;
      description: string;
      tags: string;
    };
  };
  data: ClientPracticeArea[];
  errors?: undefined;
}

interface ClientPracticeArea {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  title: string;
  slug: string;
  content: string;
  status: string; // could be "ACTIVE" | "INACTIVE" if you want stricter typing
  pageType: string; // could be "PRACTICE_AREAS" if stricter typing
  author: string;
  pageImage: string;
  metaData: string;
  seoTags: {
    title: string;
    description: string;
    tags: string;
  };
}

interface ClientTeamsResponse {
  message: string;
  pagination: {
    total: number;
    hasNextPage: boolean;
  };
  data: ClientTeam[];
}

interface ClientTeam {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  name: string;
  designation: string;
  practiceArea: string;
  profileImage: string | null;
  socialLinks: {
    facebook: string;
    email: string;
    linkedIn: string;
    twitter: string;
  };
}

interface ClientTestimonialsResponse {
  message: string;
  metaData: {
    title: string;
    subTitle: string;
    seoTags: {
      title: string;
      description: string;
      tags: string;
    };
  };
  data: ClientTestimonial[];
  pagination: {
    total: number;
    hasNextPage: boolean;
  };
}

interface ClientTestimonial {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  message: string; // may contain HTML
  rating: number;
  clientName: string;
  clientDesignation: string;
  clientImage: string;
  status: string; // could be "active" | "inactive" if stricter typing
}

interface ClientPublicationsResponse {
  message: string;
  pagination: {
    total: number;
    hasNextPage: boolean;
  };
  metaData: {
    title: string;
    subTitle: string;
    seoTags: {
      title: string;
      description: string;
      tags: string;
    };
  };
  data: ClientPublication[];
}

interface ClientPublication {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  title: string;
  slug: string;
  content: string; // may contain HTML
  status: string | null;
  pageType: string; // e.g. "BLOG" | "PUBLICATIONS"
  author: string;
  pageImage: string;
  metaData: string;
  category?: string;
}

interface ClientContactUsResponse {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  title: string;
  subTitle: string;
  slug: string;
  content: string; // may contain HTML
  status: string; // e.g. "ACTIVE"
  pageType: string; // e.g. "CONTACT"
  author: string;
  seoTags: {
    title: string;
    description: string;
    tags: string;
  };
  contactInfo: {
    primaryEmail: string;
    secondaryEmail: string;
    primaryPhone: string;
    secondaryPhone: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedIn: string;
    youtube: string;
    tiktok: string;
    twitter: string;
  };
  location: {
    label: string;
    address: string;
    city: string;
    country: string;
  };
  officeHour: {
    day: string;
    note: string;
  };
}

interface ClientFaqsResponse {
  message: string;
  pagination: null; // currently null in response
  page: {
    _id: string;
    items: ClientFaqItem[];
  };
}

interface ClientFaqItem {
  question: string;
  answer: string;
  status: string; // e.g. "active"
}

interface ClientPracticeAreaDetail {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  title: string;
  slug: string;
  content: string; // may contain HTML
  status: string; // e.g. "ACTIVE"
  pageType: string; // e.g. "PRACTICE_AREAS"
  author: string;
  pageImage: string;
  metaData: string;
  seoTags: {
    title: string;
    description: string;
    tags: string;
  };
}

export type {
  SeoTags,
  RecognitionItem,
  ClientLandingPageContent,
  ClientRecognitionsPageContent,
  ClientAboutUsPageContent,
  ClientPracticeAreasResponse,
  ClientPracticeArea,
  ClientTeamsResponse,
  ClientTeam,
  ClientTestimonialsResponse,
  ClientTestimonial,
  ClientPublicationsResponse,
  ClientPublication,
  ClientContactUsResponse,
  ClientFaqsResponse,
  ClientFaqItem,
  ClientPracticeAreaDetail,
};

export interface GetClientRecognitionsPageResponse {
  data: {
    getClientRecognitionsPageContent: ClientRecognitionsPageContent;
  };
}
