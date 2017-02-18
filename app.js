var pizzaMaker = angular.module("PizzaMaker", []);

pizzaMaker.controller('PizzaMakerController', ['$scope', 'LocalStorageService', 
					function($scope, LocalStorageService){
	    
	    var pmc = this;
	    
	    pmc.pizzas = [];
	    
	    pmc.topping_list = [
	    	{name: ""},
	        {name: "Pepperoni"},
	        {name: "Italian Sausage"},
	        {name: "Anchovies"},
	        {name: "Mushrooms"},
	        {name: "Pineapple"},
	        {name: "Red Onions"},
	        {name: "Bell Peppers"},
	        {name: "Black Olives"},
	        {name: "Ham"}
	        ];
	        
	   pmc.topping1 = pmc.topping_list[0];
	   pmc.topping2 = pmc.topping_list[0];
	   pmc.topping3 = pmc.topping_list[0];
	
		
		pmc.sizes = [
			{name: "Small", code: "SM"},
			{name: "Medium", code: "MD"},
			{name: "Large", code: "LG"}
			];
		
		pmc.size = pmc.sizes[0];
		
		pmc.EditPizza = false;
		

		
		pmc.remove = function($index){

			pmc.pizzas = pmc.latestData();
			pmc.pizzas.splice($index, 1);
			return LocalStorageService.setData('pizza-storage', angular.toJson(pmc.pizzas));		
		
		};
    
    	pmc.edit = function(item, psize, tone, ttwo, tthree){
			item.size = psize;
			item.t1 = tone;
			item.t2 = ttwo;
			item.t3 = tthree;
    	};
    
		pmc.latestData = function() {
        	return LocalStorageService.getData('pizza-storage');
    	};
	
    	pmc.update = function(psize, tone, ttwo, tthree) {
			pmc.pizzas = pmc.latestData();
			if(pmc.pizzas == null){
				pmc.pizzas = [];
				
			}
			var pizza = { size: psize, t1: tone, t2: ttwo, t3: tthree};
			console.log(angular.toJson(pizza));
			pmc.pizzas.push(pizza);
        	return LocalStorageService.setData('pizza-storage', angular.toJson(pmc.pizzas));
	    };
    
    	if(pmc.pizzas != null){
			pmc.pizzas = pmc.latestData();
		}else{
			console.log("crikey");
		}
	}
]);

pizzaMaker.factory("LocalStorageService", function($window, $rootScope) {
    
    angular.element($window).on('storage', function(event) {
        if (event.key === 'pizza-storage') {
            $rootScope.$apply();
        }
    });    
    
    return {
        setData: function(key, val) {
			
            $window.localStorage && $window.localStorage.setItem(key, val);
            return this;
        },
        getData: function(key) {
            
            var val = $window.localStorage && $window.localStorage.getItem(key);
            
            var data = angular.fromJson(val);
            
            return data; 
        }
    };
});