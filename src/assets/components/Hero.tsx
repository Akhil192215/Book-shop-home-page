type Props = {};

function Hero({}: Props) {
  return (
    <div className="bg-primary h-screen text-white">
      <div className="w-[65%] m-auto">
        <div className="grid md:grid-cols-2 p-20">
        <div>
        <div className="flex items-baseline gap-2  pt-[10rem] ">
          <hr className="w-6 border-secondary border-t mt-2" />
          <p>
            <i> Welcome to pages</i>
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-[2rem] md:text-[3rem]   ">
            Books are uniquely <br /> portable magic
          </h1>
        </div>
        <div className=" opacity-[0.7] pt-4 pb-6 font-thin">
          <p>
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <button className="bg-secondary px-[25px] py-[8px] text-primary">
              {" "}
              Order Today
            </button>
          </div>
          <div>
            <i>
              {" "}
              <u>Read free demo</u>
            </i>

          
          </div>
        </div>
        <div className="flex gap-9 md:gap-28 items-center mt-5 ">
              <div>
                <p className="text-[2xl]">
                  <span className="inline-block w-2 h-2 bg-secondary mr-2 rounded-full"></span>
                  Pages
                </p>
                <p className="opacity-[.7]">586 pages</p>
              </div>
              <div>
                <p>
                  <span className="inline-block w-2 h-2 bg-secondary mr-2 rounded-full"></span>
                  Lenath
                </p>
                <p className="opacity-[.7]">10 Hours</p>
              </div>
              <div>
                <p>
                  <span className="inline-block w-2 h-2 bg-secondary mr-2 rounded-full"></span>
                  Rating
                </p>
                <p className="opacity-[.7]">4.5/5 (306 ratings)</p>
              </div>
            </div>
           </div>
            <div>
            <div className="w-3/4 h-full   bg-white  inset-0 border-[9px] border-[#dbe1e9] ">
            <div className="relative flex items-center pt-[3rem] flex-col">
      <div className="relative inline-block">
        <h2 className="text-5xl font-extrabold text-primary">
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-secondary"></span>
          <span className="relative z-10 px-4">THE DARK</span>
        </h2>
      </div>
      <br />
      <div className="relative inline-block">
        <h2 className="text-5xl font-extrabold text-primary">
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-secondary"></span>
          <span className="relative z-10 px-4">LIGHT</span>
        </h2>
      </div>
    </div>
    <div>
      <p className="text-center text-primary italic  py-6 px-3 text-[13px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
    </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default Hero;
