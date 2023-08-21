let io = require ("socket.io-client") //nos traemos a  IO


//!eliminamos la funcion de auto llamado y tambien la variable de "windows."
   var whiteboard = require("./whiteboard");//nos traemos al archivo whiteboard
  let socket = io(window.location.origin);
  socket.on("connect", function () {
    console.log("Connected!");
  });

  socket.on("load", function (strokes) {
    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });
  });

  socket.on("draw", function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on("draw", function (start, end, color) {
    socket.emit("draw", start, end, color);
  });


