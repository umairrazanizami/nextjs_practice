
import Wrapper from '@/components/shared/Wrapper'
import Link from 'next/link'

const Header = () => {
    return (

        <div>
            <Wrapper>
                <div className='flex justify-between py-4 border'>

                    <div className='px-3'>
                        <h1 className=' font-bold text-xl'>Panverse DAO</h1>
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
        </div>
    )
}

export default Header