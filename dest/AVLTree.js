"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),AVLTree;!function(){var t=function(t,e){return e>t?-1:t>e?1:0},e=function(){function t(e,r,i,n,h){_classCallCheck(this,t),this.val=e,this.key=r,this.parent=i,this.left=n,this.right=h}return _createClass(t,[{key:"violates_AVL_property",value:function(){return Math.abs(this.balance_factor())>1?this:this.parent&&this.parent.violates_AVL_property()}},{key:"balance_factor",value:function(){return(this.right?this.right.height:-1)-(this.left?this.left.height:-1)}},{key:"recalc_height",value:function(){this.height=Math.max(this.left?this.left.height:-1,this.right?this.right.height:-1)+1,this.parent&&this.parent.recalc_height()}},{key:"rotate",value:function(t){var e=void 0;return t?(e=this.right,this.right=e.left,this.right&&(this.right.parent=this),e.left=this):(e=this.left,this.left=e.right,this.left&&(this.left.parent=this),e.right=this),this.is_left()?this.parent.left=e:this.is_right()&&(this.parent.right=e),e.parent=this.parent,this.parent=e,this.recalc_height(),e}},{key:"is_left",value:function(){return this.parent&&this.parent.left===this}},{key:"is_right",value:function(){return this.parent&&this.parent.right===this}},{key:"prev",value:function(){if(this.left)return n(this.left);var t=this;do{if(t.is_right())return t.parent;t=t.parent}while(t)}},{key:"next",value:function(){if(this.right)return i(this.right);var t=this;do{if(t.is_left())return t.parent;t=t.parent}while(t)}},{key:"rebalance",value:function(){var t=this.balance_factor(),e=t>1?this.right:this.left,r=e.balance_factor();return(t>1?0>r:r>0)&&e.rotate(r>0),this.rotate(t>1)}}]),t}(),r=function(e,r){function i(t){return t?{"-1":function(){return i(t.left)||n&&t},0:function(){return t},1:function(){return i(t.right)||n&&t}}[h(e,t.key)]():void 0}var n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],h=arguments.length<=3||void 0===arguments[3]?t:arguments[3],a=i(r);return a?a&&n&&a.key>e?a.prev():a:void 0},i=function h(t){return t.left?h(t.left):t},n=function a(t){return t.right?a(t.right):t};AVLTree=function(){function h(){var e=arguments.length<=0||void 0===arguments[0]?t:arguments[0];_classCallCheck(this,h),this._root=void 0,this.length=0,this.cmp=e}return _createClass(h,[{key:"get",value:function(t){var e=r(t,this._root,void 0,this.cmp);return e&&e.val}},{key:"first_matching",value:function(t){return r(t,this._root,!0,this.cmp)}},{key:"put",value:function(t,r){var i,n=this,h=function s(h,a){return h?({"-1":function(){return h.left=s(h.left,h)},0:function(){return h.val=r,h},1:function(){return h.right=s(h.right,h)}}[n.cmp(t,h.key)](),h):i=new e(r,t,a)};if(this._root){if(h(this._root),i){this.length++,i.recalc_height();for(var a;a=i.violates_AVL_property();)a==this._root?(this._root=a.rebalance(),a.recalc_height()):a.rebalance()}}else this._root=new e(r,t),this.length++;return this}},{key:"first",value:function(){return this._root&&i(this._root)}},{key:"last",value:function(){return this._root&&n(this._root)}},{key:Symbol.iterator,value:regeneratorRuntime.mark(function a(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._root){e.next=5;break}t=i(this._root);case 2:return e.next=4,t.val;case 4:if(t=t.next()){e.next=2;break}case 5:case"end":return e.stop()}},a,this)})}]),h}()}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFWTFRyZWUuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJBVkxUcmVlIiwiZGVmYXVsdF9jbXBfZm4iLCJhIiwiYiIsIk5vZGUiLCJ2YWwiLCJwYXJlbnQiLCJsZWZ0IiwicmlnaHQiLCJ0aGlzIiwidmFsdWUiLCJNYXRoIiwiYWJzIiwiYmFsYW5jZV9mYWN0b3IiLCJ2aW9sYXRlc19BVkxfcHJvcGVydHkiLCJoZWlnaHQiLCJtYXgiLCJyZWNhbGNfaGVpZ2h0IiwiaXNfbGVmdF9yb3RhdGlvbiIsIm90aGVyIiwidW5kZWZpbmVkIiwiaXNfbGVmdCIsImlzX3JpZ2h0IiwicmlnaHRfbW9zdF9ub2RlIiwicG9zc2libGVfbmV4dCIsImxlZnRfbW9zdF9ub2RlIiwiYmFsYW5jZSIsImNoaWxkIiwiY2hpbGRfYmFsYW5jZSIsInJvdGF0ZSIsImRvX2dldCIsIm5vZGUiLCJkb19nZXRfcmVjdXJzaXZlIiwiLTEiLCJyb3VuZF9kb3duIiwwLDEsImNtcCIsImFyZ3VtZW50cyIsInJlc3VsdCIsInByZXYiLCJfY2xhc3MiLCJjb21wYXJlX2ZuIiwiX3Jvb3QiLCJuZXdfbm9kZSIsIl90aGlzIiwiZG9fcHV0IiwidmlvbGF0aW9uIiwicmViYWxhbmNlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiY3Vycl9ub2RlIiwid3JhcCIsIl9jb250ZXh0IiwibmV4dCIsInN0b3AiXSwibWFwcGluZ3MiOiJBQUFBLFlB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LGlCQUVWOEIsRUFBVUMsaUJBZHRCdkMsTUFBS2tDLE1BQVEsR0FBSXZDLEdBQUtDLEVBQUtULEdBQzNCYSxLQUFLcEIsUUFrQlQsT0FBT29CLFNBZ0RIYixJQUFLLFFBQ0xjLE1BQU8sV0E3Q1gsTUFBT0QsTUFBS2tDLE9BQVNsQixFQUFlaEIsS0FBS2tDLFVBaURyQy9DLElBQUssT0FDTGMsTUFBTyxXQTlDWCxNQUFPRCxNQUFLa0MsT0FBU3BCLEVBQWdCZCxLQUFLa0MsVUFrRHRDL0MsSUEvQ05xRCxPQUFPQyxTQWdERHhDLE1BQU95QyxtQkFBbUJDLEtBQUssUUFBUzFDLEtBQ3BDLEdBL0NBMkMsRUFnREEsT0FBT0Ysb0JBQW1CRyxLQUFLLFNBQWdCQyxHQUMzQyxPQUNJLE9BQVFBLEVBQVNmLEtBQU9lLEVBQVNDLE1BQzdCLElBQUssR0FDRCxJQXJEcEIvQyxLQUFLa0MsTUFBSyxDQXNEY1ksRUFBU0MsS0FBTyxDQUNoQixPQXREcEJILEVBQVk1QixFQUFlaEIsS0FBS2tDLE1BMkRwQixLQUFLLEdBRUQsTUFEQVksR0FBU0MsS0FBTyxFQTFEMUJILEVBQVVoRCxHQTZESixLQUFLLEdBQ0QsR0E3RFhnRCxFQUFZQSxFQUFVRyxPQUFNLENBOERiRCxFQUFTQyxLQUFPLENBQ2hCLE9BR1IsSUFBSyxHQUNMLElBQUssTUFDRCxNQUFPRCxHQUFTRSxTQUc3Qi9DLEVBQU9ELFdBSVhnQyIsImZpbGUiOiJBVkxUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsie1xuICAgIGxldCBkZWZhdWx0X2NtcF9mbiA9IChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhIDwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjbGFzcyBOb2RlIHtcbiAgICAgICAgY29uc3RydWN0b3IodmFsLCBrZXksIHBhcmVudCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB2aW9sYXRlc19BVkxfcHJvcGVydHkoKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5iYWxhbmNlX2ZhY3RvcigpKSA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnZpb2xhdGVzX0FWTF9wcm9wZXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFsYW5jZV9mYWN0b3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucmlnaHQgPyB0aGlzLnJpZ2h0LmhlaWdodCA6IC0xKSAtICh0aGlzLmxlZnQgPyB0aGlzLmxlZnQuaGVpZ2h0IDogLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY29tcHV0ZXMgdGhlIGhlaWdodCBvZiBhIG5vZGUsIHN0YXJ0aW5nIGZyb20gdGhlIGJvdHRvbSBhbmQgd29ya2luZ1xuICAgICAgICAgKiBpdCdzIHdlaWdodCB1cC4gQ29tcGxleGl0eSBsaW5lYXIgdG8gdGhlIGhlaWdodCBvZiB0aGUgdHJlZS5cbiAgICAgICAgICogKGxvZyhuKSBpZiB0cmVlIGlzIGJhbGFuY2VkKVxuICAgICAgICAgKi9cbiAgICAgICAgcmVjYWxjX2hlaWdodCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmxlZnQgPyB0aGlzLmxlZnQuaGVpZ2h0IDogLTEpLFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5yaWdodCA/IHRoaXMucmlnaHQuaGVpZ2h0IDogLTEpXG4gICAgICAgICAgICAgICAgKSArIDE7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5yZWNhbGNfaGVpZ2h0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByb3RhdGUoaXNfbGVmdF9yb3RhdGlvbikge1xuICAgICAgICAgICAgbGV0IG90aGVyO1xuXG4gICAgICAgICAgICAvLyBhcHBseSByb3RhdGlvblxuICAgICAgICAgICAgaWYgKGlzX2xlZnRfcm90YXRpb24pIHtcbiAgICAgICAgICAgICAgICBvdGhlciA9IHRoaXMucmlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IG90aGVyLmxlZnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdGhlci5sZWZ0ID0gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3RoZXIgPSB0aGlzLmxlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gb3RoZXIucmlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnQucGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3RoZXIucmlnaHQgPSB0aGlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZWJpbmQgcGFyZW50XG4gICAgICAgICAgICBpZiAodGhpcy5pc19sZWZ0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5sZWZ0ID0gb3RoZXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNfcmlnaHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnJpZ2h0ID0gb3RoZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdGhlci5wYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gb3RoZXI7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoZWlnaHRcbiAgICAgICAgICAgIHRoaXMucmVjYWxjX2hlaWdodCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gb3RoZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpc19sZWZ0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmxlZnQgPT09IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpc19yaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5yaWdodCA9PT0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXYgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVmdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodF9tb3N0X25vZGUodGhpcy5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwb3NzaWJsZV9uZXh0ID0gdGhpcztcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zc2libGVfbmV4dC5pc19yaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NzaWJsZV9uZXh0LnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zc2libGVfbmV4dCA9IHBvc3NpYmxlX25leHQucGFyZW50O1xuICAgICAgICAgICAgfSB3aGlsZSAocG9zc2libGVfbmV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0ICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRfbW9zdF9ub2RlKHRoaXMucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBvc3NpYmxlX25leHQgPSB0aGlzO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZV9uZXh0LmlzX2xlZnQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zc2libGVfbmV4dC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc3NpYmxlX25leHQgPSBwb3NzaWJsZV9uZXh0LnBhcmVudDtcbiAgICAgICAgICAgIH0gd2hpbGUgKHBvc3NpYmxlX25leHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmViYWxhbmNlKCkge1xuICAgICAgICAgICAgbGV0IGJhbGFuY2UgPSB0aGlzLmJhbGFuY2VfZmFjdG9yKCksXG4gICAgICAgICAgICAgICAgY2hpbGQgPSBiYWxhbmNlID4gMS8qcmlnaHQgaGVhdnkqLyA/IHRoaXMucmlnaHQgOiB0aGlzLmxlZnQsXG4gICAgICAgICAgICAgICAgY2hpbGRfYmFsYW5jZSA9IGNoaWxkLmJhbGFuY2VfZmFjdG9yKCk7XG5cbiAgICAgICAgICAgIGlmIChiYWxhbmNlID4gMSA/IGNoaWxkX2JhbGFuY2UgPCAwIDogY2hpbGRfYmFsYW5jZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBpbiBsZWZ0LXJpZ2h0IG9yIHJpZ2h0LWxlZnQgc2l0dWF0aW9uLCByZXF1aXJpbmcgZG91YmxlIHJvdGF0aW9uXG4gICAgICAgICAgICAgICAgY2hpbGQucm90YXRlKGNoaWxkX2JhbGFuY2UgPiAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlKGJhbGFuY2UgPiAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkb19nZXQgPSAoa2V5LCBub2RlLCByb3VuZF9kb3duID0gZmFsc2UsIGNtcCA9IGRlZmF1bHRfY21wX2ZuKSAgPT4ge1xuICAgICAgICBmdW5jdGlvbiBkb19nZXRfcmVjdXJzaXZlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiLTFcIjogKCkgPT4gZG9fZ2V0X3JlY3Vyc2l2ZShub2RlLmxlZnQpIHx8IChyb3VuZF9kb3duICYmIG5vZGUpLFxuICAgICAgICAgICAgICAgIDA6ICgpID0+IG5vZGUsXG4gICAgICAgICAgICAgICAgMTogKCkgPT4gZG9fZ2V0X3JlY3Vyc2l2ZShub2RlLnJpZ2h0KSB8fCAocm91bmRfZG93biAmJiBub2RlKVxuICAgICAgICAgICAgfVtjbXAoa2V5LCBub2RlLmtleSldKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IGRvX2dldF9yZWN1cnNpdmUobm9kZSk7XG5cbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByb3VuZF9kb3duICYmIHJlc3VsdC5rZXkgPiBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucHJldigpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgbGV0IGxlZnRfbW9zdF9ub2RlID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUubGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRfbW9zdF9ub2RlKG5vZGUubGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGxldCByaWdodF9tb3N0X25vZGUgPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5yaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHJpZ2h0X21vc3Rfbm9kZShub2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdmFyIEFWTFRyZWUgPSBjbGFzcyB7XG5cbiAgICAgICAgY29uc3RydWN0b3IoY29tcGFyZV9mbiA9IGRlZmF1bHRfY21wX2ZuKSB7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5jbXAgPSBjb21wYXJlX2ZuXG4gICAgICAgIH1cblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGRvX2dldChrZXksIHRoaXMuX3Jvb3QsIHVuZGVmaW5lZCwgdGhpcy5jbXApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS52YWw7XG4gICAgICAgIH1cblxuICAgICAgICBmaXJzdF9tYXRjaGluZyhrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBkb19nZXQoa2V5LCB0aGlzLl9yb290LCB0cnVlLCB0aGlzLmNtcCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdXQoa2V5LCB2YWwpIHtcbiAgICAgICAgICAgIHZhciBuZXdfbm9kZSxcbiAgICAgICAgICAgICAgICBkb19wdXQgPSAobm9kZSwgcGFyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3X25vZGUgPSBuZXcgTm9kZSh2YWwsIGtleSwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdfbm9kZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0xXCI6ICgpID0+IG5vZGUubGVmdCA9IGRvX3B1dChub2RlLmxlZnQsIG5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgMTogKCkgPT4gbm9kZS5yaWdodCA9IGRvX3B1dChub2RlLnJpZ2h0LCBub2RlKVxuICAgICAgICAgICAgICAgICAgICB9KVt0aGlzLmNtcChrZXksIG5vZGUua2V5KV0oKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3Jvb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IE5vZGUodmFsLCBrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvX3B1dCh0aGlzLl9yb290KTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXdfbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgICAgICAgICAgICAgICBuZXdfbm9kZS5yZWNhbGNfaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2aW9sYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh2aW9sYXRpb24gPSBuZXdfbm9kZS52aW9sYXRlc19BVkxfcHJvcGVydHkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpb2xhdGlvbiA9PSB0aGlzLl9yb290KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHZpb2xhdGlvbi5yZWJhbGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aW9sYXRpb24ucmVjYWxjX2hlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aW9sYXRpb24ucmViYWxhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZpcnN0ICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290ICYmIGxlZnRfbW9zdF9ub2RlKHRoaXMuX3Jvb3QpXG4gICAgICAgIH1cblxuICAgICAgICBsYXN0ICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290ICYmIHJpZ2h0X21vc3Rfbm9kZSh0aGlzLl9yb290KVxuICAgICAgICB9XG5cbiAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Jvb3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3Vycl9ub2RlID0gbGVmdF9tb3N0X25vZGUodGhpcy5fcm9vdCk7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjdXJyX25vZGUudmFsXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY3Vycl9ub2RlID0gY3Vycl9ub2RlLm5leHQoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==