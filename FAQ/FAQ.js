
//QUESTION 1

var quest1 = document.getElementById('quest1');
var ans1 = document.getElementById('ans1');
var up1 = document.getElementById('up1');
var down1 = document.getElementById('down1');


function showAns1(){
    if(down1.onclick){
        ans1.style.display='block';
        down1.style.display='none';
        up1.style.display='block';
        quest1.style.fontWeight=900;
    }

    else{
        ans1.style.display='none'
    }
}

function HideAns1(){
    if(up1.onclick){
        ans1.style.display='none';
        down1.style.display='block';
        up1.style.display='none';
        quest1.style.fontWeight=400;
    }

    else{
        ans1.style.display='block'
    }
}

//QUESTION 2

var quest2 = document.getElementById('quest2');
var ans2 = document.getElementById('ans2');
var up2 = document.getElementById('up2');
var down2 = document.getElementById('down2');

function showAns2(){
    if(down2.onclick){
        ans2.style.display='block';
        down2.style.display='none';
        up2.style.display='block';
        quest2.style.fontWeight=900;
    }

    else{
        ans2.style.display='none'
    }
}

function HideAns2(){
    if(up2.onclick){
        ans2.style.display='none';
        down2.style.display='block';
        up2.style.display='none';
        quest2.style.fontWeight=400;
    }

    else{
        ans2.style.display='block'
    }
}

//QUESTION 3

var quest3 = document.getElementById('quest3');
var ans3 = document.getElementById('ans3');
var up3 = document.getElementById('up3');
var down3 = document.getElementById('down3');

function showAns3(){
    if(down3.onclick){
        ans3.style.display='block';
        down3.style.display='none';
        up3.style.display='block';
        quest3.style.fontWeight=900;
    }

    else{
        ans3.style.display='none';
    }
}

function HideAns3(){
    if(up3.onclick){
        ans3.style.display='none';
        down3.style.display='block';
        up3.style.display='none';
        quest3.style.fontWeight=400;
    }

    else{
        ans3.style.display='block';
    }
}

//QUESTION 4

var quest4 = document.getElementById('quest4');
var ans4 = document.getElementById('ans4');
var up4 = document.getElementById('up4');
var down4 = document.getElementById('down4');

function showAns4(){
    if(down4.onclick){
        ans4.style.display='block';
        down4.style.display='none';
        up4.style.display='block';
        quest4.style.fontWeight=900;
    }

    else{
        ans4.style.display='none';
    }
}

function HideAns4(){
    if(up4.onclick){
        ans4.style.display='none';
        down4.style.display='block';
        up4.style.display='none';
        quest4.style.fontWeight=400;
    }

    else{
        ans4.style.display='block';
    }
}

//QUESTION 5

var quest5 = document.getElementById('quest5');
var ans5 = document.getElementById('ans5');
var up5 = document.getElementById('up5');
var down5 = document.getElementById('down5');

function showAns5(){
    if(down5.onclick){
        ans5.style.display='block';
        down5.style.display='none';
        up5.style.display='block';
        quest5.style.fontWeight=900;
    }

    else{
        ans5.style.display='none';
    }
}

function HideAns5(){
    if(up5.onclick){
        ans5.style.display='none';
        down5.style.display='block';
        up5.style.display='none';
        quest5.style.fontWeight=400;
    }

    else{
        ans5.style.display='block';
    }
}