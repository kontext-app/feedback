import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";

import Landing from './landing';

const Index = ({ data, title, description }) => {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

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
                                              <div className="uppercaseHeader boardName"> Bug report</div>
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
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>2</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/tweet-filter">
                                        <div className="body">
                                           <div className="postTitle"><span>Tweet Filter</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>4</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/add-tooltip-to-extension-to-see-long-paths-to-collections-matching-search-criter">
                                        <div className="body">
                                           <div className="postTitle"><span>Add tooltip to extension to see long paths to collections matching search criteria</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>18</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/restore-from-trash">
                                        <div className="body">
                                           <div className="postTitle"><span>Restore from Trash</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>8</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/when-clicking-on-the-raindrop-icon-focus-on-the-search-bar">
                                        <div className="body">
                                           <div className="postTitle"><span>When clicking on the raindrop icon, focus on the search bar</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>34</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/importing-csv-files">
                                        <div className="body">
                                           <div className="postTitle"><span>importing .CSV files</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>418</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/more-advanced-search">
                                        <div className="body">
                                           <div className="postTitle"><span>More advanced search</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>486</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/pin-one-bookmark-into-multiple-collections">
                                        <div className="body">
                                           <div className="postTitle"><span>Pin one bookmark into multiple collections</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>8</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/drag-and-drop-collections-ipad">
                                        <div className="body">
                                           <div className="postTitle"><span>Drag and drop collections (iPad)</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>9</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/remove-collection-empty-indicator-when-theres-a-nested-folder">
                                        <div className="body">
                                           <div className="postTitle"><span>Remove "Collection Empty" Indicator when there's a nested folder</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>37</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/ordersort-by-different-in-different-folders">
                                        <div className="body">
                                           <div className="postTitle"><span>"Order/sort by" different in different folders.</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>2</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/bring-login-with-apple-button-on-android-app-too">
                                        <div className="body">
                                           <div className="postTitle"><span>Bring "Login with Apple" button on Android app too</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>7</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/change-colour-of-extension">
                                        <div className="body">
                                           <div className="postTitle"><span>Change Colour of Extension</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>15</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/ios-youtube-link-handling">
                                        <div className="body">
                                           <div className="postTitle"><span>iOS: YouTube Link Handling</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>10</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/ipad-view-modes">
                                        <div className="body">
                                           <div className="postTitle"><span>iPad view modes</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>9</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/ability-to-edit-profile-avatar">
                                        <div className="body">
                                           <div className="postTitle"><span>Ability to edit profile avatar</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>3</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/raindrop-ios-app-doesnt-work-with-edge-browser">
                                        <div className="body">
                                           <div className="postTitle"><span>Raindrop iOS app doesn’t work with Edge browser</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>10</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/turn-off-tag-suggestion">
                                        <div className="body">
                                           <div className="postTitle"><span>Turn Off Tag Suggestion</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>7</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/very-poor-ui-for-shared-collections-on-mobile">
                                        <div className="body">
                                           <div className="postTitle"><span>Very poor UI for shared collections on mobile</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>28</span>
                                     </div>
                                     <a className="postLink" href="/integrations/p/enable-workflow-url-scheme-support">
                                        <div className="body">
                                           <div className="postTitle"><span>Enable Workflow &amp; URL Scheme support</span></div>
                                           <div className="uppercaseHeader boardName">Integration</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>12</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/display-tags-menu-in-collections">
                                        <div className="body">
                                           <div className="postTitle"><span>Display tags menu in collections</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>2</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/public-url-marked-as-unsafe">
                                        <div className="body">
                                           <div className="postTitle"><span>Public URL marked as unsafe</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>10</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/descriptions-for-categories">
                                        <div className="body">
                                           <div className="postTitle"><span>Descriptions for Categories</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>1</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/path-to-collection-has-too-little-space-in-android-apps-edit-mode-of-collection">
                                        <div className="body">
                                           <div className="postTitle"><span>Path to collection has too little space in android app's edit mode of collection</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>17</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/export-images-or-store-images-in-cloud-drives">
                                        <div className="body">
                                           <div className="postTitle"><span>export images or store images in cloud drives.</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>8</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/better-safari-extension-button">
                                        <div className="body">
                                           <div className="postTitle"><span>Better Safari Extension Button</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
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
                         <div className="scrollContainer">
                            <div className="postList">
                               <div className="topContainer"></div>
                               <div className="posts">
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>9</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/vertical-thumbnail-proportion-for-cards-view">
                                        <div className="body">
                                           <div className="postTitle"><span>vertical thumbnail proportion for cards view</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>7</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/preference-to-show-all-filters-by-default-in-the-web-app">
                                        <div className="body">
                                           <div className="postTitle"><span>Preference to show 'All' filters by default in the web app</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="bottomContainer">
                <div className="cannyAttribution"><a href="https://canny.io/powered-by-canny?utm_source=roadmap_subdomain&amp;utm_medium=powered&amp;utm_campaign=raindropio&amp;company=better.kontext.app" rel="noopener" target="_blank" className="attribution">Inspired&nbsp;by&nbsp;Canny</a></div>
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
