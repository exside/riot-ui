"use strict";var rui={utils:{keycode:{ENTER:13,ARROW_DOWN:40,ARROW_UP:38,ARROW_LEFT:37,ARROW_RIGHT:39,BACKSPACE:8,ESC:27,DELETE:46}}};riot.tag2("autocomplete",'<div class="{focus: _input === document.activeElement}"> <input type="text" name="_input" onkeydown="{handleArrowKeys}" onkeyup="{filterOptions}" onfocus="{showOptions}" onblur="{hideOptions}" placeholder="{opts.placeholder}"> <ul name="_optionList" if="{shouldShowOptions && filteredCount}"> <li each="{option, index in getFilteredOptions()}" class="{highlight: index == highlightIndex}" onmouseover="{hoverOption}" onmousedown="{chooseCurrent}">{option.text} </li> </ul> </div>',"","",function(t){var i=this,e=rui.utils.keycode;this.options=this.opts.options,Array.isArray(this.options)||(this.options=Object.keys(this.options).map(function(t){return{key:t,text:i.options[t]}})),this.shouldShowOptions=!1,this.highlightIndex=0,this.filteredCount=this.options.length,this.filteredOptions=this.options,this.hoverOption=function(t){i.highlightIndex=t.item.index},this.hideOptions=function(){i.shouldShowOptions=!1},this.showOptions=function(){0==i.shouldShowOptions&&(i.highlightIndex=0),i.shouldShowOptions=!0},this.filterOptions=function(t){switch(t.keyCode){case e.ESC:case e.ENTER:i.hideOptions();break;case e.ARROW_LEFT:case e.ARROW_RIGHT:break;default:i.showOptions()}return!0},this.chooseCurrent=function(){i._input.value=i.filteredOptions[i.highlightIndex].text,i.hideOptions(),i.update()},this.handleArrowKeys=function(t){switch(t.keyCode){case e.ARROW_DOWN:return i.highlightNext(t),!1;case e.ARROW_UP:return i.highlightPrevious(t),!1;case e.ENTER:return i.chooseCurrent(),!0}return!0},this.highlightPrevious=function(t){t.preventDefault(),i.highlightIndex=Math.max(0,i.highlightIndex-1)},this.highlightNext=function(t){t.preventDefault(),i.highlightIndex=Math.min(i.highlightIndex+1,i.filteredCount-1)},this.getFilteredOptions=function(){var t=i._input.value.toLowerCase().trim();return i.filteredOptions=i.options.filter(function(i){var e=i.text.toLowerCase(),o=0==e.indexOf(t),n=e.split(/\s/).some(function(i){return 0==i.indexOf(t)});return o||n}),i.filteredCount=i.filteredOptions.length,i.filteredOptions},this.on("updated",function(){var t=i._optionList.offsetHeight,e=i._optionList.scrollTop,o=i._optionList.querySelector(".highlight");if(o){var n=o.offsetTop,s=o.offsetHeight;n+s>e+t&&(i._optionList.scrollTop+=n+s-(e+t)),e>=n&&(i._optionList.scrollTop=n)}})},"{ }");