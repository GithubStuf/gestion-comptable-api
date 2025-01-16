import { IClient } from "../../../dtos/Client";

export interface IFindAllClientsRequest {
    page: number;
    perPage: number;
}

export interface IFindAllClientsResponse {
    data: IClient[];
    paginator: {
        totalResults: number;
        pages: number;
        currentPage: number;
        prevPage: number | null;
        nextPage: number | null;
        perPage: number;
        totalCurrentResults: number;
    };
}