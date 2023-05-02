import '../tailwind.css';
import React from 'react';
import './css/Work.css';
import project1 from '../Images/project.png'
import comingsoon from '../Images/coming-soon.png'
import personal from '../Images/portfolio.png'
export default function Work(){
    return(
<section class="bg-white dark:bg-gray-900" id="projects">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio
        </h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
            These are my personal projects by far
        </p>


        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img class="object-cover w-full rounded-lg h-96 "
                    src={personal}
                    alt="" />
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Personal Portfolio</h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
            </div>

            <div>
                <img class="object-cover w-full rounded-lg h-96 "
                    src={project1}
                    alt="" />
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Stress Free Corner
                    </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
            </div>

            <div>
                <img class="object-cover w-full rounded-lg h-96 "
                    src={comingsoon}
                    alt="" />
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Coming Soon
                </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
            </div>
        </div>
    </div>
</section>
    )
}