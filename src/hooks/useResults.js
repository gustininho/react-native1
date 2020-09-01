import { useState, useEffect } from 'react';
import yelp from '../API/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error,setError]= useState('');

  const searchApi = async searchTerm => {
    console.log('labas');
    try {
    const response = await yelp.get('/search', {
      params: {
        limit : 50,
        term: term,
        location: 'san jose'
              }
    });
    setResults(response.data.businesses);
  } catch(err) {
    setError('Something went wrong');
  }
};

  useEffect(() => {
    searchApi('pasta');
  },[]);

  return [searchApi, results, error];
};
