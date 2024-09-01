"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[63377],{952:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>w,data:()=>L});var i=o(86904);const n=(0,i.Lk)("h1",{id:"ikea-e1524-e1810",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ikea-e1524-e1810"},[(0,i.Lk)("span",null,"IKEA E1524/E1810")])],-1),l=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),a=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"E1524/E1810")],-1),s=(0,i.Lk)("td",null,"Vendor",-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"TRADFRI remote control")],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"identify, battery, action, linkquality")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1524-E1810.png",alt:"IKEA E1524/E1810"})])],-1),c=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button, next to the CR2032 battery, 4 times in 5s. The red light on the (front of the) remote will now flash a few times.</p><h3 id="troubleshooting-no-battery-level-or-not-sending-messages-at-all" tabindex="-1"><a class="header-anchor" href="#troubleshooting-no-battery-level-or-not-sending-messages-at-all"><span>Troubleshooting: no battery level OR not sending messages at all</span></a></h3>',4),h=(0,i.Fv)('<h3 id="troubleshooting-device-didn-t-respond-to-ota-request" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-didn-t-respond-to-ota-request"><span>Troubleshooting: Device didn&#39;t respond to OTA request</span></a></h3><p>To resolve the <code>Device didn&#39;t respond to OTA request</code> error, you can try to push a button on it, shortly before you start the update, to wake up the Remote.</p><h3 id="troubleshooting-automations-triggered-by-button-presses-throw-exceptions" tabindex="-1"><a class="header-anchor" href="#troubleshooting-automations-triggered-by-button-presses-throw-exceptions"><span>Troubleshooting: Automations triggered by button presses throw exceptions</span></a></h3><p>Make sure that automations that are triggered by the &#39;action&#39; attribute of the remote are not configured in the &#39;restart&#39; mode. Since there is an event for the button press (e.g. <code>arrow_left_click</code>) as well as for the release (e.g. <code>arrow_left_release</code>) the trigger will fire two times in rapid succession which may result in the automation being cancelled before it can finish its first run.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3>',5),g=(0,i.Fv)("<ul><li>&lt; 2.3.014: binding is not supported, OTA update your device to get binding functionality</li><li>2.3.014 - 2.3.074: suppports binding to groups only. It can only be bound to 1 group at a time. By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to <code>zigbee2mqtt/bridge/request/device/unbind</code> payload <code>{&quot;from&quot;: &quot;DEVICE_FRIENDLY_NAME&quot;, &quot;to&quot;: &quot;default_bind_group&quot;}</code>. Wake up the device right before sending the commands by pressing a button on it.</li><li>2.3.075 - 2.3.080 : supports binding to devices only</li><li>24.4.5: supports binding to device or groups</li></ul><p><strong>Note:</strong> Prior to sending a &#39;bind&#39; command using an MQTT message directly or through the frontend, push a button on the remote to wake it up. Otherwise, the remote will not be in a receiving state and the bind will fail with a general &#39;error&#39;.</p><p>Once bound to a group/bulb you will notice that the toggle and brightness buttons will work, but scenes/color temperature may not work depending on firmware version.</p>",3),p=(0,i.Lk)("li",null,[(0,i.eW)("Create a group with ID "),(0,i.Lk)("strong",null,"65289"),(0,i.eW)(" (name it ie. Trafri_scenes) and add the device(s) you control with the remote.")],-1),b=(0,i.Lk)("li",null,"Once you click left/right on the remote, the scenes will be called sequentially (should there be a device off sync in scenes, hold the toggle button for 3 sec.).",-1),m=(0,i.Lk)("li",null,[(0,i.eW)("24.4.5: Bind the "),(0,i.Lk)("code",null,"LevelCtrl"),(0,i.eW)(" and "),(0,i.Lk)("code",null,"Scenes"),(0,i.eW)(" clusters to the devices or groups (only "),(0,i.Lk)("code",null,"LevelCtrl"),(0,i.eW)(" is supported for groups) to be able to control brightness and scenes/color respectively.")],-1),f=(0,i.Fv)('<h3 id="toggle-button" tabindex="-1"><a class="header-anchor" href="#toggle-button"><span>Toggle button</span></a></h3><p>When clicking the middle (center) button on the remote it will send a <code>{&quot;click&quot;: &quot;toggle&quot;}</code>, when holding it it will <strong>also</strong> send a <code>{&quot;click&quot;: &quot;toggle_hold&quot;}</code>. It is not possible to skip the <code>toggle</code> when the button is hold. Also the remote won&#39;t send anything when the button is released. See <a href="https://github.com/Koenkk/zigbee2mqtt/issues/2077#issuecomment-538691885" target="_blank" rel="noopener noreferrer">link</a> for more details.</p><h3 id="ota-updates-troubleshooting" tabindex="-1"><a class="header-anchor" href="#ota-updates-troubleshooting"><span>OTA updates troubleshooting</span></a></h3><p>If you have problems with running firmware update, try following:</p><ol><li>after clicking &quot;Updare firmware&quot; button in Z2M, click every 1-2s any of control buttons on remote</li><li>if remote keeps aborting firmware update, then try with fresh battery and also you can try to reset device (press pair button next to battery 4 times in 5s period)</li></ol><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',6),k=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),v=(0,i.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>brightness_up_click</code>, <code>brightness_down_click</code>, <code>brightness_up_hold</code>, <code>brightness_up_release</code>, <code>brightness_down_hold</code>, <code>brightness_down_release</code>, <code>toggle_hold</code>, <code>arrow_left_click</code>, <code>arrow_left_hold</code>, <code>arrow_left_release</code>, <code>arrow_right_click</code>, <code>arrow_right_hold</code>, <code>arrow_right_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),y={},w=(0,o(22652).A)(y,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n,(0,i.Lk)("table",null,[l,(0,i.Lk)("tbody",null,[a,(0,i.Lk)("tr",null,[s,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=IKEA"},{default:(0,i.k6)((()=>[(0,i.eW)("IKEA")])),_:1})])]),r,d,u])]),c,(0,i.Lk)("p",null,[(0,i.eW)("It may help to remove the battery for a few seconds and after that reconfigure it via "),(0,i.bF)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigure"},{default:(0,i.k6)((()=>[(0,i.eW)("Configure")])),_:1}),(0,i.eW)(". Right before executing the Configure make sure to wake up the device by pressing a button on it.")]),h,(0,i.Lk)("p",null,[(0,i.eW)("The "),(0,i.bF)(o,{to:"/guide/usage/binding.html"},{default:(0,i.k6)((()=>[(0,i.eW)("binding")])),_:1}),(0,i.eW)(" functionality of this remote varies per firmware version:")]),g,(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.eW)("< 24.4.5: "),(0,i.Lk)("ol",null,[p,(0,i.Lk)("li",null,[(0,i.eW)("Add/store "),(0,i.bF)(o,{to:"/guide/usage/scenes.html"},{default:(0,i.k6)((()=>[(0,i.eW)("scenes")])),_:1}),(0,i.eW)(" for the created group")]),b])]),m]),f,(0,i.Lk)("p",null,[(0,i.eW)("This device supports OTA updates, for more information see "),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>[(0,i.eW)("OTA updates")])),_:1}),(0,i.eW)(".")]),k,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),v])}]]),L=JSON.parse('{"path":"/devices/E1524_E1810.html","title":"IKEA E1524/E1810 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E1524/E1810 control via MQTT","description":"Integrate your IKEA E1524/E1810 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: no battery level OR not sending messages at all","slug":"troubleshooting-no-battery-level-or-not-sending-messages-at-all","link":"#troubleshooting-no-battery-level-or-not-sending-messages-at-all","children":[]},{"level":3,"title":"Troubleshooting: Device didn\'t respond to OTA request","slug":"troubleshooting-device-didn-t-respond-to-ota-request","link":"#troubleshooting-device-didn-t-respond-to-ota-request","children":[]},{"level":3,"title":"Troubleshooting: Automations triggered by button presses throw exceptions","slug":"troubleshooting-automations-triggered-by-button-presses-throw-exceptions","link":"#troubleshooting-automations-triggered-by-button-presses-throw-exceptions","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Toggle button","slug":"toggle-button","link":"#toggle-button","children":[]},{"level":3,"title":"OTA updates troubleshooting","slug":"ota-updates-troubleshooting","link":"#ota-updates-troubleshooting","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725195158000},"filePathRelative":"devices/E1524_E1810.md"}')}}]);