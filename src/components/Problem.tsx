import Image from 'next/image'

const Problem = () => (
  <section className="flex flex-col justify-center px-[5%] py-40 md:flex-row md:px-[10%]">
    <div>
      <Image className="md:hidden" priority width={654} height={488} src="./images/mobile/image-interactive.jpg" alt="" />
      <Image className="hidden md:block" priority width={731} height={500} src="./images/desktop/image-interactive.jpg" alt="" />
    </div>
    <div className="bg-white pt-10 text-center md:-ml-15percen md:w-fit md:self-end md:pl-10 md:pt-10 md:text-left lg:w-2/4 lg:pl-20 lg:pt-20">
      <h1 className=" font-secondary text-4xl font-light uppercase md:text-2xl lg:text-4xl">The leader in interactive VR</h1>

      <p className="px-8 pt-5 text-dark-soft md:px-0 md:text-sm lg:text-base">
        Founded in 2011, Loopstudios has been producing world-class virtual reality
        projects for some of the best companies around the globe. Our award-winning
        creations have transformed businesses through digital experiences that bind
        to their brand.
      </p>
    </div>
  </section>

)

export default Problem
