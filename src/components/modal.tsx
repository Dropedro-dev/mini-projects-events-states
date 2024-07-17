import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
type Props = {
    image: string;
    slidePositions:number;
    modalIndex: number;
    closeModal: ()=> void;
    prevSlide: ()=> void;
    nextSlide: ()=> void;
    goToSlide: (i:number)=>void;
}

export const Modal =({image, slidePositions, modalIndex, closeModal, prevSlide, nextSlide, goToSlide}:Props) => {
    const slidesArray = Array.from({ length: slidePositions }, (e, i) => i);
    return (
        <>
            <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/90" onClick={closeModal}>
                    <div className="relative" onClick={(e)=> e.stopPropagation()}>
                        <img src={image} className="max-w-screen max-h-screen" />
                        <div className="absolute top-[50%] -translate-x-0  translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white hover:text-blue-600 cursor-pointer" onClick={prevSlide}>
                            <BsChevronCompactLeft size={30}/>
                        </div>
                        <div className="absolute top-[50%] -translate-x-0  translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/60 text-white hover:text-blue-600 cursor-pointer" onClick={nextSlide}> 
                            <BsChevronCompactRight size={30}/>    
                        </div>
                        <div className="absolute right-[50%] -translate-y-0  translate-x-[50%] bottom-5 flex flex-row text-2xl rounded-full p-2 bg-black/60 text-white ">
                            {
                                slidesArray.map((slide, slideIndex) => (
                                    <div className={`text-2xl cursor-pointer`}>
                                        <RxDotFilled 
                                        className={`${modalIndex === slideIndex ? 'text-blue-600':'text-white'}`}
                                        onClick={()=>goToSlide(slideIndex)}/>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
            
            </div>
            <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={closeModal}>
                X
            </div>
        </>
    )
}