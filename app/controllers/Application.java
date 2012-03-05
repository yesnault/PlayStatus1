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