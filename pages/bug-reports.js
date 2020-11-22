import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../components/navbar"

const BugReports = ({ data, title, description }) => {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  return (
    <>
      <div className="publicContainer">
        <div className="publicNav">
          <div className="contentContainer">
            <div className="contentInnerContainer">
              <Navbar />
            </div>
          </div>
        </div>
        <div className="boardHome">
           <div className="contentContainer">
              <div className="contentInnerContainer">
                 <div className="subdomainSidebarContainer">
                    <div className="mainContainer">
                       <div className="postListContainer">
                          <div className="postList">
                             <div className="topContainer">
                                <div className="postListMenu">
                                   <div className="menu">
                                      <div className="text">List of all Bug Reports</div>
                                   </div>
                                   <div className="searchContainer">
                                      <div className="searchBar">
                                         <div className="textInput searchInput">
                                            <div className="inset">
                                               <div className="icon icon-search"></div>
                                            </div>
                                            <div className="inputContainer"><input type="text" placeholder="Search…"/></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div className="posts">
                               {ListItems.map((blog, i) => (
                                 blog.category == "bug" &&
                                  <div class="postListItem">
                                    <div class="postVotes">
                                       <div class="upvote"></div>
                                       <span>886</span>
                                    </div>
                                    <Link href={`/${blog.slug}`}>
                                    <a key={i} class="postLink">
                                       <div class="body">
                                          <div class="postTitle"><span>{blog.title}</span></div>
                                          <div class="statusStale">
                                            { blog.state == "proposed" ?
                                            <div class="uppercaseHeader postStatus planned">Proposed</div>
                                              : blog.state == "funding" ?
                                              <div class="uppercaseHeader postStatus planned">In Funding</div>
                                              : blog.state == "building" ?
                                              <div class="uppercaseHeader postStatus planned">In Progress</div>
                                              : <div class="uppercaseHeader postStatus planned">Other</div>
                                            }

                                          </div>
                                          <div class="postDetails">
                                             <div class="truncate">
                                                <div class="line">{blog.description}</div>
                                             </div>
                                          </div>
                                       </div>
                                       <a href={blog.url} target="_blank" rel="noopener">
                                        <div class="postCommentCount"><span class="icon icon-comment"></span><span>66</span></div>
                                      </a>
                                    </a>
                                  </Link>
                                 </div>
                               ))}



                             </div>
                             <div className="postListLoadMore">
                                Load More
                                <div className="arrow">→</div>
                             </div>
                          </div>
                       </div>
                       <div className="cannyAttribution mobileOnly"><a href="https://canny.io/powered-by-canny?utm_source=feedback_subdomain&amp;utm_medium=powered&amp;utm_campaign=raindropio&amp;company=Raindrop.io" rel="noopener" target="_blank" className="attribution">Powered&nbsp;by&nbsp;Canny</a></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default BugReports;

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
