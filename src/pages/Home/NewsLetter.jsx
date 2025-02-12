import newslatter from "../../assets/newslatteer.webp" 

const NewsLetter = () => {
    return (
        <div className="border-2 w-[85%] mx-auto relative top-28 p-3 md:p-4 rounded-3xl z-30 shadow-lg  bg-[rgba(255,255,255,0.17)] border-accent text-white -mt-20" >
      {/* main-content */}
      <div className="bg-accent bg-opacity-75  rounded-3xl ">
        
        <div
          className="  flex flex-col items-center justify-center gap-2 md:gap-4 bg-cover bg-center py-8 md:py-16 lg:py-20 rounded-3xl   "
        //   style={{
        //     backgroundImage: `url(${newslatter})`,
        //   }}
        >
          <h3 className="text-xl md:text-3xl font-bold text-center">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm md:text-base opacity-70 text-center">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <label className="input input-bordered flex items-center gap-2 bg-white text-accent">
              <input
                type="email"
                className="grow "
                placeholder="Enter your email"
              />
            </label>
            <button className="btn   btn-outline text-white text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NewsLetter;