"use client"

import { photoList } from "@/data/photoList";
import { PhotoItem } from "./photoItem";
import { useState } from "react";
import { Modal } from "./modal";
import { GoTools } from "react-icons/go";

const Galery = () => {
    const [modalView, setModalView] = useState<boolean>(false);
    const [modalIndex, setmodalIndex] = useState<number>(0);

    const openModal = (id: number) =>{
        setModalView(true);
        setmodalIndex(id -1)
    }

    const closeModal =()=> {
        setModalView(false);
        setmodalIndex(0);
    }

    const prevSlide =()=> {
        const isFirstPhoto = modalIndex === 0;
        const newIndex = isFirstPhoto ? photoList.length -1: modalIndex -1;

        setmodalIndex(newIndex);
    }

    const nextSlide =()=> {
        const isLastPhoto = modalIndex === photoList.length -1;
        const newIndex = isLastPhoto ? 0: modalIndex +1;

        setmodalIndex(newIndex);
    }

    const goTOSlide=(index:number) => setmodalIndex(index);
  
    return (
        <div className="mx-2 mb-2">
            <h1 className="text-center text-3xl font-bold mb-10">Fotos intergalácticas</h1>
            
            <section className="container max-w-5xl mx-auto grid grid-cols-q md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photoList.map(item=>(
                    <PhotoItem
                        key={item.id}
                        photo={item}
                        onClick={()=>openModal(item.id)} />
                ))}
            </section>
            {modalView && 
                <Modal 
                image={photoList[modalIndex].url}
                closeModal={closeModal}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                slidePositions={photoList.length}
                modalIndex={modalIndex}
                goToSlide={goTOSlide} />}
        </div>
    )
}
export default Galery;