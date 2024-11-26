const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log("Total area is:" +area);
let plants = 0;
let error_msg="";
let no_Of_Weeks = prompt("Enter no of weeks");

let plants_Per_week_input = prompt("Enter no of plants to start the week");

try{

// no of plants per week calculation
for(let week=1;week <=parseInt(no_Of_Weeks); week++){
    if (week == 1){
        no_Of_Plants_perweek = plants_Per_week_input ? parseInt(plants_Per_week_input) : 20;
        // console.log("plants :" +no_Of_Plants_perweek +"for" +week+"weeks");
    }
    else { 
        no_Of_Plants_perweek = no_Of_Plants_perweek * 2;
        //console.log("plants :" +no_Of_Plants_perweek +"for" +week+"weeks");
    }    
}
// Calculation based on no of plants per week
Total_area_week =  no_Of_Plants_perweek * 0.8; 
console.log(`Total_area required: ${Total_area_week} meters for ${no_Of_Plants_perweek} plants for ${no_Of_Weeks} weeks`);
if (Total_area_week >area){
    //error_msg =""
    throw "area is bigger than allocated area";    
}

// calculate the radius 
let radius_calc = Math.sqrt(Total_area_week / Math.PI);
console.log("calculated radius:" +radius_calc);
// Calculate the percentage based on total plants grown vs area of the plants
let percentage_Calc = Math.round((Total_area_week/area) * 100);
console.log('percentage_Calc:'+ percentage_Calc)
switch(true)
    {   case (percentage_Calc>80):
        console.log('Pruning is required');
        break;
        case (percentage_Calc>=50 && percentage_Calc<80):
        console.log('Monitoring is required');
        break;
        case (percentage_Calc <50):
        console.log('Can plant more plants');
 
}
}
catch(err)
{
    console.log(err);
}


