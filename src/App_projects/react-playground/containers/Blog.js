import React from "react";
import { Col, Grid, Row, axios } from "../assets/state";
import SidebarBlog from "../components/BlogPage/SidebarBlog";
import { useParams } from "react-router-dom";

export const BlogContext = React.createContext();

const Blog = (props) => {
  const param = useParams();
  const [posts, setPosts] = React.useState([]);
  const [cid, setCid] = React.useState(param.id);
  const [page, setPage] = React.useState(1);
  const [pname, setPname] = React.useState("");
  React.useEffect(() => {
    load();
    if (props.match.params.id && props.match.params.id !== cid) {
      setCid(props.match.params.id);
      load();
    }
  }, []);
  const load = () => {
    axios
      .post(`api/v3/cms/posts?page=${page}&cid=`, {
        cid: pname ? "" : cid,
      })
      .then((res) => {
        console.log(res);
        setPosts(res.data.info.posts);
        setPage(page + 1);
      });
  };
  const selectNav = (id) => {
    setPosts([]);
    setCid(id);
    // setPage(1);
    load();
  };
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={2}>
            <SidebarBlog {...props} selectNav={(id) => selectNav(id)} />
          </Col>
          <Col md={7}>
            <BlogContext.Provider value={{ posts }}>
              {props.children}
            </BlogContext.Provider>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Grid>
    </section>
  );
};

export default Blog;
