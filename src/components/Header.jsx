import headerData from '../content/header.json';

export default function Header() {
    return (
        <header className="flex items-center justify-left h-[85vh] max-w-[1300px] px-5">
            <div className="text-center md:text-left px-2 bg-background text-text-primary">
                <p className="text-body-lg-sm md:text-body-lg font-semibold">{headerData.intro}</p>
                
                {/* Gradient using theme tokens */}
                <h1 className="text-header-xl-sm md:text-header-xl-md lg:text-header-xl font-bold bg-gradient-to-b from-primary via-primary-medium to-primary-light bg-clip-text text-transparent">
                    {headerData.name}
                </h1>

                {/* Secondary text color */}
                <h2 className="text-header-lg-sm md:text-header-lg-md lg:text-header-lg bg-secondary bg-clip-text text-transparent font-bold">
                    {headerData.title}
                </h2>

                <p className="text-body-lg-sm md:text-body-lg font-semibold">
                    {headerData.description}
                </p>
            </div>
        </header>
    );
}