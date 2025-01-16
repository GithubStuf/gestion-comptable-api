import { IResultPaginated } from "../dtos";
import { paginate } from 'arrpag';

export const resultPaginated = async <T>(
  content: T[],
  page: number,
  perPage: number
): Promise<IResultPaginated<T>> => {
  const pagination = paginate(content, page, perPage);
  const successResponse = {
    status: 200,
    message: "List returned successfully",
  };

  return {
    data: content.length === 0 ? [] : pagination.results,
    totalItems: pagination.totalResults,
    return: successResponse,
    paginator: {
      currentPage: pagination.currentPage,
      pages: pagination.pages,
      nextPage: pagination.nextPage,
      prevPage: pagination.prevPage,
      perPage: pagination.perPage,
      totalResults: pagination.totalResults,
      totalCurrentResults: pagination.totalCurrentResults,
    },
  };
};