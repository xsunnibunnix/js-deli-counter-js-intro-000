function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ` + (line.length) + ` in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return  "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + ".";
    }
  }

function currentLine(line) {
  var newLine = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    newLine.push("The line is currently: ")
    for (let i = 0; i < line.length; i++) {
      newLine.push(i++`. ` + line[i]);
      return newLine;
    }
  }
}
