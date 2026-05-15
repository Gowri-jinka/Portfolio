import { motion } from "framer-motion";

const projects = [

   {
    title:"Personal Portfolio Website",

    desc:
    "Designed and developed a modern personal portfolio website using React.js with interactive animations, responsive layouts, EmailJS integration, certifications showcase, projects section, and GitHub deployment. Built to create a professional digital presence.",

    tech:[
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
      "Vercel"
    ],

    github:
    "https://github.com/Gowri-jinka/Portfolio",

    image:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  
  {
    title: "Ecommerce MERN Application",

    desc:
      "Full-stack ecommerce application built using MERN stack with secure authentication, Email OTP verification, welcome email integration, product listings, cart system, checkout workflow, REST APIs, and MongoDB database integration.",

    tech: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer"
    ],

    github:
      "https://github.com/Gowri-jinka/ecommerce-mern",

    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },

  {
    title: "HR Analytics Dashboard",

    desc:
      "Interactive HR Analytics Dashboard developed using Power BI to analyze workforce performance, employee satisfaction, promotion eligibility, retrenchment insights, and demographics through dynamic reports and KPI visualization.",

    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel"
    ],

    github:
      "https://github.com/Gowri-jinka/PowerBI-HR-Dashboard",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },

  {
    title: "Employee Attendance Management System",

    desc:
      "Full-stack attendance management platform with role-based authentication where employees mark attendance and managers track reports through a secure dashboard.",

    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],

    github:
      "https://github.com/Gowri-jinka/Employee-Attendance-Management-System",

    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },

  {
    title:"Resume Builder",

    desc:
      "Web application for generating professional resumes dynamically with user-friendly interfaces, customizable templates, and downloadable document support.",

    tech:[
      "HTML",
      "CSS",
      "JavaScript",
      "Django"
    ],

    github:
      "https://github.com/Gowri-jinka/resume_builder",

    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4"
  }

];

const Projects = () => {
  return (

<section
id="projects"
className="py-24 px-6"
>

<div
className="
max-w-7xl
mx-auto
bg-[#0f172a]
rounded-3xl
p-12
"
>

<h2
className="
text-5xl
font-bold
text-center
mb-5
bg-gradient-to-r
from-cyan-400
to-purple-500
text-transparent
bg-clip-text
"
>

My Projects

</h2>

<p
className="
text-center
text-slate-400
mb-16
max-w-3xl
mx-auto
leading-8
"
>

Real-world projects built using
MERN Stack, Power BI,
full stack development and
modern technologies.

</p>


<div
className="
grid
md:grid-cols-2
gap-10
"
>

{projects.map((project,index)=>(

<motion.div

key={index}

whileHover={{
scale:1.03,
y:-10
}}

transition={{
duration:.3
}}

className="
bg-[#111827]
rounded-2xl
overflow-hidden
shadow-lg
hover:shadow-cyan-500/20
border
border-white/5
"

>

<div
className="
h-52
overflow-hidden
"
>

<img

src={project.image}

alt={project.title}

className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-700
"

/>

</div>


<div className="p-8">

<h3
className="
text-3xl
font-bold
text-cyan-400
"
>

{project.title}

</h3>

<p
className="
text-slate-300
mt-5
leading-8
"
>

{project.desc}

</p>

<div
className="
flex
gap-3
flex-wrap
mt-6
"
>

{project.tech.map((tech,index)=>(

<span

key={index}

className="
px-4
py-2
rounded-full
bg-white/10
text-sm
"

>

{tech}

</span>

))}

</div>


<div className="mt-8">

<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
inline-block
bg-cyan-400
text-black
px-6
py-3
rounded-xl
font-semibold
hover:scale-105
transition
duration-300
"

>

View GitHub

</a>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

  );
};

export default Projects;