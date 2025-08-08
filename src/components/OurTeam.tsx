import Jaafari from '../assets/teams/Jaafari.svg';
import Laura from '../assets/teams/Laura.svg';
import Merve from '../assets/teams/Merve.svg';
import Youssef from '../assets/teams/Youssef.svg';
import GetInfo from '../assets/get-info.svg';
import Button from './Button';

const teamMembers = [
  {
    image: Merve,
    name: "Merve Yurtdan",
    role: "Manager - Learning & Development",
    about: "Bringing innovative training methodologies to empower agents",
  },
  {
    image: Jaafari,
    name: "Mohammad Jaafari",
    role: "Director - Primary Sales & Operations",
    about: "Pioneering off-plan sales and seamless operational excellence.",
  },
  {
    image: Youssef,
    name: "Youssef Rabah",
    role: "Director – Property Management & Precision Inspection",
    about: "Upholding asset value through meticulous inspection and care.",
  },
  {
    image: Laura,
    name: "Laura Adams",
    role: "Director – Secondary Sales",
    about: "Leading Dubai's resale market with expertise and vision.",
  },
];

const OurTeam = () => {
  return (
    <div className="2xl:max-w-[1400px] mx-auto mb-8 md:mb-[150px] px-4">
      <h2 className="text-[40px] font-light text-black mb-3 leading-[48px] capitalize">
        Our Team / Instructors
      </h2>
      <p className="text-[#494949] text-xl mb-[60px] opacity-65">
        Learn from the Best in the Business
      </p>

      <div className="flex flex-wrap justify-between gap-[10px] mb-[60px]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative w-full sm:w-[48%] lg:w-[24%] h-[565px] overflow-hidden rounded-2xl border-8 border-[#F7F7F7] py-6 px-4 bg-white"
          >
            {/* Image */}
            <div
              className="relative h-[85%] overflow-hidden rounded-2xl transition-transform duration-500 ease-in-out
                group-hover:scale-98 group-hover:-translate-y-4 group-hover:h-[50%]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div
              className={`absolute bottom-6 left-4 right-4 p-5 z-20
                transition-all duration-500 ease-in-out
                rounded-2xl text-center h-[65px] overflow-hidden
                group-hover:translate-y-0 group-hover:h-[250px]
                ${
                  index % 2 === 0
                    ? 'bg-[#FAFAFA] text-black'
                    : 'bg-[#D06D41] text-white'
                }
              `}
            >
              <h3 className="text-xl font-semibold mb-3">{member.name}</h3>
              <p
                className={`text-sm mb-2 ${
                  index % 2 === 0 ? 'text-[#8C8C8C]' : 'opacity-80'
                }`}
              >
                {member.role}
              </p>
              <p className="text-sm opacity-70">{member.about}</p>
              <button className="mt-4 hover:opacity-90 transition">
                <img src={GetInfo} alt="Get Info" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Button
        text="Meet the Team"
        className="bg-[#27374F] text-white capitalize text-xl font-medium w-[299px]"
        onClick={() => console.log('Meet the Team clicked')}
      />
    </div>
  );
};

export default OurTeam;
