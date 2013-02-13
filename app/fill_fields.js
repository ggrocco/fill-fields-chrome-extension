var FillFields = (function(){
  function FillFields(options){
    this.options = $.extend(FillFields.default_options, options);
  }

  FillFields.default_options = {selector: '[required]', rules: [
    { selector: 'input.date', charge: function(input){ input.val(new Date().toDateString()).change(); } },
    { selector: 'input.int', charge: function(input){ input.val(1); } },
    { selector: 'input.email', charge: function(input){ input.val('text@text.com'); } },
    { selector: 'textarea', charge: function(input){ input.val('text'); } }
  ]};

  FillFields.prototype = {
    clean_rules: function(){
      this.options.rules = []
    },
    add_rule: function(selector, callback){
      this.options.rules.push({selector: selector, charge: callback})
    },
    fill: function(){
      var inputs = this._input_match();
      this._inputd_fill(inputs);
    },
    _input_match: function(){
      var matched_fields = $(document).find(this.options.selector);
      console.log('matched fields: ' + matched_fields.length);
      return matched_fields;
    },
    _inputd_fill: function(inputs){
      $.each(this.options.rules, function(i, rule){
        console.log('search filds based with match with ' + rule.selector);
        inputs.filter(rule.selector).each(function(){
          console.log('fill ' + (this.name || this.id) + ' with rule ' + rule.selector);
          rule.charge($(this));
        });
      });
    }
  };

  return FillFields;
})();