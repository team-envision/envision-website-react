export default function Heading({ title, description, background, mt }) {
  return (
    <div className="w-[100vw] px-8 flex flex-col md:flex-row justify-between my-auto align-middle mb-12 mt-16">
      <div
        className={`font-[futura] text-[#EF6522] inherit text-[6vw] md:text-[2vw] mt-${mt}`}
      >
        {title}
        <div className="outline text-[7vw] md:text-[4vw] select-none absolute -mt-[12vw] md:-mt-[5vw] -z-10 ">
          {background}
        </div>
      </div>
      <div className="md:block hidden border-[#ef66228a] border-[2px] w-[20vw] translate-x-24 bg-[#ef6622] h-[2px] opacity-80 my-auto border-collapse"></div>

      <div className="my-auto text-[#F6862C] md:mt-3 mt-5 md:max-w-[25vw] ">
        {description}
      </div>
    </div>
  );
}
