import React from "react";

function Navbar() {
  return (
    <div className="publicNavContent">
       <div className="mainNav">
          <a className="company" href="/">
             <div className="logoContainer">
                <div className="companyLogo"><img src="https://i.imgur.com/UiLsBJT.png"/></div>
                <div className="companyName">feedback.kontext.app</div>
             </div>
          </a>
          <div className="rightContainer">
             <div className="loginLink">
                <div className="uppercaseHeader">Log&nbsp;in&nbsp;/&nbsp;Sign&nbsp;up</div>
             </div>
          </div>
       </div>
       <div className="secondaryNav">
          <a className="link roadmap activeLink" href="/">
             <span className="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAElBMVEVHcEz///////////////////+IGTx/AAAABXRSTlMAr0AwEGUIpLUAAABqSURBVDjL7ZXBCsAwCEOtrv//y1MYtkrNzmPmZMg7KUGaqsE85lJhyWZSrbCyhrIZ9qyyhtpMl2eVdZRidrCNNvpxVGJhEJpqiFBts2zlhmjUH9C0c4SmnSM07RyiUI3K/jawwjN6Y58D3RcGF3FNrTJBAAAAAElFTkSuQmCC"/></span>
             <div className="uppercaseHeader text">Roadmap</div>
          </a>
          <a className="link roadmap " href="/proposed">
            <div className="dot underReview"></div>
            <div className="uppercaseHeader text">Proposed</div>
          </a>
          <a className="link roadmap " href="/funding">
            <div className="dot planned"></div>
            <div className="uppercaseHeader text">In Funding</div>
          </a>
          <a className="link roadmap " href="/building">
             <div className="dot inProgress"></div>
             <div className="uppercaseHeader text">In Progress</div>
          </a>
          <a className="link roadmap " href="/feature-requests">
            <span className="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
            <div className="uppercaseHeader text">Feature Requests</div>
          </a>
          <a className="link roadmap " href="/bug-reports">
            <span className="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
            <div className="uppercaseHeader text">Bug Reports</div>
          </a>
          <a className="link roadmap " href="/translation-requests">
            <span className="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
             <div className="uppercaseHeader text">Translation Requests</div>
          </a>
       </div>
    </div>

    );
  };

export default Navbar;
