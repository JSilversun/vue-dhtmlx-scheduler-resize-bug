/*

@license
dhtmlxScheduler v.5.3.10 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Scheduler.plugin(function(e){!function(){e._grid={names:{},sort_rules:{int:function(e,t,a){return 1*a(e)<1*a(t)?1:-1},str:function(e,t,a){return a(e)<a(t)?1:-1},date:function(e,t,a){return new Date(a(e))<new Date(a(t))?1:-1}},_getObjName:function(e){return"grid_"+e},_getViewName:function(e){return e.replace(/^grid_/,"")}}}(),e.createGridView=function(t){function a(e){return!(void 0!==e&&(1*e!=e||e<0))}var i=t.name||"grid",n=e._grid._getObjName(i);e._grid.names[i]=i,
e.config[i+"_start"]=t.from||new Date(0),e.config[i+"_end"]=t.to||new Date(9999,1,1),e[n]=t,e[n].defPadding=8,e[n].columns=e[n].fields,e[n].unit=t.unit||"month",e[n].step=t.step||1,delete e[n].fields;for(var r=e[n].columns,o=0;o<r.length;o++)a(r[o].width)&&(r[o].initialWidth=r[o].width),a(r[o].paddingLeft)||delete r[o].paddingLeft,a(r[o].paddingRight)||delete r[o].paddingRight;e[n].select=void 0===t.select||t.select,
void 0===e.locale.labels[i+"_tab"]&&(e.locale.labels[i+"_tab"]=e[n].label||e.locale.labels.grid_tab),e[n]._selected_divs=[],e.date[i+"_start"]=function(a){return e.date[t.unit+"_start"]?e.date[t.unit+"_start"](a):a},e.date["add_"+i]=function(t,a){return e.date.add(t,a*e[n].step,e[n].unit)},e.templates[i+"_date"]=function(t,a){return e.config.rtl?e.templates.day_date(a)+" - "+e.templates.day_date(t):e.templates.day_date(t)+" - "+e.templates.day_date(a)},
e.templates[i+"_full_date"]=function(t,a,n){return e.isOneDayEvent(n)?this[i+"_single_date"](t):e.config.rtl?e.templates.day_date(a)+" &ndash; "+e.templates.day_date(t):e.templates.day_date(t)+" &ndash; "+e.templates.day_date(a)},e.templates[i+"_single_date"]=function(t){return e.templates.day_date(t)+" "+this.event_date(t)},e.templates[i+"_field"]=function(e,t){return t[e]},e.attachEvent("onTemplatesReady",function(){e.attachEvent("onEventSelected",function(t){
if(this._mode==i&&e[n].select)return e._grid.selectEvent(t,i),!1}),e.attachEvent("onEventUnselected",function(t){this._mode==i&&e[n].select&&e._grid.unselectEvent("",i)});var t=e.render_data;e.render_data=function(a){if(this._mode!=i)return t.apply(this,arguments);e._grid._fill_grid_tab(n)};var a=e.render_view_data;e.render_view_data=function(){var t=e._els.dhx_cal_data[0].lastChild;return this._mode==i&&t&&(e._grid._gridScrollTop=t.scrollTop),a.apply(this,arguments)}}),e[i+"_view"]=function(t){
if(e._grid._sort_marker=null,delete e._gridView,e._grid._gridScrollTop=0,e._rendered=[],e[n]._selected_divs=[],t){var a=null,r=null;e[n].paging?(a=e.date[i+"_start"](new Date(e._date)),r=e.date["add_"+i](a,1)):(a=e.config[i+"_start"],r=e.config[i+"_end"]),e._min_date=a,e._max_date=r,e._grid.set_full_view(n);var o="";+a>+new Date(0)&&+r<+new Date(9999,1,1)&&(o=e.templates[i+"_date"](a,r));var s=e._getNavDateElement();s&&(s.innerHTML=o),e._gridView=n}}},e.dblclick_dhx_grid_area=function(){
!this.config.readonly&&this.config.dblclick_create&&this.addEventNow()},e._click.dhx_cal_header&&(e._old_header_click=e._click.dhx_cal_header),e._click.dhx_cal_header=function(t){if(e._gridView){var a=t||window.event,i=e._grid._get_target_column(a,e._gridView);e._grid._toggle_sort_state(e._gridView,i.id),e.clear_view(),e._grid._fill_grid_tab(e._gridView)}else if(e._old_header_click)return e._old_header_click.apply(this,arguments)},e._grid.selectEvent=function(t,a){
if(e.callEvent("onBeforeRowSelect",[t])){var i=e._grid._getObjName(a);e.for_rendered(t,function(t){t.className+=" dhx_grid_event_selected",e[i]._selected_divs.push(t)})}},e._grid._unselectDiv=function(e){e.className=e.className.replace(/ dhx_grid_event_selected/,"")},e._grid.unselectEvent=function(t,a){var i=e._grid._getObjName(a);if(i&&e[i]._selected_divs)if(t){for(var n=0;n<e[i]._selected_divs.length;n++)if(e[i]._selected_divs[n].getAttribute("event_id")==t){
e._grid._unselectDiv(e[i]._selected_divs[n]),e[i]._selected_divs.slice(n,1);break}}else{for(var n=0;n<e[i]._selected_divs.length;n++)e._grid._unselectDiv(e[i]._selected_divs[n]);e[i]._selected_divs=[]}},e._grid._get_target_column=function(t,a){var i=t.originalTarget||t.srcElement;"dhx_grid_view_sort"==e._getClassName(i)&&(i=i.parentNode);for(var n=0,r=0;r<i.parentNode.childNodes.length;r++)if(i.parentNode.childNodes[r]==i){n=r;break}return e[a].columns[n]},e._grid._get_sort_state=function(t){
return e[t].sort},e._grid._toggle_sort_state=function(t,a){var i=this._get_sort_state(t),n=e[t];i&&i.column==a?i.direction="asc"==i.direction?"desc":"asc":n.sort={column:a,direction:"desc"}},e._grid._get_sort_value_for_column=function(e){var t=null;if(e.template){var a=e.template;t=function(e){return a(e.start_date,e.end_date,e)}}else{var i=e.id;"date"==i&&(i="start_date"),t=function(e){return e[i]}}return t},e._grid.draw_sort_marker=function(t,a){
if(e._grid._sort_marker&&(e._grid._sort_marker.className=e._grid._sort_marker.className.replace(/( )?dhx_grid_sort_(asc|desc)/,""),e._grid._sort_marker.removeChild(e._grid._sort_marker.lastChild)),a){var i=e._grid._get_column_node(t,a.column);i.className+=" dhx_grid_sort_"+a.direction,e._grid._sort_marker=i;var n="<div class='dhx_grid_view_sort' style='left:"+(+i.style.width.replace("px","")-15+i.offsetLeft)+"px'>&nbsp;</div>";i.innerHTML+=n}},e._grid.sort_grid=function(t){t=t||{
direction:"desc",value:function(e){return e.start_date},rule:e._grid.sort_rules.date};var a=e.get_visible_events();return a.sort(function(e,a){return t.rule(e,a,t.value)}),"asc"==t.direction&&(a=a.reverse()),a},e._grid.set_full_view=function(t){if(t){var a=(e.locale.labels,e._grid._print_grid_header(t));e._els.dhx_cal_header[0].innerHTML=a,e._table_view=!0,e.set_sizes()}},e._grid._calcPadding=function(t,a){
return(void 0!==t.paddingLeft?1*t.paddingLeft:e[a].defPadding)+(void 0!==t.paddingRight?1*t.paddingRight:e[a].defPadding)},e._grid._getStyles=function(e,t){for(var a=[],i="",n=0;t[n];n++)switch(i=t[n]+":",t[n]){case"text-align":e.align&&a.push(i+e.align);break;case"vertical-align":e.valign&&a.push(i+e.valign);break;case"padding-left":void 0!==e.paddingLeft&&a.push(i+(e.paddingLeft||"0")+"px");break;case"padding-right":void 0!==e.paddingRight&&a.push(i+(e.paddingRight||"0")+"px")}return a},
e._grid._get_column_node=function(t,a){for(var i=-1,n=0;n<t.length;n++)if(t[n].id==a){i=n;break}return i<0?null:e._obj.querySelectorAll(".dhx_grid_line > div")[i]},e._grid._get_sort_rule=function(t){var a,i=e[t],n=this._get_sort_state(t);if(n){for(var r,o=0;o<i.columns.length;o++)if(i.columns[o].id==n.column){r=i.columns[o];break}if(r){var s=e._grid._get_sort_value_for_column(r),d=r.sort;"function"!=typeof d&&(d=e._grid.sort_rules[d]||e._grid.sort_rules.str),a={direction:n.direction,rule:d,
value:s}}}return a},e._grid._fill_grid_tab=function(t){var a=e[t],i=this._get_sort_state(t),n=this._get_sort_rule(t);n&&e._grid.draw_sort_marker(a.columns,i);for(var r=(e._date,e._grid.sort_grid(n)),o=e[t].columns,s="<div>",d=-2,_=0;_<o.length;_++){var l=e._grid._calcPadding(o[_],t);if(d+=o[_].width+l,_<o.length-1){s+="<div class='dhx_grid_v_border' style='"+(e.config.rtl?"right":"left")+":"+d+"px'></div>"}}s+="</div>",s+="<div class='dhx_grid_area'><table "+e._waiAria.gridAttrString()+">"
;for(var _=0;_<r.length;_++)s+=e._grid._print_event_row(r[_],t);s+="</table></div>",e._els.dhx_cal_data[0].innerHTML=s,e._els.dhx_cal_data[0].lastChild.scrollTop=e._grid._gridScrollTop||0;var c=e._els.dhx_cal_data[0].getElementsByTagName("tr");e._rendered=[];for(var _=0;_<c.length;_++)e._rendered[_]=c[_]},e._grid._getCellContent=function(t,a){var i=e.getState().mode
;return a.template?a.template(t.start_date,t.end_date,t):"date"==a.id?e.templates[i+"_full_date"](t.start_date,t.end_date,t):"start_date"==a.id||"end_date"==a.id?e.templates[i+"_single_date"](t[a.id]):e.templates[i+"_field"](a.id,t)},e._grid._print_event_row=function(t,a){var i=[];t.color&&i.push("background:"+t.color),t.textColor&&i.push("color:"+t.textColor),t._text_style&&i.push(t._text_style),e[a].rowHeight&&i.push("height:"+e[a].rowHeight+"px");var n=""
;i.length&&(n="style='"+i.join(";")+"'");for(var r=e[a].columns,o=e.templates.event_class(t.start_date,t.end_date,t),s=e._waiAria.gridRowAttrString(t),d="<tr "+s+" class='dhx_grid_event"+(o?" "+o:"")+"' event_id='"+t.id+"' "+n+">",_=(e._grid._getViewName(a),["text-align","vertical-align","padding-left","padding-right"]),l=0;l<r.length;l++){var c=e._grid._getCellContent(t,r[l]),h=e._waiAria.gridCellAttrString(t,r[l],c),u=e._grid._getStyles(r[l],_),g=r[l].css?' class="'+r[l].css+'"':""
;d+="<td "+h+" style='width:"+r[l].width+"px;"+u.join(";")+"' "+g+">"+c+"</td>"}return d+="<td class='dhx_grid_dummy'></td></tr>"},e._grid._print_grid_header=function(t){for(var a="<div class='dhx_grid_line'>",i=e[t].columns,n=[],r=i.length,o=e._obj.clientWidth-2*i.length-20,s=0;s<i.length;s++){var d=1*i[s].initialWidth;isNaN(d)||""===i[s].initialWidth||null===i[s].initialWidth||"boolean"==typeof i[s].initialWidth?n[s]=null:(r--,o-=d,n[s]=d)}
for(var _=Math.floor(o/r),l=["text-align","padding-left","padding-right"],c=0;c<i.length;c++){var h=n[c]?n[c]:_;i[c].width=h-e._grid._calcPadding(i[c],t);var u=e._grid._getStyles(i[c],l);a+="<div style='width:"+(i[c].width-1)+"px;"+u.join(";")+"'>"+(void 0===i[c].label?i[c].id:i[c].label)+"</div>"}return a+="</div>"}});