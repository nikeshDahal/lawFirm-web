const GET_BANNER = `
        query GetClientLandingPageContent {
          getClientLandingPageContent {
            _id
            createdAt
            updatedAt
            title
            slug
            content
            status
            seoTags {
              title
              description
              tags
            }
            pageType
            author
            subTitle
          }
        }
      `;

const GET_RECOGNITIONS = `query GetClientRecognitionsPageContent {
  getClientRecognitionsPageContent {
    _id
    createdAt
    updatedAt
    title
    slug
    content
    status
    seoTags {
      title
      description
      tags
    }
    pageType
    author
    recognitions {
      title
      subtitle
      description
      icon
    }
  }
}`;

const GET_ABOUT = `query GetClientAboutUsPageContent {
  getClientAboutUsPageContent {
    _id
    createdAt
    updatedAt
    title
    slug
    content
    status
    seoTags {
      title
      description
      tags
    }
    pageType
    author

    subTitle
    yearsOfExperience
    metaData {
      secondaryTitle
      secondarySubTitle
      description
      items {
        title
        description
      }
    }
  }
}`;

const GET_PRACTICE = `query FindAllClientPracticeAreas($input: GetAllPagesInputDTO!) {
  findAllClientPracticeAreas(input: $input) {
    message
    pagination {
      total
      hasNextPage
    }
    metaData {
      title
      seoTags {
        title
        description
        tags
      }
      subTitle
    }
    data {
      _id
      createdAt
      updatedAt
      title
      slug
      content
      status
      pageType
      author
      pageImage
      metaData
      seoTags {
        title
        description
        tags
      }
    }
  }
}`;

const GET_PRACTICE_SEO = `query FindAllClientPracticeAreas($input: GetAllPagesInputDTO!) {
  findAllClientPracticeAreas(input: $input) {
    message
   
    metaData {
      title
      seoTags {
        title
        description
        tags
      }
      subTitle
    }
  }
}`;

const GET_PRACTICE_SLUG = `query GetClientPracticeAreaDetailBySlug($slug: String!) {
  getClientPracticeAreaDetailBySlug(slug: $slug) {
    _id
    createdAt
    updatedAt
    title
    slug
    content
    status
    seoTags {
      title
      description
      tags
    }
    pageType
    author
    pageImage
    metaData
  }
}`;
const GET_PRACTICE_HEADER = `query FindAllClientPracticeAreas($input: GetAllPagesInputDTO!) {
  findAllClientPracticeAreas(input: $input) {
    message
    pagination {
      total
      hasNextPage
    }
    data {
      _id
      title
      slug
      
    }
  }
}`;

const GET_TEAM = `query GetAllClientTeams($input: GetAllPagesInputDTO!) {
  getAllClientTeams(input: $input) {
    message
    pagination {
      total
      hasNextPage
    }
    data {
      _id
      slug
      createdAt
      updatedAt
      name
      designation
      practiceArea
      profileImage
      socialLinks {
        facebook
        email
        linkedIn
        twitter
      }
    }
  }
}`;

const GET_TEAM_SLUG = `query GetClientTeamDetailBySlug($slug: String!) {
  getClientTeamDetailBySlug(slug: $slug) {
    message
    pagination {
      total
      hasNextPage
    }
    page {
      _id
      createdAt
      updatedAt
      name
      slug
      designation
      practiceArea
      profileImage
      about
      experiences
      qualifications
      languages
      others
      socialLinks {
        facebook
        email
        linkedIn
        twitter
        contactNumber
      }
      seoTags {
        title
        description
        tags
      }
      status
    }
  }
}`;

const GET_TESTIMONIAL = `query GetAllClientTestimonials($input: GetAllPagesInputDTO!) {
  getAllClientTestimonials(input: $input) {
    message
    metaData {
      title
      seoTags {
        title
        description
        tags
      }
      subTitle
    }
    data {
      _id
      createdAt
      updatedAt
      message
      rating
      clientName
      clientDesignation
      clientImage
      status
    }
    pagination {
      total
      hasNextPage
    }
  }
}`;

const GET_PUBLICATION = `query GetAllClientPublications($input: GetAllPagesInputDTO!) {
  getAllClientPublications(input: $input) {
    message
    pagination {
      total
      hasNextPage
    }
    metaData {
      title
      seoTags {
        title
        description
        tags
      }
      subTitle
    }
    data {
      _id
      createdAt
      updatedAt
      title
      slug
      content
      status
      pageType
      author
      pageImage
      metaData
    }
  }
}`;
const GET_PUBLICATION_SEO = `query GetAllClientPublications($input: GetAllPagesInputDTO!) {
  getAllClientPublications(input: $input) {
    message
   
    metaData {
      title
      seoTags {
        title
        description
        tags
      }
      subTitle
    }
  
  }
}`;
const GET_PUBLICATION_HEADER = `query GetAllClientPublications($input: GetAllPagesInputDTO!) {
  getAllClientPublications(input: $input) {
    message
    pagination {
      total
      hasNextPage
    }
    data {
      _id
      slug
      title
    }
  }
}`;

const GET_PUBLICATION_SLUG = `query GetClientPublicationBySlug($slug: String!) {
  getClientPublicationBySlug(slug: $slug) {
    _id
    createdAt
    updatedAt
    title
    slug
    content
    status
    seoTags {
      title
      description
      tags
    }
    pageType
    author
    pageImage
    metaData
  }
}`;

const GET_CONTACT = `query GetClientContactUsPageContent {
  getClientContactUsPageContent {
    _id
    createdAt
    updatedAt
    title
    slug
    content
    status
    seoTags {
      title
      description
      tags
    }
    pageType
    author
    contactInfo {
      primaryEmail
      secondaryEmail
      primaryPhone
      secondaryPhone
    }
    socialMedia {
      facebook
      instagram
      linkedIn
      youtube
      tiktok
      twitter
    }
    location {
      label
      address
      city
      country
    }
    officeHour {
      day
      note
    }
    subTitle
  }
}`;

const GET_FAQ = `query GetClientFaqsPageContent {
  getClientFaqsPageContent {
    message
    pagination {
      total
      hasNextPage
    }
    page {
      _id
      items {
        question
        answer
        status
      }
    }
  }
}`;

export {
  GET_BANNER,
  GET_RECOGNITIONS,
  GET_ABOUT,
  GET_PRACTICE,
  GET_PRACTICE_SLUG,
  GET_TEAM,
  GET_TEAM_SLUG,
  GET_TESTIMONIAL,
  GET_PUBLICATION,
  GET_PUBLICATION_HEADER,
  GET_PUBLICATION_SLUG,
  GET_CONTACT,
  GET_FAQ,
  GET_PRACTICE_HEADER,
  GET_PRACTICE_SEO,
  GET_PUBLICATION_SEO,
};
