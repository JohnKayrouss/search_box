import React from "react";
import Unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchBarSubmit = async (recievingTermFromSearchBar) => {
    const response = await Unsplash.get(`/search/photos`, {
      params: { query: recievingTermFromSearchBar },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar runMeWhenUserSubmit={this.onSearchBarSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;

// axios before modifing
// onSearchBarSubmit = async (recievingTermFromSearchBar) => {
//   const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//     params: { query: recievingTermFromSearchBar },
//     headers: {
//       Authorization: "Client-ID W4EuW0Esv0YEx-IUpSunsbsXlN2b7XaGbE9xfwhEAug",
//     },
//   });
