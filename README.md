
Plugin JQuery
A simple JQuery Plugin to display HTML with a JSON Play Framework Status in input.

Use
___

### The Controller (example : Application.java)
`
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
`

### The view (example : index.phtml) :

`
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
`


### The HTML Output

`
`
