(function(angular) {
	'use strict';

	angular.module('xpsui:directives')
	.directive('xpsuiPortalWidgetShowcaseView', ['xpsui:logging', '$compile', '$http', '$sce', '$route', '$interval', function(log, $compile, $http, $sce, $route, $interval) {
		return {
			restrict: 'A',
			scope: {
				data: '=xpsuiPortalWidgetShowcaseView'
			},
			template: '<article ng-repeat="c in model" style="position:absolute;" ng-show="visibleIndex == $index"><img ng-show="c.img.img" ng-src="{{c.img.img}}" style="width: 656px !important; height: 492px !important;"></img><div style="position: absolute; bottom: 8px; width: 100%; background-color: rgba(255, 255, 255, 0.4); padding: 5px;"><a ng-click="navigate(c.id)" ng-bind-html="makeSafe(c.title)"></a><div ng-bind-html="makeSafe(c.abstract)"></div></div></article>',
			link: function(scope, elm, attrs, ctrls) {
				log.group('portal-widget-category-view Link');

				scope.model = [];

				scope.visibleIndex = 0;

				elm.css('height', '492px');

				$interval(function() {
					++scope.visibleIndex;
					if (scope.visibleIndex >= scope.model.length) {
						scope.visibleIndex = 0;
					}
				}, 5000);

				function findFirstOfType(obj, type) {
					for (var j = 0; j < obj.length; ++j) {
						if (obj[j].meta.name === type) {
							return obj[j].data;
						}
					}
				}

				scope.makeSafe = function(str) {
					if (typeof str === 'string') {
						return $sce.trustAsHtml(str);
					}

					return '';
				};

				$http({
					method : 'POST',
					url: '/portalapi/getByTags',
					data: {
						tags: scope.data.data.tags
					}
				})
				.success(function(data, status, headers, config){
					if (data && data.length > 0) {
						scope.model = [];
					   	for (var i = 0; i < data.length; ++i) {
							scope.model.push({
								id: data[i].id,
								title: findFirstOfType(data[i].data, 'title'),
								abstract: findFirstOfType(data[i].data, 'abstract'),
								img: findFirstOfType(data[i].data, 'image'),
							});
					   }
				
						console.log(scope.model);
					}
				}).error(function(err) {
					notificationFactory.error(err);
				});

				scope.navigate = function(aid) {
					$route.updateParams({id: aid});
				};

				log.groupEnd();
			}
		};
	}]);

}(window.angular));


