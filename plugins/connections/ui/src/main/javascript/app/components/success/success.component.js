/*!
 * Copyright 2019 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
  'text!./success.html',
  'pentaho/i18n-osgi!connections.messages',
  'css!./success.css'
], function (template, i18n) {

  'use strict';

  var options = {
    bindings: {},
    controllerAs: "vm",
    template: template,
    controller: successController
  };

  successController.$inject = ["$state", "$stateParams"];

  function successController($state, $stateParams) {
    var vm = this;
    vm.$onInit = onInit;
    vm.onCreateNew = onCreateNew;
    vm.onEditConnection = onEditConnection;

    function onInit() {
      vm.data = $stateParams.data;

      vm.congratulationsLabel = i18n.get('connections.final.congratulationsLabel');
      vm.ready = vm.data.edit ? i18n.get('connections.final.readyUpdated') : i18n.get('connections.final.readyCreate');
      vm.question = i18n.get('connections.final.question');
      vm.createNewConnection = i18n.get('connections.final.createNewConnection');
      vm.editConnection = i18n.get('connections.final.editConnection');
      vm.closeLabel = i18n.get('connections.final.closeLabel');
    }

    function onCreateNew() {
      $state.go("intro");
    }

    function onEditConnection() {
      vm.data.state = "edit";
      $state.go("intro", {data: vm.data});
    }
  }

  return {
    name: "success",
    options: options
  };

});
