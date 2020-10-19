class Adapter{
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  getAll(){
    return fetch(this.baseUrl)
    .then(response => response.json())
  }

  update(id, body){
    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(body)
    }

    return fetch(this.baseUrl + id, options)
    .then(response => response.json())
  }

  delete(id){
    const options = {
      method: "DELETE"
    }
    
    return fetch(this.baseUrl + id, options)
  }
}