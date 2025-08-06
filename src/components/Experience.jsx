import experience from '../content/experience.json';

export default function Experience() {
    return (
        <section id="experience__section" className="content__section max-w-[1300px] mx-auto px-6 my-24 scroll-mt-24">
            <h3 className="text-header-lg-sm md:text-header-lg-md lg:text-header-lg font-bold mb-12">Experience</h3>
            <ul className="space-y-6">
                {experience.map((exp, index) => (
                    <li key={index}>
                        <p className="text-body-md-sm md:text-body-md font-bold text-primary-medium">{exp.company}</p>
                        <div className="flex justify-between font-semibold text-lg">
                            <p className="text-body-sm-sm md:text-body-sm text-secondary">{exp.position}</p>
                            <p className="text-body-sm-sm md:text-body-sm">{exp.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}