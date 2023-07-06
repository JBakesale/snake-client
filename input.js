let connection;

const stdin = process.stdin;
const stdout = process.stdout;

const handleUserInput = (input) => {
  if (input === "\u0003") {
    process.exit();
  }

  if (input === "w") {
    setTimeout(() => {
      connection.write("Move: up");
    }, 50);
  }

  if (input === "a") {
    setTimeout(() => {
      connection.write("Move: left");
    }, 50);
  }

  if (input === "s") {
    setTimeout(() => {
      connection.write("Move: down");
    }, 50);
  }

  if (input === "d") {
    setTimeout(() => {
      connection.write("Move: right");
    }, 50);
  }

if (input === "p") {
connection.write("Say: Immmm a pirate!");
}

if (input === "o") {
  connection.write("Say: ahoy ye mateey");
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
