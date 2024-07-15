import { Photo } from "@/types/photo";
import { useState } from "react";

type Props = {
    image: string;
    closeModal: ()=> void;
    photoList: Photo[];
}

export const Modal =({image, closeModal, photoList}:Props) => {
    const [currentImage, setCurrentImage] = useState(image);
    const photo = photoList.find(item => item.url === currentImage);
    const [nextImg, setNextimg] = useState(photo ? photo.id :0);

    const nextPhoto = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
            photoList.find(item => item.id == nextImg+1);

            setCurrentImage(photoList[nextImg -1].url)
            if(photoList.length === photo.id -1){
                setCurrentImage(photoList[0].url)
            }else{
                setNextimg(nextImg+1)
            };
    };
    

    return (
        <>
            <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/90" onClick={closeModal}>
                    <div className="right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={(e) =>e.stopPropagation()}>{'<'} </div>
                    <img src={currentImage} className="relative max-w-screen max-h-screen" onClick={(e) =>e.stopPropagation()} />
                    <div className=" absolute right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={nextPhoto}> {'>'} </div>

            </div>
            <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={closeModal}>
                X
            </div>
        </>
    )
}