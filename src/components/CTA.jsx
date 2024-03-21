import React from 'react'

const CTA = () => {
  return (
    <>
    <svg className='w-full h-auto max-h-40 translate-y-[1px]' preserveAspectRatio='none' viewBox="0 0 2160 263" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Wave" fill-rule="evenodd" clip-rule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#0D2436"/>
</svg>


    <section className='relative bg-dark-hard px-5'>
        <div className='container grid grid-cols-12 mx-auto py-10'>
            <div className='col-span-12'>
                <h2 className='text-white font-roboto font-bold text-2xl'>Get our stories delivered From us to your inbox weekly</h2>
                <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto'>
                    <input type="text" className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light' placeholder='Your Email' />
                    <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold'>Get started</button>
                </div>
                <p className='text-dark-light text-sm leading-7 mt-6'>
                <span className='font-bold italic text-[#B3BAC5]'>Get a response tomorrow</span> if you submit by 9pm today. If we received after 9pm will get a response the following day.
                </p>
            </div>
            <div className='col-span-12 hidden mb-[70px]'>
            <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
      <img src={images.Post1Image} alt="title" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
      <div className='p-5'>
        <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2x1 lg:text-[28px]'>Future of Work</h2>
        <p className='text-dark-light mt-3 text-sm md:text-lg'>Majority of peole will work in jobs that don’t exist today.</p>
        <div className='flex justify-between flex-nowrap items-center mt-6'>
            <div className='flex ietms-center gap-x-2 md:gap-x-2.5'>
                <img src={images.PostProfileImage} alt="post profile" className='w-9 h-9 md:w-10 md:h-10' />
                <div className='flex flex-col'>
                    <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>
                        Viola Manisa
                    </h4>
                    <div className='flex items-center gap-x-2'>
                        <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                            <BsCheckLg className='w-1.5 h-1.5 text-[#36B37E]' />
                        </span>
                        <span className='italic text-dark-light text-xs md:text-sm'>Verified Writer</span>
                    </div>
                </div>
            </div>
            <span className='font-bold text-dark-light italix text-sm md:text-base'>02 May</span>
        </div>
      </div>
    </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default CTA
