import react from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Blog = ({ content, data }) => {
  const frontmatter = data;

  return (
    <>
      <div class="publicContainer">
        <div class="publicNav">
          <div class="contentContainer">
            <div class="contentInnerContainer">
              <div className="publicNavContent">
                 <div className="mainNav">
                    <a className="company" href="/">
                       <div className="logoContainer">
                          <div className="companyLogo"><img src="https://pbs.twimg.com/profile_images/1328955222727790594/AGoqR87h_400x400.jpg"/></div>
                          <div className="companyName">better.kontext.app</div>
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
                    <a className="link roadmap " href="/feature-request">
                      <span className="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
                      <div className="uppercaseHeader text">Feature Request</div>
                    </a>
                    <a className="link roadmap " href="/bug-report">
                      <span className="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
                      <div className="uppercaseHeader text">Bug Report</div>
                    </a>
                    <a className="link roadmap " href="/translation">
                      <span className="icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAn0Cv88xoKwAAAIlJREFUKM+dk9ENgCAMBZ+6gB8MYOICxg0U95/JDyihcCYGPi+XQl+LHjoapOcONEqhp7c0ITXZVzC5vm0tck2vIrv3FtnRIvveTPbU5CaHLDc0y21mSW5pkhU3dSfo6KEWgar5g3IFvo1f9qcL7hjT4SQxdZ4QTpMnj1vCG8Xbx5vKW80/YPBnvY4HrEdy3LKeAAAAAElFTkSuQmCC"/></span>
                       <div className="uppercaseHeader text">Translation</div>
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subdomainHome">
          <div className="contentContainer">
            <div className="contentInnerContainer">
              <div className="subdomainHomeContents">
                 <div className="topContainer">
                  <h1>{frontmatter.title}</h1>
                  <h3>{frontmatter.description}</h3>
                  <ReactMarkdown
                    escapeHtml={true}
                    source={content}
                    renderers={{ code: CodeBlock }}
                  />
                  </div>
                  <div className="bottomContainer">
                     <div className="cannyAttribution"><a href="https://canny.io/powered-by-canny" rel="noopener" target="_blank" className="attribution">Inspired&nbsp;by&nbsp;Canny</a></div>
                  </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </>
  );
};

export default Blog;

Blog.getInitialProps = async (context) => {
  const { blog } = context.query;
  // Import our .md file using the `slug` from the URL
  const content = await import(`../content/${blog}.md`);
  const data = matter(content.default);

  return { ...data };
};
