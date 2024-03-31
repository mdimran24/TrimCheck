import { useState } from "react";
import straight from "../images/Straight.png";
import wavy from "../images/Wavy.png";
import curly from "../images/Curly.png";


import Straight1 from "../images/Straight1.jpg";
import Straight2 from "../images/buzzcut.jpg";
import Straight3 from "../images/straight3.png";
import wavy1 from "../images/wavy1.jpg";
import wavy2 from "../images/wavy2.jpg";
import wavy3 from "../images/wavy3.png";
import curly1 from "../images/curly1.jpg";
import curly2 from "../images/curly2.png";
import curly3 from "../images/curly3.png";


export default function HairStyle() {
  const [straightSelected, setStraightSelected] = useState(false);
  const [wavySelected, setWavySelected] = useState(false);
  const [CurlySelected, setCurlySelected] = useState(false);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <div class="justify-center items-center flex-col mt-2 lg:mt-8 min-[2000px]:-mt-2 ">
        <div class="w-full h-full bg-stylesbanner bg-cover bg-center bg-fixed ">
          <div class="w-full h-full flex justify-center items-center backdrop-brightness-75 backdrop-blur-[2px]">
            <div className="mx-auto place-self-center lg:col-span-7 p-4 my-auto text-center">
              <h1 className="py-52 lg:py-72 max-w-2xl text-6xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Hair Styles
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden p-10">
        <div className="mx-auto max-w-7xl ">
          <div class=" max-w-full ">
            <p className="text-2xl font-semibold text-center mb-4">
              Pick Your Hair Type
            </p>
            <div class="-p-1">
              <div className="mx-auto items-center grid grid-cols-1 gap-x-32 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-screen lg:grid-cols-3">
                <div
                  class="min-w-fit w-auto shadow-xl rounded-lg"
                  onClick={() => {
                    setStraightSelected(true);
                    setWavySelected(false);
                    setCurlySelected(false);
                    handleScroll();
                  }}
                >
                  <img
                    class="rounded-full mx-auto w-auto h-72"
                    src={straight}
                    alt=""
                  />
                  <div class="p-3">
                    <h5 class="my-4 text-3xl font-bold tracking-tight text-cyan-600 text-center">
                      Straight
                    </h5>

                    <p class="mb-3 md:p-10 lg:p-0 font-normal text-slate-700 text-center">
                      Lies flat, or straight on the scalp
                    </p>
                  </div>
                </div>

                <div
                  class="min-w-fit w-auto shadow-xl rounded-lg" 
                  onClick={() => {
                    setStraightSelected(false);
                    setWavySelected(true);
                    setCurlySelected(false);
                    handleScroll();
                  }}
                >
                  <div href="#">
                    <img
                      class="rounded-full mx-auto w-auto h-72"
                      src={wavy}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <h5 class="mb-4 text-3xl font-bold tracking-tight text-cyan-600 text-center">
                      Wavy
                    </h5>

                    <p class="mb-3 font-normal text-slate-700 text-center">
                      Sits between straight an curly hair
                    </p>
                  </div>
                </div>

                <div
                  class="min-w-fit w-auto shadow-xl rounded-lg :hover"
                  onClick={() => {
                    setStraightSelected(false);
                    setWavySelected(false);
                    setCurlySelected(true);
                    handleScroll();
                  }}
                >
                  <div href="#">
                    <img
                      class="rounded-full mx-auto w-auto h-72"
                      src={curly}
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <h5 class="mb-4 text-3xl font-bold tracking-tight text-cyan-600 text-center">
                      Curly
                    </h5>

                    <p class="mb-3 font-normal text-slate-700 text-center ">
                      Hair that grows in oval like shapes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Straight Hair */}
      {straightSelected && (
        <div className="overflow-hidden p-10">
          <div className="mx-auto max-w-7xl ">
            <div class=" max-w-full ">
              <p className="text-2xl font-semibold text-center mb-4">
                Straight Hair Inspo
              </p>
              <div class="-p-1">
                <div className="mx-auto items-center grid grid-cols-1 gap-x-32 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-screen lg:grid-cols-3">
                  <div
                    class="min-w-fit w-auto"

                  >
                    <img
                      class="rounded-full mx-auto w-auto h-72"
                      src={Straight2}
                      alt="Instagram @javi_thebarber_ "
                    />
                    <p className="text-xs font-thin text-center mt-1">
                      @javi_thebarber_{" "}
                    </p>

                  </div>

                  <div
                    class="min-w-fit w-auto"
                  >
                    <div href="#">
                      <img
                        class="rounded-full mx-auto w-auto h-72"
                        src={Straight1}
                        alt=""
                      />
                      <p className="text-xs font-thin text-center mt-1">
                        @awet_eri_boys_barber
                      </p>
                    </div>

                  </div>

                  <div
                    class="min-w-fit w-auto"
                  >
                    <div href="#">
                      <img
                        class="rounded-full mx-auto w-auto h-72"
                        src={Straight3}
                        alt=""
                      />
                      <p className="text-xs font-thin text-center mt-1">
                        mjbarberz1.booksy.com
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {/* Wavy Hair */}
      {wavySelected && (
        <div className="overflow-hidden p-10">
          <div className="mx-auto max-w-7xl ">
            <div class=" max-w-full ">
              <p className="text-2xl font-semibold text-center mb-4">
                Wavy Hair Inspo
              </p>
              <div class="-p-1">
                <div className="mx-auto items-center grid grid-cols-1 gap-x-32 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-screen lg:grid-cols-3">
                  <div
                    class="min-w-fit w-auto"

                  >
                    <img
                      class="rounded-full mx-auto w-auto h-72"
                      src={wavy1}
                      alt=""
                    />
                      <p className="text-xs font-thin text-center mt-1">
                        @awet_eri_boys_barber
                      </p>

                  </div>

                  <div
                    class="min-w-fit w-auto"
                  >
                    <div href="#">
                      <img
                        class="rounded-full mx-auto w-auto h-72"
                        src={wavy2}
                        alt=""
                      />
                      <p className="text-xs font-thin text-center mt-1">
                        @awet_eri_boys_barber
                      </p>
                    </div>

                  </div>

                  <div
                    class="min-w-fit w-auto"
                  >
                    <div href="#">
                      <img
                        class="rounded-full mx-auto w-auto h-72"
                        src={wavy3}
                        alt=""
                      />
                      <p className="text-xs font-thin text-center mt-1">
                        @awet_eri_boys_barber
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Curly Hair */}
      {CurlySelected && (
        <div className="overflow-hidden p-10">
          <div className="mx-auto max-w-7xl ">
            <div class=" max-w-full ">
              <p className="text-2xl font-semibold text-center mb-4">
                Curly Hair Inspo
              </p>
              <div class="-p-1">
                <div className="mx-auto items-center grid grid-cols-1 gap-x-32 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-screen lg:grid-cols-3">
                  <div
                    class="min-w-fit w-auto"

                  >
                    <img
                      class="rounded-full mx-auto w-auto h-72"
                      src={curly1}
                      alt=""
                    />
                      <p className="text-xs font-thin text-center mt-1">
                        @awet_eri_boys_barber
                      </p>

                  </div>

                  <div
                    class="min-w-fit w-auto"
                  >
                    <div href="#">
                      <img
                        class="rounded-full mx-auto w-auto h-72"
                        src={curly2}
                        alt=""
                      />
                      <p className="text-xs font-thin text-center mt-1">
                        @awet_eri_boys_barber
                      </p>
                    </div>
                    <div class="p-4">

                    </div>
                  </div>

                  <div
                    class="min-w-fit w-auto"
                  >
                    <div href="#">
                      <img
                        class="rounded-full mx-auto w-auto h-72"
                        src={curly3}
                        alt=""
                      />
                      <p className="text-xs font-thin text-center mt-1">
                        @awet_eri_boys_barber
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
