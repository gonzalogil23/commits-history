export interface Commit {
  id?: string;
  date: string;
  author: string;
  message: string;
  url: string;
}

export enum SearchType {
  ALL_COMMITS,
  ONE_BY_ID,
  NONE,
}
