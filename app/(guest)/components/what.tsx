export default function What() {
  return (
    <div className="  text-white px-8">
      <div className="max-w-7xl mx-auto relative ">
        {/* Section 01 */}
        <div className="">
          <div className="flex flex-col items-baseline gap-1 mb-2">
            <span className="text-5xl md:text-7xl font-bold">01</span>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-500">Patients</h2>
          </div>
          <p className="max-w-2xl text-gray-300 text-sm md:text-lg">
            Patience in trading means waiting for quality setups, avoiding
            impulsive decisions, and sticking to your strategy. It’s key to
            consistent and sustainable success.Rushing trades often leads to
            losses, while patience helps you capitalize on high-probability
            opportunities. The market rewards discipline, not haste.
          </p>
        </div>

        {/* What? Text */}
        <div className="text-center my-10">
          <h2
            className="text-7xl md:8xl lg:text-9xl font-bold text-sky-500"
            style={{
              textShadow: "0px 0px 150px #40E0D0",
            }}
          >
            What?
          </h2>
        </div>

        {/* Section 02 */}
        <div className="text-right  w-full">
          <div className="flex flex-col items-end gap-1  mb-2 ">
            <span className="text-5xl md:text-7xl font-bold">02</span>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-500">Reward</h2>
          </div>
          <div className="flex justify-end">
            <p className="max-w-2xl text-gray-300 text-sm md:text-lg">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
