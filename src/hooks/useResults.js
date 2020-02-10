import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Qualcosa è andato storto');
    }
  };

  // Call searchApi quanto il componente è renderizzato la prima volta
  // Codice cattivo => searchApi('pasta'); crea un loop infinito

  useEffect(()=>{
    searchApi('pasta');
  }, [])

  return [searchApi, results, errorMessage ];
};
