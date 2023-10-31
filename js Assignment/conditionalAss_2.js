//WAP to find largest of five number

a=10;
b=20;
c=330;
d=40;
e=50;

if(a>b && a>c && a>d && a>e){
    console.log(a, "is largest number")
}

else if(b>a && b>c && b>d && b>e){
    console.log(b, "is largest number")
}

else if(c>a && c>b && c>d && c>e){
    console.log(c, "is largest number")
}


else if(d>a && b>b && d>c && d>e){
    console.log(d, "is largest number")
}
else{
    console.log(e, "is largest number")
}