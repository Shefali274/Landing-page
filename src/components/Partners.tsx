import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import EllingtonImg from '../assets/partners-img/Ellington.svg';
import AlFuttaimImg from '../assets/partners-img/Al-futtaim.svg';
import DanubeImg from '../assets/partners-img/Danube.svg';
import DamacImg from '../assets/partners-img/Damac.svg';
import PDLDImg from '../assets/partners-img/Partners-DLD.svg';

const partners = [
  { name: 'Ellington', image: EllingtonImg },
  { name: 'Majid Al Futtaim', image: AlFuttaimImg },
  { name: 'Danube', image: DanubeImg },
  { name: 'Damac', image: DamacImg },
  { name: 'Partners Dubai Leading Developer', image: PDLDImg },
  { name: 'Ellington', image: EllingtonImg },
  { name: 'Majid Al Futtaim', image: AlFuttaimImg },
  { name: 'Danube', image: DanubeImg }

];

const Partners = () => {
   const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // 3 sec delay
  );

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-12 border-b border-[#EAEAEA] mb-8 md:mb-[141px] px-6">
      <div className="mb-4 md:mb-0 md:w-1/4">
        <h2 className="text-lg tracking-[2.5px] text-[#999a9d]">
          Partners with Dubai's leading Developer
        </h2>
      </div>

      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {partners.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[80px] sm:min-w-[160px] md:min-w-[168px] flex items-center justify-center md:px-4 md:py-2"
            >
              <img
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
