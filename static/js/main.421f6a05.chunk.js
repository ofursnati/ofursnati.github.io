(this.webpackJsonpsbp=this.webpackJsonpsbp||[]).push([[0],[,,,,,,,function(e,a,i){},,function(e,a,i){e.exports=i(16)},,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var m=i(0),t=i.n(m),n=i(8),s=i.n(n),l=(i(14),i(2)),p=i(3),g=i(1),d=i(4),r=i(5),w=(i(7),function(e){Object(r.a)(i,e);var a=Object(d.a)(i);function i(e){var m;return Object(l.a)(this,i),(m=a.call(this,e)).state={clicked:!1,imageUrl:"",name:"",clickable:!1,bundle:!1},m.clicked=m.clicked.bind(Object(g.a)(m)),m}return Object(p.a)(i,[{key:"componentDidMount",value:function(){this.setState({imageUrl:this.props.imageUrl}),this.setState({name:this.props.name}),this.setState({clickable:this.props.clickable}),this.props.name.includes("Bundle")&&this.setState({bundle:!0})}},{key:"clicked",value:function(){this.state.clickable&&(!0===this.state.selected?this.setState({selected:!1}):this.setState({selected:!0}))}},{key:"render",value:function(){console.log(this.state);var e=this.state,a=e.selected;return e.bundle?t.a.createElement("div",{className:"bundbox bundle"},t.a.createElement("img",{className:"mynd",alt:"",src:this.state.imageUrl}),this.state.name):t.a.createElement("div",{className:"box ".concat(a?"clicked":""),onClick:this.clicked},t.a.createElement("img",{className:"mynd",alt:"",src:this.state.imageUrl})," ",this.state.name)}}]),i}(m.Component));w.displayName=w.name;var o=function(e){Object(r.a)(i,e);var a=Object(d.a)(i);function i(e){var m;return Object(l.a)(this,i),(m=a.call(this,e)).state={thingsinstate:"",slotImage:"https://stardewvalleywiki.com/mediawiki/images/5/5e/Bundle_Slot.png",goldStarImage:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/47/Gold_Quality_Icon.png/24px-Gold_Quality_Icon.png",bundles:[{name:"Crafts Room",reward:"Bridge Repair",bundles:[{name:"Spring Foraging Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Bundle_Green.png/32px-Bundle_Green.png",reward:{name:"Spring Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/39/Spring_Seeds.png/24px-Spring_Seeds.png"},slots:4,bundle:[{name:"Daffodil",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Daffodil.png/24px-Daffodil.png"},{name:"Dandelion",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b1/Dandelion.png/24px-Dandelion.png"},{name:"Leek",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/57/Leek.png/24px-Leek.png"},{name:"Wild Horseradish",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/90/Wild_Horseradish.png/24px-Wild_Horseradish.png"}]},{name:"Summer Foraging Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Summer Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c4/Summer_Seeds.png/24px-Summer_Seeds.png"},slots:3,bundle:[{name:"Grape",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c2/Grape.png/24px-Grape.png"},{name:"Spice Berry",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c6/Spice_Berry.png/24px-Spice_Berry.png"},{name:"Sweet Pea",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d9/Sweet_Pea.png/24px-Sweet_Pea.png"}]},{name:"Fall Foraging Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Fall Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/55/Fall_Seeds.png/24px-Fall_Seeds.png"},slots:4,bundle:[{name:"Blackberry",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/25/Blackberry.png/24px-Blackberry.png"},{name:"Common Mushroom",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2e/Common_Mushroom.png/24px-Common_Mushroom.png"},{name:"Hazelnut",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Hazelnut.png/24px-Hazelnut.png"},{name:"Wild Plum",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3b/Wild_Plum.png/24px-Wild_Plum.png"}]},{name:"Winter Foraging Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Winter Seeds (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/dd/Winter_Seeds.png/24px-Winter_Seeds.png"},slots:4,bundle:[{name:"Crocus",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Crocus.png/24px-Crocus.png"},{name:"Crystal Fruit",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/16/Crystal_Fruit.png/24px-Crystal_Fruit.png"},{name:"Snow Yam",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Snow_Yam.png/24px-Snow_Yam.png"},{name:"Winter Root",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/11/Winter_Root.png/24px-Winter_Root.png"}]},{name:"Construction Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Charcoal Kiln (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/76/Charcoal_Kiln.png/24px-Charcoal_Kiln.png"},slots:4,bundle:[{name:"Hardwood(10)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Hardwood.png/24px-Hardwood.png"},{name:"Stone(99)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d4/Stone.png/24px-Stone.png"},{name:"Wood(99)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/df/Wood.png/24px-Wood.png"},{name:"Wood(99)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/df/Wood.png/24px-Wood.png"}]},{name:"Exotic Foraging Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",slots:5,reward:{name:"Autumn's Bounty",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Autumn%27s_Bounty.png/24px-Autumn%27s_Bounty.png"},bundle:[{name:"Cactus Fruit",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/32/Cactus_Fruit.png/24px-Cactus_Fruit.png"},{name:"Cave Carrot",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/34/Cave_Carrot.png/24px-Cave_Carrot.png"},{name:"Coconut",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Coconut.png/24px-Coconut.png"},{name:"Maple Syrup",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6a/Maple_Syrup.png/24px-Maple_Syrup.png"},{name:"Morel",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b1/Morel.png/24px-Morel.png"},{name:"Oak Resin",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/40/Oak_Resin.png/24px-Oak_Resin.png"},{name:"Pine Tar",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Pine_Tar.png/24px-Pine_Tar.png"},{name:"Purple Mushroom",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Purple_Mushroom.png/24px-Purple_Mushroom.png"},{name:"Red Mushroom",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e1/Red_Mushroom.png/24px-Red_Mushroom.png"}]}]},{name:"Pantry",reward:"Greenhouse",bundles:[{name:"Spring Crops Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Bundle_Green.png/32px-Bundle_Green.png",reward:{name:"Speed-Gro(20)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/94/Speed-Gro.png/24px-Speed-Gro.png"},slots:4,bundle:[{name:"Cauliflower",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Cauliflower.png/24px-Cauliflower.png"},{name:"Green Bean",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/5c/Green_Bean.png/24px-Green_Bean.png"},{name:"Parsnip",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Parsnip.png/24px-Parsnip.png"},{name:"Potato",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c2/Potato.png/24px-Potato.png"}]},{name:"Summer Crops Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Quality Sprinkler(1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Quality_Sprinkler.png/24px-Quality_Sprinkler.png"},slots:4,bundle:[{name:"Blueberry",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/9e/Blueberry.png/24px-Blueberry.png"},{name:"Hot Pepper",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Hot_Pepper.png/24px-Hot_Pepper.png"},{name:"Melon",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Melon.png/24px-Melon.png"},{name:"Tomato",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/9d/Tomato.png/24px-Tomato.png"}]},{name:"Fall Crops Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Bee House(1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bee_House.png/24px-Bee_House.png"},slots:4,bundle:[{name:"Corn",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f8/Corn.png/24px-Corn.png"},{name:"Egg Plant",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/8f/Eggplant.png/24px-Eggplant.png"},{name:"Pumpkin",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Pumpkin.png/24px-Pumpkin.png"},{name:"Yam",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/52/Yam.png/24px-Yam.png"}]},{name:"Quality Crops Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Preserves Jar(1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1e/Preserves_Jar.png/24px-Preserves_Jar.png"},slots:3,bundle:[{name:"Corn (5) Gold",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f8/Corn.png/24px-Corn.png"},{name:"Melon (5) Gold",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Melon.png/24px-Melon.png"},{name:"Parsnip (5) Gold",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Parsnip.png/24px-Parsnip.png"},{name:"Pumpkin (5) Gold",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Pumpkin.png/24px-Pumpkin.png"}]},{name:"Animal Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Cheese Press (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/79/Cheese_Press.png/24px-Cheese_Press.png"},slots:5,bundle:[{name:"Duck Egg",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Duck_Egg.png/24px-Duck_Egg.png"},{name:"Large Egg (Brown)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Large_Brown_Egg.png/24px-Large_Brown_Egg.png"},{name:"Large Egg",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Large_Egg.png/24px-Large_Egg.png"},{name:"Large Goat Milk",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f2/Large_Goat_Milk.png/24px-Large_Goat_Milk.png"},{name:"Large Milk",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/67/Large_Milk.png/24px-Large_Milk.png"},{name:"Wool",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/34/Wool.png/24px-Wool.png"}]},{name:"Artisan Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Keg (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/7c/Keg.png/24px-Keg.png"},slots:6,bundle:[{name:"Apple",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/7d/Apple.png/24px-Apple.png"},{name:"Apricot",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/fc/Apricot.png/24px-Apricot.png"},{name:"Cheese",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a5/Cheese.png/24px-Cheese.png"},{name:"Cherry",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/20/Cherry.png/24px-Cherry.png"},{name:"Cloth",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/51/Cloth.png/24px-Cloth.png"},{name:"Goat Cheese",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c8/Goat_Cheese.png/24px-Goat_Cheese.png"},{name:"Honey",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c6/Honey.png/24px-Honey.png"},{name:"Jelly",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/05/Jelly.png/24px-Jelly.png"},{name:"Orange",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/43/Orange.png/24px-Orange.png"},{name:"Peach",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e2/Peach.png/24px-Peach.png"},{name:"Pomegranate",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Pomegranate.png/24px-Pomegranate.png"},{name:"Truffle Oil",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3d/Truffle_Oil.png/24px-Truffle_Oil.png"}]}]},{name:"Fish Tank",reward:"Glittering Boulder Removed",bundles:[{name:"River Fish Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Bait (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/ff/Bait.png/24px-Bait.png"},slots:4,bundle:[{name:"Catfish",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/99/Catfish.png/24px-Catfish.png"},{name:"Shad",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ef/Shad.png/24px-Shad.png"},{name:"Sunfish",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/56/Sunfish.png/24px-Sunfish.png"},{name:"Tiger Trout",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/01/Tiger_Trout.png/24px-Tiger_Trout.png"}]},{name:"Lake Fish Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Bundle_Green.png/32px-Bundle_Green.png",reward:{name:"Dressed Spinner (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e8/Dressed_Spinner.png/24px-Dressed_Spinner.png"},slots:4,bundle:[{name:"Bullhead",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Bullhead.png/24px-Bullhead.png"},{name:"Carp",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a8/Carp.png/24px-Carp.png"},{name:"Largemouth Bass",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/11/Largemouth_Bass.png/24px-Largemouth_Bass.png"},{name:"Sturgeon",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/42/Sturgeon.png/24px-Sturgeon.png"}]},{name:"Ocean Fish Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e4/Bundle_Blue.png/32px-Bundle_Blue.png",reward:{name:"Warp Totem: Beach (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Warp_Totem_Beach.png/24px-Warp_Totem_Beach.png"},slots:4,bundle:[{name:"Red Snapper",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d3/Red_Snapper.png/24px-Red_Snapper.png"},{name:"Tilapia",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/73/Tilapia.png/24px-Tilapia.png"},{name:"Tuna",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c5/Tuna.png/24px-Tuna.png"},{name:"Sardine",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/04/Sardine.png/24px-Sardine.png"}]},{name:"Night Fishing Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Small Glow Ring (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6c/Small_Glow_Ring.png/24px-Small_Glow_Ring.png"},slots:3,bundle:[{name:"Bream",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Bream.png/24px-Bream.png"},{name:"Eel",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Eel.png/24px-Eel.png"},{name:"Walleye",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/05/Walleye.png/24px-Walleye.png"}]},{name:"Crab Pot Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Crab Pot (3)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/92/Crab_Pot.png/24px-Crab_Pot.png"},slots:5,bundle:[{name:"Clam",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Clam.png/24px-Clam.png"},{name:"Cockle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/ad/Cockle.png/24px-Cockle.png"},{name:"Crab",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/63/Crab.png/24px-Crab.png"},{name:"Crayfish",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/53/Crayfish.png/24px-Crayfish.png"},{name:"Lobster",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/9f/Lobster.png/24px-Lobster.png"},{name:"Mussel",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Mussel.png/24px-Mussel.png"},{name:"Oyster",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/54/Oyster.png/24px-Oyster.png"},{name:"Periwinkle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1d/Periwinkle.png/24px-Periwinkle.png"},{name:"Shrimp",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Shrimp.png/24px-Shrimp.png"},{name:"Snail",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/d/d2/Snail.png/24px-Snail.png"}]},{name:"Specialty Fish Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Dish o' The Sea (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f0/Dish_o%27_The_Sea.png/24px-Dish_o%27_The_Sea.png"},slots:4,bundle:[{name:"Ghostfish",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/72/Ghostfish.png/24px-Ghostfish.png"},{name:"Pufferfish",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/ba/Pufferfish.png/24px-Pufferfish.png"},{name:"Sandfish",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/bb/Sandfish.png/24px-Sandfish.png"},{name:"Woodskip",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/97/Woodskip.png/24px-Woodskip.png"}]}]},{name:"Boiler Room",reward:"Minecarts Repaired",bundles:[{name:"Blackshith's Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Furnace (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/0f/Furnace.png/24px-Furnace.png"},slots:3,bundle:[{name:"Copper Bar",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Copper_Bar.png/24px-Copper_Bar.png"},{name:"Iron Bar",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6c/Iron_Bar.png/24px-Iron_Bar.png"},{name:"Gold Bar",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Gold_Bar.png/24px-Gold_Bar.png"}]},{name:"Geologist's Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Omni Geode (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/0/09/Omni_Geode.png/24px-Omni_Geode.png"},slots:4,bundle:[{name:"Earth Crystal",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/74/Earth_Crystal.png/24px-Earth_Crystal.png"},{name:"Fire Quartz",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/5b/Fire_Quartz.png/24px-Fire_Quartz.png"},{name:"Frozen Tear",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/ec/Frozen_Tear.png/24px-Frozen_Tear.png"},{name:"Quartz",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/cf/Quartz.png/24px-Quartz.png"}]},{name:"Adventurer's Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Small Magnet Ring",image:"https://stardewvalleywiki.com/mediawiki/images/2/25/Small_Magnet_Ring.png"},slots:2,bundle:[{name:"Bat Wing (10)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/35/Bat_Wing.png/24px-Bat_Wing.png"},{name:"Slime (99)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/38/Slime.png/24px-Slime.png"},{name:"Solar Essence",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Solar_Essence.png/24px-Solar_Essence.png"},{name:"Void Essence",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1f/Void_Essence.png/24px-Void_Essence.png"}]}]},{name:"Bulletin Board",reward:"Friendship",bundles:[{name:"Chef's Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Pink Cake (3)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/32/Pink_Cake.png/24px-Pink_Cake.png"},slots:6,bundle:[{name:"Fiddlehead Fern",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/48/Fiddlehead_Fern.png/24px-Fiddlehead_Fern.png"},{name:"Fried Egg",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/18/Fried_Egg.png/24px-Fried_Egg.png"},{name:"Maki Roll",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/b6/Maki_Roll.png/24px-Maki_Roll.png"},{name:"Maple Syrup",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/6a/Maple_Syrup.png/24px-Maple_Syrup.png"},{name:"Poppy",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/37/Poppy.png/24px-Poppy.png"},{name:"Truffle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f2/Truffle.png/24px-Truffle.png"}]},{name:"Dye Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bundle_Teal.png/32px-Bundle_Teal.png",reward:{name:"Seed Maker (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Seed_Maker.png/24px-Seed_Maker.png"},slots:6,bundle:[{name:"Aquamarine",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a2/Aquamarine.png/24px-Aquamarine.png"},{name:"Duck Feather",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/f/f9/Duck_Feather.png/24px-Duck_Feather.png"},{name:"Red Cabbage",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2d/Red_Cabbage.png/24px-Red_Cabbage.png"},{name:"Red Mushroom",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e1/Red_Mushroom.png/24px-Red_Mushroom.png"},{name:"Sea Urchin",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e7/Sea_Urchin.png/24px-Sea_Urchin.png"},{name:"Sunflower",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/81/Sunflower.png/24px-Sunflower.png"}]},{name:"Field Research Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e4/Bundle_Blue.png/32px-Bundle_Blue.png",reward:{name:"Recycling Machine (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/26/Recycling_Machine.png/24px-Recycling_Machine.png"},slots:4,bundle:[{name:"Chub",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/bd/Chub.png/24px-Chub.png"},{name:"Frozen Geode",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/b/bf/Frozen_Geode.png/24px-Frozen_Geode.png"},{name:"Nautilus Shell",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a4/Nautilus_Shell.png/24px-Nautilus_Shell.png"},{name:"Purple Mushroom",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Purple_Mushroom.png/24px-Purple_Mushroom.png"}]},{name:"Fodder Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Heater",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/93/Heater.png/24px-Heater.png"},slots:3,bundle:[{name:"Apple",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/7/7d/Apple.png/24px-Apple.png"},{name:"Hay",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Hay.png/24px-Hay.png"},{name:"Wheat",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/e/e2/Wheat.png/24px-Wheat.png"}]},{name:"Enchanter's Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Gold Bar (5)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Gold_Bar.png/24px-Gold_Bar.png"},slots:4,bundle:[{name:"Oak Resin",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/4/40/Oak_Resin.png/24px-Oak_Resin.png"},{name:"Pomegranate",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Pomegranate.png/24px-Pomegranate.png"},{name:"Rabbit's Foot",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/ca/Rabbit%27s_Foot.png/24px-Rabbit%27s_Foot.png"},{name:"Wine",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/69/Wine.png/24px-Wine.png"}]}]},{name:"Vault",reward:"Bus Repair",bundles:[{name:"2,500 Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Bundle_Red.png/32px-Bundle_Red.png",reward:{name:"Chocolate Cake (3)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/87/Chocolate_Cake.png/24px-Chocolate_Cake.png"},slots:1,bundle:[{name:"2,500g",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]},{name:"5,000 Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/9/95/Bundle_Orange.png/32px-Bundle_Orange.png",reward:{name:"Quality Fertilizer (30)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a0/Quality_Fertilizer.png/24px-Quality_Fertilizer.png"},slots:1,bundle:[{name:"5,000g",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]},{name:"10,000 Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Bundle_Yellow.png/32px-Bundle_Yellow.png",reward:{name:"Lightning Rod (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/62/Lightning_Rod.png/24px-Lightning_Rod.png"},slots:1,bundle:[{name:"10,000g",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]},{name:"25,000 Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"Crystalarium (1)",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/6/63/Crystalarium.png/24px-Crystalarium.png"},slots:1,bundle:[{name:"25,000g",image:"https://stardewvalleywiki.com/mediawiki/images/f/f2/Bundle_Purchase.png"}]}]},{name:"Abandoned JojaMart",reward:"Movie Theater",bundles:[{name:"The Missing Bundle",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/a/a1/Bundle_Purple.png/32px-Bundle_Purple.png",reward:{name:"none",image:""},slots:5,bundle:[{name:"Ancient Fruit (5 Gold)",image:"https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png"},{name:"Caviar",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/8/89/Caviar.png/24px-Caviar.png"},{name:"Dinosaur Mayonnaise",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/c/c3/Dinosaur_Mayonnaise.png/24px-Dinosaur_Mayonnaise.png"},{name:"Prismatic Shard",image:"https://stardewvalleywiki.com/mediawiki/images/thumb/5/56/Prismatic_Shard.png/24px-Prismatic_Shard.png"},{name:"Void Salmon (Gold|Iridium)",image:"https://stardewvalleywiki.com/mediawiki/images/a/ad/Void_Salmon.png"},{name:"Wine (Silver)",image:"https://stardewvalleywiki.com/mediawiki/images/6/69/Wine.png"}]}]}]},m.function=m.function.bind(Object(g.a)(m)),m}return Object(p.a)(i,[{key:"function",value:function(){this.setState({thingsinstate:"15"})}},{key:"render",value:function(){var e=this.state.bundles;return t.a.createElement("div",{className:"holder"},e.map((function(e){return t.a.createElement("div",{className:"bigBox"},t.a.createElement("h2",null,e.name),"Reward: ",e.reward,t.a.createElement("div",{className:"bundleBox"},e.bundles.map((function(e){return t.a.createElement("div",null,t.a.createElement(w,{clickable:!1,name:e.name,imageUrl:e.image}),"Reward: ",t.a.createElement("br",null),t.a.createElement("img",{alt:"",src:e.reward.image})," ",t.a.createElement("br",null),e.reward.name,t.a.createElement("br",null),"Slots: ",e.slots,t.a.createElement("div",null,e.bundle.map((function(e){return t.a.createElement("div",null,t.a.createElement(w,{clickable:!0,name:e.name,imageUrl:e.image}))}))))}))))})))}}]),i}(m.Component);o.displayName=o.name;var u=o;i(15);var h=function(){return t.a.createElement("div",{className:"App"},t.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.421f6a05.chunk.js.map