var katzDeli =[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.");

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
     return("There is nobody waiting to be served!");
   } 
  else {
     return("Currently serving " + katzDeliLine.shift() + ".");
   }
 }
 
 function currentLine(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return ("The line is currently empty.");
  } 
  else {
    var s = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      s.push(" " + (i+1) + ". " + katzDeliLine[i]);
    }
  return ("The line is currently:" + s);
  }
 }
 