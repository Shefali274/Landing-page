import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="flex justify-start w-full absolute top-0 z-10 mx-auto border-b border-[rgba(255,255,255,0.25)]">
      <div className="flex items-center  ml-4 mr-4 md:ml-[200px] md:mr-[353px]">
         <img src={Logo} className="w-full h-[93px]" alt="Logo" />
      </div>
      <div className="flex gap-[64px] justify-center items-center text-white text-lg font-light leading-6">
        <a className='hover:text-[#F8824C] cursor-pointer' href="#">Courses</a>
        <a className='hover:text-[#F8824C] cursor-pointer' href="#">About Us</a>
        <a className='hover:text-[#F8824C] cursor-pointer' href="#">Tutors</a>
        {/* If these pages is internal then I will replace this a tag to Link tag from react-router */}
      </div>
    </div>
  )
}

export default Header
