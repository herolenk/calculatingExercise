/////////////////////////////////
/* What is Y% of X? */
////////////////////////////////





var whatIsYPercentOfX = function(){

var numField1 = document.getElementById('firstY');
var numField2 = document.getElementById('firstX');
var firstResult = document.getElementById('firstResult');

document.getElementById('whatIsYPercentOfX').addEventListener('submit', function (event) {

    var y = parseFloat(numField1.value);
    var x = parseFloat(numField2.value);

    if (!x || !y) {

        alert('We couldn\'t calculate the answer, Please redo the calculation.');

    } else {

        /* 
         Equation: Y = P% * X
        */
        var result = y /100 * x;

        firstResult.innerText = result;

        event.preventDefault();

    }
    

});
}
whatIsYPercentOfX();







/////////////////////////////////
/* X is Y% of What ?*/
/////////////////////////////////






var xIsYPercentOfWhat = function(){
var numField1 = document.getElementById('secondX');
var numField2 = document.getElementById('secondY');
var secondResult = document.getElementById('secondResult');

document.getElementById('xIsYPercentOfWhat').addEventListener('submit', function(event){
    
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    
    if(!x || !y){
       
        alert('We couldn\'t calculate the answer, Please redo the calculation.');
        
       }else{
           
          // Equation: Y = P% * X
           
           var result = x * 100/y;
           secondResult.innerText = result;
           
           event.preventDefault();
           
       }
    
});

}
xIsYPercentOfWhat();




/////////////////////////////////
/* What % of X is Y?*/
/////////////////////////////////





var whatPercentOfXisY = function(){
    


    
    var numField1 = document.getElementById('thirdX');
    var numField2 = document.getElementById('thirdY');
    var thirdResult = document.getElementById('thirdResult');
    
    document.getElementById('whatPercentOfXisY').addEventListener('submit', function(event){
        
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        if(!x || !y){
           
            alert('We couldn\'t calculate the answer, Please redo the calculation.');
           
           }else{
               
               
               event.preventDefault();
               
               var result= 100 * y /x;
               thirdResult.innerText = result;
               
           }
        
        });
    

}
whatPercentOfXisY();




/////////////////////////////////
/* X% of what is Y?*/
/////////////////////////////////





var xPercentOfWhatIsY = function(){

    
    
var numField1 = document.getElementById('forthX');
var numField2 = document.getElementById('forthY');
var forthResult = document.getElementById('resultForth');

document.getElementById('xPercentOfWhatIsY').addEventListener('submit', function(event){
    
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    
    if(!x || !y){
       
        alert('We couldn\'t calculate the answer, Please redo the calculation.');
        
    }else{
        
           var result = 100 * y / x;
           forthResult.innerText = result;
        
           
           event.preventDefault();
        
       }
   
});

}

xPercentOfWhatIsY();



/////////////////////////////////
/* Y% of X is what?*/
/////////////////////////////////


var yPercentOfXIsWhat = function(){
    
    
    var numField1 = document.getElementById('fifthY');
    var numField2 = document.getElementById('fifthX');
    var fifthResult = document.getElementById('fifthResult');
    
    document.getElementById('yPercentOfXIsWhat').addEventListener('submit', function(event){
        
        var y = parseFloat(numField1.value);
        var x = parseFloat(numField2.value);
        
        if(!y || !x){
           
            alert('We couldn\'t calculate the answer, Please redo the calculation.');
            
           }else{
           
                var result = x * y / 100; 
                fifthResult.innerText = result;
                event.preventDefault();
           
           }
        
    });
    
}
yPercentOfXIsWhat();















