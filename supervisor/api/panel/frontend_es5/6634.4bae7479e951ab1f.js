"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["6634"],{68138:function(i,e,s){s.a(i,(async function(i,a){try{s.r(e);var t=s(73577),o=(s(71695),s(9359),s(70104),s(40251),s(47021),s(87319),s(57243)),d=s(50778),l=s(27486),c=s(36522),n=s(17170),r=(s(92824),s(73729),s(56785)),h=s(67044),v=s(76131),m=s(28008),u=i([n]);n=(u.then?(await u)():u)[0];let g,k,p,_,y,f,$=i=>i;const P=(0,l.Z)((i=>{const e=""!==i.host.disk_life_time?30:10,s=1e3*i.host.disk_used/60/e,a=4*i.host.startup_time/60;return 10*Math.ceil((s+a)/10)}));(0,t.Z)([(0,d.Mo)("dialog-hassio-datadisk")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"dialogParams",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"selectedDevice",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"moving",value(){return!1}},{kind:"method",key:"showDialog",value:function(i){this.dialogParams=i,(0,h.ou)(this.hass).then((i=>{this.devices=i.devices}))}},{kind:"method",key:"closeDialog",value:function(){this.dialogParams=void 0,this.selectedDevice=void 0,this.devices=void 0,this.moving=!1,(0,c.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var i;return this.dialogParams?(0,o.dy)(g||(g=$` <ha-dialog open scrimClickAction escapeKeyAction .heading="${0}" @closed="${0}" ?hideActions="${0}"> ${0} </ha-dialog> `),this.moving?this.dialogParams.supervisor.localize("dialog.datadisk_move.moving"):this.dialogParams.supervisor.localize("dialog.datadisk_move.title"),this.closeDialog,this.moving,this.moving?(0,o.dy)(k||(k=$`<ha-spinner aria-label="Moving" size="large"></ha-spinner> <p class="progress-text"> ${0} </p>`),this.dialogParams.supervisor.localize("dialog.datadisk_move.moving_desc")):(0,o.dy)(p||(p=$` ${0} <mwc-button slot="secondaryAction" @click="${0}" dialogInitialFocus> ${0} </mwc-button> <mwc-button .disabled="${0}" slot="primaryAction" @click="${0}"> ${0} </mwc-button>`),null!==(i=this.devices)&&void 0!==i&&i.length?(0,o.dy)(_||(_=$` ${0} <br><br> <ha-select .label="${0}" @selected="${0}" dialogInitialFocus> ${0} </ha-select> `),this.dialogParams.supervisor.localize("dialog.datadisk_move.description",{current_path:this.dialogParams.supervisor.os.data_disk,time:P(this.dialogParams.supervisor)}),this.dialogParams.supervisor.localize("dialog.datadisk_move.select_device"),this._selectDevice,this.devices.map((i=>(0,o.dy)(y||(y=$`<mwc-list-item .value="${0}">${0}</mwc-list-item>`),i,i)))):void 0===this.devices?this.dialogParams.supervisor.localize("dialog.datadisk_move.loading_devices"):this.dialogParams.supervisor.localize("dialog.datadisk_move.no_devices"),this.closeDialog,this.dialogParams.supervisor.localize("dialog.datadisk_move.cancel"),!this.selectedDevice,this._moveDatadisk,this.dialogParams.supervisor.localize("dialog.datadisk_move.move"))):o.Ld}},{kind:"method",key:"_selectDevice",value:function(i){this.selectedDevice=i.target.value}},{kind:"method",key:"_moveDatadisk",value:async function(){this.moving=!0;try{await(0,h.Sx)(this.hass,this.selectedDevice)}catch(i){this.hass.connection.connected&&!(0,r.yz)(i)&&((0,v.Ys)(this,{title:this.dialogParams.supervisor.localize("system.host.failed_to_move"),text:(0,r.js)(i)}),this.closeDialog())}}},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,m.yu,(0,o.iv)(f||(f=$`ha-select{width:100%}ha-spinner{display:block;margin:32px;text-align:center}.progress-text{text-align:center}`))]}}]}}),o.oi);a()}catch(g){a(g)}}))}}]);
//# sourceMappingURL=6634.4bae7479e951ab1f.js.map