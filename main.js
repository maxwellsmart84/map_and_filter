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
var question4Arr = _.chain(items)
                  .map(function(el,idx,arr){
                    return {title: el.title, materials: el.materials}
                  })
                  .filter(function(val){
                  val.materials === "wood"}
                  )
                  .value();

var question4Arr = var question9Arr = _.map(items, function(el,idx,arr){
                    return {title: el.title, materials: el.materials}
                  });

var question4Arr = _.filter(question4Arr, function(el){
      console.log(el.materials);
})
