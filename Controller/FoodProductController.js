const { Food ,Incrediant} = require('../Schema/FoodProductSchema');  

const createfood = async (req, res) => {  
    const {name,price,description,cuisine,category}=req.body
    try {  
        const foodItem = new Food({  
            name,  
            image: {  
                data: req.file.buffer,          
                contentType: req.file.mimetype 
            },  
            price ,
            description,
            cuisine,category
        });  
        
        await foodItem.save(); 
        res.status(201).json({ message: 'Food item created successfully', foodItem });  
    } catch (error) {  
        res.status(400).json({ error: error.message });  
    }  
};  

const createfoodincrediant =async(req,res)=>{
    const {id}=req.params

    const { incrediantname,incrediantquantity} =req.body
    try{
       const foodItem = await Food.findById(id)
       if(!foodItem)
       {
        return res.status(404).send("No Food Product Avaliable")
       }

       const incre = Incrediant({incrediantname,incrediantquantity})
       await incre.save()
        foodItem.Incrediantdata.push(incre)
        await foodItem.save()

       res.status(201).send(foodItem)
    }
    catch (error) {  
        res.status(400).json({ error: error.message });  
    } 
}

const getfood =async(req,res)=>{
    try{
        const getdata = await Food.find()
        if(!getdata){
            return res.status(404).send("No Data Found")
        }
   return res.status(200).send(getdata)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
}

module.exports = { createfood ,createfoodincrediant,getfood };