import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* Heading and Card */}
      <div className="container mt-5 flex flex-col items-center">
        <h1 className="text-5xl text-center">Welcome to The Cheater&apos;s Gambit!</h1>
        <div
          className="card bg-[#1b1a1a61] p-4 md:p-6 flex flex-col items-center m-4 rounded max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <h3 className="text-white text-2xl font-bold">The Cheaters Gambit</h3>
          <Image
            src="/cheatersgambit.png"
            alt="Project 3"
            width={128}
            height={128}
            objectFit="cover"
            className="my-4"
          />
          <p className="mb-4 text-white">A chess game where the AI can cheat!</p>
          <a
            href="https://github.com/jpirrotta/The-Cheaters-Gambit"
            target="_blank"
            className="btn bg-blue-500 text-white px-4 py-2 rounded"
          >🚀Come Check the Repo!🚀</a
          >
        </div>
      </div>

      {/* About Section */}
      <h1 className="text-5xl text-center mt-32">What is the game about?</h1>
      <div className="container mt-5 flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl mb-1">Cheating is... Okay?</h2>
          <Image src="https://via.placeholder.com/250" alt="Placeholder" width={250} height={250} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl mb-1">Challenge your friends!</h2>
          <Image src="https://via.placeholder.com/250" alt="Placeholder" width={250} height={250} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl mb-1">Climb the leader boards!</h2>
          <Image src="https://via.placeholder.com/250" alt="Placeholder" width={250} height={250} />
        </div>
      </div>
    </>
  );
}
