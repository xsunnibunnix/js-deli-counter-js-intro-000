function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ` + (line.length) + ` in line.`
}

function nowServing(line) {
var current = line[0]
  if (line.length === 0) {
    return  "There is nobody waiting to be served!"
  } else {
    line.shift();
    return "Currently serving " + current + ".";
    }
  }

function currentLine(line) {
  if (line.length === ) {
    return "The line is currently empty."
  }
}
