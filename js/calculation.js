

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











