(function(){ function _getCompiled(nools){ return nools.compile({"define":[{"name":"State","properties":"({ constructor: function(name, state){ this.name = name; this.state = state; } })"}],"rules":[{"name":"Bootstrap","options":{},"constraints":[["State","a","a.name == 'A' && a.state == 'NOT_RUN'"]],"action":"modify(a, function(){ this.state = 'FINISHED'; }); "},{"name":"A to B","options":{},"constraints":[["State","a","a.name == 'A' && a.state == 'FINISHED'"],["State","b","b.name == 'B' && b.state == 'NOT_RUN'"]],"action":"modify(b, function(){ this.state = 'FINISHED'; }); "},{"name":"B to C","options":{"agendaGroup":"B to C","autoFocus":true},"constraints":[["State","b","b.name == 'B' && b.state == 'FINISHED'"],["State","c","c.name == 'C' && c.state == 'NOT_RUN'"]],"action":"modify(c, function(){ this.state = 'FINISHED'; }); focus('B to D') "},{"name":"B to D","options":{"agendaGroup":"B to D"},"constraints":[["State","b","b.name == 'B' && b.state == 'FINISHED'"],["State","d","d.name == 'D' && d.state == 'NOT_RUN'"]],"action":"modify(d, function(){ this.state = 'FINISHED'; }); "}],"scope":[]}, {name : "auto-focus-compiled"}); } if ("undefined" !== typeof exports) { if ("undefined" !== typeof module && module.exports) { return _getCompiled(require("../../")); } } else if ("function" === typeof define && define.amd) { define(["../../"], function (nools) { return _getCompiled(nools); }); } else { _getCompiled(this.nools); } }).call(this);
