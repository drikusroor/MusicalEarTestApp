module ExperimentApp {
  "use strict";

  export class ConfigService {
    language: string;

    static $inject = [];
    constructor(

    )
    {
      this.language = "TR";
    }

    public setLanguage = (language):void => {
      this.language = language;
    }
  }
  function service(): ConfigService {
    return new ConfigService();
  }
  angular.module('ExperimentApp').service('ConfigService', service);
}