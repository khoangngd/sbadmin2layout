package kns.demo.sbadmin2.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
    @Autowired
    private MessageSource messageSource;

    @RequestMapping(value = {"/","/home","/index"}, method = RequestMethod.GET)
    public String indexPage(){
        return "index";
    }

    @RequestMapping(value = {"/layout"}, method = RequestMethod.GET)
    public String layoutPage(){
        return "layout/layout";
    }

    @GetMapping("/schedule")
    public String schedulePage(){
        return "page/schedule";
    }

    @GetMapping("/quartz")
    public String quartzPage(){
        return "page/quartz";
    }


}
