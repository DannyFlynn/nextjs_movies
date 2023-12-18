"use client"
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


import Nav from "./Nav";
import Video from "./Video";
import Search from "./Search";
import Loader from "./Loader";

import { Movie } from "./Types";
import PhoneTabletScroll from "./PhoneTabletScroll";

const posterPath = "https://www.themoviedb.org/t/p/w440_and_h660_face/"



const MovieList = () => {

    const router = useRouter();

    const [user, setUser] = useState<string | null>(null);
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState({ pageA: 1, pageB: 2, pageC: 3, pageD: 4, pageE: 100 })
    const [category, setCategory] = useState("popular");
    const [isTv, setIsTv] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [movieSearch, setMovieSearch] = useState<string>("");


    const [clickedMovieId, setClickedMovieId] = useState<number | null>(null);


    //mobile/tablets function
    const movieDetails = (id: number) => {
        if (clickedMovieId === id) {

            setClickedMovieId(0);

        } else {
            setClickedMovieId(id);

        }
    };

    const scrollUpRef = useRef<HTMLDivElement>(null);
    const movieRef = useRef<HTMLDivElement>(null);



    useEffect(() => {


        const storedUser = localStorage.getItem('user');

        setUser(storedUser);

        setIsLoading(false);
        //if user is null page will redirect to index page
        if (!storedUser) {

            router.push('/');
        }
        //request data only render on load and per page load

        axios.get(`https://api.themoviedb.org/3/${isTv ? 'tv' : 'movie'}/${category}?page=${page}&api_key=14015b1dc190ffaa6dbfd60393792a56`)
            .then(response => {

                setMovieList(response.data.results);
                setIsLoading(true);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [page])

    useEffect(() => {
        //request data for diffrent categories for either movie or tv

        axios.get(`https://api.themoviedb.org/3/${isTv ? 'tv' : 'movie'}/${category}?page=${page}&api_key=14015b1dc190ffaa6dbfd60393792a56`)
            .then(response => {

                setMovieList(response.data.results);
                setIsLoading(true);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [category, isTv,])


    //top right icon will log user out and redirect home
    const logOut = () => {
        setUser(null);
        localStorage.clear();
        router.push('/');
    };

    //animation when page or category changes
    const handleSmoothScroll = () => {
        if (movieRef.current) {
            movieRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    //phones and tablets button to smoothly scroll to the top of the page 
    const smoothScrollTop = () => {
        if (scrollUpRef.current) {
            scrollUpRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };


    const chosenCategory = (topic: string) => {
        //will rerun the axios request only if the category has been changed
        if (topic !== category) {
            setCategory(topic);
            setPage(1);
            handleSmoothScroll();
        }
    }

    const switchMedia = () => {

        //will change from movie to tv and vice versa and reset to popular
        setIsTv((prevIsTv) => !prevIsTv);
        setCategory('popular');
    };

    //pagination function passed to Pagination Component
    const pageChoice = (newPage: number, pageId: string) => {
        switch (pageId) {
            case 'A':

                setPages(prev => ({ ...prev, pageB: 2, pageC: 3, pageD: 4 }))
                setPage(newPage)
                handleSmoothScroll()
                break;
            case 'B':

                setPages(prev => pages.pageB !== 2 ? ({ ...prev, pageB: pages.pageB - 1, pageC: pages.pageB, pageD: pages.pageD - 1 }) : { ...prev })
                setPage(newPage)
                handleSmoothScroll()
                break;
            case 'C':

                setPages(pages)
                setPage(newPage)
                handleSmoothScroll()
                break;
            case 'D':

                setPages(prev => pages.pageD !== 199 ? ({ ...prev, pageB: pages.pageC, pageC: pages.pageD, pageD: pages.pageD + 1 }) : ({ ...prev }))
                setPage(newPage)
                handleSmoothScroll()
                break;
            case 'E':
                setPages(prev => ({ ...prev, pageB: pages.pageE - 3, pageC: pages.pageE - 2, pageD: pages.pageE - 1 }))
                setPage(newPage)
                handleSmoothScroll()
                break;

            default:
                break;
        }
    }

    //search input control
    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMovieSearch(event.target.value);
    }

    //when search button is fired 
    const findMovie = () => {

        axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=false&language=en-US&page=1&api_key=14015b1dc190ffaa6dbfd60393792a56`)
            .then(response => {
                //if are movies to display if condition will be met otherwise it will alert user no movie was found
                const movieData = response.data.results;
                if (movieData.length > 0) {
                    setMovieList(movieData)
                    setMovieSearch("");
                    handleSmoothScroll();
                } else {
                    alert("No movie found with that name :(")
                    setMovieSearch("");
                }

            }).catch(error => {
                console.error('Error fetching data:', error);
            });
    }



    return (
        <div className='relative mx-auto' ref={scrollUpRef}>
            {user && isLoading && (
                <>
                    <PhoneTabletScroll smoothScrollTop={smoothScrollTop} />
                    <Nav category={category} chosenCategory={chosenCategory} isTv={isTv} handleSmoothScroll={handleSmoothScroll} user={user} logOut={logOut} />
                    <Video />
                    <div className="flex justify-center">
                        <Search movieSearch={movieSearch} handleSearchChange={handleSearchInput} findMovie={findMovie} />
                    </div>

                    {/* mobile/tablets */}
                    <div className="md:hidden w-full flex justify-evenly p-2 mt-4">
                        <p className={`lg:hidden md:text-2xl drop-shadow-lg  mx-3 cursor-pointer ${category === 'popular' ? 'underline' : ''}`}
                            onClick={() => { chosenCategory('popular'), handleSmoothScroll() }}
                        >Popular</p>
                        <p className={`lg:hidden md:text-2xl drop-shadow-lg  mx-3 cursor-pointer ${category === 'top_rated' ? 'underline' : ''}`}
                            onClick={() => { chosenCategory('top_rated'), handleSmoothScroll() }}
                        >Top Rated</p>
                        <p className={`lg:hidden md:text-2xl drop-shadow-lg  mx-3 cursor-pointer ${category === 'airing_today' || category === 'upcoming' ? 'underline' : ''}`}
                            onClick={() => { chosenCategory(`${isTv ? 'airing_today' : 'upcoming'}`), handleSmoothScroll() }}
                        >{isTv ? 'Airing Today' : 'Upcoming'}</p>
                    </div>
                    {/* end */}

                    <p className="md:text-5xl drop-shadow-lg mb-3 mx-3 mt-8" ref={movieRef}>{isTv ? 'Series' : 'Movies'}
                        <span className="text-base underline cursor-pointer text-sky-400" onClick={switchMedia}> Switch to {isTv ? 'Movies' : 'Series'}?</span>
                    </p>
                    <div className="flex flex-wrap justify-center"
                    >
                        {movieList.map(movie => (
                            <div key={movie.id}
                                className='relative  m-3 cursor-pointer group'>

                                <LazyLoadImage
                                    src={posterPath + movie.poster_path}
                                    alt="movie_poster"
                                    className="movie-list-pics"
                                />
                                <div className="lg-movie-info text-base px-3 ">
                                    <p className="pt-2">{movie.overview}</p>
                                    <p className="pt-2">Release Date - {new Date(movie.release_date).toLocaleDateString('en-GB')}</p>
                                    <p className="pt-2">Rating - {Math.round(movie.vote_average)}/10</p>
                                    <div className="w-full flex justify-center">
                                        <button className="w-20 border-2 bg-sky-900 p-2  lg:hover:bg-sky-700 my-6 mx-3">Play</button>
                                    </div>
                                </div>

                                {/* mobile/tablets */}
                                <div className="lg:hidden absolute z-20 top-10 right-3">
                                    {clickedMovieId !== movie.id ? (
                                        <FontAwesomeIcon icon={faCircleRight} size="2xl"
                                            className="text-sky-900"
                                            onClick={() => movieDetails(movie.id)} />
                                    ) : (
                                        <FontAwesomeIcon icon={faCircleXmark} size="2xl"
                                            className="text-sky-900"
                                            onClick={() => movieDetails(movie.id)} />
                                    )}
                                </div>
                                {/* end */}

                                <div className={`movie-details absolute z-20  ${clickedMovieId === movie.id ? 'visible' : ''} overflow-y-auto`}>
                                    {clickedMovieId === movie.id ? (
                                        <div className="p-2 text-lg">
                                            <p className="">{movie.overview}</p>
                                            <p className="">Release Date - {new Date(movie.release_date).toLocaleDateString('en-GB')}</p>
                                            <p className="">Rating - {Math.round(movie.vote_average)}/10</p>
                                            <div className="w-full flex justify-center">
                                                <button className="w-20 border-2 bg-sky-900 p-2  lg:hover:bg-sky-700 my-6 mx-3">Play</button>
                                            </div>
                                        </div>
                                    ) : (
                                        null
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                    <Pagination pages={pages} page={page} pageChoice={pageChoice} />
                </>
            )}
            <div className={`${!isLoading ? 'block' : 'hidden'}`}>
                <Loader />
            </div>
        </div>
    )
}

export default MovieList

