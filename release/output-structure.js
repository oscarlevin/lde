var OutputStructure,Structure,extend=function(t,r){function e(){this.constructor=t}for(var u in r)hasProp.call(r,u)&&(t[u]=r[u]);return e.prototype=r.prototype,t.prototype=new e,t.__super__=r.prototype,t},hasProp={}.hasOwnProperty;"undefined"!=typeof require&&null!==require?Structure=require("./structure").Structure:"undefined"!=typeof WorkerGlobalScope&&null!==WorkerGlobalScope?null==WorkerGlobalScope.Structure&&importScripts("structure.js"):null!=("undefined"!=typeof self&&null!==self?self.importScripts:void 0)&&null==self.Structure&&importScripts("release/structure.js"),OutputStructure=function(t){function r(){r.__super__.constructor.apply(this,arguments),this.markDirty()}return extend(r,Structure),r.prototype.className=Structure.addSubclass("OutputStructure",r),r.prototype.markDirty=function(t){return null==t&&(t=!0),this.dirty=t},r.prototype.feedback=function(t){var r;return null!=(r=this.origin)?r.feedback(t):void 0},r}(),"undefined"!=typeof exports&&null!==exports&&(exports.OutputStructure=OutputStructure);
//# sourceMappingURL=output-structure.js.map