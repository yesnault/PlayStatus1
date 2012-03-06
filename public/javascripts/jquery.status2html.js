/*
Copyright (c) 2012 Yvonnick Esnault
https://github.com/yesnault/PlayStatus1

All rights reserved.

This code is free software: you can redistribute it and/or modify it under
the terms of the GNU Lesser General Public License version 3 only, as
published by the Free Software Foundation.

This code is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License
version 3 for more details.

You should have received a copy of the GNU Lesser General Public License
version 3 along with this work.  If not, see <http://www.gnu.org/licenses/>.
*/

(function($){	

	//Main method
	$.fn.status2html = function(data) {

        $(this).html($.status2html(data["play.CorePlugin"]));
        return this;

	}

	$.status2html = function(JSON) {
        var str = $.status2html.java(JSON);
        str += $.status2html.application(JSON);
        str += $.status2html.pool(JSON);
        str += $.status2html.monitors(JSON);
        return str;
    }

    $.status2html.java = function(JSON) {
       var str = "Java : ";
       str += "<ul>Version : " + JSON["java"]["version"] + "</ul>";
       str += "<ul>Free memory : " + JSON["memory"]["free"] + "</ul>";
       str += "<ul>Max memory : " + JSON["memory"]["max"] + "</ul>";
       str += "<ul>Total memory: " + JSON["memory"]["total"] + "</ul>";
       return str;
    }

    $.status2html.application = function(JSON) {
       var str = "Application : ";
       str += "<ul>Path : " + JSON["application"]["path"] + "</ul>";
       str += "<ul>Uptime : " + JSON["application"]["uptime"] + "ms</ul>";
       str += "<ul>Started at : " + new Date(new Date().getTime() - JSON["application"]["uptime"]).toLocaleString() + "</ul>";
       return str;
    }

    $.status2html.pool = function(JSON) {
       var str = "Pool : ";
       str += "<ul>Active count : " + JSON["pool"]["active"] + "</ul>";
       str += "<ul>Queue size : " + JSON["pool"]["queue"] + "</ul>";
       str += "<ul>Scheduled task count : " + JSON["pool"]["scheduled"] + "</ul>";
       str += "<ul>Pool size : " + JSON["pool"]["size"] + "</ul>";
       return str;
    }

    $.status2html.monitors = function(JSON) {
       var str = "Monitors : ";

       str += "<table id='monitors'>";
       str += "<thead>";
       str += "<th>N°</th>";
       str += "<th>name</th>";
       str += "<th>avg</th>";
       str += "<th>hits</th>";
       str += "<th>max</th>";
       str += "<th>min</th>";
       str += "</thead>";

       $.each(JSON["monitors"], function(index, value) {
            str += "<tr>";
            str += "<td>" + index + "</td>";
            str += "<td>" + value["name"] + "</td>";
            str += "<td>" + value["avg"] + "</td>";
            str += "<td>" + value["hits"] + "</td>";
            str += "<td>" + value["max"] + "</td>";
            str += "<td>" + value["min"] + "</td>";
            str += "</tr>";
       });

       str += "</table>";

       return str;
    }

})(jQuery);