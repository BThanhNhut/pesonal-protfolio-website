import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="bg-[url('/assets/img/slider/1.jpg')] flex items-center dark:bg-[url('/assets/img/slider/2.html')] bg-center bg-cover lg:h-screen py-24 relative dizme_tm_header"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-[25px]">
          <div className="order-2 lg:order-1">
            <h3 className="text-custom text-[21px] text-center lg:text-left lg:text-[25px] xl:text-[45px] leading-[1.3] font-medium font-secondary">
              Xin chào, tôi là
            </h3>
            <h1 className="text-[42px] lg:text-[60px] xl:text-[85px] text-center lg:text-left mb-[11px] lg:mb-[18px] leading-[1.3] font-medium font-secondary">
              Bien Thanh Nhut
            </h1>
            <p className="lg:mb-9 mb-[15px] text-lg lg:text-[19px] xl:text-[28px] text-center lg:text-left font-medium">
              Một lập trình viên
              <span className="text-[#1cbe59]"> Fontend</span>
            </p>
            <p className="lg:mb-[42px] text-muted dark:text-white mb-[30px] text-base text-center lg:text-left xl:text-[23px] leading-[1.5] max-w-[640px] mx-auto lg:ml-0">
              Tôi tên là Biện Thanh Nhựt, tốt nghiệp chuyên ngành Công nghệ Phần
              mềm tại Đại học Công Thương TP. Hồ Chí Minh. tôi đã có 2 năm kinh
              nghiệm làm việc trong lĩnh vực phát triển ứng dụng di động, đặc
              biệt là với React Native.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-[25px]">
              <a href="#about" className="btn-custom relative">
                About Me
              </a>
              <ul className="flex items-center gap-2">
                <li>
                  <a href="#">
                    <i className="icon-facebook-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <Image
              src="/assets/img/slider/pro2.png"
              width={400}
              height={400}
              quality={100}
              className="mx-auto max-w-[250px] lg:max-w-[400px] xl:max-w-[650px] object-fill"
              alt="Avatar"
            />
            {/* Các icon nhỏ ở 4 góc */}
            <span className="left-24 shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-10 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute animate-bounce">
              <Image
                width={75}
                height={75}
                className="w-10 h-10 mx-auto"
                src="/assets/img/svg/skills/react.png"
                alt="Illustrator"
              />
            </span>
            <span className="right-[110px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-20 hidden lg:flex items-center rounded-lg bg-[#FFD600] w-[75px] h-[75px] absolute animate-bounce">
              <Image
                width={75}
                height={75}
                className="w-full h-full"
                src="/assets/img/svg/skills/js.svg"
                alt="Photoshop"
              />
            </span>
            <span className="left-[100px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] bottom-20 hidden lg:flex items-center rounded-lg bg-[#1976D2] w-[75px] h-[75px] absolute anim_moveBottom">
              <Image
                width={75}
                height={75}
                className="w-full h-full"
                src="/assets/img/svg/skills/ts.svg"
                alt="ts"
              />
            </span>
            <span className="left-[200px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] bottom-10 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
              <Image
                width={75}
                height={75}
                className="w-full h-full"
                src="/assets/img/svg/skills/mongo.svg"
                alt="Figma"
              />
            </span>
            <span className="left-[300px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] bottom-20 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
              <Image
                width={75}
                height={75}
                className="w-10 h-10 mx-auto"
                src="/assets/img/svg/skills/figma.svg"
                alt="Figma"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
