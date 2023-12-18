import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MovieSearchProps } from './Types';


const Search = ({ movieSearch, handleSearchChange, findMovie }: MovieSearchProps) => {

    return (
        <div className="mt-12 w-5/6 md:w-1/2">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
                <input
                    type="search"
                    value={movieSearch}
                    onChange={handleSearchChange}
                    className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-white bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  placeholder-white"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" />
                <button
                    className="bg-sky-400 relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => findMovie()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}
                    />
                </button>
            </div>
        </div>
    )
}

export default Search