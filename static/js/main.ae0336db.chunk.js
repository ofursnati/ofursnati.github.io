(this.webpackJsonpsbp=this.webpackJsonpsbp||[]).push([[0],[,,,,,,,function(e,i,a){},,function(e,i,a){e.exports=a(16)},,,,,function(e,i,a){},function(e,i,a){},function(e,i,a){"use strict";a.r(i);var n=a(0),t=a.n(n),m=a(8),s=a.n(m),r=(a(14),a(2)),l=a(3),d=a(1),g=a(4),p=a(5),o=(a(7),function(e){Object(p.a)(a,e);var i=Object(g.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=i.call(this,e)).state={id:0,masterId:0,selected:!1,imageUrl:"",name:"",clickable:!1,bundle:!1,showHidden:!1},n.clicked=n.clicked.bind(Object(d.a)(n)),n.hoverFunction=n.hoverFunction.bind(Object(d.a)(n)),n.hoverLeave=n.hoverLeave.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({imageUrl:this.props.imageUrl}),this.setState({name:this.props.name}),this.setState({clickable:this.props.clickable}),this.setState({id:this.props.id}),this.setState({selected:this.props.clicked}),this.setState({masterId:this.props.masterId}),this.props.name.includes("Bundle")&&this.setState({bundle:!0})}},{key:"clicked",value:function(){this.state.clickable&&(!0===this.state.selected?(this.setState({selected:!1}),this.props.saveClicked(this.state.masterId,this.state.id,!1)):(this.setState({selected:!0}),this.props.saveClicked(this.state.masterId,this.state.id,!0)))}},{key:"hoverFunction",value:function(){!0!==this.state.showHidden&&this.setState({showHidden:!0}),this.setState({})}},{key:"hoverLeave",value:function(){!1!==this.state.showHidden&&this.setState({showHidden:!1})}},{key:"render",value:function(){var e=this.state,i=e.selected,a=e.bundle,n=this.props.where,m=t.a.createElement("div",null);return this.state.showHidden&&(m=t.a.createElement("div",{className:"hidden"},n)),a?t.a.createElement("div",{className:"bundbox bundle"},t.a.createElement("img",{className:"mynd",alt:"",src:this.state.imageUrl}),this.state.name):t.a.createElement("div",{className:"box ".concat(i?"clicked":""),onClick:this.clicked,onMouseOver:this.hoverFunction,onMouseLeave:this.hoverLeave},t.a.createElement("img",{className:"mynd",alt:"",src:this.state.imageUrl})," ",this.state.name,m)}}]),a}(n.Component));o.displayName=o.name;var h=function(e){Object(p.a)(a,e);var i=Object(g.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=i.call(this,e)).state={thingsinstate:"",slotImage:"https://stardewvalleywiki.com/mediawiki/images/5/5e/Bundle_Slot.png",goldStarImage:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/47/Gold_Quality_Icon.png/24px-Gold_Quality_Icon.png",bundles:[]},n.saveClicked=n.saveClicked.bind(Object(d.a)(n)),n.reset=n.reset.bind(Object(d.a)(n)),n.setShow=n.setShow.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("bundles"),i=JSON.parse(e);e?this.setState({bundles:i}):this.setState({bundles:c})}},{key:"reset",value:function(){this.state.bundles!==c&&(this.setState({bundles:c}),localStorage.setItem("bundles",JSON.stringify(c)))}},{key:"saveClicked",value:function(e,i,a){for(var n=this.state.bundles,t=0;t<n.length;t++)for(var m=0;m<n[t].bundles.length;m++)if(n[t].bundles[m].id===e)for(var s=0;s<n[t].bundles[m].bundle.length;s++)n[t].bundles[m].bundle[s].id===i&&(n[t].bundles[m].bundle[s].clicked=a,localStorage.setItem("bundles",JSON.stringify(n)),this.setState({bundles:n}))}},{key:"setShow",value:function(e){for(var i=this.state.bundles,a=0;a<i.length;a++)for(var n=0;n<i[a].bundles.length;n++)i[a].bundles[n].id===e&&(i[a].bundles[n].show=!i[a].bundles[n].show,localStorage.setItem("bundles",JSON.stringify(i)),this.setState({bundles:i}))}},{key:"render",value:function(){var e=this,i=this.state.bundles;return t.a.createElement("div",null,t.a.createElement("button",{className:"resetButton",onClick:this.reset},"Reset"),t.a.createElement("div",{className:"holder"},i.map((function(i){return t.a.createElement("div",{className:"bigBox",key:16*Math.random()},t.a.createElement("h2",null,i.name),"Reward: ",i.reward,t.a.createElement("div",{className:"bundleBox"},i.bundles.map((function(i){return t.a.createElement("div",{key:17*Math.random()},i.show?t.a.createElement("div",null,t.a.createElement("div",{onClick:function(){e.setShow(i.id)}},t.a.createElement(o,{key:i.id,clickable:!1,name:i.name,imageUrl:i.image})),"Reward: ",t.a.createElement("br",null),t.a.createElement("img",{className:"myndReward",alt:"",src:i.reward.image})," ",t.a.createElement("br",null),i.reward.name,t.a.createElement("br",null),"Slots: ",i.slots,t.a.createElement("div",null,i.bundle.map((function(a){return t.a.createElement("div",{key:i.id+a.id+16},t.a.createElement(o,{key:i.id+""+a.id,masterId:i.id,id:a.id,saveClicked:e.saveClicked,clickable:!0,clicked:a.clicked,name:a.name,imageUrl:a.image,where:a.where}))})))):t.a.createElement("div",{onClick:function(){e.setShow(i.id)}},t.a.createElement(o,{key:i.id,clickable:!1,name:i.name,imageUrl:i.image})))}))))}))))}}]),a}(n.Component);h.displayName=h.name;var w=h,c=[{name:"Crafts Room",reward:"Bridge Repair",bundles:[{id:0,name:"Spring Foraging Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Bundle_Green.png/32px-Bundle_Green.png",reward:{name:"Spring Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/39/Spring_Seeds.png/24px-Spring_Seeds.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Daffodil",where:"Spring Foraging, buy from Pierre at Flower Dance Festival",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Daffodil.png/24px-Daffodil.png"},{id:1,clicked:!1,name:"Dandelion",where:"Spring Foraging, buy from Pierre at Flower Dance Festival",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b1/Dandelion.png/24px-Dandelion.png"},{id:2,clicked:!1,name:"Leek",where:"Spring Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/57/Leek.png/24px-Leek.png"},{id:3,clicked:!1,name:"Wild Horseradish",where:"Spring Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/90/Wild_Horseradish.png/24px-Wild_Horseradish.png"}]},{id:1,name:"Summer Foraging Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Summer Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c4/Summer_Seeds.png/24px-Summer_Seeds.png"},slots:3,bundle:[{id:0,clicked:!1,name:"Grape",where:"Summer Foraging, Fall Farming",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c2/Grape.png/24px-Grape.png"},{id:1,clicked:!1,name:"Spice Berry",where:"Summer Foraging, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c6/Spice_Berry.png/24px-Spice_Berry.png"},{id:2,clicked:!1,name:"Sweet Pea",where:"Summer Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d9/Sweet_Pea.png/24px-Sweet_Pea.png"}]},{id:2,name:"Fall Foraging Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Fall Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/55/Fall_Seeds.png/24px-Fall_Seeds.png"},slots:2,bundle:[{id:0,clicked:!1,name:"Blackberry",where:"Fall Foraging, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/25/Blackberry.png/24px-Blackberry.png"},{id:1,clicked:!1,name:"Common Mushroom",where:"Fall Foraging, Spring & Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2e/Common_Mushroom.png/24px-Common_Mushroom.png"},{id:2,clicked:!1,name:"Hazelnut",where:"Fall Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Hazelnut.png/24px-Hazelnut.png"},{id:3,clicked:!1,name:"Wild Plum",where:"Fall Foraging, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3b/Wild_Plum.png/24px-Wild_Plum.png"}]},{id:3,name:"Winter Foraging Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Winter Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/dd/Winter_Seeds.png/24px-Winter_Seeds.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Crocus",where:"Winter Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Crocus.png/24px-Crocus.png"},{id:1,clicked:!1,name:"Crystal Fruit",where:"Winter Foraging, dropped by Dust Sprites on floors 41-79 of The Mines",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/16/Crystal_Fruit.png/24px-Crystal_Fruit.png"},{id:2,clicked:!1,name:"Snow Yam",where:"Tilling soil or Artifact Spots in Winter",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Snow_Yam.png/24px-Snow_Yam.png"},{id:3,clicked:!1,name:"Winter Root",where:"Tilling soil or Artifact Spots in Winter, dropped by Blue Slimes on floors 41-79 of The Mines",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/11/Winter_Root.png/24px-Winter_Root.png"}]},{id:4,name:"Construction Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Charcoal Kiln (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/76/Charcoal_Kiln.png/24px-Charcoal_Kiln.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Hardwood (10)",where:"Chopping Large Stumps or Large Logs with an upgraded Axe, smashing crates in The Mines",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Hardwood.png/24px-Hardwood.png"},{id:1,clicked:!1,name:"Stone (99)",where:"Smashing stones with a Pickaxe",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d4/Stone.png/24px-Stone.png"},{id:2,clicked:!1,name:"Wood (99)",where:"Chopping Trees or branches with an Axe",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/df/Wood.png/24px-Wood.png"},{id:3,clicked:!1,name:"Wood (99)",where:"Chopping Trees or branches with an Axe",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/df/Wood.png/24px-Wood.png"}]},{id:5,name:"Exotic Foraging Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",slots:5,reward:{name:"Autumn's Bounty",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Autumn%27s_Bounty.png/24px-Autumn%27s_Bounty.png"},bundle:[{id:0,clicked:!1,name:"Cactus Fruit",where:"Desert Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/32/Cactus_Fruit.png/24px-Cactus_Fruit.png"},{id:1,clicked:!1,name:"Cave Carrot",where:"The Mines, either smashing boxes or tilling soil",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/34/Cave_Carrot.png/24px-Cave_Carrot.png"},{id:2,clicked:!1,name:"Coconut",where:"Desert Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Coconut.png/24px-Coconut.png"},{id:3,clicked:!1,name:"Maple Syrup",where:"Tapped Maple Tree",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6a/Maple_Syrup.png/24px-Maple_Syrup.png"},{id:4,clicked:!1,name:"Morel",where:"Foraging in the Secret Woods or Forest Farm Map in Spring, The Farm Cave (mushroom option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b1/Morel.png/24px-Morel.png"},{id:5,clicked:!1,name:"Oak Resin",where:"Tapped Oak Tree",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/40/Oak_Resin.png/24px-Oak_Resin.png"},{id:6,clicked:!1,name:"Pine Tar",where:"Tapped Pine Tree",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Pine_Tar.png/24px-Pine_Tar.png"},{id:7,clicked:!1,name:"Purple Mushroom",where:"The Mines, The Farm Cave (mushroom option), Forest Farm Map Foraging in Fall",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Purple_Mushroom.png/24px-Purple_Mushroom.png"},{id:8,clicked:!1,name:"Red Mushroom",where:"Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree, Forest Farm Map in Fall.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e1/Red_Mushroom.png/24px-Red_Mushroom.png"}]}]},{name:"Pantry",reward:"Greenhouse",bundles:[{id:6,name:"Spring Crops Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Bundle_Green.png/32px-Bundle_Green.png",reward:{name:"Speed-Gro(20)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/94/Speed-Gro.png/24px-Speed-Gro.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Cauliflower",where:"Spring Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Cauliflower.png/24px-Cauliflower.png"},{id:1,clicked:!1,name:"Green Bean",where:"Spring Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/5c/Green_Bean.png/24px-Green_Bean.png"},{id:2,clicked:!1,name:"Parsnip",where:"Spring Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Parsnip.png/24px-Parsnip.png"},{id:3,clicked:!1,name:"Potato",where:"Spring Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c2/Potato.png/24px-Potato.png"}]},{id:7,name:"Summer Crops Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Quality Sprinkler(1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Quality_Sprinkler.png/24px-Quality_Sprinkler.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Blueberry",where:"Summer Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/9e/Blueberry.png/24px-Blueberry.png"},{id:1,clicked:!1,name:"Hot Pepper",where:"Summer Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Hot_Pepper.png/24px-Hot_Pepper.png"},{id:2,clicked:!1,name:"Melon",where:"Summer Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Melon.png/24px-Melon.png"},{id:3,clicked:!1,name:"Tomato",where:"Summer Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/9d/Tomato.png/24px-Tomato.png"}]},{id:8,name:"Fall Crops Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Bee House(1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bee_House.png/24px-Bee_House.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Corn",where:"Summer / Fall Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f8/Corn.png/24px-Corn.png"},{id:1,clicked:!1,name:"Egg Plant",where:"Fall Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/8f/Eggplant.png/24px-Eggplant.png"},{id:2,clicked:!1,name:"Pumpkin",where:"Fall Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Pumpkin.png/24px-Pumpkin.png"},{id:3,clicked:!1,name:"Yam",where:"Fall Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/52/Yam.png/24px-Yam.png"}]},{id:9,name:"Quality Crops Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Preserves Jar(1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1e/Preserves_Jar.png/24px-Preserves_Jar.png"},slots:3,bundle:[{id:0,clicked:!1,name:"Corn (5, Gold)",where:"Gold quality Fall Cropss",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f8/Corn.png/24px-Corn.png"},{id:1,clicked:!1,name:"Melon (5, Gold)",where:"Gold quality Summer Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Melon.png/24px-Melon.png"},{id:2,clicked:!1,name:"Parsnip (5, Gold)",where:"Gold quality Spring Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Parsnip.png/24px-Parsnip.png"},{id:3,clicked:!1,name:"Pumpkin (5, Gold)",where:"Gold quality Fall Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Pumpkin.png/24px-Pumpkin.png"}]},{id:10,name:"Animal Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Cheese Press (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/79/Cheese_Press.png/24px-Cheese_Press.png"},slots:5,bundle:[{id:0,clicked:!1,name:"Duck Egg",where:"Ducks",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Duck_Egg.png/24px-Duck_Egg.png"},{id:1,clicked:!1,name:"Large Egg (Brown)",where:"Chickens",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Large_Brown_Egg.png/24px-Large_Brown_Egg.png"},{id:2,clicked:!1,name:"Large Egg",where:"Chickens",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Large_Egg.png/24px-Large_Egg.png"},{id:3,clicked:!1,name:"Large Goat Milk",where:"Goats",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f2/Large_Goat_Milk.png/24px-Large_Goat_Milk.png"},{id:4,clicked:!1,name:"Large Milk",where:"Cows",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/67/Large_Milk.png/24px-Large_Milk.png"},{id:5,clicked:!1,name:"Wool",where:"Sheep, Rabbits",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/34/Wool.png/24px-Wool.png"}]},{id:11,name:"Artisan Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Keg (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/7c/Keg.png/24px-Keg.png"},slots:6,bundle:[{id:0,clicked:!1,name:"Apple",where:"Apple Trees during Fall, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/7d/Apple.png/24px-Apple.png"},{id:1,clicked:!1,name:"Apricot",where:"Apricot Trees during Spring, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/fc/Apricot.png/24px-Apricot.png"},{id:2,clicked:!1,name:"Cheese",where:"Cheese Press",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a5/Cheese.png/24px-Cheese.png"},{id:3,clicked:!1,name:"Cherry",where:"Cherry Trees during Spring, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/20/Cherry.png/24px-Cherry.png"},{id:4,clicked:!1,name:"Cloth",where:"Loom, Recycling a Soggy Newspaper",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/51/Cloth.png/24px-Cloth.png"},{id:5,clicked:!1,name:"Goat Cheese",where:"Cheese Press",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c8/Goat_Cheese.png/24px-Goat_Cheese.png"},{id:6,clicked:!1,name:"Honey",where:"Bee House, Oasis",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c6/Honey.png/24px-Honey.png"},{id:7,clicked:!1,name:"Jelly",where:"Preserves Jar",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/05/Jelly.png/24px-Jelly.png"},{id:8,clicked:!1,name:"Orange",where:"Orange Trees during Summer, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/43/Orange.png/24px-Orange.png"},{id:9,clicked:!1,name:"Peach",where:"Peach Trees during Summer, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e2/Peach.png/24px-Peach.png"},{id:10,clicked:!1,name:"Pomegranate",where:"Pomegranate Trees during Fall, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Pomegranate.png/24px-Pomegranate.png"},{id:11,clicked:!1,name:"Truffle Oil",where:"Made from Truffles using an Oil Maker",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3d/Truffle_Oil.png/24px-Truffle_Oil.png"}]}]},{name:"Fish Tank",reward:"Glittering Boulder Removed",bundles:[{id:12,name:"River Fish Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Bait (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/ff/Bait.png/24px-Bait.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Catfish",where:"Found in Rivers and Secret Woods Pond Anytime, Spring and Fall. Only when raining.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/99/Catfish.png/24px-Catfish.png"},{id:1,clicked:!1,name:"Shad",where:"Found in Rivers, 9am \u2013 2am, Spring, Summer, and Fall. Only when raining.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ef/Shad.png/24px-Shad.png"},{id:2,clicked:!1,name:"Sunfish",where:"Found in Rivers, 6am \u2013 7pm, Spring, and Summer during sunny weather and in the Riverlands Farm or in the Wilderness Farm pond during rainy weather.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/56/Sunfish.png/24px-Sunfish.png"},{id:3,clicked:!1,name:"Tiger Trout",where:"Found in Rivers, 6am \u2013 7pm, Fall and Winter.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/01/Tiger_Trout.png/24px-Tiger_Trout.png"}]},{id:13,name:"Lake Fish Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Bundle_Green.png/32px-Bundle_Green.png",reward:{name:"Dressed Spinner (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e8/Dressed_Spinner.png/24px-Dressed_Spinner.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Bullhead",where:"Found in the Mountain Lake, Anytime, All Seasons.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Bullhead.png/24px-Bullhead.png"},{id:1,clicked:!1,name:"Carp",where:"Found in the Mountain lake, Anytime, All Seasons, in Cindersap Forest pond, Anytime, Spring, Summer, or Fall and in Secret Woods or Sewer, Anytime, All Seasons.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a8/Carp.png/24px-Carp.png"},{id:2,clicked:!1,name:"Largemouth Bass",where:"Found in the Mountain lake, 6am \u2013 7pm, All Seasons.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/11/Largemouth_Bass.png/24px-Largemouth_Bass.png"},{id:3,clicked:!1,name:"Sturgeon",where:"Found in the Mountain Lake, 6am \u2013 7pm, Summer and Winter",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/42/Sturgeon.png/24px-Sturgeon.png"}]},{id:14,name:"Ocean Fish Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e4/Bundle_Blue.png/32px-Bundle_Blue.png",reward:{name:"Warp Totem: Beach (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Warp_Totem_Beach.png/24px-Warp_Totem_Beach.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Red Snapper",where:"Found in the Ocean, 6am \u2013 7pm, Summer and Fall. Only when raining.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d3/Red_Snapper.png/24px-Red_Snapper.png"},{id:1,clicked:!1,name:"Tilapia",where:"Found in the Ocean, 6am \u2013 2pm, Summer and Fall.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/73/Tilapia.png/24px-Tilapia.png"},{id:2,clicked:!1,name:"Tuna",where:"Found in the Ocean, 6am \u2013 7pm, Summer and Winter.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c5/Tuna.png/24px-Tuna.png"},{id:3,clicked:!1,name:"Sardine",where:"Found in the Ocean, 6am \u2013 7pm, Spring, Fall, and Winter.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/04/Sardine.png/24px-Sardine.png"}]},{id:15,name:"Night Fishing Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Small Glow Ring (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6c/Small_Glow_Ring.png/24px-Small_Glow_Ring.png"},slots:3,bundle:[{id:0,clicked:!1,name:"Bream",where:"Found in Rivers, 6pm \u2013 2am, All Seasons.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Bream.png/24px-Bream.png"},{id:1,clicked:!1,name:"Eel",where:"Found in the Ocean, 4pm \u2013 2am, Spring or Fall. Only when raining.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Eel.png/24px-Eel.png"},{id:2,clicked:!1,name:"Walleye",where:"Found in Rivers, Lakes and Forest Pond, 12pm \u2013 2am, Fall. Only when raining.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/05/Walleye.png/24px-Walleye.png"}]},{id:16,name:"Crab Pot Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Crab Pot (3)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/92/Crab_Pot.png/24px-Crab_Pot.png"},slots:5,bundle:[{id:0,clicked:!1,name:"Clam",where:"Caught in Crab Pots (ocean), Beach Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Clam.png/24px-Clam.png"},{id:1,clicked:!1,name:"Cockle",where:"Caught in Crab Pots (ocean), Beach Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/ad/Cockle.png/24px-Cockle.png"},{id:2,clicked:!1,name:"Crab",where:"Caught in Crab Pots (ocean), drops from Rock Crabs or Lava Crabs in The Mines",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/63/Crab.png/24px-Crab.png"},{id:3,clicked:!1,name:"Crayfish",where:"Caught in Crab Pots (freshwater)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/53/Crayfish.png/24px-Crayfish.png"},{id:4,clicked:!1,name:"Lobster",where:"Caught in Crab Pots (ocean)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/9f/Lobster.png/24px-Lobster.png"},{id:5,clicked:!1,name:"Mussel",where:"Caught in Crab Pots (ocean), Beach Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Mussel.png/24px-Mussel.png"},{id:6,clicked:!1,name:"Oyster",where:"Caught in Crab Pots (ocean), Beach Foraging",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/54/Oyster.png/24px-Oyster.png"},{id:7,clicked:!1,name:"Periwinkle",where:"Caught in Crab Pots (freshwater)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1d/Periwinkle.png/24px-Periwinkle.png"},{id:8,clicked:!1,name:"Shrimp",where:"Caught in Crab Pots (ocean)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Shrimp.png/24px-Shrimp.png"},{id:9,clicked:!1,name:"Snail",where:"Caught in Crab Pots (freshwater)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d2/Snail.png/24px-Snail.png"}]},{id:17,name:"Specialty Fish Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Dish o' The Sea (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f0/Dish_o%27_The_Sea.png/24px-Dish_o%27_The_Sea.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Ghostfish",where:"Found in ponds in The Mines floors 20 and 60, Anytime, All Seasons. May also be dropped by Ghosts.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/72/Ghostfish.png/24px-Ghostfish.png"},{id:1,clicked:!1,name:"Pufferfish",where:"Found in the Ocean, 12pm \u2013 4pm, Summer during sunny weather.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/ba/Pufferfish.png/24px-Pufferfish.png"},{id:2,clicked:!1,name:"Sandfish",where:"Found in the pond in The Desert, 6am \u2013 8pm, All Seasons.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/bb/Sandfish.png/24px-Sandfish.png"},{id:3,clicked:!1,name:"Woodskip",where:"Found in the Secret Woods and the Forest Farm, Anytime, All Seasons.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/97/Woodskip.png/24px-Woodskip.png"}]}]},{name:"Boiler Room",reward:"Minecarts Repaired",bundles:[{id:18,name:"Blackshith's Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Furnace (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/0f/Furnace.png/24px-Furnace.png"},slots:3,bundle:[{id:0,clicked:!1,name:"Copper Bar",where:"Smelting Copper Ore in the Furnace",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Copper_Bar.png/24px-Copper_Bar.png"},{id:1,clicked:!1,name:"Iron Bar",where:"Smelting Iron Ore in the Furnace, Crafting the Transmute (Fe) recipe",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6c/Iron_Bar.png/24px-Iron_Bar.png"},{id:2,clicked:!1,name:"Gold Bar",where:"Smelting Gold Ore in the Furnace, Crafting the Transmute (Au) recipe",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Gold_Bar.png/24px-Gold_Bar.png"}]},{id:19,name:"Geologist's Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Omni Geode (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/09/Omni_Geode.png/24px-Omni_Geode.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Earth Crystal",where:"Foraging on floors 1-39 of The Mines, Geodes, Omni Geodes, drop from Duggies in the Mines (floors 1-29)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/74/Earth_Crystal.png/24px-Earth_Crystal.png"},{id:1,clicked:!1,name:"Fire Quartz",where:"Foraging on floors 80-120 of The Mines, Magma Geodes, Omni Geodes",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/5b/Fire_Quartz.png/24px-Fire_Quartz.png"},{id:2,clicked:!1,name:"Frozen Tear",where:"Foraging on floors 40-79 of The Mines, Frozen Geodes, Omni Geodes, drop from Dust Sprites in the Mines (floors 40-80)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ec/Frozen_Tear.png/24px-Frozen_Tear.png"},{id:3,clicked:!1,name:"Quartz",where:"Foraging on all floors of The Mines",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/cf/Quartz.png/24px-Quartz.png"}]},{id:20,name:"Adventurer's Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Small Magnet Ring",image:"https://stardewvalleywiki.com/mediawiki/images/2/25/Small_Magnet_Ring.png"},slots:2,bundle:[{id:0,clicked:!1,name:"Bat Wing (10)",where:"Dropped by Bats in The Mines",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/35/Bat_Wing.png/24px-Bat_Wing.png"},{id:1,clicked:!1,name:"Slime (99)",where:"Dropped by Slimes",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/38/Slime.png/24px-Slime.png"},{id:2,clicked:!1,name:"Solar Essence",where:"Dropped by Ghosts, Squid Kids, or Metal Heads in The Mines, dropped by Mummies in the Skull Cavern",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Solar_Essence.png/24px-Solar_Essence.png"},{id:3,clicked:!1,name:"Void Essence",where:"Dropped by Shadow Brutes in The Mines or Serpents in the Skull Cavern",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1f/Void_Essence.png/24px-Void_Essence.png"}]}]},{name:"Bulletin Board",reward:"Friendship",bundles:[{id:21,name:"Chef's Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Pink Cake (3)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/32/Pink_Cake.png/24px-Pink_Cake.png"},slots:6,bundle:[{id:0,clicked:!1,name:"Fiddlehead Fern",where:"Summer Foraging in the Secret Woods",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/48/Fiddlehead_Fern.png/24px-Fiddlehead_Fern.png"},{id:1,clicked:!1,name:"Fried Egg",where:"Cooking",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/18/Fried_Egg.png/24px-Fried_Egg.png"},{id:2,clicked:!1,name:"Maki Roll",where:"Cooking (recipe sources: The Queen of Sauce, The Saloon)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b6/Maki_Roll.png/24px-Maki_Roll.png"},{id:3,clicked:!1,name:"Maple Syrup",where:"Tapped Maple Tree",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6a/Maple_Syrup.png/24px-Maple_Syrup.png"},{id:4,clicked:!1,name:"Poppy",where:"Summer Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/37/Poppy.png/24px-Poppy.png"},{id:5,clicked:!1,name:"Truffle",where:"Pigs",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f2/Truffle.png/24px-Truffle.png"}]},{id:22,name:"Dye Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Seed Maker (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Seed_Maker.png/24px-Seed_Maker.png"},slots:6,bundle:[{id:0,clicked:!1,name:"Aquamarine",where:"Aquamarine Nodes, boxes in The Mines, Fishing Treasure Chests",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a2/Aquamarine.png/24px-Aquamarine.png"},{id:1,clicked:!1,name:"Duck Feather",where:"Ducks",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f9/Duck_Feather.png/24px-Duck_Feather.png"},{id:2,clicked:!1,name:"Red Cabbage",where:"Summer Crops (Red Cabbage Seeds are available at Pierre's General Store in year 2+)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2d/Red_Cabbage.png/24px-Red_Cabbage.png"},{id:3,clicked:!1,name:"Red Mushroom",where:"Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e1/Red_Mushroom.png/24px-Red_Mushroom.png"},{id:4,clicked:!1,name:"Sea Urchin",where:"Beach Foraging, after using 300 wood to fix the bridge to the right side of the beach",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e7/Sea_Urchin.png/24px-Sea_Urchin.png"},{id:5,clicked:!1,name:"Sunflower",where:"Summer / Fall Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/81/Sunflower.png/24px-Sunflower.png"}]},{id:23,name:"Field Research Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e4/Bundle_Blue.png/32px-Bundle_Blue.png",reward:{name:"Recycling Machine (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/26/Recycling_Machine.png/24px-Recycling_Machine.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Chub",where:"Can be found in the mountain lake and river during all seasons, any time.",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/bd/Chub.png/24px-Chub.png"},{id:1,clicked:!1,name:"Frozen Geode",where:"The Mines floors 40-79",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/bf/Frozen_Geode.png/24px-Frozen_Geode.png"},{id:2,clicked:!1,name:"Nautilus Shell",where:"Winter Beach Foraging (Note: NOT the Nautilus Fossil artifact)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a4/Nautilus_Shell.png/24px-Nautilus_Shell.png"},{id:3,clicked:!1,name:"Purple Mushroom",where:"The Mines, The Farm Cave (mushroom option), Forest Farm Map Foraging in Fall",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Purple_Mushroom.png/24px-Purple_Mushroom.png"}]},{id:24,name:"Fodder Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Heater (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/93/Heater.png/24px-Heater.png"},slots:3,bundle:[{id:0,clicked:!1,name:"Apple (3)",where:"Apple Trees during Fall, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/7d/Apple.png/24px-Apple.png"},{id:1,clicked:!1,name:"Hay (10)",where:"Purchase at Marnie's Ranch, or harvest grass with the Scythe once you have a Silo, and withdraw the hay from the Hay Hopper once you have a Coop or Barn",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Hay.png/24px-Hay.png"},{id:2,clicked:!1,name:"Wheat (10)",where:"Summer / Fall Crops",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e2/Wheat.png/24px-Wheat.png"}]},{id:25,name:"Enchanter's Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Gold Bar (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Gold_Bar.png/24px-Gold_Bar.png"},slots:4,bundle:[{id:0,clicked:!1,name:"Oak Resin",where:"Tapped Oak Tree",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/40/Oak_Resin.png/24px-Oak_Resin.png"},{id:1,clicked:!1,name:"Pomegranate",where:"Pomegranate Trees during Fall, The Farm Cave (fruit bat option)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Pomegranate.png/24px-Pomegranate.png"},{id:2,clicked:!1,name:"Rabbit's Foot",where:"Rabbits, Serpent drop in Skull Cavern (0.8%)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ca/Rabbit%27s_Foot.png/24px-Rabbit%27s_Foot.png"},{id:3,clicked:!1,name:"Wine",where:"Keg",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/69/Wine.png/24px-Wine.png"}]}]},{name:"Vault",reward:"Bus Repair",bundles:[{id:26,name:"2,500 Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Chocolate Cake (3)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/87/Chocolate_Cake.png/24px-Chocolate_Cake.png"},slots:1,bundle:[{id:0,clicked:!1,name:"2,500g",where:"",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]},{id:27,name:"5,000 Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Quality Fertilizer (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a0/Quality_Fertilizer.png/24px-Quality_Fertilizer.png"},slots:1,bundle:[{id:0,clicked:!1,name:"5,000g",where:"",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]},{id:28,name:"10,000 Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Lightning Rod (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/62/Lightning_Rod.png/24px-Lightning_Rod.png"},slots:1,bundle:[{id:0,clicked:!1,name:"10,000g",where:"",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]},{id:29,name:"25,000 Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Crystalarium (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/63/Crystalarium.png/24px-Crystalarium.png"},slots:1,bundle:[{id:0,clicked:!1,name:"25,000g",where:"",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]}]},{name:"Abandoned JojaMart",reward:"Movie Theater",bundles:[{id:30,name:"The Missing Bundle",show:!0,image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"none",image:""},slots:5,bundle:[{id:0,clicked:!1,name:"Ancient Fruit (5, Gold)",where:"Crops",image:"https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png"},{id:1,clicked:!1,name:"Caviar",where:"Preserves Jar",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/89/Caviar.png/24px-Caviar.png"},{id:2,clicked:!1,name:"Dinosaur Mayonnaise",where:"Mayonnaise Machine",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c3/Dinosaur_Mayonnaise.png/24px-Dinosaur_Mayonnaise.png"},{id:3,clicked:!1,name:"Prismatic Shard",where:"Mining",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/56/Prismatic_Shard.png/24px-Prismatic_Shard.png"},{id:4,clicked:!1,name:"Void Salmon (Gold|Iridium)",where:"Fishing in the Witch's Swamp",image:"https://stardewvalleywiki.com/mediawiki/images/a/ad/Void_Salmon.png"},{id:5,clicked:!1,name:"Wine (Silver)",where:"Cask",image:"https://stardewvalleywiki.com/mediawiki/images/6/69/Wine.png"}]}]}];a(15);var u=function(){return t.a.createElement("div",{className:"App"},t.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ae0336db.chunk.js.map