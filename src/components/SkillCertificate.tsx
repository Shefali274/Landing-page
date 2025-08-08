import Team1 from '../assets/team1.jpg';
import Team2 from '../assets/team2.jpg';

const SkillCertificate = () => {
  return (
   <div className="2xl:max-w-[1400px] mx-auto mb-[150px]">
      <h2 className="text-[40px] font-light text-black mb-3 leading-[48px] capitalize ">Get your quality Skills certificate through provident academy</h2>
      <p className="text-[#494949] text-xl mb-[60px] opacity-65">Enhance your expertise and earn a certified edge with Provident Academy.</p>
      <div className="flex gap-8 h-[600px]">
      <div className="basis-1/2 h-full">
            <img
                src={Team1}
                alt="Team 1"
                className="w-full h-full object-cover rounded-2xl"
            />
       </div>
       <div className="basis-1/2 h-full">
            <img
                src={Team2}
                alt="Team 2"
                className="w-full h-full object-cover rounded-2xl"
            />
        </div>
    </div>
  </div>
  )
}

export default SkillCertificate
