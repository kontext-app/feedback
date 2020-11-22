import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";

import Landing from './landing';

const Index = ({ data, title, description }) => {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  /* try to put the issues to different boxes, depending on their `state` */
  /*
  const ProposedItems = listItem.state == "proposed" && RealData.map((listItem) => listItem.data);
  const FundingItems = listItem.state == "funding" && RealData.map((listItem) => listItem.data);
  const BuildingItems = listItem.state == "building" && RealData.map((listItem) => listItem.data);
  const ClosedItems = listItem.state == "closed" && RealData.map((listItem) => listItem.data);
  */

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description}></meta>
      <title>{title}</title>
    </Head>
    <div class="publicContainer">
      <div class="publicNav">
        <div class="contentContainer">
          <div class="contentInnerContainer">
            <div className="publicNavContent">
               <div className="mainNav">
                  <a className="company" href="/">
                     <div className="logoContainer">
                        <div className="companyLogo"><img src="https://pbs.twimg.com/profile_images/1328955222727790594/AGoqR87h_400x400.jpg"/></div>
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
                {/*<div className="boardGridContainer">
                   <div className="header">Give Feedback</div>
                   <div className="boardGrid">
                      <a className="boardGridItem" href="/feature-requests">
                         <div className="top">
                            <div className="name">Feature request</div>
                            <div className="uppercaseHeader posts">428</div>
                         </div>
                      </a>
                      <a className="boardGridItem" href="/bugs">
                         <div className="top">
                            <div className="name">Bug report</div>
                            <div className="uppercaseHeader posts">65</div>
                         </div>
                      </a>
                      <a className="boardGridItem" href="/languages">
                         <div className="top">
                            <div className="name">Translation</div>
                            <div className="uppercaseHeader posts">10</div>
                         </div>
                      </a>
                      <a className="boardGridItem" href="/integrations">
                         <div className="top">
                            <div className="name">Integration</div>
                            <div className="uppercaseHeader posts">44</div>
                         </div>
                      </a>
                   </div>
                </div>*/}
                <div className="roadmapView">
                   <div className="header">Roadmap</div>
                   <div className="roadmapColumns">
                      <div className="roadmapColumn">
                         <div className="columnHeader">
                            <div className="dot underReview"></div>
                            <div>Proposed Features</div>
                         </div>
                         <div className="scrollContainer scrollable">
                            <div className="postList">
                               <div className="topContainer"></div>
                               <div className="posts">
                                 {ListItems.map((blog, i) => (
                                   blog.state == "proposed" &&
                                   <div key={i} className="postListItem">
                                    <div className="postVotes">
                                       <div className="upvote"></div>
                                       <span>5</span>
                                    </div>
                                    <Link href={`/${blog.slug}`}>
                                      <a className="postLink">
                                         <div className="body">
                                            <div className="postTitle"><span>{blog.title}</span></div>
                                            { blog.category == "bug" ?
                                            <div className="uppercaseHeader boardName">Bug Report</div>
                                              : blog.category == "feature" ?
                                              <div className="uppercaseHeader boardName">Feature Request</div>
                                              : blog.category == "translation" ?
                                              <div className="uppercaseHeader boardName">Translation</div>
                                              : <div className="uppercaseHeader boardName">Other</div>
                                            }
                                         </div>
                                      </a>
                                    </Link>
                                   </div>
                                 ))}
                               </div>
                            </div>
                            <div className="roadmapLoadMore"></div>
                         </div>
                      </div>
                      <div className="roadmapColumn">
                         <div className="columnHeader">
                            <div className="dot planned"></div>
                            <div>Funded Features</div>
                         </div>
                         <div className="scrollContainer scrollable">
                            <div className="postList">
                               <div className="topContainer"></div>
                               <div className="posts">
                                 {ListItems.map((blog, i) => (
                                   blog.state == "funding" &&
                                   <div key={i} className="postListItem">
                                    <div className="postVotes">
                                       <div className="upvote"></div>
                                       <span>5</span>
                                    </div>
                                    <Link href={`/${blog.slug}`}>
                                      <a className="postLink">
                                         <div className="body">
                                            <div className="postTitle"><span>{blog.title}</span></div>
                                            {/* if category = bug, then show this */}

                                            { blog.category == "bug" ?
                                            <div className="uppercaseHeader boardName">Bug Report</div>
                                              : blog.category == "feature" ?
                                              <div className="uppercaseHeader boardName">Feature Request</div>
                                              : blog.category == "translation" ?
                                              <div className="uppercaseHeader boardName">Translation</div>
                                              : <div className="uppercaseHeader boardName">Other</div>
                                            }
                                         </div>
                                      </a>
                                    </Link>
                                   </div>
                                 ))}
                               </div>
                            </div>
                            <div className="roadmapLoadMore"></div>
                         </div>
                      </div>
                      <div className="roadmapColumn">
                         <div className="columnHeader">
                            <div className="dot inProgress"></div>
                            <div>In Progress</div>
                         </div>
                         <div className="scrollContainer scrollable">
                            <div className="postList">
                               <div className="topContainer"></div>
                               <div className="posts">
                                 {ListItems.map((blog, i) => (
                                   blog.state == "building" &&
                                   <div key={i} className="postListItem">
                                    <div className="postVotes">
                                       <div className="upvote"></div>
                                       <span>5</span>
                                    </div>
                                    <Link href={`/${blog.slug}`}>
                                      <a className="postLink">
                                         <div className="body">
                                            <div className="postTitle"><span>{blog.title}</span></div>
                                            {/* if category = bug, then show this */}

                                            { blog.category == "bug" ?
                                            <div className="uppercaseHeader boardName">Bug Report</div>
                                              : blog.category == "feature" ?
                                              <div className="uppercaseHeader boardName">Feature Request</div>
                                              : blog.category == "translation" ?
                                              <div className="uppercaseHeader boardName">Translation</div>
                                              : <div className="uppercaseHeader boardName">Other</div>
                                            }
                                         </div>
                                      </a>
                                    </Link>
                                   </div>
                                 ))}
                               </div>
                            </div>
                            <div className="roadmapLoadMore"></div>
                         </div>
                      </div>
                   </div>
                </div>
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

export default Index;

export async function getStaticProps() {
  const siteData = await import(`../config.json`);
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}
