import { PagesProps } from "./Types";

const Pagination = ({ pages, page, pageChoice }: PagesProps) => {
    return (
        <div className="text-center">
            <button className={`${page === pages.pageA ? ' bg-sky-700 p-2 lg:hover:bg-sky-900' : ' bg-sky-400 p-2 lg:hover:bg-sky-700  '} w-16 border-2 my-4`}
                onClick={() => pageChoice(pages.pageA, 'A')}>{pages.pageA}</button>
            <button className={`${page === pages.pageB ? ' bg-sky-700 p-2 lg:hover:bg-sky-900' : ' bg-sky-400 p-2 lg:hover:bg-sky-700  '} w-16 border-2 my-4`}
                onClick={() => pageChoice(pages.pageB, 'B')}>{pages.pageB}</button>
            <button className={`${page === pages.pageC ? ' bg-sky-700 p-2 lg:hover:bg-sky-900' : ' bg-sky-400 p-2 lg:hover:bg-sky-700  '} w-16 border-2 my-4`}
                onClick={() => pageChoice(pages.pageC, 'C')}>{pages.pageC}</button>
            <button className={`${page === pages.pageD ? ' bg-sky-700 p-2 lg:hover:bg-sky-900' : ' bg-sky-400 p-2 lg:hover:bg-sky-700  '} w-16 border-2 my-4`}
                onClick={() => pageChoice(pages.pageD, 'D')}>{pages.pageD}</button>
            <button className={`${page === pages.pageE ? ' bg-sky-700 p-2 lg:hover:bg-sky-900' : ' bg-sky-400 p-2 lg:hover:bg-sky-700  '} w-16 border-2 my-4`}
                onClick={() => pageChoice(pages.pageE, 'E')}>{pages.pageE}</button>
        </div>
    )
}

export default Pagination