"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81946],{522:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>v});var a=o(86904);const r=(0,a.Lk)("h1",{id:"tuya-toqcb2-80",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-toqcb2-80"},[(0,a.Lk)("span",null,"Tuya TOQCB2-80")])],-1),i=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TOQCB2-80")],-1),n=(0,a.Lk)("td",null,"Vendor",-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart circuit breaker")],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), energy, power, voltage, current, temperature, voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, last_event, over_current_setting, current_threshold, under_voltage_setting, under_voltage_threshold, over_voltage_setting, over_voltage_threshold, over_power_setting, over_power_threshold, temperature_setting, temperature_threshold, clear_fault, factory_reset, linkquality")],-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TOQCB2-80.png",alt:"Tuya TOQCB2-80"})])],-1),u=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1),h=(0,a.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="voltage-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-a-numeric"><span>Voltage a (numeric)</span></a></h3><p>Measured electrical potential value (phase A). Value can be found in the published state on the <code>voltage_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-b-numeric"><span>Voltage b (numeric)</span></a></h3><p>Measured electrical potential value (phase B). Value can be found in the published state on the <code>voltage_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-c-numeric"><span>Voltage c (numeric)</span></a></h3><p>Measured electrical potential value (phase C). Value can be found in the published state on the <code>voltage_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric"><span>Power a (numeric)</span></a></h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric"><span>Power b (numeric)</span></a></h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-c-numeric"><span>Power c (numeric)</span></a></h3><p>Instantaneous measured power (phase C). Value can be found in the published state on the <code>power_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric"><span>Current a (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric"><span>Current b (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-c-numeric"><span>Current c (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase C). Value can be found in the published state on the <code>current_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="last-event-enum" tabindex="-1"><a class="header-anchor" href="#last-event-enum"><span>Last event (enum)</span></a></h3><p>Last event. Value can be found in the published state on the <code>last_event</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>trip_over_current</code>, <code>trip_over_power</code>, <code>trip_over_temperature</code>, <code>trip_voltage_1</code>, <code>trip_voltage_2</code>, <code>alarm_over_current</code>, <code>alarm_over_power</code>, <code>alarm_over_temperature</code>, <code>alarm_voltage_1</code>, <code>alarm_voltage_2</code>, <code>remote_on</code>, <code>remote_off</code>, <code>manual_on</code>, <code>manual_off</code>, <code>value_15</code>, <code>value_16</code>, <code>factory_reset</code>.</p><h3 id="over-current-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-current-setting-enum"><span>Over current setting (enum)</span></a></h3><p>Action if threshold value is reached. Value can be found in the published state on the <code>over_current_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>closed</code>, <code>alarm</code>, <code>trip</code>.</p><h3 id="current-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#current-threshold-numeric"><span>Current threshold (numeric)</span></a></h3><p>Current threshold setting. Value can be found in the published state on the <code>current_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>63</code>. The unit of this value is <code>A</code>.</p><h3 id="under-voltage-setting-enum" tabindex="-1"><a class="header-anchor" href="#under-voltage-setting-enum"><span>Under voltage setting (enum)</span></a></h3><p>Action if threshold value is reached. Value can be found in the published state on the <code>under_voltage_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>closed</code>, <code>alarm</code>, <code>trip</code>.</p><h3 id="under-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#under-voltage-threshold-numeric"><span>Under voltage threshold (numeric)</span></a></h3><p>Under voltage threshold setting. Value can be found in the published state on the <code>under_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>145</code> and the maximum value is <code>220</code>. The unit of this value is <code>V</code>.</p><h3 id="over-voltage-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-voltage-setting-enum"><span>Over voltage setting (enum)</span></a></h3><p>Action if threshold value is reached. Value can be found in the published state on the <code>over_voltage_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>closed</code>, <code>alarm</code>, <code>trip</code>.</p><h3 id="over-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-voltage-threshold-numeric"><span>Over voltage threshold (numeric)</span></a></h3><p>Over-voltage threshold setting. Value can be found in the published state on the <code>over_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>245</code> and the maximum value is <code>295</code>. The unit of this value is <code>V</code>.</p><h3 id="over-power-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-power-setting-enum"><span>Over power setting (enum)</span></a></h3><p>Action if threshold value is reached. Value can be found in the published state on the <code>over_power_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_power_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>closed</code>, <code>alarm</code>, <code>trip</code>.</p><h3 id="over-power-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-power-threshold-numeric"><span>Over power threshold (numeric)</span></a></h3><p>Over-power threshold setting. Value can be found in the published state on the <code>over_power_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_power_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>200</code> and the maximum value is <code>20000</code>. The unit of this value is <code>W</code>.</p><h3 id="temperature-setting-enum" tabindex="-1"><a class="header-anchor" href="#temperature-setting-enum"><span>Temperature setting (enum)</span></a></h3><p>Action if threshold value is reached. Value can be found in the published state on the <code>temperature_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>closed</code>, <code>alarm</code>, <code>trip</code>.</p><h3 id="temperature-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-threshold-numeric"><span>Temperature threshold (numeric)</span></a></h3><p>Temperature threshold setting. Value can be found in the published state on the <code>temperature_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>-40</code> and the maximum value is <code>100</code>. The unit of this value is <code>°C</code>.</p><h3 id="clear-fault-binary" tabindex="-1"><a class="header-anchor" href="#clear-fault-binary"><span>Clear fault (binary)</span></a></h3><p>Recover from an incident. Value can be found in the published state on the <code>clear_fault</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_fault&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> clear fault is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-binary"><span>Factory reset (binary)</span></a></h3><p>Back to factory settings, USE WITH CAUTION. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',60),p={},m=(0,o(22652).A)(p,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[r,(0,a.Lk)("table",null,[i,(0,a.Lk)("tbody",null,[c,(0,a.Lk)("tr",null,[n,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>[(0,a.eW)("Tuya")])),_:1})])]),d,s,l])]),u,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/TOQCB2-80.html","title":"Tuya TOQCB2-80 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TOQCB2-80 control via MQTT","description":"Integrate your Tuya TOQCB2-80 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:40.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Voltage a (numeric)","slug":"voltage-a-numeric","link":"#voltage-a-numeric","children":[]},{"level":3,"title":"Voltage b (numeric)","slug":"voltage-b-numeric","link":"#voltage-b-numeric","children":[]},{"level":3,"title":"Voltage c (numeric)","slug":"voltage-c-numeric","link":"#voltage-c-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Power b (numeric)","slug":"power-b-numeric","link":"#power-b-numeric","children":[]},{"level":3,"title":"Power c (numeric)","slug":"power-c-numeric","link":"#power-c-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Current b (numeric)","slug":"current-b-numeric","link":"#current-b-numeric","children":[]},{"level":3,"title":"Current c (numeric)","slug":"current-c-numeric","link":"#current-c-numeric","children":[]},{"level":3,"title":"Last event (enum)","slug":"last-event-enum","link":"#last-event-enum","children":[]},{"level":3,"title":"Over current setting (enum)","slug":"over-current-setting-enum","link":"#over-current-setting-enum","children":[]},{"level":3,"title":"Current threshold (numeric)","slug":"current-threshold-numeric","link":"#current-threshold-numeric","children":[]},{"level":3,"title":"Under voltage setting (enum)","slug":"under-voltage-setting-enum","link":"#under-voltage-setting-enum","children":[]},{"level":3,"title":"Under voltage threshold (numeric)","slug":"under-voltage-threshold-numeric","link":"#under-voltage-threshold-numeric","children":[]},{"level":3,"title":"Over voltage setting (enum)","slug":"over-voltage-setting-enum","link":"#over-voltage-setting-enum","children":[]},{"level":3,"title":"Over voltage threshold (numeric)","slug":"over-voltage-threshold-numeric","link":"#over-voltage-threshold-numeric","children":[]},{"level":3,"title":"Over power setting (enum)","slug":"over-power-setting-enum","link":"#over-power-setting-enum","children":[]},{"level":3,"title":"Over power threshold (numeric)","slug":"over-power-threshold-numeric","link":"#over-power-threshold-numeric","children":[]},{"level":3,"title":"Temperature setting (enum)","slug":"temperature-setting-enum","link":"#temperature-setting-enum","children":[]},{"level":3,"title":"Temperature threshold (numeric)","slug":"temperature-threshold-numeric","link":"#temperature-threshold-numeric","children":[]},{"level":3,"title":"Clear fault (binary)","slug":"clear-fault-binary","link":"#clear-fault-binary","children":[]},{"level":3,"title":"Factory reset (binary)","slug":"factory-reset-binary","link":"#factory-reset-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725195158000},"filePathRelative":"devices/TOQCB2-80.md"}')}}]);