import { useState } from 'react';
import '../tailwind.css';

export default function Cookies() {
  const [accepted, setAccepted] = useState(false);

  function handleAccept() {
    setAccepted(true);
    // set cookie with expiration date of 30 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    document.cookie = `cookieAccepted=true;expires=${expiryDate.toUTCString()};path=/`;
  }

  // check if cookie has been set
  const cookieAccepted = document.cookie.includes('cookieAccepted=true');

  return (
    <>
      {!cookieAccepted && (
        <section style={{ zIndex: 9999 }} className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
          <h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">We use cookies to ensure that we give you the best experience on our website. <a href="#" className="text-blue-500 hover:underline">Read cookies policies</a>.</p>

          <div className="flex items-center justify-center mt-4 gap-x-4 shrink-0">

            <button onClick={handleAccept} className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
              Accept
            </button>
          </div>
        </section>
      )}
    </>
  );
}