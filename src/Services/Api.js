import PropTypes from 'prop-types';
const BASE_URL= 'https://pixabay.com/api/';
const KEY = '27848498-36175e3910a91ccb36527cf64';

function Api({ queryString, currentPage }) {
  return fetch(`${BASE_URL}?q=${queryString}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json());
      }

  Api.propTypes = {
    searchQuery: PropTypes.string.isRequired,    
    currentPage: PropTypes.number.isRequired,    
  };

export default Api;
  