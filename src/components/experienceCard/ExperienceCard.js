import React, {createRef, useContext} from "react";
import "./ExperienceCard.css";
import StyleContext from "../../contexts/styleContext";

export default function ExperienceCard({experience}) {
    const imgRef = createRef();
    const GetDescBullets = ({descBullets}) => {
    return descBullets
    ? descBullets.map((item, i) => (
        <li key={i} className="subTitle">
            {item}
        </li>
    ))
    : null;
};
const {isDark} = useContext(StyleContext);
    return (
    <div>
        <div className="experience-card">
            <div className="experience-card-left">
                {experience.companyLogo && (
                    <img
                        crossOrigin={"anonymous"}
                        ref={imgRef}
                        className="experience-roundedimg"
                        src={require(`../../assets/images/${experience.companyLogo}`)}
                        alt={experience.company}
                    />
                )}
            </div>
            <div className="experience-card-right">
                <h5 className="experience-text-school">{experience.role}</h5>
                <div className="experience-text-details">
                    <h5 className={isDark ? "dark-mode experience-text-subHeader" : "experience-text-subHeader"}>
                        {experience.companyUrl ? (
                            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                                {experience.company}
                            </a>
                        ) : (
                            experience.company
                        )}
                    </h5>
                    <p
                        className={`${isDark ? "dark-mode" : ""} experience-text-duration`}
                    >
                        {experience.duration}
                    </p>
                    <div className="experience-text-bullets">
                        <ul>
                        <GetDescBullets descBullets={experience.description} />
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    <div className="experience-card-border"></div>
    </div>
);
}