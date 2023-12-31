import Container from "../../Layout/Container";
import hero_bg from "../../../public/hero-bg.jpg";
import { AiOutlinePlus } from "react-icons/ai";

const Hero = () => {
  return (
    <section>
        <div
          className="min-h-screen -mt-[68px] py-20 z-10"
          style={{
            // backgroundImage:
            // 'url("https://themeforest.wprealizer.com/html-educoda-preview/educoda/assets/images/shape/hero.png")',
            background: `url(${hero_bg}), url("https://themeforest.wprealizer.com/html-educoda-preview/educoda/assets/images/shape/hero-shape-3.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(39, 18, 123, 0.3)",
            backgroundBlendMode: "overlay",
          }}
        >
          <Container>
            <div className="text-center">
              <p className="text-lg md:text-2xl text-white mb-6 mt-20">
                Looking For{" "}
                <span className="text-active-color font-semibold">Help</span>{" "}
                From Premier Assignment.
              </p>
              <h2 className="text-5xl md:text-7xl font-medium text-white w-5/6 mx-auto leading-snug">
                <span className="bg-gradient-to-r from-secondary-color to-primary-color text-transparent bg-clip-text">
                  Assignment
                </span>{" "}
                Help Service In The World.
              </h2>
              <button className="btn normal-case mt-10 text-lg btn-lg btn-wide bg-primary-color border-none text-white hover:bg-secondary-color">
                Read More
                <AiOutlinePlus className="text-xl"></AiOutlinePlus>
              </button>
            </div>
          </Container>
        </div>
      </section>
  );
};

export default Hero;