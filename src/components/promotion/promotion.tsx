import Image from "next/image";

export default function Promotion() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        {/* Aquí puedes colocar tu imagen o animación */}
        {/* <Image src="/path/to/image.jpg" alt="Image" width={500} height={500} /> */}
      </div>
      <div className="lg:w-1/2 bg-gray-200">
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-5xl font-bold text-black">SOLUTIONS FOR EVERY STEP OF</h2>
          </div>
          <div className="mb-6">
            <h1 className="text-8xl font-bold text-blue-500">YOUR JOURNEY</h1>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-black">
              Everyone’s financial life is different. That’s why we offer flexible choices, simple solutions and friendly support to help you keep moving forward, one step at a time. So whether you need a credit product, a loan to help cover the unexpected or a clear answer to a difficult question, we&#x27;re here to help.
            </h3>
          </div>
          <div>
          <button className="text-xl bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg py-2 px-10 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out font-mono">
            GET TO KNOW 369
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
