module.exports = {
    reverseString: function (str){

         if(typeof str === 'string'){
    
            const splitStr = str.split("");
            const reverseStr = splitStr.reverse();
            const joinStr = reverseStr.join("");
         
            if(str === ''){
                return null;
                
            }else if(str === 'NaN') {
                return true;
                
            }else if(joinStr === str){
                return true;
               
            }else{
                return joinStr;
            }
        }  
    },
    
    rever : function(){}
}