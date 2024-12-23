import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error from "../../../src/assets/lazy404.json"

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen  text-center">

        <div className='w-3/5'>
        <Lottie animationData={error} loop={true} className="bg-transparent" ></Lottie>
        </div>
        <div>
          <Link to={"/"} className='btn btn-outline btn-primary my-10' >Back to Home</Link>
        </div>
     
    </div>
    );
};

export default ErrorPage;