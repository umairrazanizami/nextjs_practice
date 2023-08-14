import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import HeroPoster from '/public/hero-poster.webp'
import Image from 'next/image'

const Hero = () => {
  return (
    <section    >
        <Wrapper>
            <div className='lg:flex px-3 items-center blur-0'>
                <div className=' lg:flex-1 flex-row-reverse'>
                    <h4 className=' text-teal-700 font-bold'>Presidential Initative for Artificial Intelligence and Computing</h4>
                    <h1 className='text-5xl font-semibold'>Certified Web 3.0 and Metaverse Developer</h1>
                    <div className='text-slate-500'>
                    <br />
                    <p className='mt-5'>A One and Quarter Year Panaverse DAO Earn as you Learn Getting ready for the next generation of the Internet</p>
                    <br />
                    <p>
                        Consolidating Web 3.0, Metaverse, Artifitial Intelligence, and Bioinformatics Technologies
                    </p>
                    </div>
                    <button className=''>Learn More</button>

                </div>
                <div className='lg:flex-1'>
                    <Image src={HeroPoster} alt='Panaverse Hero Poster' />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Wrapper>
    </section>
  )
}

export default Hero