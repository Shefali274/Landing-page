import Button from './Button';
const NextStep = () => {
  return (
   <div className="bg-[#F2F4F7] py-[60px] px-4 text-center">
     <h2 className="text-[32px] font-light text-black mb-3 leading-[58px]">Take the <strong className="font-semibold">Next Step</strong> in Your Real Estate Career</h2>
      <p className="text-xl text-black leading-8 font-normal opacity-65 max-w-[800px] mx-auto tracking-[-0.32px] mb-[40px]">
        <span className="font-medium">Ready to elevate your real estate expertise?</span> Connect with us to learn more about our courses and how Provident Academy can help you achieve your goals.
      </p>
      <Button text="Explore our Courses" className='bg-[#27374F] text-white capitalize text-xl font-medium w-[299px]' onClick={() => console.log('Login clicked')} />
    </div>
  )
}

export default NextStep
