window.JST = {};
JST['colorCard'] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      var c;
    
      c = this.color.color.attributes;
    
      __out.push(' \n<section id="');
    
      __out.push(__sanitize(c.hex));
    
      __out.push('"data-hex="#');
    
      __out.push(__sanitize(c.hex));
    
      __out.push('" data-r="');
    
      __out.push(__sanitize(c.rgb.r));
    
      __out.push('"  data-g="');
    
      __out.push(__sanitize(c.rgb.g));
    
      __out.push('"  data-b="');
    
      __out.push(__sanitize(c.rgb.b));
    
      __out.push('" data-brightness="');
    
      __out.push(__sanitize(c.brightness));
    
      __out.push('"style=" background-color:');
    
      __out.push(__sanitize(c.brightness < 0.5 ? "hsl(0,0%, 90%)" : "hsl(0,0%, 10%)"));
    
      __out.push('; color:#');
    
      __out.push(__sanitize(c.hex));
    
      __out.push(';">\n  \n  <div class="sample" style="background-color:#');
    
      __out.push(__sanitize(c.hex));
    
      __out.push(';" > </div>\n  <div class="details">\n      <h1 >#');
    
      __out.push(__sanitize(c.hex));
    
      __out.push('</h1>\n      <h2>');
    
      __out.push(__sanitize(c.name));
    
      __out.push('</h2>\n  </div>\n      <div class="others">\n        <p>RAL ');
    
      __out.push(__sanitize(c.ral));
    
      __out.push('</p>\n        <p>RGB ');
    
      __out.push(__sanitize(c.rgb.rgb));
    
      __out.push('</p>\n      </div>\n\n</section>\n\n\n\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['home'] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
    
      __out.push('<header class="fixed">\n  <h1 class="colorizing">Coloric</h1>\n</header>\n\n\n<section id="color"class="color"></section> \n\n<section id="roll" class="roll"></section>\n\n<footer class="fixed">\n  <p class="colorizing"> A thing by @adrianleb &amp; @karinvsoest</p>\n</footer>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};