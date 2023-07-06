const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //recieve incoming data and log to console
  conn.on("data", (data) => {
    console.log(data);
  });

  const move = (direction, time) => {
    setTimeout(() => {
      conn.write(`Move: ${direction}`);
    }, time * 1000);
  };

  conn.on("connect", () => {
    console.log("Client connection successful");
    conn.write("Name: JDB");
    // move("up", 0);
    // move("up", 1);
    // move("left", 2);
    // move("left", 3);
    // move("down", 4);
  });

  return conn;
};

module.exports = connect;
