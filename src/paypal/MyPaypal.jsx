import { Container, Paper } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const MyPaypal = () => {
    const {cart,total}=useSelector(state=>state.article)
    const paypal=useRef()

    useEffect(()=>{
     
     window.paypal.Buttons({
        createOrder:(data,actions,err)=>{
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units:[{
                    amount:{
                        value: `${total}`
                    }
                }]
            })
        },
        onApprove:async(data,actions)=>{
            const order= await actions.order.capture()
           if(order){
               console.log(cart);
               console.log(order);
           }
        },
        onError:(err)=>{
            console.log(err);
        }
     }).render(paypal.current)
    },[cart,total])
    return (
        <Container style={{padding: 20}}>
            <Paper elevation={0} ref={paypal} style={{width:300,padding: 20,margin:'auto' , display: 'block',
            }}> </Paper>
        </Container>
    )
}

export default MyPaypal
