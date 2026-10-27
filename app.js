import express from "express";
const app= express();
app.use(express.json());
//Products (JSON)
let products=[
    {
        "id":1,
        "Brands":"Asus",
        "name":"Asus TUF Gaming A16",
        "Price":"NPR 1,34,000"
    },
    {
        "id":2,
        "Brands":"Asus",
        "name":"Asus TUF Gaming F16",
        "Price":"NPR 2,12,199"
    },
    {
        "id":3,
        "Brands":"Lenovo",
        "name":"Lenovo Legion 5",
        "Price":"NPR 2,46,599"
    },
    {
        "id":4,
        "Brands":"Lenovo",
        "name":"Lenovo LOQ 15",
        "Price":"NPR 1,59,999"
    },
    {
        "id":5,
        "Brands":"Acer",
        "name":"Acer Nitro Lite 16",
        "Price":"NPR 1,79,999"
    },
    {
        "id":6,
        "Brands":"HP",
        "name":"HP Victus 15",
        "Price":"NPR 1,49,999"
    },
    {
        "id":7,
        "Brands":"Apple",
        "name":"Macbook Air M4",
        "Price":"NPR 1,93,999"
    },
    {
        "id":8,
        "Brands":"Apple",
        "name":"Macbook pro M4 pro",
        "Price":"NPR 3,34,999"
    }
]
//Retriving/Geting products data
app.get("/api/products",(req,res)=>{
 res.send({
    "Message":"Sucessfully retrived all products data",
    "Product":products
 })
});

//Retriving by Id
app.get("/api/products/:id",(req,res)=>{
    const id = req.params.id;
    const productId=products.find((productId)=>{
        return productId.id==id;
    });
    if(!products){
        res.send({
            "Message":"Product not found"
        })}
    else(products)
    res.send(
        {
            "Message":"Your Searched Product",
            "Product":productId
        }
    ) 
});

//Adding New Product
app.post("/api/products",(req,res)=>{
    const {brand,name,price}=req.body;
    const newProduct=
        {
            id:products.length+1,
            Brands:brand,
            name:name,
            price:price
        }
         products.push(newProduct);
    res.send({
        "Message": "Product added Sucessfully",
        "Product": newProduct
    });
});

//Updating the Product
app.put("/api/products/update/:id",(req,res)=>{
    const id = req.params.id;
    const product=products.find((product)=>{
        return product.id==id;
    });

    console.log(product);

    if(!product){
        res.send({
            "Message":"Product not found"
        })
    }

    const {newBrands,newName,newPrice} = req.body;
        product.Brands=newBrands;
        product.name=newName;
        product.Price=newPrice;
  
    res.send({
        "Message": "Product updated Sucessfully",
        "Product": product
    });
  
});

//Deleting the Product
app.delete("/api/products/delete/:id", (req, res) => {
    const id = req.params.id;

    const productIndex = products.findIndex((productIndex) => {
        return productIndex.id == id
    });
    products.splice(productIndex,1)
    res.send(
            {
                "Message": "Product deleted Succesfully!"
            }
        )
});

//Creating the server 
app.listen(4000,()=>{
    console.log("Server is running on port 4000")
});
