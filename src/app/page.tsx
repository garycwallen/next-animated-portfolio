'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Homepage() {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Image Container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src='/Gary03.png' alt='' fill className='object-contain' />
        </div>
        {/* Text Container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* Title */}
          <h1 className='text-4xl md:text-6xl font-bold'>BLAH BLAH</h1>
          {/* Description */}
          <p className='md:text-xl'>BLAH BLAH BLAH</p>
          {/* Buttons */}
          <div className='w-full flex gap-4'>
            <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
              View My Work
            </button>
            <button className='p-4 rounded-lg ring-1 ring-black'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
