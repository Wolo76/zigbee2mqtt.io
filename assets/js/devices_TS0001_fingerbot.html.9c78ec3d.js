"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34927],{48422:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>b});var i=o(86904);const a=(0,i.Lk)("h1",{id:"tuya-ts0001-fingerbot",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-ts0001-fingerbot"},[(0,i.Lk)("span",null,"Tuya TS0001_fingerbot")])],-1),d=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS0001_fingerbot")],-1),n=(0,i.Lk)("td",null,"Vendor",-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee fingerbot plus")],-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), battery, mode, lower, upper, delay, reverse, touch, linkquality")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0001_fingerbot.png",alt:"Tuya TS0001_fingerbot"})])],-1),r=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),h=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum"><span>Mode (enum)</span></a></h3><p>Working mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>click</code>, <code>switch</code>, <code>program</code>.</p><h3 id="lower-numeric" tabindex="-1"><a class="header-anchor" href="#lower-numeric"><span>Lower (numeric)</span></a></h3><p>Down movement limit. Value can be found in the published state on the <code>lower</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lower&quot;: NEW_VALUE}</code>. The minimal value is <code>50</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="upper-numeric" tabindex="-1"><a class="header-anchor" href="#upper-numeric"><span>Upper (numeric)</span></a></h3><p>Up movement limit. Value can be found in the published state on the <code>upper</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;upper&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="delay-numeric" tabindex="-1"><a class="header-anchor" href="#delay-numeric"><span>Delay (numeric)</span></a></h3><p>Sustain time. Value can be found in the published state on the <code>delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="reverse-binary" tabindex="-1"><a class="header-anchor" href="#reverse-binary"><span>Reverse (binary)</span></a></h3><p>Reverse. Value can be found in the published state on the <code>reverse</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> reverse is ON, if <code>OFF</code> OFF.</p><h3 id="touch-binary" tabindex="-1"><a class="header-anchor" href="#touch-binary"><span>Touch (binary)</span></a></h3><p>Touch controll. Value can be found in the published state on the <code>touch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;touch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> touch is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),p={},m=(0,o(22652).A)(p,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[d,(0,i.Lk)("tbody",null,[c,(0,i.Lk)("tr",null,[n,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>[(0,i.eW)("Tuya")])),_:1})])]),s,l,u])]),r,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),b=JSON.parse('{"path":"/devices/TS0001_fingerbot.html","title":"Tuya TS0001_fingerbot control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0001_fingerbot control via MQTT","description":"Integrate your Tuya TS0001_fingerbot via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-27T19:46:16.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Lower (numeric)","slug":"lower-numeric","link":"#lower-numeric","children":[]},{"level":3,"title":"Upper (numeric)","slug":"upper-numeric","link":"#upper-numeric","children":[]},{"level":3,"title":"Delay (numeric)","slug":"delay-numeric","link":"#delay-numeric","children":[]},{"level":3,"title":"Reverse (binary)","slug":"reverse-binary","link":"#reverse-binary","children":[]},{"level":3,"title":"Touch (binary)","slug":"touch-binary","link":"#touch-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725195158000},"filePathRelative":"devices/TS0001_fingerbot.md"}')}}]);