

<script>

var msg ='enter the percentage of student:';

var a = prompt(msg);
if(a>85)
   {
document.writer('Grade - A');}
else if(a<=85 && a>80)
  {
    document.writer('Grade -A-');}
else if(a>70 && a<=80)
  {
    document.writer('Grade -B');}
else if(a>60 && a<=70)
  {
    document.writer('Grade -C');}
else if(a>40 && a<=60)
  {
    document.writer('Grade -D');}
else if(a<=40)
  {
    if(a<=35)
    {
      document.write('Grade -E Canidate failed');}
    else
      {document.write('Grade -E');}}
</script>