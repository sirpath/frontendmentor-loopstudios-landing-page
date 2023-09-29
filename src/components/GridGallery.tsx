import Image from 'next/image'

type GalleryPhoto = {
  name: string,
  firstName: string,
  lastName: string,
  photoMobile: string,
  photoDesktop: string,
}

const gallertPhostos: Array<GalleryPhoto> = [{
  name: 'Deep earth',
  firstName: 'Deep',
  lastName: 'earth',
  photoMobile: './images/mobile/image-deep-earth.jpg',
  photoDesktop: './images/desktop/image-deep-earth.jpg',
}, {
  name: 'Night arcade',
  firstName: 'Night',
  lastName: 'arcade',
  photoMobile: './images/mobile/image-night-arcade.jpg',
  photoDesktop: './images/desktop/image-night-arcade.jpg',
}, {
  name: 'Soccer team VR',
  firstName: 'Soccer',
  lastName: 'team VR',
  photoMobile: './images/mobile/image-soccer-team.jpg',
  photoDesktop: './images/desktop/image-soccer-team.jpg',
}, {
  name: 'The grid',
  firstName: 'The',
  lastName: 'grid',
  photoMobile: './images/mobile/image-grid.jpg',
  photoDesktop: './images/desktop/image-grid.jpg',
}, {
  name: 'From up above VR',
  firstName: 'From up',
  lastName: 'above VR',
  photoMobile: './images/mobile/image-from-above.jpg',
  photoDesktop: './images/desktop/image-from-above.jpg',
}, {
  name: 'Pocket borealis',
  firstName: 'Pocket',
  lastName: 'borealis',
  photoMobile: './images/mobile/image-pocket-borealis.jpg',
  photoDesktop: './images/desktop/image-pocket-borealis.jpg',
}, {
  name: 'The curiosity',
  firstName: 'The',
  lastName: 'curiosity',
  photoMobile: './images/mobile/image-curiosity.jpg',
  photoDesktop: './images/desktop/image-curiosity.jpg',
}, {
  name: 'Make it fisheye',
  firstName: 'Make it',
  lastName: 'fisheye',
  photoMobile: './images/mobile/image-fisheye.jpg',
  photoDesktop: './images/mobile/image-fisheye.jpg',
},

]

const GridGallery = () => (
  <section className="px-[5%] md:px-[10%] ">
    <div className="flex justify-center py-10 md:justify-between">
      <h1 className="self-end font-secondary text-3xl uppercase">Our creations</h1>

      <button className="btn hidden rounded-none px-10 tracking-[.5em] hover:bg-black hover:text-white md:block" type="button">See all</button>
    </div>
    <div className="grid gap-5 font-secondary md:grid-cols-4">
      {gallertPhostos.map(({ name, photoMobile, photoDesktop, firstName: fristName, lastName }) => (
        <div key={name} className="group relative">
          <Image className="h-full w-full object-cover md:hidden" priority width={654} height={240} src={photoMobile} alt={name} />
          <Image className="hidden h-full w-full object-cover md:block" priority width={256} height={450} src={photoDesktop} alt={name} />
          <div className="absolute top-0 h-full w-full bg-gradient-to-r from-black/60 duration-300 group-hover:bg-white/80 md:bg-gradient-to-t md:from-black/60" />
          <p className="absolute bottom-3 left-3 text-2xl uppercase text-white duration-300 group-hover:text-black md:text-xl lg:text-4xl">
            <span>{fristName}</span>
            <br />
            <span>{lastName}</span>
          </p>
        </div>
      ))}

    </div>
    <div className="pt-10 text-center">
      <button className="btn rounded-none px-10 tracking-[.5em] hover:bg-black hover:text-white md:hidden" type="button">See all</button>
    </div>
  </section>
)

export default GridGallery
