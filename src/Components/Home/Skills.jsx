import { skillsData } from "../../assets/Data/skills";
import { skillsImage } from "../../assets/Data/skillsImage";
import Marquee from "react-fast-marquee";

const Skills = () => {

    return (
        <section
            id="skills"
            className="relative z-20 border-t my-12 lg:my-24 border-[#25213b]"
        >
            {/* Blurred background light */}
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-20" />

            {/* Gradient line */}
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            </div>

            {/* Section Title */}
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center gap-4">
                    <span className="w-24 h-[2px] bg-[#1a1443]" />
                    <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
                        Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]" />
                </div>
            </div>

            {/* Skill Marquee */}
            <div className="w-full my-12" aria-label="Technology and development skills carousel">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover
                    pauseOnClick
                    play
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div
                            key={id}
                            title={skill}
                            className="w-36 min-w-fit m-3 sm:m-5 transition-transform duration-500 hover:scale-110 cursor-pointer"
                        >
                            <div className="rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 transition-all duration-500">
                                <div className="flex justify-center -translate-y-[1px]">
                                    <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <img
                                            src={skillsImage(skill)}
                                            alt={skill || "Skill Icon"}
                                            width={40}
                                            height={40}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-white text-sm sm:text-lg text-center">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
