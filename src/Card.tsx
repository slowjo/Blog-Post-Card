import Illustration from './assets/illustration-article.svg';
import Avatar from './assets/image-avatar.webp';

export default function Card() {
    return (
        <section id="card" className="bg-white p-[22px] rounded-[20px] flex flex-col gap-6 max-w-96 shadow-[8px_8px_rgba(0,0,0,1)] hover:shadow-[16px_16px_rgba(0,0,0,1)] cursor-pointer border-black border-[1px]">
            <img src={Illustration} alt="abstract blog article illustration" className="block max-w-full rounded-[10px]" />
            <div className="flex flex-col gap-3">
                <span className="block px-3 py-1 bg-yellow w-fit rounded-[4px] font-extrabold text-[12px] leading-[18px] md:text-sm md:leading-[21px]">Learning</span>
                <span className="block font-medium text-[12px] leading-[18px] md:text-[14px] md:leading-[21px]">Published 21 Dec 2023</span>
                <h1 className="font-extrabold text-xl leading-[30px] md:text-2xl md:leading-[36px]">HTML & CSS foundations</h1>
                <p className="font-medium text-grey text-sm leading-[21px] md:text-base">These languages are the backbone of every website, defining structure, content, and presentation.</p>
            </div>
            <div className="flex items-center justify-start gap-3">
                <img src={Avatar} alt="Image Avatar" className="h-8 w-8" />
                <span className="text-sm leading-[21px] font-extrabold">Greg Hooper</span>
            </div>
        </section>
    )
}