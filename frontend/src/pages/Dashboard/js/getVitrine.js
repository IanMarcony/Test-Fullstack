// const axios = require("axios")
function createItemView(product,index, isMostPopular){
  // console.log("Product: ",product)
  const li = document.createElement('li')
  li.setAttribute('id','item')
  // console.log("Criado e settado id=item")
  //Create div class image-area
  const divImageArea = document.createElement('div')
  divImageArea.setAttribute("class","image-area")

  const imageFromImageArea= document.createElement('img')

  

  imageFromImageArea.setAttribute("src",
  `https:${product.images.default.includes(".jpg")?product.images.default:
  product.images.imagem1.includes(".jpg")?product.images.imagem1:
  product.images.imagem2.includes(".jpg")?product.images.imagem2:
  product.images.imagem3.includes(".jpg")?product.images.imagem3
  :product.images.imagem4.includes(".jpg")?product.images.imagem4:
  product.images.imagem5.includes(".jpg")?product.images.imagem5:"" }`)
  // console.log("Criado imagem com src")
  imageFromImageArea.setAttribute("alt",`${product.name}`)
  // console.log("Settado  imagem com alt")


  const spanFromImageArea=  document.createElement("span")
  // console.log("Preço: ",parseFloat(product.price).toFixed(2))
  
  if(isMostPopular){
    spanFromImageArea.setAttribute("class","number-tag")
    

    spanFromImageArea.textContent=`${index+1}°`
    divImageArea.appendChild(imageFromImageArea)
    divImageArea.appendChild(spanFromImageArea)
    // console.log("isMostPopular: ",divImageArea)
  }else{
    spanFromImageArea.setAttribute("id","number-percent-product")

    const percent = (parseFloat(product.price)/parseFloat(product.oldPrice))*100

    spanFromImageArea.textContent=`-${percent.toFixed(0)}%`

    divImageArea.appendChild(spanFromImageArea)
    divImageArea.appendChild(imageFromImageArea)
  }

  // console.log("Created DIVImageArea: ",divImageArea)


  //Create H1 text-header

  const h1TextHeader = document.createElement("h1")

  h1TextHeader.setAttribute("class","text-header")

  const textH1TextHeader=document.createTextNode(`${product.name}`)


  h1TextHeader.appendChild(textH1TextHeader)

  // console.log("Created H1TextHeader: ",h1TextHeader)


  //Create H2 Oldprice
  const h2OldPrice =  document.createElement("h2")

  // if(product.oldPrice!=product.price){
  h2OldPrice.setAttribute("class","oldprice")

  const sFromH2OldPrice = document.createElement("s")

  

  // const oldPriceText = document.createTextNode()

  sFromH2OldPrice.textContent=`R$${parseFloat(product.oldPrice).toFixed(2).toLocaleString('pt-br').replace('.',',')}`

  // sFromH2OldPrice.appendChild(oldPriceText)

  h2OldPrice.appendChild(sFromH2OldPrice)

  // console.log("Created H2OldPrice: ",h2OldPrice)

  // }

  //Create DIV price-area


  const divPriceArea = document.createElement('div')
  divPriceArea.setAttribute("class",'price-area')
  //First Span
  const spanPrice = document.createElement("span")

  spanPrice.setAttribute("class","price")

  const h1FromPrice = document.createElement("h1")
  
  h1FromPrice.textContent=`R$${parseFloat(product.price).toFixed(2).toLocaleString('pt-br').replace('.',',')}`

  

  spanPrice.textContent="Por "
  spanPrice.appendChild(h1FromPrice)

  //Second Span

  const spanParce = document.createElement("span")
  spanPrice.setAttribute("class","parce")

  const countParce = product.installment.count
  const priceParce = product.installment.price

  spanParce.textContent=`${countParce}x  ${priceParce.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

  spanParce.setAttribute("class","parce")

  divPriceArea.appendChild(spanPrice)
  divPriceArea.appendChild(spanParce)


  li.appendChild(divImageArea)
  li.appendChild(h1TextHeader)
  li.appendChild(h2OldPrice)
  li.appendChild(divPriceArea)


  if(isMostPopular){
    document.querySelector("#first-showcase  #items").appendChild(li)
  }else{
    document.querySelector("#second-showcase  #items").appendChild(li)

  }

}

const api = axios.create({
  baseURL:'http://localhost:5000'
})

const  getVitrineApi=()=>{
  api.get("/products?maxProducts=20").then(response=>{
    const result = response.data

    const {mostPopularProducts,priceReductionProducts}= result

    mostPopularProducts.map((product,index)=>{
      createItemView(product,index,true)
    })

    priceReductionProducts.map((product,index)=>{
      createItemView(product,index,false)
    })
    

  }).catch(err=>{
      console.error(err.message)
  })
}

getVitrineApi()

