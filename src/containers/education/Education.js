import React, { useContext } from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/styleContext";

export default function Education() {
    const { isDark } = useContext(StyleContext);
    if (!greeting.education) {
    return null;
    }
    return (
        <Fade bottom duration={1200} distance="40px">
        <div className="main" id="education">
            <h1 className="education-header-text">Education</h1>
            <div className="education-main-div">
            <div className="education-text-div">
                {greeting.education.map((school, i) => {
                return <EducationCard key={i} school={school} isDark={isDark} />;
                })}
            </div>
            </div>
        </div>
        </Fade>
    );
}