import React from "react";

function Landing() {
  return (
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
                            <div>Under Review</div>
                         </div>
                         <div className="scrollContainer scrollable">
                            <div className="postList">
                               <div className="topContainer"></div>
                               <div className="posts">
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>5</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/chrome-extension-mini-app-editing-bookmark-description-lags">
                                        <div className="body">
                                           <div className="postTitle"><span>Chrome extension Mini App editing bookmark description lags</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>7</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/sorting-by-relevance-should-use-favorites">
                                        <div className="body">
                                           <div className="postTitle"><span>Sorting by relevance should use favorites</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>22</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/comments">
                                        <div className="body">
                                           <div className="postTitle"><span>Comments</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>16</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/safari-extensions">
                                        <div className="body">
                                           <div className="postTitle"><span>Safari extensions</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>7</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/no-cached-version-of-website">
                                        <div className="body">
                                           <div className="postTitle"><span>no cached version of website</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>3</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/icons-from-iconfinder-doesnt-work">
                                        <div className="body">
                                           <div className="postTitle"><span>Icons from iconfinder doesn't work</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>2</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/cards-view-sometimes-cuts-off-images">
                                        <div className="body">
                                           <div className="postTitle"><span>Cards View sometimes cuts off images</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>14</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/shortcut-key-for-raindropio-safari-button">
                                        <div className="body">
                                           <div className="postTitle"><span>Shortcut key for better.kontext.app safari button</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>51</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/tag-to-collection">
                                        <div className="body">
                                           <div className="postTitle"><span>Tag to Collection</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>6</span>
                                     </div>
                                     <a className="postLink" href="/bugs/p/save-url-as-it-is">
                                        <div className="body">
                                           <div className="postTitle"><span>Save URL as it is</span></div>
                                           <div className="uppercaseHeader boardName"> Bug report</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>4</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/sites-views-similar-to-categories">
                                        <div className="body">
                                           <div className="postTitle"><span>Sites Views Similar to Categories</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>9</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/mark-saved-item-as-not-an-article">
                                        <div className="body">
                                           <div className="postTitle"><span>Mark saved item as not an article</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>6</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/support-portrait-ratio-images-in-moodboard">
                                        <div className="body">
                                           <div className="postTitle"><span>Support portrait ratio images in moodboard</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>53</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/show-read-time">
                                        <div className="body">
                                           <div className="postTitle"><span>Show Read Time</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>76</span>
                                     </div>
                                     <a className="postLink" href="/integrations/p/support-macos-spotlight-search">
                                        <div className="body">
                                           <div className="postTitle"><span>Support macos Spotlight search</span></div>
                                           <div className="uppercaseHeader boardName">Integration</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>1</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/auto-download-tiktok-and-instagram-content-video-image">
                                        <div className="body">
                                           <div className="postTitle"><span>Auto download tiktok and instagram content (video, image)</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>683</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/smartvirtual-collections">
                                        <div className="body">
                                           <div className="postTitle"><span>Smart/virtual collections</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>2</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/logout-when-browser-closes">
                                        <div className="body">
                                           <div className="postTitle"><span>Logout when browser closes</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>4</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/import-fonts-to-bookmark">
                                        <div className="body">
                                           <div className="postTitle"><span>Import Fonts to Bookmark</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>8</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/password-manager">
                                        <div className="body">
                                           <div className="postTitle"><span>Password Manager</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>26</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/minimal-ui-without-screenshot-thumbnail-images-and-icons-just-plain-bw-text-and-">
                                        <div className="body">
                                           <div className="postTitle"><span>Minimal UI without screenshot thumbnail images and icons. Just plain B/W text and lots of uncluttering white space.</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>21</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/temporary-collections-workspaces">
                                        <div className="body">
                                           <div className="postTitle"><span>Temporary collections / workspaces</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>37</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/sync-images-to-dropbox-insted-of-html-with-links-1">
                                        <div className="body">
                                           <div className="postTitle"><span>Sync images to dropbox insted of HTML with links</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>62</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/minimal-material-design-bw-icons-or-ability-to-not-have-icons-at-all">
                                        <div className="body">
                                           <div className="postTitle"><span>Minimal Material Design B/W icons or ability to not have icons at all!</span></div>
                                           <div className="uppercaseHeader boardName">Feature request</div>
                                        </div>
                                     </a>
                                  </div>
                                  <div className="postListItem">
                                     <div className="postVotes">
                                        <div className="upvote"></div>
                                        <span>102</span>
                                     </div>
                                     <a className="postLink" href="/feature-requests/p/export-to-more-file-types">
                                        <div className="body">
                                           <div className="postTitle"><span>Export to more file types</span></div>
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
                            <div className="dot planned"></div>
                            <div>Planned</div>
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
  );
}

export default Landing;
