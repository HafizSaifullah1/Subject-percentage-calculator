var a = + prompt ("Enter your physisc marks" )
var a = + prompt ("Enter your chemistry marks" )
var a = + prompt ("Enter your mathes marks" )
var a = + prompt ("Enter your computer marks" )
var a = + prompt ("Enter your english marks" )

var b = a+a+a+a+a
var c = b/500 *100

document.write("total percentage" +c + "%")

if(c>=80){
    document.write ("A+1")

}else if (c>=70){
    document.write ("A")

}else if(c>=60){
    document.write("B")

}else if (c>=50){
    document.write("C")
    
}else{
    (c<=40)
    document.write("Fail")

}


