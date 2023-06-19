'use client'


import Link from "next/link";

export default function SignInButton() {
    return(
        <div className='px-6'>
            <Link href="/auth/login" className="text-base font-medium text-gray-500 hover:text-gray-700">
            Sign in
            </Link>
            
            {/* <Link href="/signup" className="ml-8 inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign up
            </Link> */}
      </div>
    )
}