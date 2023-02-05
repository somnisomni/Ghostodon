/* Not well-typed yet; can be updated later */

export interface GhostDraftPost {
  status: "draft" | "published" | string,
  updated_at: string,
}

export interface GhostPublishedPost extends GhostDraftPost {
  id: string,
  uuid: string,
  title: string,
  slug: string,
  mobiledoc: string,
  html: string,
  comment_id: string,
  plaintext: string,
  feature_image: string | null,
  featured: boolean,
  visibility: "public" | string,
  created_at: string,
  published_at: string,
  custom_excerpt: string | null,
  codeinjection_head: string | null,
  codeinjection_foot: string | null,
  custom_template: string | null,
  canonical_url: string | null,
  authors: Array<unknown>,
  tags: Array<unknown>,
  tiers: Array<unknown>,
  count: object,
  primary_author: object,
  primary_tag: string | null,
  email_segment: "all" | string,
  url: string,
  excerpt: string,
  reading_time: number,
  og_image: string | null,
  og_title: string | null,
  og_description: string | null,
  twitter_image: string | null,
  twitter_title: string | null,
  twitter_description: string | null,
  meta_title: string | null,
  meta_description: string | null,
  email_subject: string | null,
  frontmatter: string | null,
  feature_image_alt: string | null,
  feature_image_caption: string | null,
  email_only: boolean,
}

export interface GhostWebhookPublish {
  post: {
    current: GhostPublishedPost,
    previous: GhostPublishedPost,
  }
}
