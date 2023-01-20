export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9575e95907mshb7672b86f37e5f0p14363ajsn6d90503d7d83',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9575e95907mshb7672b86f37e5f0p14363ajsn6d90503d7d83',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async(url, options) =>{
      const response = await fetch(url,options)
      const data = await response.json()
      return data;
  }