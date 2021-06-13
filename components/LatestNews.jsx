import React from "react";

function Post({ data }) {
  return (
    <>
      <div className="post">
        <a href={data.link}>
          <div
            className="post__title"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
        </a>
        <div className="post__data">On {data.pubDate}</div>
      </div>
      <style jsx>
        {`
          .post {
            width: 90%;
            max-width: 300px;
            margin: 10px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
              0 0px 5.3px rgba(0, 0, 0, 0.028), 0 0px 10px rgba(0, 0, 0, 0.035),
              0 0px 17.9px rgba(0, 0, 0, 0.042),
              0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);
          }
          .post__data {
            background-color: #ff3e81;
            padding: 5px;
            border-radius: 8px;
            color: white;
            display: inline-block;
            font-size: 12px;
            margin-top: 10px;
          }
        `}
      </style>
    </>
  );
}

export default Post;
