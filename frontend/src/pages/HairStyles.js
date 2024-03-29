

export default function HairStyle() {

    return(
  <div>
          <div class="justify-center items-center flex-col mt-2 lg:mt-8 min-[2000px]:-mt-2 ">
        <div class="w-full h-full  bg-cover bg-center bg-fixed ">
          <div
            class="w-full h-full flex justify-center items-center backdrop-brightness-75 backdrop-blur-[2px]">
            <div className="mx-auto place-self-center lg:col-span-7 p-4 my-auto text-center">
              <h1 className="py-52 lg:py-72 max-w-2xl text-6xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Hair Style
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden p-10">
        <div className="mx-auto max-w-7xl ">
          <div class=" max-w-full ">
            <div class="-p-1">
              <div className="mx-auto items-center grid grid-cols-1 gap-x-32 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-screen lg:grid-cols-3">
                <div class="w-auto">
                  <img
                    class="rounded-full mx-auto w-auto h-72"
                    src=""
                    alt=""
                  />
                  <div class="p-3">
                    <h5 class="my-4 text-3xl font-bold tracking-tight text-cyan-600 text-center">
                    Thick
                    </h5>

                    <p class="mb-3 md:p-10 lg:p-0 font-normal text-slate-700 ">
                    Thick hair is the poisoned chalice of hair types</p>
                  </div>
                </div>

                <div class="min-w-fit w-auto">
                  <div href="#">
                    <img
                      class="rounded-full mx-auto w-auto h-72"
                      src=""
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <h5 class="mb-4 text-3xl font-bold tracking-tight text-cyan-600 text-center">
                    Fine 
                    </h5>

                    <p class="mb-3 font-normal text-slate-700 ">
                    A heart-shaped face starts narrow at the chin—which is usually pointed and emphasized—and widens upward toward the forehead, which is the widest part of the face. 
                    </p>
                  </div>
                </div>

                <div class="min-w-fit w-auto">
                  <div href="#">
                    <img
                      class="rounded-full mx-auto w-auto h-72"
                      src=""
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <h5 class="mb-4 text-3xl font-bold tracking-tight text-cyan-600 text-center">
                    Wavy 
                    </h5>

                    <p class="mb-3 font-normal text-slate-700 ">
                    A heart-shaped face starts narrow at the chin—which is usually pointed and emphasized—and widens upward toward the forehead, which is the widest part of the face. 
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      
        </div>

    )
}
