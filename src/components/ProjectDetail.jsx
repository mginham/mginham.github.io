import { useParams } from 'react-router-dom';
import projects from '../content/projects.json';
import PenguinAnimation from './Penguin/PenguinAnimation';

export default function ProjectDetail() {
    const { title } = useParams();

    // Find project by URL param (case-insensitive)
    const project = projects.find(
        p => p.title.toLowerCase().replace(/\s+/g, '-') === title.toLowerCase()
    );

    if (!project) return <p>Project not found.</p>;

    return (
        <section className="max-w-[1300px] mx-auto px-6 my-12">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            {/* Render penguin animation if this is the penguin project */}
            {project.id === "penguin-animation" ? (
                <div className="my-8 flex justify-center">
                    <PenguinAnimation />
                </div>
            ) : project.demoVideo ? (
                <div className="mb-6 flex justify-center">
                    <video controls className="max-w-full max-h-[500px] rounded-lg" src={project.demoVideo} />
                </div>
            ) : null}

            <p className="mb-6">{project.description}</p>

            <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
            <ul className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                    <li key={i} className="px-3 py-1 bg-primary-light text-black rounded-full text-sm">
                        {tech}
                    </li>
                ))}
            </ul>

            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-text-primary rounded hover:bg-primary-medium transition"
                >
                    View on GitHub
                </a>
            )}
        </section>
    );
}