// import './App.css'

import StatComponent from "./components/StatComponent";

function App() {
  return (
    <main className="min-h-screen bg-[hsl(233,47%,7%)] grid place-content-center px-6 py-20 lg:px-0 lg:py-0">
      <div className="text-center lg:text-start rounded-lg md:rounded-xl overflow-auto max-w-[450px] lg:max-w-[1200px] lg:grid lg:grid-cols-[auto_auto]">
        <picture className="relative lg:col-start-2 lg:w-[585px]">
          <img
            className="w-full lg:w-[585px]"
            src="/image-header-mobile.jpg"
            alt=""
          />
          <div className="bg-[rgba(85,15,110,0.64)] absolute w-[200%] lg:w-[585px] h-full top-0"></div>
        </picture>
        <section className="bg-[rgba(80,57,143,0.33)] lg:col-start-1 lg:row-start-1 lg:px-[70px] lg:pt-[70px] lg:pb-10 lg:w-[560px]">
          <section>
            <h1 className="text-white font-['Inter'] text-2xl xs:text-[28px] lg:text-[35px] lg:leading-tight font-bold mx-5 pt-8 xs:pt-10 pb-5 lg:py-0 lg:mx-0">
              Get <span className="text-[hsla(277,64%,61%,0.9)]">insights</span>{" "}
              that help your business grow.
            </h1>
            <p
              className="text-[hsla(0,0%,100%,0.6)] font-['Inter'] text-sm xs:text-[15.3px] mx-7 lg:mx-0 lg:pr-16 lg:text-[14px] lg:font-light lg:pt-5 lg:pb-12"
              style={{ lineHeight: "1.6rem" }}
            >
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </section>
          <footer className="py-7 lg:py-0 lg:flex lg:gap-12">
            <StatComponent value={"10k+"} heading={"COMPANIES"} />
            <StatComponent value={"314"} heading={"TEMPLATES"} />
            <StatComponent value={"12M+"} heading={"QUERIES"} />
          </footer>
        </section>
      </div>
    </main>
  );
}

export default App;
