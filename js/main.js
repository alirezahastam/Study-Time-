function counter(str) {
  var len = str.length;
  //   console.log(len);
  document.getElementById("show").innerHTML = len + " " + "حرف دراد.";

  let result = (len * 0.12) / 60;
  document.getElementById("study_time").innerHTML =
    Math.round(result) + " " + "دقیقه ";
}
