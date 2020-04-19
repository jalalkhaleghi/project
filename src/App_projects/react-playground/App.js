import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Part, Reset, Spinner, Style } from "./assets/state";
import BookContextProvider from "./context/BookContext";
import CartContextProvider from "./context/CartContextProvider";
import { Footer, Header } from "./thrones";

Style(Reset);

const loading = () => <Spinner />;

const App = (props) => {
  const [redirect, setRedirect] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const openFilter = () => {
    setShow(!show);
  };
  const BlogRoute = ({
    component: Component,
    layout: Layout,
    postPage,
    setPostPage,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
  const route = (
    <Switch>
      <BlogRoute path="/blog" layout={Part.Blog} component={Part.HomeBlog} />
      <BlogRoute
        path="/blog/:id"
        layout={Part.Blog}
        component={Part.HomeBlog}
      />
      <Route
        path="/login"
        exact
        render={(props) => <Part.VerifyRegister {...props} />}
      />
      {/* <Route path="/test" render={(props) => <Part.SelectProd {...props} />} /> */}
      <Route
        path="/category"
        render={(props) => <Part.Category {...props} />}
      />
      <Route
        path="/category/:id"
        render={(props) => <Part.Category {...props} />}
      />
      <Route path="/details" render={(props) => <Part.Details {...props} />} />
      <Route path="/test" render={(props) => <Part.Test {...props} />} />

      <Route
        path="/"
        exact
        render={(props) => (
          <Part.Home {...props} show={show} openFilter={openFilter} />
        )}
      />
    </Switch>
  );
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <CartContextProvider>
          <BookContextProvider>
            <Header {...props} openNavbar={openFilter} />
            {route}
            <Footer />
            <ToastContainer />
          </BookContextProvider>
        </CartContextProvider>
      </React.Suspense>
    </Router>
  );
};

export default App;
