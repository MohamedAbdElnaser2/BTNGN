var productName = document.getElementById("productName")
var productPrice = document.getElementById("productprice")
var productCat = document.getElementById("productcat")
var productDes = document.getElementById("productdes")
var savebut=document.getElementById("savebut")
var serbtn=document.getElementById("serbtn")
var productList
var counter
if(localStorage.getItem("productList")==null){
    productList = []
}
else{
    productList=JSON.parse(localStorage.getItem("productList"))
}
 display(productList)
 
function Updatelocalstor(){
    localStorage.setItem("productList",JSON.stringify(productList))
}
function Add(){
    if(validateName( ) && validateprice()&& validatecat() && validatedes()){
        var product ={name:productName.value,
            price:productPrice.value,
            cat:productCat.value,
            des:productDes.value
         };
         
         productList.push(product)
         Updatelocalstor()
         
         display(productList);
        
         clear()
         savebut.classList.add("d-none")
    }
    else{
        validateName()
        validateprice()
        validatecat()
        validatedes()
    }
 
}
function display(data){
    var cartona=``
    for(i=0;i<data.length;i++)
   cartona +=`<tr>
    <td>${i+1}</td>
    <td>${data[i].newName ? data[i].newName:data[i].name}</td>
    <td>${data[i].price}</td>
    <td>${data[i].newCat ? data[i].newCat:data[i].cat}</td>
    <td>${data[i].des}</td>
    <td><button class="btn btn-warning" onclick="Update(${i})">Update</button></td>
    <td><button class="btn btn-danger" onclick="DeletItem(${i})">Delet</button></td>
</tr>`
document.getElementById("tbody").innerHTML=cartona;
}
function DeletItem(index){
    
    productList.splice(index,1)
    Updatelocalstor()
    display(productList)
}
function clear(){
    productName.value=``
    productPrice.value=``
    productCat.value=``
    productDes.value=``
}
function Update(index){
    productName.value=productList[index].name
    productPrice.value=productList[index].price
    productCat.value=productList[index].cat
    productDes.value=productList[index].des
    savebut.classList.remove("d-none")
    counter=index

}
function saveUpdate(){
    productList[counter].name= productName.value
    productList[counter].price=productPrice.value
    productList[counter].cat=productCat.value
    productList[counter].des= productDes.value
    Updatelocalstor()
    display(productList)
    savebut.classList.add("d-none")
}


function serByName(data){
    var prodctser=serbtn.value
    var newproductarry = []
 
    for(var i=0;i<productList.length;i++){
       
        if(productList[i].name.toLowerCase().includes(prodctser.toLowerCase())){
            productList[i].newName=productList[i].name.toLowerCase().replaceAll(prodctser.toLowerCase(),`<span class="text-danger">${prodctser.toLowerCase()}</span>`)
        
            newproductarry.push(productList[i])
            console.log(productList[i]);
           
        }
       
    }
    display(newproductarry);
}
function serByCat(data){
    var prodctserCat=serbtn.value
    
    var newproduct = []
 
    for(var i=0;i<productList.length;i++){
       
        if(productList[i].cat.toLowerCase().includes(prodctserCat.toLowerCase())){
            productList[i].newCat=productList[i].cat.toLowerCase().replaceAll(prodctserCat.toLowerCase(),`<span class="text-danger">${prodctserCat.toLowerCase()}</span>`)
            newproduct.push(productList[i])
            console.log(productList[i]);
           
        }
       
    }
    display(newproduct);
}

 function validateName(){
    var regex =/^[A-Z]{4}/

    if(regex.test(productName.value)){
        return true;
        
    }
    else
    {
        productName.style.border="solid 10px red"
        document.getElementById("invalidName").classList.remove("d-none")
        return false;
    }
 }

 function validateprice(){
    var regex =/^[0-9]/

    if(regex.test(productPrice.value)){
        return true;
        
    }
    else
    {
        productPrice.style.border="solid 10px red"
        document.getElementById("invalidprice").classList.remove("d-none")
        return false;
    }
 }
 function validatecat(){
    var regex =/^(a|b)$/

    if(regex.test(productCat.value)){
        return true;
        
    }
    else
    {
        productCat.style.border="solid 10px red"
        document.getElementById("invalidcat").classList.remove("d-none")
        return false;
    }
 }
 
 function validatedes(){
    var regex =/[a-zA-Z]{4,200}/

    if(regex.test(productDes.value)){
        return true;
        
    }
    else
    {
        productDes.style.border="solid 10px red"
        document.getElementById("invaliddes").classList.remove("d-none")
        return false;
    }
 }




