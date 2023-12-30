import Hello from "./Hello";
import Text from "./Text";
export default function Hero() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-[80%] gap-10 flex flex-col items-center justify-center">
        <div className="mt-40 ">
          <Hello />
        </div>

        <Text />
        <p className="text-white text-2xl">
          I&apos;m a dedicated{" "}
          <span className="text-[#06806D]">front-end developer</span> working
          hard to become a <span className="text-[#06806D]">full-stack</span>{" "}
          development master.
        </p>
      </div>
    </main>
  );
}
