student_name=[];

function submit()
{
    var name1=document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;
    var name3=document.getElementById("n3").value;
    var name4=document.getElementById("n4").value;

    student_name.push(name1);
    student_name.push(name2);
    student_name.push(name3);
    student_name.push(name4);

    console.log(student_name);
    document.getElementById("display_name").innerHTML=student_name;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    student_name.sort();
    console.log(student_name);
    document.getElementById("display_name").innerHTML=student_name;
}
