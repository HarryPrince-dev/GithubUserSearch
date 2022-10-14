import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import useRepoSearch from "../useRepoSearch";
import "./SearchPage.css";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logo from "../images/GoogleLogo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  let { data } = useGoogleSearch(term);
  let repos  = useRepoSearch(data);
  
  return (
    <div className="search-page">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchPage-logo"
            src={Logo}
            alt=""
          />
        </Link>

        <div className="searchPage-headerBody">
          <Search hideButtons />

          <div className="searchPage-options">
            <div className="searchPage-optionsLeft">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage-option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage-option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage-option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage-option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage-optionsRight">
              <div className="searchPage-option">
                <Link to="/settings"> Settings</Link>
              </div>
              <div className="searchPage-option">
                <Link to="/tools"> Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="result-Container">
          <DisplayRepos repos={repos} />
          <DisplayUserData data={data} />
        </div>
      </div>
  );
}

function DisplayUserData(data) {
  data = data.data;
  if (data !== null && data !== "Not Found" && data.message !== "Not Found")
  {
    return (
          <div className="searchPage-results">
              <div className="userInfo">
                  <h2 className="UserTitle">{data.login}</h2>
                    <p className="userDetails"><strong>Name: </strong> {data.name}</p>
                    <p className="userDetails"><strong>Email: </strong> {data.email}</p>
                    <p className="userDetails"><strong>ID: </strong> {data.id}</p>
                    <p className="userDetails"><strong>Profile: </strong><a href={data.url}>{data.url}</a></p>
                    <p className="userDetails"><strong>Repos: </strong> <a href={data.repos_url}>{data.repos_url}</a></p>
                    <p className="userDetails"><strong>Bio: </strong> {data.bio}</p>
                    <p className="userDetails"><strong>Created: </strong> {data.created_at}</p>
              </div>
          </div>); }
  else {
    return (
        <div className="searchPage-results">
          <p className="searchPage-resultCount">
           No User Found   
          </p>
        </div>
    );
  }
}

function DisplayRepos(repos) {
  if(repos.repos.repodata!== null && repos.repos.repodata!== "Not Found")
  {
    return(
      <div className="searchPage-results">
        <p className="searchPage-resultCount">Found Some Results</p>
          <div>
                {repos.repos.repodata.map(repo =>
                  <ul key={repo.id}>
                  <div className="searchPage-result">
                    <h5>{repo.html_url}</h5>
                    <a className="searchPage-resultTitle" href={repo.html_url}>
                      <h2>{repo.name}</h2>
                      <h6>Repo ID: {repo.id}</h6>
                      <p className="searchPage-resultSnippet">{repo.description}</p>
                    </a>
                  </div> 
                  </ul>)}
          </div>
      </div>
    );
  }
  else {
    return (
        <div className="searchPage-results">
          <p className="searchPage-resultCount">
           No Repos Found   
          </p>
        </div>
    );
  }
}



export default SearchPage;
