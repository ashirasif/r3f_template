import { Canvas } from "@react-three/fiber";
import Scene from "components/3d/scene";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Muhammad Ashir</title>
        <meta name="description" content="Ashir's site duh!!" />
      </Head>
      <main className="">
        <div className="relative z-10 mx-4 flex lg:h-screen flex-col justify-start overflow-hidden bg-transparent text-left tracking-tight text-white max-md:translate-y-4 lg:w-[40vw] lg:justify-center">
          <div className="text-6xl font-black lg:text-8xl 2xl:text-9xl">
            <div>NEXT.js</div>
            <div>With</div>
            <div>React-Three-Fiber</div>
          </div>
          <div className="mt-4 flex flex-row justify-start gap-8 font-bold">
            <button
              onClick={() => router.push("https://nextjs.org/docs")}
              className="basis-1/2 appearance-none rounded-3xl border border-white px-4 py-2 transition-all duration-200 hover:bg-white hover:text-black"
            >
              Next.js Docs
            </button>
            <button
              onClick={() =>
                router.push(
                  "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction",
                )
              }
              className="basis-1/2 appearance-none rounded-3xl border border-white px-4 py-2 transition-all duration-200 hover:bg-white hover:text-black"
            >
              R3F Docs
            </button>
          </div>
        </div>
        <div className="fixed left-0 top-0 h-screen w-screen">
          <Canvas className="bg-gradient-to-b from-blue-950 to-purple-700">
            <Scene />
          </Canvas>
        </div>
      </main>
    </>
  );
}
