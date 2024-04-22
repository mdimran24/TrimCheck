
    
   import cover from "../images/cover.jpg"
   
   export default function Home() {
        return (
    // Hero Section
    <div>

<div class="h-[65vh] lg:h-[80vh] mt-20 lg:mt-20">
        <div class=" w-full h-full bg-hero bg-cover bg-center ">
          <div class="w-full h-full flex bg-sky-600/40 backdrop-brightness-50 backdrop-blur">
            <div className=" place-self-center mx-auto p-6 lg:p-16">
              <div className="animate-fade-in-up ">

              <div className=" items-center w-full lg:w-3/5">
              <h1 className=" font-semibold leading-snug tracking-tight text-white text-4xl  lg:leading-tight xl:text-6xl xl:leading-tight">
              Book Your Barber Appointment Today
            </h1>
              <p className=" text-slate-200 text-xs lg:text-lg mt-4 hidden md:block">
              We offer high quality haircuts, making sure you look great.</p>
              <div className="mt-10">
              <a
                href="/appointment"
                rel="noopener"
                className=" text-white font-bold text-sm px-4 py-2 shadow outline-none focus:outline-none w-[100%] bg-blue-500 rounded-lg hover:bg-blue-600 ">
                Book Appointment
              </a>
              
            </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden lg:p-2 lg:m-2 ">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-screen grid-cols-1 gap-x-32 2xl:gap-x-48 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              src={cover}
              alt="Product screenshot"
              className="lg:rounded-xl shadow-2xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl md:-ml-5 lg:-ml-10 2xl:-ml-24 my-auto"
            />
            <div className="lg:pr-2 lg:pt-4 mb-10 ml-4">
              <div className="lg:max-w-xl">
                <dl className="mt-0 max-w-screen space-y-3 text-base leading-7 text-slate-500 lg:max-w-none">
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-cyan-600 sm:text-4xl">
                    What We Offer
                  </h2>
                  <div className="relative lg:pl-1">
                    <p className="inline">
                        Our Barber Appointment System will make going to get a hair cut a much more easier experience. Say goodbye to long waiting times and last-minute rushes - with our innovative system, scheduling your haircut appointments becomes effortless and convenient.
                    </p>
                  </div>
                  <div className="relative lg:pl-1">
                    <dd className="inline">
                    We value transparency and accountability, which is why we empower our clients to rate and provide feedback on their barbering experiences. 
                    </dd>
                  </div>
                  <div className="relative lg:pl-1">
                    <dd className="inline">
                    For latest pricing please check our book appointment pages as this will be where prices will be updated.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      </div>
)
}