"use client"

import { photoList } from "@/data/photoList";
import { PhotoItem } from "./photoItem";
import { useState } from "react";
import { Modal } from "./modal";

const Galery = () => {
    const [modalView, setModalView] = useState<boolean>(false);
    const [modalImg, setModalImg] = useState<string>('');

    const openModal = (id: number) =>{
        const photo = photoList.find(item => item.id === id);

        if(photo) {
            setModalImg(photo.url)
            setModalView(true);
        }
    }

    const closeModal =()=> {
        setModalView(false);
        setModalImg('');
    }

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
                image={modalImg}
                closeModal={closeModal}
                photoList={photoList} />}
        </div>
    )
}
export default Galery;