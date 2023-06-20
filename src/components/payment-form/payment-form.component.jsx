import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import ButtonCustom from "../ButtonCustom/button-custom.component";
import './payment-form.styles.scss';
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const { cartTotal, setCartItems } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);


    const paymentHandler = async(e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: cartTotal * 100})
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;
        
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest', 
                }  
            }
        });

        setIsProcessingPayment(false);

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {                
                navigate('/');
                setCartItems([]);
                alert(`Your completely fake payment has ${paymentResult.paymentIntent.status} for $${paymentResult.paymentIntent.amount / 100} ${paymentResult.paymentIntent.currency.toUpperCase()}. Your Stripe reciept number is ${paymentResult.paymentIntent.id}. Thank you!`);
            }
        }
    }

    return (
        <div>
            <form onSubmit={paymentHandler}>
                <div className="stripe-card-container">
                    <h2>Credit Card Payment:</h2>
                    <p>Since this is a demo, please use Credit Card #4242 4242 4242 4242. Expiration can be any future date and you can use whatever numbers you want for the zip :)</p>
                    <div className="stripe-card-wrapper">
                        <CardElement/>
                    </div>
                    <ButtonCustom disabled={isProcessingPayment} type="submit" className='btn-primary'>Pay now</ButtonCustom>
                </div>
            </form>
        </div>
    );
}

export default PaymentForm;