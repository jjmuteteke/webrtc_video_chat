$(document).ready(function(){
          var socket = io();
          socket.on('updateList',function(msg){
              //msg.forEach
              for(var index in msg)
              {
                $("#list").append('<li><a ng-href="#/room/"'+index + '>'+index + '</a>' + '</li>');
              }
          });
    });