var AppInyection=angular.module('AppInyection',[]);
AppInyection.controller("ControladorInyection", function($scope)
{
  $scope.resultado="POST";
  $scope.contenidoTexto="CONTENIDO DEL POST";
  $scope.ejecutarAccion=function()

  {
  $scope.resultado=$scope.contenidoTexto;
  };

});
