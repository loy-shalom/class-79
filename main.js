student_name=[];

function submit()
{
    var display_student_array=[];
    for(var j=1;j<=4;j++)
    {
        var name_student=document.getElementById("n"+j).value;
        console.log(name_student);
        student_name.push(name_student);
    }
    console.log(student_name);
    var length_array=student_name.length;
    console.log(length_array);

    for(var k=0;k<length_array;k++)
    {
        display_student_array.push("<h4>NAME - "+ student_name[k] + "</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    student_name.sort();
    console.log(student_name);
    var display_student_array_sort=[];
    var length_array=student_name.length;
    console.log(length_array);
    for(var k=0;k<length_array;k++)
    {
        display_student_array_sort.push("<h4>NAME - "+ student_name[k] + "</h4>");
        console.log(display_student_array_sort);
    }
    var remove_commas=display_student_array_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
}
