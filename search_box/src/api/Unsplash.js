import axios from "axios";

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: "Client-ID W4EuW0Esv0YEx-IUpSunsbsXlN2b7XaGbE9xfwhEAug",
  },
});

// axios before modifing
// onSearchBarSubmit = async (recievingTermFromSearchBar) => {
//   const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//     params: { query: recievingTermFromSearchBar },
//     headers: {
//       Authorization: "Client-ID W4EuW0Esv0YEx-IUpSunsbsXlN2b7XaGbE9xfwhEAug",
//     },
//   });
