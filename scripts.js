// SugarCube.State.variables.objects = {
// "Apple":"https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
// "Banana":"https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1",
// "Grapes":"https://cdn2.stylecraze.com/wp-content/uploads/2014/07/Is-It-True-That-Eating-Too-Many-Grapes-Causes-Side-Effects.jpg",
// "Orange":"https://i5.walmartimages.ca/images/Enlarge/234/6_r/6000191272346_R.jpg",
// "Celery":"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Celery-stalks-and-leaves-7860193.jpg?quality=90&resize=768,574",
// "Blueberries":"https://solidstarts.com/wp-content/uploads/Blueberries_Edited-1-scaled.jpg",
// "Sorbet":"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fbb7f6dcac3571a34145dcf7b3eb47c023baff8d3",
// "Ice Cream":"https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg",
// "Chocolate":"https://www.thespruceeats.com/thmb/WvJy8xN-4eaPdWsbqXN7hCumpnA=/1335x1001/smart/filters:no_upscale()/dark_chocolate1-e58737b8bcbe4e4092f62d42c3c19fe0.jpg",
// "Strawberries":"https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320894/strawberry-on-white-background-to-represent-strawberry-tongue.jpg",
// "Caramel":"https://bellyfull.net/wp-content/uploads/2020/07/Homemade-Caramel-Sauce-Recipe-blog.jpg",
// "Raisins":"https://www.uraaw.ca/image/cache/catalog/dried%20fruit/organic-thompson-raisins-500x500.jpg",
// "Peanut Butter":"https://pinchofyum.com/wp-content/uploads/Homemade-Peanut-Butter-Square.png",
// "Pineapple":"https://i5.walmartimages.ca/images/Enlarge/198/506/6000200198506.jpg",
// "Juice":"https://www.acouplecooks.com/wp-content/uploads/2020/07/Carrot-Juice-001.jpg",
// "Melons":"https://www.onceuponachef.com/images/2017/05/How-to-cut-a-melon-10.jpg"
// }

SugarCube.State.variables.objects = {
    "Canned Fish":"https://cedarspace.github.io/SXGTwineStory/images/Yak/CannedFish.jpeg",
    "Berries":"https://cedarspace.github.io/SXGTwineStory/images/Tzeachten/Berries.JPG",
    "Timmys":"https://cedarspace.github.io/SXGTwineStory/images/Leqamel/TimbitsPlaceholder.jpg",
    "Salmon":"https://cedarspace.github.io/SXGTwineStory/images/Leqamel/Salmon.png",
    "Bannock":"https://cedarspace.github.io/SXGTwineStory/images/Skowkale/Bannock.jpeg",
    "Seasonal Veggies":"https://cedarspace.github.io/SXGTwineStory/images/Skowkale/SeasonalVeggies.JPG",
    "Deer":"https://cedarspace.github.io/SXGTwineStory/images/Skawahlook/Deer.png",
    "Baked Goods":"https://cedarspace.github.io/SXGTwineStory/images/Aitchelitz/BakedGoods.jpeg"
}

SugarCube.State.variables.sounds = {
    "Bear": "https://stoloshxweli.org/media/audio/1548p.mp3",
    "Sturgeon":"https://stoloshxweli.org/media/audio/2065p.mp3",
    "Cougar": "https://stoloshxweli.org/media/audio/1807h.mp3",
    "Deer": "https://stoloshxweli.org/media/audio/761h.mp3",
    "Two-Headed-Snake": "https://stoloshxweli.org/media/audio/255p2.mp3",
    "Salmon": "https://stoloshxweli.org/media/audio/730h.mp3"
}
// couldn't find salmon and two-headed snake right now is just snake

let audioElement = document.createElement("audio");
document.querySelector('body').append(audioElement);
audioElement.setAttribute('autoplay', true);

console.log(SugarCube.State.variables.objects);

SugarCube.State.variables.inventory = [];
console.log (SugarCube.State.variables.inventory);
console.log (SugarCube.State.variables.inventory.length);

SugarCube.setup.addInventoryImage = function(){
    for (let i=0; i< SugarCube.State.variables.inventory.length; i++){
        console.log('inventory image running');
        var imgElement = document.createElement('img');
        imgElement.style = "width:100px;";
        imgElement.setAttribute('src', SugarCube.State.variables.objects[SugarCube.State.variables.inventory[i]])
        jQuery(SugarCube.Dialog.body()).append(imgElement); 
        console.log(SugarCube.State.variables.inventory[i]);
   }
}

SugarCube.setup.indexOf= function(item){
    for (let i=0; i< SugarCube.State.variables.inventory.length; i++){
        if(item===SugarCube.State.variables.inventory[i]){
            return i
        }
    }
    return -1
}

SugarCube.setup.removeInventoryImage= function(){
    for (let i=0; i< SugarCube.State.variables.inventory.length; i++){
        let imgNode = document.createElement("img");
        imgNode.setAttribute("src", SugarCube.State.variables.objects[SugarCube.State.variables.inventory[i]]);
        imgNode.addEventListener("click", function(){SugarCube.State.variables.inventory.splice(i,1) && jQuery(SugarCube.Dialog.close())});
        jQuery(SugarCube.Dialog.body()).append(imgNode);
    }
}

SugarCube.State.variables.before = "";
SugarCube.setup.translation = function(after){
    console.log('calling translation')
    if(SugarCube.State.variables.before === ""){
        SugarCube.State.variables.before = document.getElementById("english").innerHTML;
        document.getElementById("english").innerHTML = after;
    }else{
        document.getElementById("english").innerHTML = SugarCube.State.variables.before;
        SugarCube.State.variables.before = "";
    }
};


// Banana = "Group1"
// Apple = "Group2"
// Grapes = "Group3"
// Orange = "Group4"

// SugarCube.State.variables.relations = {
//     "Group1": 0,
//     "Group2": 0,
//     "Group3": 0,
//     "Group4": 0,
//     "Group5": 5
// }

SugarCube.State.variables.relations = {
    "DoubleHeadedSerpent": 0,
    "Deer": 0,
    "Sturgeon": 0,
    "Salmon": 0,
    "Cougar": 0,
    "Bear": 0
}
console.log(SugarCube.State.variables.relations);

SugarCube.setup.increaseRelation = function(name) {
    if(SugarCube.State.variables.relations[name] != undefined) {
    SugarCube.State.variables.relations[name] = SugarCube.State.variables.relations[name] + 1
  }
  console.log(SugarCube.State.variables.relations);
}


SugarCube.setup.decreaseRelation = function(name) {
    if(SugarCube.State.variables.relations[name] != undefined && SugarCube.State.variables.relations[name] > 0) {
    SugarCube.State.variables.relations[name] = SugarCube.State.variables.relations[name] - 1
  }
  console.log(SugarCube.State.variables.relations);
}

SugarCube.State.variables.relationsValue =  Object.values(SugarCube.State.variables.relations);
console.log(SugarCube.State.variables.relationsValue);


SugarCube.State.variables.sum = 0;

SugarCube.setup.sumRelation = function () {
    let relationsValue =  Object.values(SugarCube.State.variables.relations);
    SugarCube.State.variables.sum = 0;
    for (let i=0; i < relationsValue.length; i++){
        SugarCube.State.variables.sum += SugarCube.State.variables.relationsValue[i];
    }
    return SugarCube.State.variables.sum;
}

window.markers = {

    "Adventure Park":{
        coords:{lat: 49.362936, lng: -121.588460},
        marker:null,
        label:"Adventure Park"
    },
    "Ruby Creek Gallery": {
        coords:{lat: 49.3568, lng: -121.6063},
        marker:null,
        label:"Ruby Creek Gallery"
    },
    "Longhouse 1T":{       
        coords:{lat: 49.079281, lng: -121.843853},
        marker:null,
        label:"Longhouse"
    },
    "Mt.McGuire":{     
        coords:{lat: 49.033164, lng: -121.771881},
        marker:null,
        label:"Mt.McGuire"
    },
    "Nicomen Slough":{         
        coords:{lat: 49.179050, lng: -122.130912},
        marker:null,
        label:"Nicomen Slough"
    },
    "Fraser River Area/Fishing Spot":{
        coords:{lat: 49.179965, lng: -122.031162},
        marker:null,
        label:"Fraser River Area/Fishing Spot"
    },
    "SAY Building 1SK":{ 
        coords:{lat: 49.134993, lng: -121.943149},
        marker:null,
        label:"SAY Building"
    },
    "Fish Hatchery": {
        coords:{lat: 49.1370718, lng: -121.9484336},
        marker:null,
        label:"Fish Hatchery"
    },
    "SAY Building 1A":{ 
        coords:{lat: 49.135025, lng: -121.943116},
        marker:null,
        label:"SAY Building"
    },
    "Tamihi Pools":{ 
        coords:{lat: 49.071397, lng: -121.835941},
        marker:null,
        label:"Tamihi Pools"
    },
    "Chilliwack Lake":{ 
        coords:{lat: 49.061011, lng: -121.415118},
        marker:null,
        label:"Chilliwack Lake"
    },
    "Longhouse 2Y":{
        coords:{lat: 49.132616, lng: -121.938515},
        marker:null,
        label:"Longhouse"
    }
}


let mapTag = document.createElement("div");
mapTag.setAttribute("style", "display:none;");
mapTag.setAttribute("id", "map");
document.querySelector("body").append(mapTag);

window.googleMap = undefined;
function initMap(){
	window.googleMap = new google.maps.Map(document.getElementById("map"),{
    	center: { lat:40.76, lng: -73.983 }, // latlng at New York as default
        zoom: 13, 
        mapTypeId: "satellite",
     });

    for (let key in window.markers){
        window.markers[key].marker = new google.maps.Marker({
            position:window.markers[key].coords,
            map:null,
            label:{
                text:window.markers[key].label,
                className:"marker-label"
            }
        })
       window.markers[key].marker.addListener("click",()=>{
            SugarCube.Engine.play(key);
            console.log(key);
        })
        console.log(window.markers[key].coords);
        console.log(key);
    }

    window.googleMap.setTilt(45);
}
window.initMap = initMap;

let scriptTag=document.createElement("script");
scriptTag.setAttribute("async", true);
scriptTag.setAttribute("defer", true);
scriptTag.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_30BypeWGaJmCRmxEPO5PUo1_2KW56TA&callback=initMap");
document.querySelector("head").append(scriptTag);


