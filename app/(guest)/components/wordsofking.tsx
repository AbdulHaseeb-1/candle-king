import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function WordsOfKing() {
  return (
    <div className="py-28  text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* First Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold">Words From King</h1>
          <div className="relative">
            <span className="absolute -left-0 top-0 text-4xl md:text-8xl font-serif">
              <RiDoubleQuotesL size={40} />
            </span>
            <p className="py-10 text-md md:text-xl leading-relaxed max-w-3xl mx-auto ">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero
              are also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </p>
            <span className="absolute right-0 bottom-0 text-4xl md:text-8xl font-serif">
              <RiDoubleQuotesR size={40} />
            </span>
          </div>
        </div>

        {/* Second Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-sky-500">Finally!</h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            Meri Stream pe koi bhi trading ni kare ga , buy sell ki bheenk
            mangne ni aye ga
          </p>
        </div>
      </div>
    </div>
  );
}
