import { News } from "./news.interface";

export interface NewsResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    results: News[];
}
