
import Wrapper from '@/components/shared/Wrapper'
import Logo from '/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (

        <header className='sticky top-0 z-40 bg-white'>
            <Wrapper>
                <div className='flex justify-between py-2 items-center '>

                    <div className='px-3'>
                        {/* <h1 className=' font-bold text-xl'>Panverse DAO</h1> */}
                        <Image src={Logo} alt='Panaverse Dao Logo'/>
                    </div>
                    <ul className='flex font-semibold'>
                    <Link href={'/'}>
                        <li className='px-3'>Home</li>
                        </Link>
                        <Link href={'/courses'}>
                        <li className='px-3'>Courses</li>
                        </Link>
                    </ul>

                </div>

            </Wrapper>
        </header>
    )
}

export default Header