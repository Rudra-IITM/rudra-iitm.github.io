import { ArrowRightIcon } from "lucide-react"
import { TechStacks } from "./tech-stacks"

const About = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`text-sm font-extralight tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${className}`} style={{ fontFamily: 'Arial, sans-serif'}}>
        Hello! I'm Rudra, a Computer Science and Engineering sophomore at IIT Mandi with a passion for solving complex problems through innovative technology. My journey in coding started with C++, where I honed my skills in algorithms and data structures. As I progressed, I embraced Python for its versatility and simplicity, which broadened my horizon in various fields, including web development and machine learning.

        Currently, I am diving into the world of web development, focusing on the MERN stack (MongoDB, Express.js, React, and Node.js). This combination allows me to create dynamic, full-stack applications that are both scalable and efficient.
        <div className='text-md mt-4 md:text-2xl text-gray-300'>Tech Stacks</div>
        <TechStacks />
        <div className="mt-4 hover:decoration-solid hover:underline">
            <a href={'/#/techs'} className="text-cyan-500 flex items-center">
            View Full Tech Stacks
            <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
        </div>
    </div>
  )
}

export default About