/**
 * Main JS for ad5001.eu
 * (c) Ad5001 2017
 * @author Ad5001
 */

window.switchLang = function(){
    switch(location.hostname){
        case "en.ad5001.eu":
            location = "https://ad5001.eu";
            break;
        case "ad5001.eu":
            location = "https://en.ad5001.eu";
            break;
        case "download.ad5001.eu":
        case "api.ad5001.eu":
        case "projects.ad5001.eu":
            var pathname = location.pathname.substr(3);
            location = "https://" + location.hostname + "/" + this.value + pathname;
            break;
    }
}

menus = document.getElementsByTagName("menu")[0].children[0].children;
menus[0].setAttribute("onclick", 'location = "' + menus[0].children[0].getAttribute("href") + '";');
menus[1].setAttribute("onclick", 'location = "' + menus[1].children[0].getAttribute("href") + '";');
menus[2].setAttribute("onclick", 'location = "' + menus[2].children[0].getAttribute("href") + '";');
menus[3].addEventListener("change", window.switchLang)

reviews = [
    "DeathRaven359: Ok, everyone else has some real competition going on here. I'm pretty sure who is going to win here. This plugin is love. This Plugin is life. (Juices)",
    "Flau: The BEST Troll Plugin i ever seen!!!! I like the troll: notABuilder so much. Thanks a lot (: (TrollPE)",
    "SuperDude: One of the best! Works great with magic server so people can deal damage to people with good enchants! Thank you for making this plugin. (Critical)",
    "GamingPilot: IT'S THE BEST PLUGIN !!!!! <333333333333333 (PlayerSelectors)",
    "FlamingCreeper: The best tool when your type of PvP contains strategy. (AttackSpeed)",
    "Hamooz0001: Awesome Your are Awesome Developer (Functions)",
    "MineHints: Works great and looks very professional (BetterRaw)",
    "ImagicalGamer: Awesome! (Status)",
    "ziken: Perfect ! Hope u gonna add the streight effect ! Maybe Ã  Superpower combined effect with rÃ©sistance and streight ? (EffectsCommands)"
]

l = 0;

if(document.querySelector("#reviews") !== null) setInterval(function() {
    $("#reviews").animate({
        opacity: 0
    }, 500, function() {
        if (reviews[l + 1].indexOf(":") !== false) {
            l++;
        } else {
            l = 0;
        }
        $("#reviews").html(reviews[l]);
        $("#reviews").animate({
            opacity: 1
        }, 500)
    })
}, 7000)