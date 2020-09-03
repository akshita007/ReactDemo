export function calculateTotal(amount,months){
    //calculate on the basis ofamount 
    //<1000-25%
    //1001-5000-20%
    //50001-10000-15%
    //>10000-10%
    let totalAmount;
    if(amount<=1000){
        totalAmount=amount*.25;
    }else if(amount>1000 && amount<=5000){
        totalAmount=amount*.2;
    }else if(amount>5000 && amount<=10000){
        totalAmount=amount*.15;
    }else{
        totalAmount=amount*.10;
   }
   //calculate on the basis of time 
    //24months-20%
    //12 months-15%
    //6 months-10%
    //3 months-5%
    let totalTime;
    switch(months){
        case 3:
            totalTime=amount*.05;
            break;
        case 6:
            totalTime=amount*.1;
            break;
        case 12:
            totalTime=amount*.15;
            break;
        case 24:
            totalTime=amount*.20;
            break;
        default:
            break;    

    }
    return totalAmount+totalTime;
}