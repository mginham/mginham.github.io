import meganPhoto from "../assets/images/megan_about_photo.jpg";
import aboutData from '../content/about.json';

export default function About() {
    return (
        <section id="about__section" className="content__section max-w-[1300px] mx-auto px-6 my-24 scroll-mt-24">
            <h3 className="text-header-lg-sm md:text-header-lg-md lg:text-header-lg font-bold mb-12">About Me</h3>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-3/5">
                    <p className="text-body-sm-sm md:text-body-sm">
                        {aboutData.intro}
                        <br /><br />
                        {aboutData.education}
                        <br /><br />
                        {aboutData.career}
                        <br /><br />
                        {aboutData.outro}
                    </p>
                </div>
                <div className="relative w-full md:w-2/5 h-[400px]">
                    <div className="absolute top-8 left-8 w-[95%] h-[95%] border-2 border-gray-500 rounded-2xl z-0"></div>
                    <img
                        src={meganPhoto}
                        alt="Megan photo"
                        className="rounded-2xl p-2 h-full w-full object-cover object-[0%_5%] relative z-10"
                    />
                </div>
            </div>
        </section>
    );
}