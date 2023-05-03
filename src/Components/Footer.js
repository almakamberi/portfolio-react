import "../tailwind.css";
export default function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800  bg-gray-100">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Gjin Prelvukaj
        </a>
        <p class="my-6 text-gray-500 dark:text-gray-400">
          Open-Source Portfolio
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#home" class="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" class="mr-4 hover:underline md:mr-6">
              Skills
            </a>
          </li>
          <li>
            <a href="#goto" class="mr-4 hover:underline md:mr-6 ">
              Timeline
            </a>
          </li>
          <li>
            <a href="#contact" class="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2023{" "}
          <a href="#" class="hover:underline">
            Gjin Prelvukaj
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
