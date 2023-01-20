export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9a17b90111msh1fcdede8cadad5fp11a4d1jsnc7a8b8893988',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9a17b90111msh1fcdede8cadad5fp11a4d1jsnc7a8b8893988',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async(url, options) =>{
      const response = await fetch(url,options)
      const data = await response.json()
      return data;
  }