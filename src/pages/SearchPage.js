import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
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
  const { data } = useGoogleSearch(term);

  console.log(data);
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
        <div className="searchPage-results">
          <p className="searchPage-resultCount">
            Found About 1 result  Real Quick 4 {term}
          </p>
            <div className="searchPage-result">
              <a className="searchPage-resultTitle" href={data.link}>
                <p><strong>Username:</strong> {data.login}</p>
                <p><strong>ID:</strong> {data.id}</p>
                <p><strong>Node ID:</strong> {data.node_id}</p>
                <p><strong>Avatar URL:</strong> {data.avatar_url}</p>
                <p><strong>Gravatar_URL:</strong> {data.gravatar_url}</p>
                <p><strong>URL:</strong> {data.url}</p>
                <p><strong>HTML URL:</strong> {data.html_url}</p>
                <p><strong>Followers URL:</strong> {data.followers_url}</p>
                <p><strong>Following URL:</strong> {data.following_url}</p>
                <p><strong>Gists URL:</strong> {data.gists_url}</p>
                <p><strong>Starred URL:</strong> {data.starred_url}</p>
                <p><strong>Subscriptions URL:</strong> {data.subscriptions_url}</p>
                <p><strong>Orginizations URL:</strong> {data.orginizations_url}</p>
                <p><strong>Repos URL:</strong> {data.repos_url}</p>
                <p><strong>Events URL:</strong> {data.events_url}</p>
                <p><strong>Recieved Events URL:</strong> {data.recieved_events_url}</p>
                <p><strong>Type:</strong> {data.type}</p>
                <p><strong>Site Admin:</strong> {data.site_admin}</p>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Company:</strong> {data.company}</p>
                <p><strong>Blog:</strong> {data.blog}</p>
                <p><strong>Location:</strong> {data.location}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Hireable:</strong> {data.hireable}</p>
                <p><strong>Bio:</strong> {data.bio}</p>
                <p><strong>Twitter Username:</strong> {data.twitter_username}</p>
                <p><strong>Public Repos:</strong> {data.pubolic_repos}</p>
                <p><strong>Public Gists:</strong> {data.public_gists}</p>
                <p><strong>Followers:</strong> {data.followers}</p>
                <p><strong>Following:</strong> {data.following}</p>
                <p><strong>Created:</strong> {data.created_at}</p>
                <p><strong>Updated:</strong> {data.updated_at}</p>
              </a>
            </div>
        </div>
       </div>
  );
}

export default SearchPage;
