export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da91cbf223mshd0488a96029e412p1e4710jsn41bad206fc47',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da91cbf223mshd0488a96029e412p1e4710jsn41bad206fc47',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async(url, options) =>{
      const response = await fetch(url,options)
      const data = await response.json()
      return data;
  }