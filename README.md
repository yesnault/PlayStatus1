
Plugin JQuery
A simple JQuery Plugin to display HTML with a JSON Play Framework Status in input.

Use
---

### The Controller (example : Application.java)

   package controllers;

   import play.CorePlugin;
   import play.mvc.Controller;

   public class Application extends Controller {

      public static void index() {
          render();
       }

       public static void json() {
           String json = CorePlugin.computeApplicationStatus(true);
           renderJSON(json);
       }

   }

### The view (example : index.phtml) :

   #{extends 'main.html' /}
   #{set title:'Play Application Status' /}

   #{set 'moreScripts'}
       <script type="text/javascript" src="@{'/public/javascripts/status2html.js'}" type="text/javascript" charset="${_response_encoding}"></script>

       <script type="text/javascript">
           $(document).ready(function() {
               var listAction = #{jsAction @json() /}
               $.getJSON(listAction(), function(data) {
                    $('#status').status2html(data);
               });
           });
       </script>
   #{/set}

<div id="status"></div>


### The HTML Output

   <div id="status">

       Java :
          <ul>Version : 1.6.0_29</ul>
          <ul>Free memory : 57577200</ul>
          <ul>Max memory : 99024896</ul>
          <ul>Total memory: 65470464</ul>

       Application :
          <ul>Path : /Users/yvonnickesnault/Projets/repositories/playStatus1</ul>
          <ul>Uptime : 1716873ms</ul><ul>Started at : 1716873</ul>


       Pool :
          <ul>Active count : 1</ul>
          <ul>Queue size : 0</ul>
          <ul>Scheduled task count : 935</ul>
          <ul>Pool size : 1</ul>

       Monitors :
       <table id="monitors">
            <thead><tr><th>N°</th><th>name</th><th>avg</th><th>hits</th><th>max</th><th>min</th></tr></thead>
            <tbody>
                <tr><td>0</td><td>Application.index(), ms.</td><td>7.547770700636943</td><td>157</td><td>701</td><td>1</td></tr>
            [...]
       </table>
   </div>
