import { logo } from "/../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="Logo" className="w-28 object-contain" />

            <button className="black_btn" type="button" onClick={() => window.open("https://www.google.com")} >GitHub</button>     
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br className="max-md:hidden" />
            <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
            Summarize any article with the power of OpenAI GPT-4.
            Easy to use, just paste the article and get the summary.
            
        </h2>
    </header>
  )
}

export default Hero