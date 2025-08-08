import AboutImg from '../assets/About-us.svg';
import Google from '../assets/google.svg';
import Rating from '../assets/rating-container.svg';
import Awards from '../assets/awards-text.svg';
import TrustedImg from '../assets/trusted.svg';

const AboutUs = () => {
  return (
     <div className="2xl:max-w-[1400px] mx-auto my-8 md:my-[100px] px-8 md:px-0">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 relative">
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-auto object-contain rounded-xl"
          />
           <img
            src={TrustedImg}
            alt="Trusted real estate"
            className="absolute bottom-[-10%] right-[-12%] w-[244px] h-auto object-contain rounded-lg animate-spin-slow"
            style={{animation: 'spin 10s linear infinite'}}
          />
        </div>
        <div className="w-full lg:w-1/2 pt-8 md:pt-0 md:pl-[164px]">
          <h2 className="text-[40px] font-light text-black leading-[58px] mb-8 tracking-[-1.8px]">
            About Us
          </h2>
          <div className="text-xl text-[#494949] mb-8">
            <p className='mb-6'>
                Established in <strong>2008</strong>, Provident Real Estate has been a cornerstone in Dubai's luxury property sector. 
            </p>
            <p>With a commitment to excellence and innovation, we've consistently delivered unparalleled service to our clients all over the globe.</p>
          </div>

          {/* Card */}
          <div className="bg-[#F2F4F7] px-6 py-10 rounded-xl mb-8 font-light">
            <p className="text-xl text-[#494949] leading-7 ">
              <strong className='font-semibold'>Provident Academy</strong> is our dedicated development and training platform, designed to equip real estate professionals with the knowledge and skills needed to thrive in Dubai's dynamic market.
            </p>
          </div>

          {/* Brand Logos */}
          <div className="flex items-center gap-[8px] md:gap-6 pt-4 mb-8 md:mb-[60px]">
            <img src={Awards} alt="Awards" className="h-[24px] md:h-[44px] w-auto object-contain border-r border-r-[#E5E5E5] pr-4" />
            <img src={Google} alt="Google" className="h-[24px] md:h-[33px] w-auto object-contain" />
            <img src={Rating} alt="Rating" className="h-[24px] md:h-[44px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
