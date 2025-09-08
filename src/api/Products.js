

export async function getProducts(){
   const res = await fetch('https://fakestoreapiserver.reactbd.org/api/walmartproducts?page=1&perPage=50')
   return res.json()
};

export async function getPRoductById(id){
    const res = await fetch(`https://fakestoreapiserver.reactbd.org/api/walmartproducts/${id}`)
    return res.json()
}






