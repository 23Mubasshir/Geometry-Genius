

// ------Serial Number---- 
let serial = 0


// ------ Triangle ----- 
    document.getElementById('btn-triangle').addEventListener('click', function(){
    
    
    const nameTriangle =document.getElementById("name-triangle").innerText;
    const depositFieldTriangleB = document.getElementById('triangle-b');
    const triangleBString = depositFieldTriangleB.value;
    const triangleB = parseFloat(triangleBString);

    const depositFieldTriangleH = document.getElementById('triangle-h');
    const triangleHString = depositFieldTriangleH.value;
    const triangleH = parseFloat(triangleHString);

    depositFieldTriangleB.value = '';
    depositFieldTriangleH.value = '';
    //----- function-1-----
    giveData(triangleB, triangleH);

    serial +=1;

    const triangleArea = 0.5 * triangleB * triangleH ;
    const triangleAreaFixed = triangleArea.toFixed(2);
    //----- function-2-----
    displayData(nameTriangle, triangleAreaFixed);
    

    })



// ------ Rectangle ----- 

document.getElementById('dtn-rectangle').addEventListener('click', function(){


    const nameRectangle =document.getElementById("name-rectangle").innerText;
    const depositFieldRectangleW =document.getElementById('rectangle-w');
    const rectangleWString = depositFieldRectangleW.value;
    const rectangleW = parseFloat(rectangleWString);

    const depositFieldRectangleL =document.getElementById('rectangle-l');
    const rectangleLString = depositFieldRectangleL.value;
    const rectangleL = parseFloat(rectangleLString);

    depositFieldRectangleW.value = '';
    depositFieldRectangleL.value = '';
    //----- function-1-----
    giveData(rectangleL, rectangleW);

    serial +=1;

    const rectangleArea = rectangleW * rectangleL;
    const rectangleAreaFixed = rectangleArea.toFixed(2);
    //----- function-2-----
    displayData(nameRectangle, rectangleAreaFixed);


})



// ------ Parallelogram ----- 

document.getElementById('btn-parallelogram').addEventListener('click', function(){

    
    const nameParallelogram =document.getElementById("name-parallelogram").innerText;

    const depositFieldParallelogramB = document.getElementById('parallelogram-b');
    const parallelogramBString = depositFieldParallelogramB.value;
    const parallelogramB = parseFloat(parallelogramBString);

    const depositFieldParallelogramH = document.getElementById('parallelogram-h');
    const parallelogramHString = depositFieldParallelogramH.value;
    const parallelogramH = parseFloat(parallelogramHString);

    depositFieldParallelogramB.value = '';
    depositFieldParallelogramH.value = '';
    //----- function-1-----
    giveData(parallelogramB, parallelogramH);
    serial +=1;

    const parallelogramArea =  parallelogramB * parallelogramH ;
    const parallelogramAreaFixed = parallelogramArea.toFixed(2);
    //----- function-2-----
    displayData(nameParallelogram, parallelogramAreaFixed);


})


// ------ Rhombus ----- 

document.getElementById('btn-rhombus').addEventListener('click', function(){

    
    const nameRhombus =document.getElementById("name-rhombus").innerText;

    const depositFieldRhombusD1 = document.getElementById('rhombus-d1');
    const rhombusD1String = depositFieldRhombusD1.value;
    const rhombusD1 = parseFloat(rhombusD1String);

    const depositFieldRhombusD2 = document.getElementById('rhombus-d2');
    const rhombusD2String = depositFieldRhombusD2.value;
    const rhombusD2 = parseFloat(rhombusD2String);

    depositFieldRhombusD1.value = '';
    depositFieldRhombusD2.value = '';
    //----- function-1-----
    giveData(rhombusD1,rhombusD2);
    serial +=1;
   
    const rhombusArea = 0.5 * rhombusD1 * rhombusD2 ;
    const rhombusAreaFixed = rhombusArea.toFixed(2);
    //----- function-2-----
    displayData(nameRhombus, rhombusAreaFixed);
    

})

// ------ pentagon ----- 

document.getElementById('btn-pentagon').addEventListener('click', function(){
    
    
    const namePentagon =document.getElementById("name-pentagon").innerText;

    const depositFieldPentagonP = document.getElementById('pentagon-p');
    const pentagonPString = depositFieldPentagonP.value;
    const pentagonP = parseFloat(pentagonPString);

    const depositFieldPentagonB = document.getElementById('pentagon-b');
    const pentagonBString = depositFieldPentagonB.value;
    const pentagonB = parseFloat(pentagonBString);

    depositFieldPentagonP.value = '';
    depositFieldPentagonB.value = '';
    //----- function-1-----
    giveData(pentagonP, pentagonB);
    serial +=1;

    const pentagonArea = 0.5 * pentagonP * pentagonB ;
    const pentagonAreaFixed = pentagonArea.toFixed(2);
    //----- function-2-----
    displayData(namePentagon, pentagonAreaFixed);
    

})

// ------ Ellipse ----- 

document.getElementById('btn-ellipse').addEventListener('click', function(){

    
    const nameEllipse =document.getElementById("name-ellipse").innerText;

    const depositFieldEllipseA = document.getElementById('ellipse-a');
    const ellipseAString = depositFieldEllipseA.value;
    const ellipseA = parseFloat(ellipseAString);

    const depositFieldEllipseB = document.getElementById('ellipse-b');
    const ellipseBString = depositFieldEllipseB.value;
    const ellipseB = parseFloat(ellipseBString);

    depositFieldEllipseA.value = '';
    depositFieldEllipseB.value = '';
    //----- function-1-----
    giveData(ellipseA, ellipseB);
    serial +=1;
    
    const ellipseArea = 3.1416 * ellipseA * ellipseB ;
    const ellipseAreaFixed = ellipseArea.toFixed(2);
    //----- function-2-----
    displayData(nameEllipse, ellipseAreaFixed);
    

})





