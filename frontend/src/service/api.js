const axios = require("axios")


const api = axios.create({
  baseURL:'http://localhost:5000'
})

module.exports=api