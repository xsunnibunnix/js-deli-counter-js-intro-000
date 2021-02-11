function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ` + (line.length) + ` in line.`
}

function nowServing(line) {
    function lineShift() {
      if (line.length === 0) {
        return  "There is nobody waiting to be served!"
      } else {
        return "Currently serving " + line[0] + "."
      }
  }
  line.shift()
}
