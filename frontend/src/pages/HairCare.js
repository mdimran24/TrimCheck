import haircareIMG from ".././images/haircare.jpg"

export default function HairCare() {
  return (
    <div>
      <div class="justify-center items-center flex-col mt-2 lg:mt-8 min-[2000px]:-mt-2 ">
        <div class="mb-6 md:mb-8 w-full h-full bg-banner bg-cover bg-center bg-fixed ">
          <div
            class="w-full h-full flex justify-center items-center backdrop-brightness-50 backdrop-blur-[2px]">
            <div className="mx-auto place-self-center lg:col-span-7 p-4 my-auto text-center">
              <h1 className=" py-52 lg:py-60 max-w-2xl text-7xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Hair Care
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gradient-to-t from-white to-slate-100 py-10 sm:py-14 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

          <div className="lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className=" md:rounded-xl lg:max-w-xl 2xl:max-w-2xl md:-ml-2 lg:ml-16 mt-4w-[48rem] max-w-screen bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={haircareIMG}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8  lg:px-8">
            <div className="lg:pr-4 px-4 lg:px-0">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1 className="mt-2 text-xl font-bold tracking-tight text-cyan-600 sm:text-2xl">
                  Hair Care Tips
                </h1>
                <p className="mt-2">
                  Here are some tips for better hair care
                </p>
                <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-cyan-600  sm:text-xl">
                      Use Natural, Gentle Shampoo
                      </strong>
                      <br></br>
                      Your hair deserves to be treated with a product that contains
                  only natural ingredients that cleanse gently. Avoiding
                  shampoos with long lists of harsh chemical ingredients is a
                  must for men’s hair health. Since we’re dedicated to only
                  using the best natural ingredients in all our products, you
                  won’t find any petrochemicals, sulfates, parabens, phthalates,
                  or silicones in either of our shampoos. 
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-cyan-600  sm:text-xl">
                        Don’t Shampoo Every Day
                      </strong>
                      <br></br>
                      Hair health for men is as important as it is for women. A
                      lot of guys get in the habit of using shampoo every day,
                      assuming that they should be washing their hair every
                      single time they hop in the shower. But for many men, this
                      is simply not the case. The oils your scalp secretes are
                      meant to nourish your hair, protect it, and keep it
                      healthy. Shampooing too often strips those oils out,
                      making your hair look dull, brittle, and weak.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-cyan-600  sm:text-xl">
                        Use Hair Conditioner
                      </strong>
                      <br></br>Sorry guys, but shampoo alone isn’t enough for
                      men’s hair health. Remember: even the most natural shampoo
                      can remove nourishing oils from your hair, and it doesn’t
                      do much to protect your hair against day-to-day damage and
                      the elements. This leaves your hair moisturized, strong,
                      and shinier over time.{" "}
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-cyan-600  sm:text-xl">
                        Don’t Shampoo Every Day
                      </strong>
                      <br></br>
                      Hair health for men is as important as it is for women. A
                      lot of guys get in the habit of using shampoo every day,
                      assuming that they should be washing their hair every
                      single time they hop in the shower. But for many men, this
                      is simply not the case. The oils your scalp secretes are
                      meant to nourish your hair, protect it, and keep it
                      healthy. Shampooing too often strips those oils out,
                      making your hair look dull, brittle, and weak.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-cyan-600  sm:text-xl">
                        Take it easy on your Hair
                      </strong>
                      <br></br>If you’re rough, tough, and careless with your hair and hair care routine when washing and styling, you’re doing yourself a major disservice. (This includes being too rough on things likeback hair removal). But a lot of guys tend to have a hard time with what might be the easiest of our men’s hair care tips: be gentle.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
