Blockly.Blocks['text_println'] = {
  /**
   * Block for print statement.
   * @this {Blockly.Block}
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg['TEXT_PRINTLN_TITLE'],
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "style": "text_blocks",
      "tooltip": Blockly.Msg['TEXT_PRINTLN_TOOLTIP'],
      "helpUrl": Blockly.Msg['TEXT_PRINTLN_HELPURL']
    });
  }
};

Blockly.JavaScript['text_println'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  return 'document.write(' + msg +');\ndocument.write("<br>");\n';
};

Blockly.Blocks['video_camera'] = {
  /**
   * Block for print statement.
   * @this {Blockly.Block}
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg['VIDEO_CAMERA_TITLE'], //块名称在msg/js/*.js文件中定义
      "args0": [
        {
        "type": "input_value",
        "name": "WIDTH",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "HEIGHT",
        "check": "Number",
        "align": "RIGHT"
      }
      ],
	  "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Msg.VIDEO_HUE,  //块颜色在msg/messages.js文件中定义
      "tooltip": Blockly.Msg['TEXT_PRINTLN_TOOLTIP'], //块提示在msg/js/*.js文件中定义
      "helpUrl": Blockly.Msg['TEXT_PRINTLN_HELPURL']  //块帮助在msg/js/*.js文件中定义
    });
  }
};

Blockly.JavaScript['video_camera'] = function(block) {
  // Print statement.
	var argument0 = Blockly.JavaScript.valueToCode(block, 'WIDTH',
	  Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	var argument1 = Blockly.JavaScript.valueToCode(block, 'HEIGHT',
	  Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	var code;
	if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1)){
		let rnd = Math.ceil(Math.random()*10000);
		code = `document.write('<video id="video${rnd}" width="${argument0}" height="${argument1}"></video>');\n
var video = document.getElementById("video${rnd}");\n
navigator.getMedia = navigator.getUserMedia || 
	navagator.webkitGetUserMedia ||
	navigator.mozGetUserMedia || 
	navigator.msGetUserMedia;\n
navigator.getMedia(
	{video: true,audio: false}, 
	function(strem){
		video.srcObject = strem;
		video.onloadedmetadata = function(e) {
			video.play();
		};
	}, 
	function(error) {
		console.log(error);
	}
);\n`;	
	}
	
  return code;
};