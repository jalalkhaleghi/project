import React from "react";
import { Link } from "react-router-dom";
import { Style, Vars } from "../../assets/state";
import { BlogContext } from "../../containers/Blog";

const HomeBlog = (props) => {
  const { posts } = React.useContext(BlogContext);
  return (
    <article className={classes.home} id="postsArticle">
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div className={classes.card} key={post._id}>
              <span className={classes.cardImage}>
                <img src={post.main_image.url} alt={post.main_image.alt} />
              </span>
              <div className={classes.cardBody}>{post.summary}</div>
            </div>
          );
        })}
    </article>
  );
};

const { classes } = Style({
  card: {
    marginBottom: 20,
  },
  cardImage: {
    // height: 200,
    marginRight: 10,
    boxShadow: Vars.shadow,
    backgroundColor: "#fff",
    borderRadius: 5,
    "@media(min-width:576px)": {
      // height: 400,
      marginRight: 30,
    },
    "& img": {
      borderRadius: 5,
      height: "auto",
    },
  },
  cardTitle: {
    fontSize: 16,
    display: "block",
    marginBottom: 10,
    fontWeight: "bold",
  },
  blog_footer: {
    color: "#acacac",
    flexWrap: "wrap",
    "& span": {
      whiteSpace: "nowrap",
    },
  },
  cardBody: {
    backgroundColor: "#fff",
    boxShadow: Vars.shadow,
    padding: 20,
    borderRadius: 5,
    marginTop: -10,
    position: "relative",
    zIndex: 9,
    marginLeft: 10,
    border: "1px solid rgba(0,0,0,.05)",
    "@media(min-width:576px)": {
      marginTop: -20,
    },
  },
});

export default HomeBlog;
