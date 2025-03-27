import camera from "../../assets/camera/3.jpg";
import FaceBookLogo from "../LogoComponents/FaceBookLogo";
import InstagramLogo from "../LogoComponents/InstagramLogo";
import TwitterLogo from "../LogoComponents/TwitterLogo";
import YouTubeLogo from "../LogoComponents/YouTubeLogo";
export default function HerosView() {
  return (
    <section>
      <div className="h-screen flex ">
        <div className="flex w-full lg:w-1/2">
          <div className="  flex items-center flex-col justify-center mx-auto mb-12 ">
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-semibold mx-auto ">
              CCTV & PC's
            </h1>
            <div className="text-slate-700 py-7 text-center">
              <p>Empowering Your Safety with Technology</p>
              <p>24/7 Surveillance Total Assurance</p>
            </div>
            <div className=" flex w-2/3 justify-around ">
              <FaceBookLogo />
              <InstagramLogo />
              <TwitterLogo />
              <YouTubeLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
