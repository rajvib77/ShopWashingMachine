
		
	

angular.module('product_portal',[])
		.controller('product_portal_control',function($scope,$http){
			
			var products = []; 

			$scope.more_details = false;

			$http.get('json/machine.json')
			.success(function(resp){
				$scope.products = resp.ProductsList;
				});
			




		// $scope.delete = function(ind){
		// 	var i = getIndex(ind);
		// 	$scope.products.splice(i,1);
		// };

		function getIndex(prodId)
		{
			for (var i = 0; i <$scope.products.length; i++) {
		        if($scope.products[i].ProductInfo.p_product_id == prodId){
							return i;
						}
			}
		}
		// $scope.addProd = function(){
		// 		$scope.products.push({"fullName":$scope.fname,"shortName":$scope.sname,"imageUrl":$scope.image,"price":$scope.price});
		// 		$scope.fname='';
		// 		$scope.sname='';
		// 		$scope.image='';
		// 		$scope.price='';
		// 	};

		$scope.get_details = function(productId){
			
			if($scope.more_details == true)
			{
				$scope.more_details = false;
			}
			else 
			{
				$scope.more_details = true;
			}
			var i = getIndex(productId);
			$scope.edit_index = i;

			//alert($scope.edit_index);

			$scope.imageUrl = $scope.products[i].imageURLs.lg;
			$scope.brandName = $scope.products[i].ProductInfo.Brand;
			$scope.itemNo = $scope.products[i].ProductInfo.p_product_item_number;
			$scope.productId = $scope.products[i].ProductInfo.p_product_id;
			$scope.price = $scope.products[i].ProductInfo.p_product_price;
			$scope.pRating = $scope.products[i].ProductInfo.p_product_rating;
			$scope.pDesc = $scope.products[i].ProductInfo.p_product_description;

			

			// $scope.e_sname = $scope.products[i].shortName;
			// $scope.e_price = $scope.products[i].price;
			// $scope.edit_div = true;
			
		};

		



	});