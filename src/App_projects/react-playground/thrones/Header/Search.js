import React from "react";
import { Button, Icon, Style, classOf, axios } from "../../assets/state";
import { Link } from "react-router-dom";

const style = {
  inputBroupBtn: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 9,
    color: "#666"
  },
  btn: {
    height: "100%"
  },
  searchMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 10
  },
  searchItem: {
    padding: "6px 10px"
  }
};

const { classes } = Style(style);

const Search = props => {
  const [suggestion, setSuggestion] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const myRef = React.useRef();
  const handleClickOutside = e => {
    if (myRef.current && !myRef.current.contains(e.target)) {
      setSuggestion([]);
    }
  };
  React.useEffect(() => {
    // const elm = document.querySelector(classes.formSearch)[0].parentNode
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handlePress = e => {
    if (e.keycode === 13 || e.which === 13) {
      submitSearch();
    }
  };
  const handleSearch = e => {
    setSearchValue(e.target.value);
    if (e.target.value.length > 1) {
      let query = e.target.value;
      axios
        .post("/api/v3/products_suggest", {
          pname: query
        })
        .then(result => {
          console.log(result);
          setSuggestion(result.data.info.suggestion);
        })
        .catch(err => {
          setSuggestion([]);
        });
    } else {
      setSuggestion([]);
    }
  };
  const submitSearch = e => {
    if (searchValue) {
      setSearchValue("");
      setSuggestion([]);
      props.history.push({
        pathname: "/category",
        state: { pname: searchValue }
      });
    }
  };
  const onSetClick = e => {
    setSearchValue(e.pname);
    setSuggestion([]);
  };
  const search = (
    <div className={classes.searchMenu} ref={myRef}>
      {suggestion.map((item, index) => {
        let type = item.type;
        if (type === "product") {
          type = "محصولات";
        } else if (type === "category") {
          type = "دسته بندی";
        }
        const code = item.type === "category" ? "" : item.code;
        return (
          <div
            key={index}
            className={classes.searchItem}
            onClick={() => onSetClick(item)}
          >
            <Link
              to={{
                pathname: "/category/" + code,
                state: {
                  pname: item.type === "category" ? "" : item.code,
                  type: item.type
                }
              }}
            >
              {item.pname}
            </Link>
          </div>
        );
      })}
    </div>
  );
  // console.log(searchValue);
  return (
    <div className={[classOf.inputGroup, classes.formSearch].join()}>
      <div className={classes.inputBroupBtn}>
        <Button className={classes.btn} clicked={submitSearch}>
          <Icon icon="search" size={20} />
        </Button>
      </div>
      <input
        className={classOf.formControl}
        type="text"
        placeholder="جستجو"
        onChange={handleSearch}
        onKeyPress={handlePress}
        value={searchValue}
      />
      {search}
    </div>
  );
};

export default Search;
