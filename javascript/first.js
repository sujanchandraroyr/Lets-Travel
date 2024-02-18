const allBtn = document.getElementsByClassName('btn-primary');
let count = 0 ;
for(const btn of allBtn){
    btn.addEventListener('click', function(event) {
        count = count + 1;

    const placeName = event.target.parentNode.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
// ---------
   const budget = document.getElementById('budget').innerText;
   const convertedBudget = parseInt(budget);

   if(convertedBudget - parseInt(price) < 0){
    alert('Please Earn more');
    return;
   }
   document.getElementById('budget').innerText = convertedBudget - parseInt(price);
   

   event.target.parentNode.parentNode.style.backgroundColor = 'gray';
   event.target.setAttribute("disabled", "true");
   //    --------------
    const selectedContainer = document.getElementById('selected-place-container');
        
        const li = document.createElement('li');
        

         const p1 = document.createElement('p');
         const p2 = document.createElement('p');

         p1.innerText = placeName;
         p2.innerText = price;

         li.appendChild(p1);
         li.appendChild(p2);

         selectedContainer.appendChild(li);

       
        totalCost('total-cost', price);
        grandTotal();
        
    setInnerText('cart-count', count);
    
});
};

function totalCost(Id, value) {
    const totalcost = document.getElementById(Id).innerText;
    const convertedTotalCost = parseInt(totalcost);

    const sum = convertedTotalCost + parseInt(value);

    setInnerText(Id, sum);
};

function grandTotal(category) {
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);

    if(category === 'bus'){
        setInnerText('grand-total', convertedTotalCost + 100);
    }
    else if(category === 'train'){
        setInnerText('grand-total', convertedTotalCost - 200);
    }
    else if(category === 'flight'){
        setInnerText('grand-total', convertedTotalCost + 500);
    }
    else{
        setInnerText('grand-total', convertedTotalCost);
    }
}


function setInnerText(id, value) {
    
    const idText = document.getElementById(id);
    idText.innerText = value;
}


// function handaleClick() {
    
//     console.log('Add to Card');
// }