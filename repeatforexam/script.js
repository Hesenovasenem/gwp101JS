let BASE_URL='http://localhost:8080'


async function latestNews(){
    const res=await axios.get(BASE_URL)
    const data =res.data
    cards.innerHTML=''
}


























