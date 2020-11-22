import react from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Navbar from "../components/navbar"

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
              <Navbar />
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
