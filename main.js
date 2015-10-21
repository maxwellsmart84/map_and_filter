//Question 1
var priceArr = _.pluck(items, "price");
var priceSum = _.chain(items)
              .pluck( "price")
              .reduce(function(memo, num){return memo+num; 0})
              .value();
var priceAvg = priceSum/priceArr.length;
$('#answer1').text(priceAvg);
//Question 2

var price14to18 = _.filter(priceArr, function(num) {return num >= 14 && num <= 18});
$('#answer2').text(price14to18);

//Question 3
var question3Arr = _.map(items, function(el,idx,arr){
          return {price: el.price, title: el.title, currCode: el.currency_code};
        });

var GBPFilter = _.filter(question3Arr, function(val){
              return val.currCode === "GBP"
});

$('#answer3').text("Item:" + " " + GBPFilter[0].title + " | " + "Price:" + " " + "£" + GBPFilter[0].price);

//Question 4
// var question4Arr = _.chain(items)
//                   .map(function(el,idx,arr){
//                     return {title: el.title, materials: el.materials}
//                   })
//                   .filter(function(val){
//                   val.materials === "wood"}
//                   )
//                   .value();

var question4Arr = _.map(items, function(el,idx,arr){
                    return {title: el.title, materials: el.materials}
                  });

var matWood = _.filter(question4Arr, function(el, idx, arr){
              return _.contains(el.materials, "wood");
});

var finalName = _.pluck(matWood, 'title')
$('#answer4').text("Items: " + finalName)


//Question 5

var material8 = _.filter(question4Arr, function(el, idx, arr){
          return el.materials.length >= 8
});
var material8HTML = _.each(material8, function(el, idx){
$('#answer5').text("Name:" + material8[idx].title + "Number of" + material8[idx].materials.length + "Materials: " + material8[idx].materials);
});

//Question 6
var question6Arr = _.map(items,function(el, idx, arr){
      return {whoMade: el.who_made}
});

var selfMade=_.filter(question6Arr, function(el, idx, arr){
      return el.whoMade === "i_did"
});
$('#answer6').text(selfMade.length);
