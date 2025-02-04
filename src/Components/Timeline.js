import "../tailwind.css";
export default function Timeline() {
  return (
    <section>
      <div class="bg-white text-black py-8">
        <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p class="ml-2 text-black-300 uppercase tracking-loose">
              Working Process
            </p>
            <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              My working/practice Process
            </p>
            <p class="text-sm md:text-base text-black mb-4">
              Here is my story on how I became a Full Stack Dev and the
              courses/schools i went through
            </p>
            <a
              href="#goto"
              class="bg-transparent mr-auto hover:bg-yellow-300 text-black-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden p-10 h-full">
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-black-300">2018 - 2023</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl" id="goto">
                      Sofware Engineer
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                      Started Digital School in 2018 and finished in 2023 and
                      got cerificates as a Front End Developer , Back End
                      Developer and Junior Java Developer.
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1  w-5/12 px-1 py-4 text-left">
                    <p class="mb-3 text-base text-black-300">
                      December 2022 - June 2021
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">Practice</h4>
                    <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                      Started practice as a Full Stack Developer with Digital
                      School on a project called "Stress Free Corner"
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-black-300">
                      August 2022 - September 2022
                    </p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Teacher's Assistant
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                      Started as a Teacher Assistant in Digital School Summer
                      school.
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>

                  <div class="order-1  w-5/12 px-1 py-4">
                    <p class="mb-3 text-base text-black-300">2023+</p>
                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                      More to come
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                      The above are my achievements , when i achieve some more
                      they will be listed
                    </p>
                  </div>
                </div>
              </div>
              <img
                class="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
