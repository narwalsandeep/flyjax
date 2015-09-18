/**
 * @author narwal sandeep at gee mail dot com
 * @param $
 * 
 * @license Licensed under the MIT licenses:
 *          http://www.opensource.org/licenses/mit-license.php
 */
(function($) {

	var defaults = {
		identifier : "flyjax",
		disableSubmitButton : true,
		disableSubmitButtonText : "Sending ...",

		noty : "", // user must assign noty from config e.g. noty:noty
		enableNoty : true,
		notySuccess : "",
		notyFailure : "",
		notyLayout : 'topRight',
		notyTheme : 'relax',

	}

	var SubmitMethod = function(form, options, success, error) {

		this.options = $.extend(defaults, options);
		this.init(form, success, error);
	}

	SubmitMethod.prototype = {
		init : function(form, success, failure) {
			var btn = $(this.form).find("[type=submit]");
			var obj = this;
			this.form = $(form);
			obj.options = this.options;

			// in case noty is not defined, disable its use
			if (obj.options.noty == "") {
				obj.options.enableNoty = false;
			}

			this.form.submit(function(event) {
				if (obj.options.disableSubmitButton) {
					obj.toggleSubmitButton(true);
				}
				var form = $(this);
				$.ajax({
					type : form.attr('method'),
					url : form.attr('action'),
					data : form.serialize()
				}).done(function() {
					obj.triggerSuccess(obj, success, form);
				}).fail(function() {
					obj.triggerFailure(obj, failure, form);
				});
				event.preventDefault();
			});
		},
		toggleSubmitButton : function(state) {
			if (state) {
				$(btn).text(obj.options.disableSubmitButtonText);
				$(btn).prop("disabled", true);
			} else {
				$(btn).text(obj.options.disableSubmitButtonText);
				$(btn).prop("disabled", false);
			}

		},
		triggerSuccess : function(obj, success, form) {
			success(form);
			if (obj.options.enableNoty) {
				obj.options.noty({
					text : obj.options.notySuccess,
					type : "success",
					layout : obj.options.notyLayout,
					theme : obj.options.notyTheme

				});
			}
			obj.toggleSubmitButton(false);

		},
		triggerFailure : function(obj, failure, form) {
			failure(form);
			if (obj.options.enableNoty) {
				obj.options.noty({
					text : obj.options.notyFailure,
					type : "error",
					layout : obj.options.notyLayout,
					theme : obj.options.notyTheme
				});
			}
			obj.toggleSubmitButton(false);

		}
	}

	$.fn.flyjax = function(options, successCallback, errorCallback) {
		new SubmitMethod(this, options, successCallback, errorCallback);
	}

}(jQuery));