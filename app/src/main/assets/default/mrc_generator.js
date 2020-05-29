// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.MRC = new Blockly.Generator("MRC");

Blockly.MRC['block_atuador_ligarled'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ligarLed('+ dropdown_port + ');\n';
  return code;
};

Blockly.MRC['block_atuador_desligarled'] = function(block) {
  var dropdown_desligarled = block.getFieldValue('PORT');
  var code = 'desligarLed('+ dropdown_desligarled + ');\n';
  return code;
};

Blockly.MRC['block_atuador_led2'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_state = block.getFieldValue('STATE');
  var code = '';

  if(dropdown_state = 'ligado'){
    code = 'ligarLed(' + dropdown_port + ',' +dropdown_state+'); \n';
  }
  else{
    code = 'desligarLed(' + dropdown_port + ',' +dropdown_state+'); \n';
  }
  //var code = code0 + '' + dropdown_porta + '' + dropdown_name1;
  return code
};

Blockly.MRC['block_atuador_ligarbuzzer'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ligarBuzzer(' + dropdown_port + ') \n';
  return code;
};

Blockly.MRC['block_atuador_desligarbuzzer'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'desligarBuzzer(' + dropdown_port + ') \n';
  return code;
};

Blockly.MRC['block_atuador_servomotor'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var angle_motor = block.getFieldValue('ANGLE');
  var code = 'ligarMotor(' + dropdown_port + ',' +angle_motor+'); \n';
  return code;
};

Blockly.MRC['block_esperar_atuador'] = function(block) {
  var number_timer = block.getFieldValue('TIMER');
  var code = 'esperar(' + number_timer + ') \n';
  return code;
};

// SENSORES
Blockly.MRC['block_sensor_luminosidade'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_state = block.getFieldValue('STATE');
  var code = 'sensorLuminosidade(' + dropdown_port + ',' +dropdown_state+'); \n';
  return code;
};


Blockly.MRC['block_sensor_obstaculo'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_state = block.getFieldValue('STATE');
  var code = 'sensorObstaculo(' + dropdown_port + ',' +dropdown_state+'); \n';
  return [code, Blockly.MRC.ORDER_NONE];
};


Blockly.MRC['block_sensor_seguidordelinha'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_name = block.getFieldValue('NAME');
  var code = 'sensorLinha(' + dropdown_port + ',' +dropdown_state+'); \n';
  return [code, Blockly.MRC.ORDER_NONE];
};


Blockly.MRC['block_sensor_presenca'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_state = block.getFieldValue('STATE');
  var code = 'sensorPresenca(' + dropdown_port + ',' +dropdown_state+'); \n';
  return [code, Blockly.MRC.ORDER_NONE];
};

// LOGICOS
/*
Blockly.MRC['block_se_logico'] = function(block) {
  var value_if = Blockly.MRC.valueToCode(block, 'IF', Blockly.MRC.ORDER_ATOMIC);
  var statements_do = Blockly.MRC.statementToCode(block, 'DO');
  var code = '';
  if (value_if != ''){
      var code = 'if (' + value_if + ') { \n ' + statements_do + '   }'\n';

  }
  return code;
};
*/
Blockly.MRC['block_se_logico'] = function(block) {
  var value_if0 = Blockly.MRC.valueToCode(block, 'IF0',Blockly.MRC.ORDER_ATOMIC);
  var statements_do0 = Blockly.MRC.statementToCode(block, 'DO0');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if (' + value_if0 + ') {\n' + statements_do0 + '}';
  return value_if0;
};


Blockly.MRC['controls_ifelse'] = function(block) {
  var value_if0 = Blockly.MRC.valueToCode(block, 'IF0');
  var statements_do0 = Blockly.MRC.statementToCode(block, 'DO0');
  var statements_else = Blockly.MRC.statementToCode(block, 'ELSE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if (' + value_if + ') {\n' + statements_do0 + '}';

  return code;
};

Blockly.MRC['block_loop_logico'] = function(block) {
  var statements_name = Blockly.MRC.statementToCode(block, 'NAME');
  var code = "void loop() {\n" + statements_name + "}\n";
  return code;
};


Blockly.MRC['caixa_text'] = function(block) {
  var text_text = block.getFieldValue('TEXT');
  var code = text_text;
  return [code, Blockly.MRC.ORDER_NONE];
};

Blockly.MRC.scrub_ = function(block, code, opt_thisOnly) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = opt_thisOnly ? '' : Blockly.MRC.blockToCode(nextBlock);
  return code + nextCode;
};

