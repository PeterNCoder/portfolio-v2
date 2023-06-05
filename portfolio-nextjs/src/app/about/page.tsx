import Link from "next/link";

const About = () => {
    return (
        <main className="min-h-screen px-4">
            <div className="h-screen flex items-center justify-center">
                <div className="m-2 border-2 border-sky-300 text-center">

                <h1 className="pt-1 text-lg">About</h1>
                <p className="px-2">
                    Code, coffee, and creativity: my daily mantra.
                </p>

                <h2 className="pt-1">Education</h2>
                <p className="px-2 ">
                    British Columbia Institute of Technology
                </p>
                <p className="px-2 text-xs">
                    Front-End Web Developer Certificate with Distinctions
                </p>

                <h2 className="pt-1">Hobbies</h2>
                <ul className="w-fit mx-auto">
                    <li>- Family & Friends -</li>
                    <li>- Anime -</li>
                    <li>- Gym -</li>
                </ul>



                <Link href="/skills" className="block border-2 border-neutral-500 text-center uppercase py-2 m-2 bg-sky-300 rounded animate-pulse">
                    View - &apos;Skills&apos;
                </Link>

                </div>
            </div>
        </main>
    );
};

export default About;