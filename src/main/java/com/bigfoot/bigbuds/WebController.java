package com.bigfoot.bigbuds;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/")  // This maps the root URL to the index.html page
    public String home() {
        return "index";  // Returns the "index" template from src/main/resources/templates
    }
}
