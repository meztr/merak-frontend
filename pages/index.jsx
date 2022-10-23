import fetch from 'isomorphic-unfetch';
// import Layout from 'components/layout/Layout';
import LandingTwo from 'components/LandingTwo';
import News from 'components/News';
// import NewsCard from 'components/Card';
const Home = () => {
    return (
        <>
            {/* <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center lg:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <LandingTwo />
          </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0">
            <button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span class="title-font font-medium">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </section> */}
            <section className="relative text-gray-600 body-font">
                <div className="flex flex-wrap overflow-hidden">
                    <div className="w-1/2 overflow-hidden sm:w-full md:w-full">
                        {/* <!-- Column Content --> */}
                        <LandingTwo />
                    </div>
                    {/* <div className="w-1/2 overflow-hidden sm:w-full md:w-full"> */}
                    {/* <!-- Column Content --> */}
                    {/* <News /> */}
                    {/* </div> */}
                </div>
                {/* <div className="container flex flex-wrap px-5 mx-auto bg-red-300 sm:flex-nowrap"> */}
                {/* <LandingTwo /> */}
                {/* <div className="relative flex items-end justify-start p-10 overflow-hidden bg-green-300 rounded-lg lg:w-2/4 md:w-1/3 sm:mr-10"> */}
                {/* <LandingTwo /> */}
                {/* </div> */}
                {/* <div className="flex flex-col w-full mt-8 bg-yellow-300 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"> */}
                {/* <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
                            Feedback
                        </h2>
                        <p className="mb-5 leading-relaxed text-gray-600">
                            Post-ironic portland shabby chic echo park, banjo fashion axe
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="text-sm text-gray-600 leading-7">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="text-sm text-gray-600 leading-7">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="text-sm text-gray-600 leading-7">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full h-32 px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                            Button
                        </button>
                        <p className="mt-3 text-xs text-gray-500">
                            Chicharrones blog helvetica normcore iceland tousled brook viral
                            artisan.
                        </p> */}
                {/* </div> */}
                <div className="flex">
                    <News />
                </div>
                {/* </div> */}
            </section>
        </>
    );
};

// export async function getServerSideProps() {
//     const { API_URL } = process.env;

//     const res = await fetch(`${API_URL}/artikels`);
//     const data = await res.json();

//     return {
//         props: {
//             artikels: data
//         }
//     };
// }

export default Home;
// export default withTranslation()(Home)
