console.log(getUserId());
hideElement("loss_ai");
hideElement("profit_ai");
hideElement("tips_ai");
setScreen("Home");
hideElement("calc_out");
hideElement("Eroor_acess");
hideElement("cost_fence");
hideElement("cost_level");
hideElement("cost_seeds");
hideElement("out_cfence");
hideElement("out_cleveling");
hideElement("out_cseeds");
hideElement("rate_f");
hideElement("rate_l");
hideElement("rate_s");
hideElement("hide_log");
hideElement("crop_nonsuit");
onEvent("A.I.", "click", function( ) {
  setScreen("A.I_1");
});
onEvent("tips_ai", "click", function( ) {
  setScreen("Tips");
});
onEvent("find_ai", "click", function( ) {
  if (getText("drop_ai") == "Rice") {
  if (getText("month_sowing") == "Januray") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "Feburary") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "March") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "April") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "May") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "June") {
    if (getText("rate_sqm") > "8") {
      onEvent("find_ai", "click", function( ) {
        showElement("loss_ai");
        showElement("tips_ai");
      });
    }
  }
  if (getText("month_sowing") == "July") {
    if ("8" < getText("rate_sqm")) {
      showElement("profit_ai");
    }
  }
  if (getText("month_sowing") == "August") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "September") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "October") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "November") {
    showElement("crop_nonsuit");
  }
  if (getText("month_sowing") == "December") {
    showElement("crop_nonsuit");
  }
  } else {
    return false;
  }
});
onEvent("calc_ai", "click", function( ) {
  setScreen("Calculate");
});
onEvent("register_reg", "click", function( ) {
  playSpeech("Thanks!For regestering", "female", "English");
  var UserData={};
  UserData.name = getText("user_reg");
  UserData.nname = getText("name_reg");
  UserData.mail = getText("emai_reg");
  UserData.main = getText("pass_reg");
  createRecord("data_user", UserData, function(record) {
    console.log("Record created with id:" + record.id);
    console.log("User Name:" + UserData.name + " Name:" + UserData.nname + " Email:" + UserData.mail + "Password:" + UserData.main);
    
  });
});
onEvent("login_b_login", "click", function( ) {
 readRecords("data_user", {}, function(records) {
   for (var i =0; i < records.length; i++) {
     if ((records[i]).name == getText("user_name_log")) {
       if ((records[i]).main == getText("pass_log")) {
         setScreen("Home_main");
       } else {
         showElement("hide_log");
       }
     } else {
       showElement("hide_log");
     }
   }
 });
});
onEvent("return_login", "click", function( ) {
  setScreen("Home");
});
onEvent("return_register", "click", function( ) {
  setScreen("Home");
});
onEvent("login", "click", function( ) {
  setScreen("Login");
  playSpeech("welcome back", "female", "English");
});
onEvent("register", "click", function( ) {
  setScreen("Register");
  playSpeech("welcome", "female", "English");
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Home") {
    setScreen("Home_main");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "News") {
    setScreen("News");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown1", "change", function( ) {
  if (getText("dropdown1") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown5", "change", function( ) {
  if (getText("dropdown5") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown6", "change", function( ) {
  if (getText("dropdown6") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Calculate") {
    setScreen("Calculate");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Home") {
    setScreen("Home");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Sell") {
    setScreen("Sell");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Buy") {
    setScreen("Buy");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Tips") {
    setScreen("Tips");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "Tools") {
    setScreen("Tools");
  }
});
onEvent("dropdown7", "change", function( ) {
  if (getText("dropdown7") == "News") {
    setScreen("News");
  }
});
onEvent("getsource", "click", function( ) {
  setScreen("source");
});
onEvent("source_button", "click", function( ) {
  if (getText("user_int") == "aws_proj") {
    if (getText("pass_int") == "proj_agriculture") {
      open("https://github.com/Stensith/Aws_proj.git");
    }
  } else {
    playSound("sound://category_alerts/vibrant_game_correct_answer_hit.mp3", false);
    showElement("Eroor_acess");
  }
});
onEvent("Return_s", "click", function( ) {
  setScreen("Tools");
  playSound("sound://category_alerts/retro_game_health_pickup_6.mp3", false);
});
onEvent("equals_calculate", "click", function( ) {
  showElement("calc_out");
  setText("calc_out", getText("height_calc") * getText("width_calc"));
  showElement("cost_fence");
  showElement("cost_level");
  showElement("cost_seeds");
  showElement("rate_l");
  showElement("rate_f");
  showElement("rate_s");
});
onEvent("cost_fence", "click", function( ) {
  showElement("out_cfence");
  setText("out_cfence", ((getText("height_calc") + getText("width_calc")) * "2") * getText("rate_f"));
});
onEvent("cost_level", "click", function( ) {
  showElement("out_cleveling");
  setText("out_cleveling", getText("calc_out") * getText("rate_l"));
});
onEvent("cost_seeds", "click", function( ) {
  showElement("out_cseeds");
  setText("out_cseeds", getText("calc_out") * getText("rate_s"));
});
onEvent("wheat1_buy", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=Best+1kg+of+wheat+seeds&ref=nb_sb_noss");
});
onEvent("wheat1_buy_b", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=Best+1kg+of+wheat+seeds&ref=nb_sb_noss");
});
onEvent("rice_buy", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+rice+seeds&adgrpid=66369839430&ext_vrnc=hi&gclid=CjwKCAjwiY6MBhBqEiwARFSCPiOfrEP8PQ3uvyUxog7mFDSVCjWPKNESTIfG2sczHHJprdwHRRwT5xoC1dQQAvD_BwE&hvadid=398059830388&hvdev=c&hvlocphy=1007825&hvnetw=g&hvqmt=e&hvrand=14800052695484305710&hvtargid=kwd-833491980676&hydadcr=24568_1971427&tag=googinhydr1-21&ref=pd_sl_c98ju3aa4_e");
});
onEvent("rice_buy_b", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+rice+seeds&adgrpid=66369839430&ext_vrnc=hi&gclid=CjwKCAjwiY6MBhBqEiwARFSCPiOfrEP8PQ3uvyUxog7mFDSVCjWPKNESTIfG2sczHHJprdwHRRwT5xoC1dQQAvD_BwE&hvadid=398059830388&hvdev=c&hvlocphy=1007825&hvnetw=g&hvqmt=e&hvrand=14800052695484305710&hvtargid=kwd-833491980676&hydadcr=24568_1971427&tag=googinhydr1-21&ref=pd_sl_c98ju3aa4_e");
});
onEvent("gram_buy", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+gram+seeds&crid=3R43AD4XANWDV&sprefix=best+gram+seeds%2Caps%2C372&ref=nb_sb_noss");
});
onEvent("gram_buy_b", "click", function( ) {
  playSound("sound://category_whoosh/animation_whoosh10deep.mp3", false);
  open("https://www.amazon.in/s?k=best+gram+seeds&crid=3R43AD4XANWDV&sprefix=best+gram+seeds%2Caps%2C372&ref=nb_sb_noss");
});
onEvent("tip_1", "click", function( ) {
  open("https://www.growveg.com/plants/us-and-canada/how-to-grow-wheat/");
});
onEvent("tip_2", "click", function( ) {
  open("https://www.gardeningknowhow.com/edible/grains/rice/how-to-grow-rice.htm");
});
onEvent("tip_3", "click", function( ) {
  open("https://www.gardeners.com/how-to/building-healthy-soil/5060.html");
});
onEvent("tip_4", "click", function( ) {
  open("https://www.cseindia.org/removing-pesticides-from-fruits-and-vegetables-2681#:~:text=Washing%20with%202%25%20of%20salt,removed%20by%20cold%20water%20washing.");
});
onEvent("hint", "click", function( ) {
  playSpeech("Welcome!", "female", "English");
  setScreen("hint");
});
onEvent("return_buy", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_calculate", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_hints", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_sell", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_news", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_tools", "click", function( ) {
  setScreen("Home_main");
});
onEvent("return_tips", "click", function( ) {
  setScreen("Home_main");
});
onEvent("login_info", "click", function( ) {
  setScreen("login_info_s");
});
onEvent("home_info", "click", function( ) {
  setScreen("home_info_s");
});
onEvent("buy_info", "click", function( ) {
  setScreen("buy_info_s");
});
onEvent("sell_info", "click", function( ) {
  setScreen("sell_info_s");
});
onEvent("news_info", "click", function( ) {
  setScreen("news_info_s");
});
onEvent("calculate_info", "click", function( ) {
  setScreen("calculate_info_s");
});
onEvent("tools_info", "click", function( ) {
  setScreen("tools_info_s");
});
onEvent("tips_info", "click", function( ) {
  setScreen("tips_info_s");
});
onEvent("safe_info", "click", function( ) {
  setScreen("safe_info_s");
});
onEvent("feedback_buton", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("hint", "click", function( ) {
  setScreen("hints");
});
onEvent("submit_feedback", "click", function( ) {
  var feeddata = {};
  feeddata.main = getText("feedback_int");
  feeddata.user = getText("user_int_feed")
  createRecord("feedback_data", feeddata , function(record) {
    console.log("record created with id:" + record.id);
  });
});
onEvent("sell_buton", "click", function( ) {
  open("https://kisanmandi.com/index.php/free-farmer-registration");
});
onEvent("button_sell_2", "click", function( ) {
  open("https://kisanmandi.com/index.php/free-farmer-registration");
});
onEvent("buy_tools", "click", function( ) {
  open("https://www.amazon.in/Kraft-Seeds-Garden-Gardening-Gloves/dp/B07WJVSRSH/ref=sr_1_6?crid=170WWG4A4FZ8I&keywords=tools%2Bfor%2Bagriculture%2Bwork&qid=1636697600&sprefix=Tools%2BFor%2Bagri%2Caps%2C732&sr=8-6&th=1");
});
onEvent("buy_pipe", "click", function( ) {
  open("https://www.amazon.in/CINAGROTM-Layered-Braided-Sprayer-Connect/dp/B07M85WTTK/ref=sr_1_6?keywords=hose+pipe&qid=1636697685&sr=8-6");
});
onEvent("buy_weeder", "click", function( ) {
  open("https://www.amazon.in/SPAARK-NX212-Power-Weeder/dp/B09KT6T88G/ref=sr_1_23_sspa?keywords=Agriculture+Tools&qid=1636697269&sr=8-23-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzS0tZRVBaTEwzOVdVJmVuY3J5cHRlZElkPUEwNTkzMTEwMVJIMEkzTzVBOFBZOSZlbmNyeXB0ZWRBZElkPUEwOTI4MDk4MjdCRkNWSFlPMDVNOSZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=");
});
onEvent("get_id", "click", function( ) {
  setScreen("get_id_s");
  setText("idprint", getUserId());
});
onEvent("policy_b", "click", function( ) {
  open("https://code.org/privacy");
});
onEvent("hint_b", "click", function( ) {
  setScreen("hints");
});
onEvent("problem_1", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("problem_2", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("problem_3", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("problem_4", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("problem_5", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("problem_6", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("problem_7", "click", function( ) {
  setScreen("feedback_s");
});
onEvent("problem_8", "click", function( ) {
  setScreen("feedback_s");
});
