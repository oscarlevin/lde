var InputExpression,InputModifier,InputStructure,Structure,extend=function(t,r){function e(){this.constructor=t}for(var u in r)hasProp.call(r,u)&&(t[u]=r[u]);return e.prototype=r.prototype,t.prototype=new e,t.__super__=r.prototype,t},hasProp={}.hasOwnProperty;"undefined"!=typeof require&&null!==require?Structure=require("./structure").Structure:"undefined"!=typeof WorkerGlobalScope&&null!==WorkerGlobalScope?null==WorkerGlobalScope.Structure&&importScripts("structure.js"):null!=("undefined"!=typeof self&&null!==self?self.importScripts:void 0)&&null==self.Structure&&importScripts("release/structure.js"),InputStructure=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return extend(r,Structure),r.prototype.className=Structure.addSubclass("InputStructure",r),r.prototype.markDirty=function(t){var r;if(null==t&&(t=!0),this.dirty=t,t)return null!=(r=this.parentNode)?r.markDirty():void 0},r.prototype.feedback=function(t){return t.subject=this.id(),Structure.feedback(t)},r}(),InputExpression=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return extend(r,InputStructure),r.prototype.className=Structure.addSubclass("InputExpression",r),r.prototype.updateData=function(){var t,r,e,u,o,n,i,p,s;for(this.clearAttributesFromModifiers(),s=[],t=0,u=(n=this.getConnectionsIn()).length;t<u;t++)r=n[t],(p=this.getConnectionSource(r))instanceof InputModifier&&s.push(p);for(s.sort(function(t,r){return t===r?0:t.isEarlierThan(r)?-1:1}),i=[],e=0,o=s.length;e<o;e++)p=s[e],i.push(p.updateDataIn(this));return i},r.prototype.setCameFromModifier=function(t){return this.setAttribute("_from modifier "+t,!0)},r.prototype.getCameFromModifier=function(t){return this.getAttribute("_from modifier "+t)},r.prototype.clearAttributesFromModifiers=function(){var t,r,e;r=this.attributes,e=[];for(t in r)hasProp.call(r,t)&&("_from modifier "===t.slice(0,15)?(delete this.attributes[t],e.push(delete this.attributes[t.slice(15)])):e.push(void 0));return e},r}(),InputModifier=function(t){function r(){r.__super__.constructor.call(this)}return extend(r,InputStructure),r.prototype.className=Structure.addSubclass("InputModifier",r),r.prototype.insertChild=function(){},r.prototype.updateConnections=function(){},r.prototype.updateDataIn=function(t){},r}(),"undefined"!=typeof exports&&null!==exports&&(exports.InputStructure=InputStructure,exports.InputExpression=InputExpression,exports.InputModifier=InputModifier);
//# sourceMappingURL=input-structure.js.map
