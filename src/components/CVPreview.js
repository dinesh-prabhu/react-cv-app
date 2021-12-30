let currentDate = new Date();
const dateFormatOptions = { month: "short", year: "numeric"};

function getDateString(dateStr) {
    let parsedDate = new Date(dateStr);
    if(parsedDate.getMonth() === currentDate.getMonth() && parsedDate.getFullYear() === currentDate.getFullYear()) {
        return "Present";
    }
    return parsedDate.toLocaleDateString("default", dateFormatOptions);
}

function CVPreview({educationInfo, personalInfo, workInfo, projectInfo, showCVPreview, togglePreview}) {
    const editOnClickHandler = () => {
        togglePreview(!showCVPreview);
    };
    return (showCVPreview && <><div className="cv-preview-container">
        <div className="cv-preview-left">
            <div className="image-container">
                <img src={"Portrait_Placeholder.png"} alt="Placeholder potrait" className="placeholder-image" />
            </div>
            <h2>About me</h2>
            <p>{personalInfo.description}</p>
        </div>
        <div className="cv-preview-right">
            <div className="info-grp">
                <h3 className="display-name">{personalInfo.firstName} {personalInfo.lastName}</h3>
                <p><span className="font-icon">✉</span>{personalInfo.email}</p>
                <p>{workInfo[workInfo.length - 1].roleOrPosition}</p>
                <p><span className="font-icon">✆</span>{personalInfo.phoneNumber}</p>
            </div>
            <hr/>
            <h2>Work Experience</h2>
            {
                workInfo.map((info, index) => { 
                    return <div className="info-grp" key={index}>
                            <h3 className="display-name">{info.companyName}</h3>
                            <p>{info.roleOrPosition}</p>
                            <p>{getDateString(info.workFrom)} - {getDateString(info.workTo)}</p>
                            <p>{info.description}</p>
                        </div>;
                })
            }
            <hr/>
            <h2>Projects</h2>
            {
                projectInfo.map((info, index) => { 
                    return <div className="info-grp projects-preview" key={index}>
                            <h3 className="display-name">{info.ProjectName}</h3>
                            <p>{info.projectType}</p>
                            <p>{info.description}</p>
                        </div>;
                })
            }
            <hr/>
            <h2>Education</h2>
            {
                educationInfo.map((info, index) => { 
                    return <div className="info-grp" key={index}>
                            <h3 className="display-name">{info.univName}</h3>
                            <p>{info.degOrStream}</p>
                            <p>{getDateString(info.educationFrom)} - {getDateString(info.educationTo)}</p>
                        </div>;
                })
            }
        </div>
    </div>
    <div className="submit-btn-grp">
        <button className="btn submit-btn" onClick={editOnClickHandler}>Edit</button>
    </div></>);
}
export default CVPreview;