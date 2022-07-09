


const shoping = {
    shoes:["Chuck Taylor","Old skool","Climbing shoes","Ice-skates","High-tops", "CICAK"],
    clothes : ["T-shirt.","sw eater","jacket","je ans","socks"],
    glasses : ["Vincent Chase","Ray Ban","Oxydo Eyeglasses","Boss Orange"],

    shoesPrices : ["20","25","35","50","60","45"],
    clothesPrices : ["30","64","63","61","78","52"],
    glassesPrices : ["20","25","35","50","60","45"],
    

    productprices:function(list,price){
   
        list.forEach(function(item,index){
            
            console.log(`${item.toLowerCase()} ${price[index]} $ `)
        })

    },

    start(product){

     if(product === "shoes"){

        shoping.productprices(shoping.shoes,shoping.shoesPrices)

     }else if(product === "clothes"){

        shoping.productprices(shoping.clothes,shoping.clothesPrices)

     }else if(product === "glasses" ){

      shoping.productprices(shoping.glasses,shoping.glassesPrices)

     }else{console.log("wrong answer")}

    }

};
const {start} = shoping
start("clothes")

 