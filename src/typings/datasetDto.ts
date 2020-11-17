export type DatasetDto = {
  name: string,
  description: string,
  organization?: {
    name: string,
    description: string,
    image_url: string
  },
  tags: string[] | [],
  aditionalInfo?: Record<string, string>,
  resources: {
    name: string,
    description: string,
    url: string,
    type: string,
    format: string,
    created_at: string
  }[],
  sourceUrl: string,
  groups: {
    name: string,
    description: string,
    image_url: string
  }[] | [],
  unique_name: string,
  site_name: string,
  _id: string,
  mongo_id: string
}
