import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]); //used for storing api search response

  //it will run whenevr we re-render our component and when term value has chnaged and also when it is first rendered
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    //shows results on initial render without 1sec delay
    if (term && !results.length) {
      search();
    } else {
      //settimeout is used so that we can give a delay of 1 sec so that the user types and searching is done after that
      const timeOutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        //clear the 1sec time interval
        clearTimeout(timeOutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <button className="ui right floated button">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </button>

        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      {/* <form onSubmit={this.onFormSubmit}> */}
      <form>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              placeholder="Search here..."
              type="text"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
            <i className="search icon"></i>
          </div>
          {/* <div class="results"></div> */}
        </div>
      </form>

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default SearchBar;
