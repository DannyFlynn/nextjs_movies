export type NavProps = {
    category: string;
    chosenCategory: (topic: string) => void;
    isTv: boolean;
    handleSmoothScroll: () => void;
    user: string;
    logOut: () => void;
}

export type PagesProps = {
    pages: {
        pageA: number,
        pageB: number,
        pageC: number,
        pageD: number,
        pageE: number,
    },
    page: number,
    pageChoice: (newPage: number, pageId: string) => void;
}

export type Movie = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    overview: string;
    vote_average: number;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
};

export type MovieSearchProps = {
    movieSearch: string;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    findMovie: () => void;
}