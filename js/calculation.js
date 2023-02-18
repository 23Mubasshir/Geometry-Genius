

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



















