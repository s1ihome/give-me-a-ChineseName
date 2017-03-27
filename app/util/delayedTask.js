/* eslint-disable */
/**
 * 延时加载
 */

const single = (function(){
    let unique
    function getInstance(...arge){
        if( unique === undefined){
            unique = new DelayedTask(arge);
        }
        return unique;
    }

    const DelayedTask = function (fn, scope, args) {
    	this._fn = fn || function () {};
    	this._scope = scope || undefined;
    	this._args = args || [];
    	this._id = null;
    };

    DelayedTask.prototype = {
    	delay: function (delay, fn, scope, args) {
    		let me = this

    		this._fn = fn || this._fn;
    		this._scope = scope || this._scope;
    		this._args = args || this._args;
    		this.cancel();
    		this._id = window.setInterval(function () {
    			window.clearInterval(me._id);
    			me._id = null;
    			me._fn.apply(me._scope, me._args);
    		}, delay);
    	},

    	cancel: function () {
    		if (this._id) {
    			window.clearInterval(this._id);
    			this._id = null;
    		}
    	}
    };
    return {
        getInstance: getInstance
    }
})()

export default single
