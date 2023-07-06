let connection;

const stdin = process.stdin;
const stdout = process.stdout;

const handleUserInput = (input) => {
  if (input === "\u0003") {
    process.exit();
  }

  if (input === "\u0077") {
    setTimeout(() => {
      connection.write("Move: up");
    }, 50);
  }

  if (input === "\u0061") {
    setTimeout(() => {
      connection.write("Move: left");
    }, 50);
  }

  if (input === "\u0073") {
    setTimeout(() => {
      connection.write("Move: down");
    }, 50);
  }

  if (input === "\u0064") {
    setTimeout(() => {
      connection.write("Move: right");
    }, 50);
  }
};


const setupInput = (conn) => {
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
