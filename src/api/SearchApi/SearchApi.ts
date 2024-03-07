const url = 'https://dummyjson.com/users/search?q=';

const SearchApi = async (props: string) => {
  try {
    const response = await fetch(url + props)
    if (response.ok) {
      const res = await response.json()
      return res
    } 
    else {
      throw new Error('error')
    }
  } 
  catch (error) {
    return 'error'
  }
}

export { SearchApi }