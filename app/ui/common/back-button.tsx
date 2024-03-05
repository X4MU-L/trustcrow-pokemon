'use client';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='hover:bg-[#3f3e3e70] flex h-10 w-16 transition-all duration-150 items-center justify-center rounded-md border border-[#a6a6a689]'
    >
      <ArrowLeftIcon className='w-5' />
    </button>
  );
}
