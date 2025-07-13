export default function AboutSection() {
  return (
    <section className="md:pt-[112px] pt-16 relative" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
          <div className="relative space-y-4 md:space-y-0">
            <div>
              <img
                src="/assets/img/about/1.jpg"
                className="mx-auto dark:hidden"
                alt="About Light"
              />
              <img
                src="/assets/img/about/2.jpg"
                className="mx-auto hidden dark:block"
                alt="About Dark"
              />
            </div>
            {/* Badge năm kinh nghiệm & dự án */}
            <div className="top-[120px] -left-20 md:absolute">
              <div className="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
                <h3 className="text-[50px] text-[#1cbe59]">18</h3>
                <span className="name text-lg font-secondary leading-[1.3] font-medium">
                  Years of
                  <br />
                  Success
                </span>
              </div>
            </div>
            <div className="bottom-[70px] -right-[30px] md:absolute">
              <div className="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
                <h3 className="text-[50px] text-[#6e50f0] dark:text-[#f0c45c]">
                  9K
                </h3>
                <span className="name text-lg font-secondary leading-[1.3] font-medium">
                  Total
                  <br />
                  Projects
                </span>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-[25px] lg:max-w-[440px]">
              <p className="text-custom text-xl md:text-2xl font-medium font-secondary">
                I'm a Designer
              </p>
              <h3 className="md:text-[48px] text-[35px] leading-[1.25] mt-1.5">
                I Can Design Anything You Want
              </h3>
            </div>
            <p className="text-muted dark:text-darkmuted lg:max-w-[485px] leading-[30px] mb-[47px]">
              Hello there! I'm a web designer, very passionate and dedicated.
              With 20 years experience as a professional web developer, I have
              the skills to make your project a success.
            </p>
            <a href="#contact" className="btn-custom">
              Hire Me
            </a>
          </div>
        </div>
      </div>
      {/* Brush images */}
      <div className="left-10 top-5 absolute hidden lg:block">
        <img src="/assets/img/brushes/about/1.png" alt="Brush 1" />
      </div>
      <div className="-bottom-[50px] right-0 absolute hidden lg:block">
        <img src="/assets/img/brushes/about/2.png" alt="Brush 2" />
      </div>
    </section>
  );
}
