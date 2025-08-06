import footerData from '../content/footer.json';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ICON_MAP = {
    mail: FaEnvelope,
    linkedin: FaLinkedin,
    github: FaGithub
};

export default function Footer() {
    return (
        <footer className="mt-12 border-t border-text-primary pt-2 pb-16 text-center text-text-primary">
            <div className="flex justify-center gap-22 py-4 m-4">
                {footerData.icons.map((iconObj, i) => {
                    const Icon = ICON_MAP[iconObj.icon];
                    return (
                        <a
                            key={i}
                            href={iconObj.href}
                            target="_blank"
                            rel={iconObj.label === 'Email' ? undefined : 'noopener noreferrer'}
                            aria-label={iconObj.label}
                            className="text-2xl hover:text-primary transition"
                        >
                            <Icon />
                        </a>
                    );
                })}
            </div>
            <p className="text-caption-sm-sm md:text-caption-sm">{footerData.copyright}</p>
        </footer>
    );
}