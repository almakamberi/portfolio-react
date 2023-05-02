import '../tailwind.css'
export default function Contact(){
    return(
<section class="bg-white" id="contact">
    
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
  <p class="text-5xl md:text-6xl" style={{marginLeft: '35%', marginBottom: '2%'}}>Contact me</p>
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        
      <div class="lg:col-span-2 lg:py-12">
        
        <p class="max-w-xl text-lg">
            
            If you want to get in touch with me , you can leave your information here and I will
            respond as soon as I can.
        </p>

        <div class="mt-8">
          <a href="" class="text-2xl font-bold text-pink-600">
            049112997
          </a>

          <address class="mt-2 not-italic">
            Prishtine
          </address>
        </div>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>
          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    )
}