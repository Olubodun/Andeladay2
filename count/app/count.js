module.exports = {
words : function words(str) {

    const words_split = str.split(/\s+/);
 
    const json = {};
   
    for(let i = 0; i < words_split.length; i += 1){
        if(!json.hasOwnProperty([words_split[i]])){
            json[words_split[i]] = 1;
        }else{
            json[words_split[i]] += 1;
        }
    }
    return json;
}
};