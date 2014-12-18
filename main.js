/**
 * Created by root on 14-12-18.
 */
$(document).ready(function(){
    var num1 = 0, num2 =null, operationSymbol = 0, isEnter=0,isEnterName=0, mathPressed = 0, finalResult=0;

    //numberPressed
    $('.number').on('click','button',function(){
        if (operationSymbol == 0){
            num1 = num1 + $(this).html();
            $('.result').val(parseFloat(num1));
        }else{
            if (num2==null) {
                num2 = 0;
            };
            num2 = num2 + $(this).html();
            $('.result').val(parseFloat(num2));
        }
    });

    //the DEL Button

    $('.del').click(function(){
        // if (num1==0) {
        //   if (finalResult==0) {
        //     $('.result').val(num1);
        //   } else{
        //     num1 = finalResult.toString().slice(0,-1);
        //   $('.result').val(parseFloat(num1));
        //   };

        // }
        // else
        if (num2==null) {
            num1 = num1.toString().slice(0,-1);
            if(num1.length==0 || num1 == 0){ //字符串的长度=0,或者等于"0"的时候...
                num1 = 0;
            }
            $('.result').val(parseFloat(num1));
        }
        else{
            num2 = num2.toString().slice(0,-1);
            if(num2.length==0 || num1 == 0){
                num2 = 0;
            }
            $('.result').val(parseFloat(num2));
        };
    });

    //clear(C) Button
    $('.clear').click(function(){
        num1 = 0, num2 = null, operationSymbol=0, finalResult=0 ;
        $('.result').val(num1);
    });

    // The 「=」 Button
    $('.opr_enter').click(function(){
        if (num2!=null) {
            myOperator(operationSymbol);
            num1 = parseFloat(finalResult)
        };
    });

    //mathPressed
    $('.math').click(function(){

        mathPressed = $(this);
        symbolsOrEnter(mathPressed)
    });

    function symbolsOrEnter(mathPressed){

        //判断运算按钮 +-*/ 当前状态是运算符还是执行运算
        if (num2 == null) {
            operationSymbol = mathPressed.data('value');
            $('.result').val(parseFloat(num1) + ' ' + mathPressed.html() );
            //不做运算
        }else{
            isEnter = mathPressed.data('value');
            isEnterName = mathPressed.html(); // Yes &  nextOperationSymbol
            myOperator(operationSymbol);
            operationSymbol = isEnter,isEnter=0;
        };
    };

    function myOperator(operationSymbol){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch(operationSymbol)
        {
            case 1:
                finalResult = num1 + num2;
                break;
            case 2:
                finalResult = num1 - num2;
                break;
            case 3:
                finalResult = num1 * num2;
                break;
            case 4:
                finalResult = num1 / num2;
                break;
        }
        $('.result').val(parseFloat(finalResult));
        num1 = 0,num2 = null,operationSymbol = 0;
        if (isEnter != 0) {
            // operationSymbol = isEnter;
            num1 = parseFloat(finalResult),finalResult=0;
            $('.result').val(parseFloat(num1) + ' ' +isEnterName);
        };
    };

});