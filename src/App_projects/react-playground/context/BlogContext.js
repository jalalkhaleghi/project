import React from "react";
import { axios } from "../assets/state";
export const BlogContext = React.createContext();

const BlogContextProvider = props => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [pname, setPname] = React.useState("");
  const [cid, setCid] = React.useState("");
  const [kid, setKid] = React.useState("");
  const [totalPage, setTotalPage] = React.useState(0);
  const [fetch, setFetch] = React.useState(false);
  React.useEffect(() => {
    // const query = queryString.parse(props.location.search);
    // console.log(query);
    // if (props.location.search && query.kid && query.kid !== kid) {
    //   setKid(query.kid);
    //   setCid("");
    //   setPname("");
    //   setPage(1);
    //   setPosts([]);
    //   setTotalPage(0);
    //   loadPosts();
    // }
    // setCid(props.match.params.id ? props.match.params.id : "");
    // setPosts([]);
    // setPage(1);
    // setTotalPage(0);
    loadPosts();
    // window.addEventListener("scroll", handleScroll);
  }, []);
  // const isBottom = el => {
  //   return el.getBoundingClientRect().bottom <= window.innerHeight - 30;
  // };
  // const handleScroll = () => {
  //   const wrappedElement = document.getElementById("postsArticle");
  //   if (isBottom(wrappedElement) && !fetch && page < totalPage) {
  //     setFetch(true);
  //   }
  // };

  const selectPost = id => {
    setCid(id);
    setPage(1);
    setPosts([]);
    loadPosts();
  };
  const loadPosts = () => {
    setLoading(true);
    axios.post(`api/v3/cms/posts?page=${page}&per_page=3` + cid).then(res => {
      // console.log(res);
      //   let postsArray = [new Set(...posts, res.data.info.posts)];
      setPosts([...posts, ...res.data.info.posts]);
      setLoading(false);
      setPosts(res.data.info.posts);
      // setPage(page + 1);
      // setTotalPage(Math.ceil(res.data.info.totalPage / 3));
    });
  };
  return (
    <BlogContext.Provider value={{ posts, setPosts, loading, selectPost }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
