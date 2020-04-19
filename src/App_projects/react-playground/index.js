import React from "react";

//containers --------
const Blog = React.lazy(() => import("./containers/Blog"));
const Home = React.lazy(() => import("./containers/Home"));
const Category = React.lazy(() => import("./containers/Category"));
const Details = React.lazy(() => import("./containers/Details"));

//components --------
// const SelectProd = React.lazy(() => import("./components/Select/SelectProd"));
const HomeBlog = React.lazy(() => import("./components/BlogPage/HomeBlog"));
const VerifyRegister = React.lazy(() => import("./containers/VerifyRegister"));

const Test = React.lazy(() => import("./containers/Test"));

export { HomeBlog, Blog, Home, VerifyRegister, Category, Details, Test };
