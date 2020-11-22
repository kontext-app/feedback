import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../components/navbar"

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
            <Navbar />
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
                        <a href="/proposed">
                           <div className="columnHeader">
                              <div className="dot underReview"></div>
                              <div>Proposed Features</div>
                           </div>
                         </a>
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
                        <a href="/funding">
                           <div className="columnHeader">
                              <div className="dot planned"></div>
                              <div>Features in Funding</div>
                           </div>
                         </a>
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
                        <a href="/building">
                           <div className="columnHeader">
                              <div className="dot inProgress"></div>
                              <div>In Progress</div>
                           </div>
                         </a>
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
