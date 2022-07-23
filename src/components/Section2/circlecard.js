export default function Card({ icon, title, description }) {
  return (
    <div className="p-6 flex flex-row justify-center align-middle group transition hover:scale-[1.01] hover:shadow-lg hover:cursor-pointer m-2">
      <div className="rounded-full md:w-[5vw] md:h-[5vw] w-[15vw] h-[15vw] bg-[#EF6522] flex justify-center align-middle p-2 md:p-4 group-hover:bg-[#f87c3e] transition my-auto">
        <img src={icon} className="md:w-[3vw] w-[8vw]" />
      </div>
      <div className="flex-col px-5">
        <p className="text-[#F6862C] font-[futura-reg] text-lg md:text-xl font-bold transition group-hover:text-[#ee7238]">
          {title}
        </p>
        <div className="md:max-w-[35vw] text-justify md:text-lg text-sm max-w-[70vw]">
          {description}
        </div>
      </div>
    </div>
  );
}
