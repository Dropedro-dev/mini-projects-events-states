import { Photo } from "@/types/photo"

type Prop = {
    photo: Photo;
    onClick: () => void
}

export const PhotoItem =({photo, onClick }: Prop)=> {

    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/${photo.url}`} alt="" className="w-auto h-full" />
        </div>
    )
}