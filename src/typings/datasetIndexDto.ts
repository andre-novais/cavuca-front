export type DatasetIndexDto = {
  name: string,
  tags: string[] | [],
  groups: string[] | [],
  organization: string,
  resourceFormats: string[],
  site: string,
  mongo_id: string
}
