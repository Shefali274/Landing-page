import Records from '../assets/excellence-images/records.svg';
import PropertySales from '../assets/excellence-images/property-sales.svg'
import Experience from '../assets/excellence-images/experience.svg';
import Book from '../assets/excellence-images/book.svg';
import Agents from '../assets/excellence-images/agents.svg';
import { useState } from 'react';
const LegacyCardData = [
  {
    image: Book,
    title: '30+',
    description: 'Specialized Courses',
  },
  {
    image: PropertySales,
    title: 'AED 68B',
    description: 'Property Sales',
  },
  {
    image: Experience,
    title: '17+ Years',
    description: 'Experience',
  },
  {
    image: Agents,
    title: '400+',
    description: 'Agents',
  },
  {
    image: Records,
    title: 'AED 500M+',
    description: `Region's Record Breaking Penthouse Deal`,
  }
];
const LegacyOfExcellence = () => {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animatingOutIndex, setAnimatingOutIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setAnimatingOutIndex(null);
  };

  const handleMouseLeave = (index: number) => {
    setAnimatingOutIndex(index);
    setHoveredIndex(null);
  };
  return (
   <div className="2xl:max-w-[1400px] mx-auto mb-8 md:mb-[150px] px-8 sm:p-0">
      <h2 className="text-[40px] font-light text-black mb-[60px] leading-[48px]">Our legacy of excellence</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px]">
        {LegacyCardData.map((cardData, i) => {
           const isDark = i % 2 === 1;
          const isHovered = hoveredIndex === i;
          const isAnimatingOut = animatingOutIndex === i;
           return (
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className={`
                pt-[74px] px-4 rounded-3xl flex flex-col justify-center items-center text-center cursor-pointer
                relative overflow-hidden
                ${isDark ? 'bg-[#27374F]' : 'bg-white border border-[#E1E1E1]'}
                ${isDark ? 'round-circle' : ''}
                ${isHovered ? 'animate-in' : ''}
                ${isAnimatingOut ? 'animate-out' : ''}
              `}
                >
            <img
                src={cardData.image}
                className="h-[60px] z-10 mb-5 transition-transform duration-300 hover:rotate-left-right"
              />
            <h3 className={`text-[32px] z-10 leading-10 ${i % 2 === 1 ? 'text-white mb-[4px] font-semibold' : 'text-black mb-4 font-bold'}`}>{cardData.title}</h3>
            <p className={`text-lg leading-5 pb-9 opacity-70 ${i % 2 === 1 ? 'text-white' : 'text-[#494949]'}`}>{cardData.description}</p>
          </div>
           )
        })}
      </div>
    </div>
  )
}

export default LegacyOfExcellence
