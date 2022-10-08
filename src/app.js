function GenerarDom() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".com", ".net", ".es"];

  var position = pronoun.length;
  var position2 = adj.length;
  var position3 = noun.length;
  var position4 = ext.length;
  var midom = [];

  for (var vpro = 0; vpro < position; vpro++) {
    for (var vadj = 0; vadj < position2; vadj++) {
      for (var vnoun = 0; vnoun < position3; vnoun++) {
        for (var vext = 0; vext < position4; vext++) {
          midom.push(
            "<br>" + pronoun[vpro].concat(adj[vadj], noun[vnoun], ext[vext])
          );
        }
      }
    }
  }
  document.getElementById("caja").innerHTML = midom;
}
