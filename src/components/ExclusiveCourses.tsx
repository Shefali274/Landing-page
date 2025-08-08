import CoursesImg1 from '../assets/courses/1.svg';
import CoursesImg2 from '../assets/courses/2.svg';
import CoursesImg3 from '../assets/courses/3.svg';
import CoursesImg4 from '../assets/courses/4.svg';
import CoursesImg5 from '../assets/courses/5.svg';
import CoursesImg6 from '../assets/courses/6.svg';
import CoursesImg7 from '../assets/courses/7.svg';
import CoursesImg8 from '../assets/courses/8.svg';
import Button from './Button';
const CoursesData = [
  {
    image: CoursesImg1,
    title: 'Client Experience & Complaint Resolution',
    description: 'Enhance client satisfaction and loyalty',
  },
  {
    image: CoursesImg2,
    title: 'ROI & ROE',
    description: 'Understand investment returns in real estate',
  },
  {
    image: CoursesImg3,
    title: `Dubai Real Estate Do's & Don'ts`,
    description: 'Navigate the market with confidence',
  },
  {
    image: CoursesImg4,
    title: 'How to Conduct a Meeting',
    description: 'Lead effective and productive meetings',
  },
  {
    image: CoursesImg5,
    title: 'How to Make a Smart Call',
    description: 'Master the art of impactful communication',
  },
  {
    image: CoursesImg6,
    title: 'How to Qualify a Company Lead',
    description: 'Identify and pursue valuable leads',
  },
  {
    image: CoursesImg7,
    title: 'How to Dress For Success',
    description: 'Present yourself professionally in every interaction',
  },
  {
    image: CoursesImg8,
    title: `Objection – "I Want to Think About It"`,
    description: 'Handle objections and close deals effectively',
  },
  
];

const ExclusiveCourses = () => {
  return (
    <div className="2xl:max-w-[1400px] mx-auto mb-8 md:mb-[150px] bg-gray-100 rounded-[40px] p-8 md:px-[60px] md:py-[100px]">
      <h2 className="text-[40px] font-light text-black mb-3 leading-[48px] capitalize ">Our Exclusive courses</h2>
      <p className="text-[#494949] text-xl mb-[60px]">Take Your Skills to the Next Level with Our Expert-Led courses</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[60px]">
        {CoursesData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl flex flex-col md:flex-row items-center"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full md:w-[222px] h-full object-cover"
            />
            <div className='px-10 py-8'>
                <h3 className="text-2xl font-normal mb-4 leading-7">{course.title}</h3>
                <p className="text-[#494949] font-light text-xl">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
       <Button text="Explore our Courses" className='bg-[#27374F] text-white capitalize text-xl font-medium w-[299px]' onClick={() => console.log('Login clicked')} />
    </div>
  )
}

export default ExclusiveCourses
