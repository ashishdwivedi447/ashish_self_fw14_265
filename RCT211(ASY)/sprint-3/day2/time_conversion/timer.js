function milisecondsToHms(d) {
    if(d<1000){
        return ("Value can not be less 1000 ms");
    }
    d = Number(d/1000);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}
var res = milisecondsToHms(6105000);
console.log(res);
module.exports = milisecondsToHms;