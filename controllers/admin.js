const prisma = require("../config/prisma")

exports.changOrderStatus = async(req,res) =>{
    try{
        const { orderId, orderStatus} = req.body
        const orderUpdate = await prisma.order.update({
            where:{
                id: orderId
            },
            data:{
                orderStatus: orderStatus
            }
        })
        res.json(orderUpdate)
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server Error'})
    }
}

exports.getOrderStatus = async(req,res) =>{
    try{
        const orders = await prisma.order.findMany({
            include:{
                products:{
                    include: {
                        product:true
                    }
                },
                orderedBy:{
                    select:{
                        id:true,
                        email:true,
                        address:true
                    }
                }
            }
        })
        res.status(200).json(orders)
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server Error'})
    }
}