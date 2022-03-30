'use strict ';

document.querySelector('.btn-estimate').addEventListener('click', function ()
 {

	const amount = document.querySelector("#principalAmount").value;

	const rate = document.querySelector("#interestRate").value;

	const months = document.querySelector("#tenure").value;
	
	const r=(rate*0.01)/12;
	// Calculating for reducing interest rate 
	const emiRInterest  = (amount*r*(((1+r)**months)/((1+r)**(months)-1))).toFixed(2);

	const paymentRInterest =(emiRInterest*months).toFixed(2);

	const interestRInterest =(paymentRInterest-amount).toFixed(2);

	
// Calculating for fixed interest loan

const interestFInterest  = ((amount*r)*months).toFixed(2);

const paymentFInterest = (Number (interestFInterest) + Number(amount) ).toFixed(2);

const emiFInterest =(paymentFInterest/(months)).toFixed(2);


document.querySelector("#tInterest")
		.innerHTML = interestRInterest;

		document.querySelector("#tInterestFixed")
		.innerHTML = interestFInterest;	
    
		document.querySelector("#tPayment")
		.innerHTML = paymentRInterest;	

		document.querySelector("#tPaymentFixed")
		.innerHTML = paymentFInterest;

		document.querySelector("#EMI")
		.innerHTML = emiRInterest;

		document.querySelector("#EMIFixed")
		.innerHTML = emiFInterest;
	
})
