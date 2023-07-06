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

 conn.on("connect", () => {
   console.log("Client connection successful");
 });

 conn.on("connect", () => {
  conn.write("Name: JDB");
 })





  return conn;
};

module.exports = connect;
