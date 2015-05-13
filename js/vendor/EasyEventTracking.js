function EasyEventTracking(afterTrackEventFires, errorLog) {
  // 'use strict';

  var _this = this;
  var trackSelector = "track";
  var _errorLog = errorLog || console;

  if(!ga){
    _errorLog.log("Google analytics was not supplied to the constructor. Auto-event tracking won't work.");
  }

  var _afterTrackEventFires = afterTrackEventFires || function(trackEventParam){};

  this.bind = function(selector){

    $(selector).click(function(element){
      _this.trackEvent('click', this);
    });

    $(selector + "-blur").blur(function(element){
      _this.trackEvent('blur', this);
    });

    $(selector + "-focus").focus(function(element){
      _this.trackEvent('focus', this);
    });

    $(selector + "-mouseover").mouseover(function(element){
      _this.trackEvent('mouseover', this);
    });
  };

  this.trackEvent = function(interaction, element){
    var trackevent = this.inferTrackingDetails(interaction, element);
    ga('send', 'event', trackevent[0], trackevent[1], trackevent[2], trackevent[3]);
    _afterTrackEventFires(trackevent);
  };

  this.inferTrackingDetails = function(interaction, fromElement){

    var category = $(fromElement).data('category') || "AutoTrack";
    var action = $(fromElement).data('action') || interaction;
    var label = $(fromElement).data('label') || window.location.pathname + "#" + fromElement.id; // optional
    var value = $(fromElement).data('value') || $(fromElement).text(); // optional
    var nonInteraction = $(fromElement).data('non-interaction') || false; // optional

    return [category, action, label, value];
  };

  _this.bind("." + trackSelector);
}
