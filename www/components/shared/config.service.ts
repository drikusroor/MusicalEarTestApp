module ExperimentApp {
  "use strict";

  export class ConfigService {
    language: string;
    amountOfTrials: number;

    static $inject = [];
    constructor(

    )
    {
      this.language = "TR";
      this.amountOfTrials = 2;
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