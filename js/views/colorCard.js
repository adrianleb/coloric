// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Dot.Views.ColorCard = (function(_super) {

    __extends(ColorCard, _super);

    function ColorCard() {
      return ColorCard.__super__.constructor.apply(this, arguments);
    }

    ColorCard.prototype.template = JST['colorCard'];

    ColorCard.prototype.className = "isle colorize";

    ColorCard.prototype.initialize = function(color) {
      this.model = color;
      this.hex = this.model.color.attributes.hex;
      this.name = this.model.color.attributes.name;
      this.brightness = this.model.color.attributes.brightness;
      this.$el.attr('id', "" + this.hex);
      return this.render();
    };

    ColorCard.prototype.render = function() {
      return this.$el.html(this.template({
        color: this.model
      }));
    };

    return ColorCard;

  })(Backbone.View);

}).call(this);
