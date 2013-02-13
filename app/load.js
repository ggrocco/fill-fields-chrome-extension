function call(){
  console.log("call fill...");

  var fillFields = new FillFields(getOptions());
  fillFields.fill();
}

function getOptions(){
  var options;
  chrome.storage.sync.get( {options: FillFields.default_options}, function(savedOptions){
    options = savedOptions.options;
  });
  return options;
}

function setOptions(options){
  chrome.storage.sync.set( {options: options} );
}