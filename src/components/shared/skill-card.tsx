import Image from "next/image";

export const SkillCard = ({ image, name }: { image: string; name: string }) => {
    return (
        <div className="h-32 w-28 flex flex-col justify-center items-center gap-2 bg-card border rounded-2xl shadow-lg drop-shadow-2xl">
            <Image src={image} height={40} width={40} alt={name} />
            <p>{name}</p>
        </div>
    );
};
