var app = angular.module('myApp', ['ngSanitize']);

app.controller('MissionsController', ['$scope', '$sce',
	function ContentCtrl($scope, $sce) {
		$scope.missions = {};
		$scope.missions.CGI = 
		[
			{
				"title" : "SharePoint Online Presentation", 
				"description" : "<p>Goal is to aim open source developper to upgrade to SharePoint</p>",
				"skills" : [
					{
						"name": "SharePoint Online",
						"percent": "80",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "PowerPoint",
						"percent" : "20",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["Script Editor", "D3JS", "CanvasJS", "JSOM"],
				"period" : "04/2017 to 11/2017",
				"imgCustomer" : "../img/cgi.png",
				"imgFirm" : "../img/cgi.png"
			},
			{
				"title" : "Defense Ministery: BdRH", 
				"description" : "<p>This mission is aiming human ressources.</p><p>They have an intranet to manage massive data. The goal here, was to make data available, sorted and clear.</p>",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "60",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "20",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "20",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["WebParts", "Application Page", "Packaging", "Architecture."],
				"period" : "05/2015 to now",
				"imgCustomer" : "../img/ladef.jpg",
				"imgFirm" : "../img/cgi.png"
			},
			{
				"title" : "Education Ministery : Pléiade", 
				"description" : "<p>Pleiade is the intranet/extranet of the education, teaching and research.</p><p>This portal offer organized information by profession or by structure of the central administration.</p><p>Pleiade do also an S.S.O for application used often by their users</p>",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "80",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "15",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "5",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["WebParts", "Application Page", "Event Receiver", "Timer Jobs", "Packaging", "Custom Forms", "How to", "Describe", "Tell"],
				"period" : "06/2015 to 01/2017",
				"imgCustomer" : "../img/educ.png",
				"imgFirm" : "../img/cgi.png"
			}
		];
		$scope.missions.Hawaii =
		[
			{
				"title" : "Education Ministery : ONISEP", 
				"description" : "Intranet of Onisep on SharePoint 2013",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "40",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "20",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "40",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["Formations", "tell technics"],
				"period" : "10/2014 to 04/2015",
				"imgCustomer" : "../img/onisep.png",
				"imgFirm": "../img/hawaii.jpg"
			},
			{
				"title" : "SAFRAN : Installation", 
				"description" : "Automated SharePoint Installation",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "100",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "0",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "0",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["XML installation of SharePoint Apps Management in a total handless installation"],
				"period" : "07/2014",
				"imgCustomer" : "../img/safran.png",
				"imgFirm": "../img/hawaii.jpg"
			},
			{
				"title" : "Transport : Eurovia", 
				"description" : "Evolution on demand",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "80",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "10",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "10",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["WebParts", "Workflow"],
				"period" : "04/2014",
				"imgCustomer" : "../img/eurovia.png",
				"imgFirm": "../img/hawaii.jpg"
			},
			{
				"title" : "SemPariScene", 
				"description" : "Intranet of the SemPariSeine",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "90",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "0",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "10",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["Get the customer needs then implente it"],
				"period" : "05/2014",
				"imgCustomer" : "../img/sempariscene.jpeg",
				"imgFirm": "../img/hawaii.jpg"
			}
		];
		$scope.missions.vNext =
		[
			{
				"title" : "ADP", 
				"description" : "Develop SharePoint search and exchanges between two systems",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "80",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "10",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "10",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["WCF", "WebParts"],
				"period" : "03/2013 to 04/2014",
				"imgCustomer" : "../img/adp.svg",
				"imgFirm": "../img/vnext.png"
			},
			{
				"title" : "SONEPAR", 
				"description" : "An intranet has just been release, administrators have to be trained",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "20",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "0",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "80",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["How to"],
				"period" : "In parallele",
				"imgCustomer" : "../img/sonepar.jpg",
				"imgFirm": "../img/vnext.png"
			},
			{
				"title" : "RTE", 
				"description" : "SharePoint migration from 2007 to 2010",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "60",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "20",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "20",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["Little Windows Forms Applications to help the migration"],
				"period" : "12/2012",
				"imgCustomer" : "../img/rte.png",
				"imgFirm": "../img/vnext.png"
			},
			{
				"title" : "L'Oréal", 
				"description" : "Dashboard SharePoint",
				"skills" : [
					{
						"name": "SharePoint",
						"percent": "100",
						"progressColor" : "progress-bar-success"
						
					},
					{
						"name" : "Documentation",
						"percent" : "0",
						"progressColor" : "progress-bar-info"
					},
					{
						"name" : "Communication",
						"percent" : "0",
						"progressColor" : "progress-bar-info"
					}
				],
				"technics": ["Ajax WebParts"],
				"period" : "11/2012",
				"imgCustomer" : "../img/loreal.jpg",
				"imgFirm": "../img/vnext.png"
			}
		];
		$scope.missions.CGI.forEach(function(element) {
			element.description = $sce.trustAsHtml(element.description);
		}, this);
		$scope.missions.Hawaii.forEach(function(element) {
			element.description = $sce.trustAsHtml(element.description);
		}, this);
		$scope.missions.vNext.forEach(function(element) {
			element.description = $sce.trustAsHtml(element.description);
		}, this);

}])
.directive('myMission', function() {
	return {
		template: `<div class="col-md-8">
						<div class="container">
							<span class="col-md-2" style="font-size: 20px;">{{mission.period}}</span>
							<span class="col-md-6" style="font-size: 25px;text-align: center;font-weight: bold;">{{mission.title}}</span>
						</div>
						<br />
						<p ng-bind-html="mission.description"></p>
						<h4>Skills Used</h4>
						<div class="row" ng-repeat="skill in mission.skills">
							<div class="col-md-2">
										{{skill.name}}
							</div>
							<div class="col-md-8">
								{{skill.percent}}%
								<div class="progress">
									<div class="progress-bar {{skill.progressColor}} progress-bar-striped" role="progressbar" aria-valuenow="{{skill.percent}}" aria-valuemin="0" aria-valuemax="100" style="width: {{skill.percent}}%"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3">
								<h4>Technical part</h4>
								<ul ng-repeat="technic in mission.technics">
									<li ng-show="$index < 3" class="glyphicon glyphicon-ok">{{technic}}</li>
								</ul>
							</div>
							<div class="col-md-3">
								<ul ng-repeat="technic in mission.technics">
									<li ng-show="$index >= 3 && $index <= 6" class="glyphicon glyphicon-ok">{{technic}}</li>
								</ul>
							</div>
							<div class="col-md-3">
								<ul ng-repeat="technic in mission.technics">
									<li ng-show="$index >= 6" class="glyphicon glyphicon-ok">{{technic}}</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-md-2">
						<div class="row">
							<img class="img-rounded logo" ng-src="{{mission.imgCustomer}}" height="100px"/>
							<br/>
							<img class="img-rounded logo" ng-src="{{mission.imgFirm}}" height="100px"/>
						</div>
					</div>`
	};
});

app.controller('AbilitiesController', ['$scope', function($scope) {
    $scope.getNumber = function (num) {
        return new Array(num);
    };
			  $scope.skillsLeft = [
						{
							name: 'SharePoint',
							level: 5
						},
						{
							name: 'C#',
							level: 4
						},
						{
							name: 'ASP.NET',
							level: 4
						},
						{
							name: 'Web Langages (HTML/CSS)',
							level: 4
						},
						{
							name: 'JavaScript (jQuery, Angular, ClientContext)',
							level: 4
						},
						{
							name: 'Powershell',
							level: 3
						},
				  ];
			  $scope.skillsRight = [
						{
							name: 'SQL',
							level: 2
						},
						{
							name: 'PHP',
							level: 2
						},
						{
							name: 'XML',
							level: 3
						},
						{
							name: 'JSON',
							level: 4
						},
						{
							name: 'UML',
							level: 2
						}
				  ];
			  $scope.languages = [
						{
							name: 'French (Mother tongue)',
							level: 5
						},
						{
							name: 'English',
							level: 4
						}
				]
				$scope.toolsLeft = [
						{
							name: 'Visual Studio',
							level: 5
						},
						{
							name: 'Visual Studio Code',
							level: 3
						},
						{
							name: 'TFS (Branch, Merge, Commit)',
							level: 4
						},
						{
							name: 'Notepad++',
							level: 4
						}
				  ];
			  $scope.toolsRight = [
						{
							name: 'Office (Word/PowerPoint/Outlook)',
							level: 4
						},
						{
							name: 'Filezilla',
							level: 4
						},
						{
							name: 'Chrome & Firefox',
							level: 4
						}
				  ];
			}]);