import { Link } from 'react-router-dom';
import projects from '../content/projects.json';

// Import images
const getImage = (imageName) => new URL(`../assets/images/${imageName}`, import.meta.url).href;

export default function Projects() {
    return (
        <section id="projects__section" className="content__section max-w-[1300px] mx-auto px-6 my-24 scroll-mt-24">
            <h3 className="text-header-lg-sm md:text-header-lg-md lg:text-header-lg font-bold mb-12">Projects</h3>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="w-[360px] h-[350px]">
                        <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <img
                                src={getImage(project.image)}
                                alt={project.title}
                                className={`h-[70%] w-full rounded-3xl p-2 object-cover ${project.imagePosition || "object-[center_center]"} border border-transparent hover:border-text-primary hover:shadow-lg transition`}
                            />
                            <p className="text-body-md-sm md:text-body-md font-bold px-2 mt-2">{project.title}</p>
                            <div className="flex flex-wrap px-2 mt-1">
                                {project.stack.map((tech, i) => (
                                    <p key={i} className="text-caption-md-sm md:text-caption-md mr-3">{tech}</p>
                                ))}
                            </div>
                        </Link>                        
                    </div>
                ))}
            </div>
        </section>
    );
}