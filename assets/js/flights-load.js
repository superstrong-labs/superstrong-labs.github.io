skyscanner.load("snippets","2", {"cssoff" : true, "overridecss" : "assets/css/flights.css"});
 function main(){
     var snippet = new skyscanner.snippets.SearchPanelControl();
     snippet.setShape("box400x400");
     snippet.setCulture("en-GB");
     snippet.setCurrency("USD");
     snippet.setMarket("US");
     snippet.setProduct("flights","1");

     snippet.draw(document.getElementById("snippet_searchpanel"));
 }
 skyscanner.setOnLoadCallback(main);