import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#27374F] py-[34px] text-white">
      <div className="mx-auto text-center">
        <img src={Logo} alt="Logo" className="mx-auto h-[81px] mb-3" />
        <p className="text-xl mb-9 opacity-65 leading-[32px] font-normal">
          A Division of Provident Real Estate Dubai
        </p>

        <ul className="flex font-light justify-between text-xl leading-6 md:text-base max-w-md mx-auto mb-[59px] ">
            <li className="flex-1 text-center">
                <a href="#">Courses</a>
            </li>
            <li className="flex-1 text-center">
                <a href="#">About us</a>
            </li>
            <li className="flex-1 text-center">
                <a href="#">Tutors</a>
            </li>
        </ul>

        <div className="border-t border-[#435979] pt-[43px] pb-[14px] text-xl leading -8 opacity-65">
          &copy; 2025 Provident Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
