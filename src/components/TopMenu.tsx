import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)
    const userRole = session?.user?.role;
    console.log(userRole)
    
    return (
        <div className={styles.menucontainer}>
            <Link href={'/'}>
            <Image src={'/img/logo.png'} 
            className={styles.logoimg}
            alt='logo'
            width={0}
            height={0}
            sizes='100vh'/>
            </Link>
            <TopMenuItem title='Campground' pageRef='/campground'/>
            <TopMenuItem title='Reservation' pageRef='/reservations'/>
            <TopMenuItem title='Logs' pageRef='/logs'/>
            <div className='flex flex-row absolute right-0 h-full'>
            <TopMenuItem title='My Reservation' pageRef='/myreservation'/>
            

            
            {
                session ? 
                <MuiLink href="/api/auth/signout">
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-Out
                    </div>
                </MuiLink> 
                    :
                    <>
                <MuiLink href="/api/auth/signin">
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-In
                    </div>
                </MuiLink> 
                <div className='flex items-center h-full text-cyan-600 text-sm'>/</div>
                <MuiLink href="/api/auth/register">
                <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                    Register
                </div>
                </MuiLink>
                </>
            }
            </div>
        </div>
    );
    
}