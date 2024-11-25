import React from "react";
import logo from "../../assets/logo.png";
import certification1 from '../../assets/fitchA.png';
import certification2 from '../../assets/gpw.png';

const SubTitle = () => {
    return(
        <div className="flex bg-l-blue static p-3.5 drop-shadow-lg">
            <div className="w-4/6 flex flex-col justify-start flex-wrap m-auto">
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-roboto font-normal text-primary">We are <span className="font-bold text-secondary">HIRING!</span></h1>
                {/*<h4 className="lg:text-3xl md:text-2xl font-roboto font-semibold text-secondary">Apply for this job</h4>*/}
            </div>
            <div className="w-1/6 flex justify-center flex-wrap m-auto">
                <img className="lg:w-16 w-8" src={certification2} alt="great place to work certification" />
                <img className="lg:w-16 w-8" src={certification1} alt="" />

            </div>
            <div className="w-1/6 flex flex-col justify-start flex-wrap m-auto">
                <img className="lg:w-logo" src={logo} alt="company logo" />
            </div>
        </div>
    )
}

export default SubTitle;