const POST_CONTACT = `mutation CreateClientEnquiry($input: createFeedbackInput!) {
  createClientEnquiry(input: $input) {
    message
  }
}`;

export { POST_CONTACT };
