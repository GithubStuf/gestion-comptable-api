export interface IResultPaginated<T> {
  data: T[];
  totalItems: number;
  return: object;
  paginator: {
    totalResults: number;
    pages: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
    perPage: number;
    totalCurrentResults: number;
  };
}
