import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'e4zanme7',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skygYQe0raDsHQAAjohqjOWpxXoE3vocxSBWtQqQDRReA9P2BLWJmcHVFYrmVjNEHWRPioblJGUNBxGZPdm1R2txA3cDCNIyipkBjcJiJ6cnKASh3gTTL03r0zqup5j8xjCwbPzXpjBAkGCI3XL78feqFkvRWIdG8mTwOTlYTxXN7uysu8TM',
  useCdn: false,
})