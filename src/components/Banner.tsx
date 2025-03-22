'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const cover = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg','/img/cover5.jpg'];
    const [index , setIndex] = useState(0);

    const router = useRouter();

    return (
        <div className={styles.banner} onClick={() => { setIndex(index+1)}}>
            <Image  src={cover[index % 5]} 
            alt='cover'
            fill={true}
            priority
            className='object-cover object-center'
            />
            <div className="relative top-[100px] z-20 text-center text-white">
                <h1 className="text-5xl font-bold tracking-wide drop-shadow-md mb-4">
                    Life's Better Around The Campfire
                </h1>
                <h3 className="text-2xl font-serif italic drop-shadow">
                    Breathe in nature, exhale stress
                </h3>
             </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e) => {e.stopPropagation; router.push('/car')}}>
                Select Your Travel Partner Now
            </button>
        </div>
    );
}