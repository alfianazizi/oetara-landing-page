import alphaO from '../assets/logo/O_logo.svg';
import alphaE from '../assets/logo/E_logo.svg';
import alphaT from '../assets/logo/T_logo.svg';
import alphaA from '../assets/logo/A_logo.svg';
import alphaR from '../assets/logo/R_logo.svg';

const Definition = () => {
    return (
        <div className="bg-black h-[100vh] text-white relative mt-[5.2rem]  rounded-b-[10%]">
            <div className="flex flex-col w-full justify-center items-center h-full gap-10">
                <div className="flex justify-center border border-[#EC1C24] gap-16 py-[3rem] px-[5rem] rounded-[2rem]">
                    <div className="text-center">
                        <img src={alphaO} alt="O" className="lg:w-16 lg:h-16 w-16 h-16 mx-auto" />
                        <p className="text-xl mt-4 font-[500]">Outstanding <br></br> Outcome</p>
                    </div>
                    <div className="text-center">
                        <img src={alphaE} alt="E" className="lg:w-16 lg:h-16 w-16 h-16 mx-auto" />
                        <p className="text-xl mt-4 font-[500]">Execellent <br></br> Execution</p>
                    </div>
                    <div className="text-center">
                        <img src={alphaT} alt="T" className="lg:w-16 lg:h-16 w-16 h-16 mx-auto" />
                        <p className="text-xl mt-4 font-[500]">Trusted Team</p>
                    </div>
                    <div className="text-center">
                        <img src={alphaA} alt="A" className="lg:w-16 lg:h-16 w-16 h-16 mx-auto" />
                        <p className="text-xl mt-4 font-[500]">Accurate <br></br> Analysis</p>
                    </div>
                    <div className="text-center">
                        <img src={alphaR} alt="R" className="lg:w-16 lg:h-16 w-16 h-16 mx-auto" />
                        <p className="text-xl mt-4 font-[500]">Real <br></br> Result</p>
                    </div>
                    <div className="text-center">
                        <img src={alphaA} alt="A" className="lg:w-16 lg:h-16 w-16 h-16 mx-auto" />
                        <p className="text-xl mt-4 font-[500]">Advance <br></br> Assistant</p>
                    </div>
                </div>
                <div className="pt-[3rem] w-[900px]">
                    <p className="text-center text-[2rem] font-[500] py-5">We are Navigators</p>
                    <p className="text-center text-xl font-[200] text-[#D0D2D3]">
                        not only crafting the right message but also <br></br> 
                        setting the measurable goals and will be your<br></br>
                        guidance through Digital World Crowdedness.
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Definition