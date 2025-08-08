import BannerVideo from '../assets/banner.mp4';
import Button from './Button';

const Mainbanner = () => {
  return (
    <div className="relative w-full h-full z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={BannerVideo} type="video/mp4" />
      </video>
       {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(270deg, rgba(21, 19, 19, 0.06) 0%, #27374F 99.17%)',
        }}
      />
       {/*Banner text and target button  */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start ml-4 md:ml-[200px]">
        <h1 className="text-white text-3xl md:text-7xl max-w-[784px] mb-8">
          Empower Your <span className='text-[#F8824C]'>Real Estate</span> Journey in Dubai
        </h1>
        <p className="text-white text-xl md:text-2xl max-w-[784px] mb-15">Master Dubai's luxury real estate market with our expert-led courses.</p>
         <Button text="Login" onClick={() => console.log('Login clicked')} />
      </div>
    </div>
  )
}

export default Mainbanner
