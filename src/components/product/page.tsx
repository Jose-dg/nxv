'use client';

import Image from 'next/image';
import shirt from '../../../public/shirt.png';
import { useState } from 'react'
import Link from 'next/link';

export default function Product() {

  const [isParityEnabled, toggleParity] = useState<boolean>(false)
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-3 bg-gray-50">
    <div className="flex flex-col items-center justify-center min-h-screen py-0 bg-tranparent">
      <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center sm:pt-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">PPV pricing</h1>
      </main>

      {/* <div className="flex items-center justify-center lg:h-[512px] lg:w-[512px] h-[320px] w-[320px] -mb-40 lg:-mb-56"> */}
      {/* <div className="lg:h-[512px] lg:w-[512px] h-[320px] w-[320px] -mb-40 lg:-mb-56">
          <Image
            alt="Black shirt with white logo"
            src={shirt}
            placeholder="blur"
            layout="responsive"
          />
      </div> */}
      <div className="lg:h-[512px] lg:w-[512px] h-[320px] w-[320px] -mb-40 lg:-mb-56">
          <Image
            alt="Black shirt with white logo"
            src={shirt}
            placeholder="blur"
            layout="responsive"
          />
      </div>
      <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-4 w-full max-w-[480px] hover:shadow-2xl transition pt-2 lg:pt-6">
      {/* <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-2 w-full max-w-[480px] hover:shadow-2xl transition pt-1 lg:pt-3"> */}
          <div className="p-4 flex flex-col justify-center items-center border-b">
            <div className="flex justify-between w-full items-baseline">
              <div className="ml-4 mr-auto text-left flex flex-col">
                <h4 className="font-semibold text-xl">Alpha Black shirt</h4>
                <h5 className="text-gray-700">Limited edition</h5>
              </div>

              {isParityEnabled ? (
                <div className="flex flex-col items-start font-bold text-lg leading-none">
                  <span className="text-gray-500 text-sm line-through">
                    USD 500
                  </span>
                  <span className="text-green-500">USD 450</span>
                </div>
              ) : (
                <div className="flex flex-col items-start font-bold text-lg leading-none">
                  <span className="text-gray-500 text-sm">
                    USD 500
                  </span>
                  <span className="text-green-500"></span>
                </div>
              )}

            </div>
          </div>
          <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
            <div className="bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm flex flex-col gap-4">
              <p className="inline-block">
                <span>We noticed that you&apos;re from </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  className="bg-gray-200 inline-flex"
                  width={16}
                  height={12}
                  alt=""
                  src="https://media.istockphoto.com/vectors/flag-colombia-brush-stroke-background-flag-of-colombia-on-transparent-vector-id1053867632?k=6&m=1053867632&s=612x612&w=0&h=n1WbMQSgYhMqOwcGdSwW3FLAAxQ1zsiwJsYmSZq4crQ="
                />

                <span>
                  . We are offering purchasing power parity pricing. If that is
                  something that you need:
                </span>
              </p>
              <label className="inline-flex items-center font-semibold">
                <input
                  onChange={(event) => toggleParity(event.target.checked)}
                  className="text-black-500 w-4 h-4 mr-2 border border-gray-300 rounded"
                  type="checkbox"
                />
                Activate 10% off with regional pricing
              </label>
            </div>
            <Link href="/pay"
              className="py-3 px-6 text-lg w-full bg-black text-white rounded-md hover:bg-gray-900"
            >
              Buy now
            </Link>
          </div>
        </section>
    </div>
  );
}
