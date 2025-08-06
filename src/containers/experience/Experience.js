import React from "react";
import "./Experience.css";
import { experienceSection } from "../../portfolio";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

export default function Experience() {
    if (!experienceSection.workExperiences) {
    return null;
    }
    return (
    <Fade bottom duration={1200} distance="40px">
        <div className="main" id="experience">
        <h1 className="experience-header-text">{experienceSection.title}</h1>
        <div className="experience-main-div">
            <div className="experience-text-div">
            {experienceSection.workExperiences.map((experience, i) => {
                return <ExperienceCard key={i} experience={experience} />;
            })}
            </div>
        </div>
        </div>
    </Fade>
    );
}