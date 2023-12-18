import { PacmanLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center mr-3">
                <PacmanLoader color={'#36d7b7'} />
            </div>
        </div>
    )
}

export default Loader