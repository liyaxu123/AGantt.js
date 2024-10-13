(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AGantt = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var dayjs_min = {exports: {}};

  (function (module, exports) {
  	!function (t, e) {
  	  module.exports = e() ;
  	}(commonjsGlobal, function () {

  	  var t = 1e3,
  	    e = 6e4,
  	    n = 36e5,
  	    r = "millisecond",
  	    i = "second",
  	    s = "minute",
  	    u = "hour",
  	    a = "day",
  	    o = "week",
  	    c = "month",
  	    f = "quarter",
  	    h = "year",
  	    d = "date",
  	    l = "Invalid Date",
  	    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
  	    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
  	    M = {
  	      name: "en",
  	      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  	      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  	      ordinal: function (t) {
  	        var e = ["th", "st", "nd", "rd"],
  	          n = t % 100;
  	        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
  	      }
  	    },
  	    m = function (t, e, n) {
  	      var r = String(t);
  	      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  	    },
  	    v = {
  	      s: m,
  	      z: function (t) {
  	        var e = -t.utcOffset(),
  	          n = Math.abs(e),
  	          r = Math.floor(n / 60),
  	          i = n % 60;
  	        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
  	      },
  	      m: function t(e, n) {
  	        if (e.date() < n.date()) return -t(n, e);
  	        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
  	          i = e.clone().add(r, c),
  	          s = n - i < 0,
  	          u = e.clone().add(r + (s ? -1 : 1), c);
  	        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
  	      },
  	      a: function (t) {
  	        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
  	      },
  	      p: function (t) {
  	        return {
  	          M: c,
  	          y: h,
  	          w: o,
  	          d: a,
  	          D: d,
  	          h: u,
  	          m: s,
  	          s: i,
  	          ms: r,
  	          Q: f
  	        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
  	      },
  	      u: function (t) {
  	        return void 0 === t;
  	      }
  	    },
  	    g = "en",
  	    D = {};
  	  D[g] = M;
  	  var p = "$isDayjsObject",
  	    S = function (t) {
  	      return t instanceof _ || !(!t || !t[p]);
  	    },
  	    w = function t(e, n, r) {
  	      var i;
  	      if (!e) return g;
  	      if ("string" == typeof e) {
  	        var s = e.toLowerCase();
  	        D[s] && (i = s), n && (D[s] = n, i = s);
  	        var u = e.split("-");
  	        if (!i && u.length > 1) return t(u[0]);
  	      } else {
  	        var a = e.name;
  	        D[a] = e, i = a;
  	      }
  	      return !r && i && (g = i), i || !r && g;
  	    },
  	    O = function (t, e) {
  	      if (S(t)) return t.clone();
  	      var n = "object" == typeof e ? e : {};
  	      return n.date = t, n.args = arguments, new _(n);
  	    },
  	    b = v;
  	  b.l = w, b.i = S, b.w = function (t, e) {
  	    return O(t, {
  	      locale: e.$L,
  	      utc: e.$u,
  	      x: e.$x,
  	      $offset: e.$offset
  	    });
  	  };
  	  var _ = function () {
  	      function M(t) {
  	        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
  	      }
  	      var m = M.prototype;
  	      return m.parse = function (t) {
  	        this.$d = function (t) {
  	          var e = t.date,
  	            n = t.utc;
  	          if (null === e) return new Date(NaN);
  	          if (b.u(e)) return new Date();
  	          if (e instanceof Date) return new Date(e);
  	          if ("string" == typeof e && !/Z$/i.test(e)) {
  	            var r = e.match($);
  	            if (r) {
  	              var i = r[2] - 1 || 0,
  	                s = (r[7] || "0").substring(0, 3);
  	              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
  	            }
  	          }
  	          return new Date(e);
  	        }(t), this.init();
  	      }, m.init = function () {
  	        var t = this.$d;
  	        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  	      }, m.$utils = function () {
  	        return b;
  	      }, m.isValid = function () {
  	        return !(this.$d.toString() === l);
  	      }, m.isSame = function (t, e) {
  	        var n = O(t);
  	        return this.startOf(e) <= n && n <= this.endOf(e);
  	      }, m.isAfter = function (t, e) {
  	        return O(t) < this.startOf(e);
  	      }, m.isBefore = function (t, e) {
  	        return this.endOf(e) < O(t);
  	      }, m.$g = function (t, e, n) {
  	        return b.u(t) ? this[e] : this.set(n, t);
  	      }, m.unix = function () {
  	        return Math.floor(this.valueOf() / 1e3);
  	      }, m.valueOf = function () {
  	        return this.$d.getTime();
  	      }, m.startOf = function (t, e) {
  	        var n = this,
  	          r = !!b.u(e) || e,
  	          f = b.p(t),
  	          l = function (t, e) {
  	            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
  	            return r ? i : i.endOf(a);
  	          },
  	          $ = function (t, e) {
  	            return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
  	          },
  	          y = this.$W,
  	          M = this.$M,
  	          m = this.$D,
  	          v = "set" + (this.$u ? "UTC" : "");
  	        switch (f) {
  	          case h:
  	            return r ? l(1, 0) : l(31, 11);
  	          case c:
  	            return r ? l(1, M) : l(0, M + 1);
  	          case o:
  	            var g = this.$locale().weekStart || 0,
  	              D = (y < g ? y + 7 : y) - g;
  	            return l(r ? m - D : m + (6 - D), M);
  	          case a:
  	          case d:
  	            return $(v + "Hours", 0);
  	          case u:
  	            return $(v + "Minutes", 1);
  	          case s:
  	            return $(v + "Seconds", 2);
  	          case i:
  	            return $(v + "Milliseconds", 3);
  	          default:
  	            return this.clone();
  	        }
  	      }, m.endOf = function (t) {
  	        return this.startOf(t, !1);
  	      }, m.$set = function (t, e) {
  	        var n,
  	          o = b.p(t),
  	          f = "set" + (this.$u ? "UTC" : ""),
  	          l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
  	          $ = o === a ? this.$D + (e - this.$W) : e;
  	        if (o === c || o === h) {
  	          var y = this.clone().set(d, 1);
  	          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
  	        } else l && this.$d[l]($);
  	        return this.init(), this;
  	      }, m.set = function (t, e) {
  	        return this.clone().$set(t, e);
  	      }, m.get = function (t) {
  	        return this[b.p(t)]();
  	      }, m.add = function (r, f) {
  	        var d,
  	          l = this;
  	        r = Number(r);
  	        var $ = b.p(f),
  	          y = function (t) {
  	            var e = O(l);
  	            return b.w(e.date(e.date() + Math.round(t * r)), l);
  	          };
  	        if ($ === c) return this.set(c, this.$M + r);
  	        if ($ === h) return this.set(h, this.$y + r);
  	        if ($ === a) return y(1);
  	        if ($ === o) return y(7);
  	        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
  	          m = this.$d.getTime() + r * M;
  	        return b.w(m, this);
  	      }, m.subtract = function (t, e) {
  	        return this.add(-1 * t, e);
  	      }, m.format = function (t) {
  	        var e = this,
  	          n = this.$locale();
  	        if (!this.isValid()) return n.invalidDate || l;
  	        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
  	          i = b.z(this),
  	          s = this.$H,
  	          u = this.$m,
  	          a = this.$M,
  	          o = n.weekdays,
  	          c = n.months,
  	          f = n.meridiem,
  	          h = function (t, n, i, s) {
  	            return t && (t[n] || t(e, r)) || i[n].slice(0, s);
  	          },
  	          d = function (t) {
  	            return b.s(s % 12 || 12, t, "0");
  	          },
  	          $ = f || function (t, e, n) {
  	            var r = t < 12 ? "AM" : "PM";
  	            return n ? r.toLowerCase() : r;
  	          };
  	        return r.replace(y, function (t, r) {
  	          return r || function (t) {
  	            switch (t) {
  	              case "YY":
  	                return String(e.$y).slice(-2);
  	              case "YYYY":
  	                return b.s(e.$y, 4, "0");
  	              case "M":
  	                return a + 1;
  	              case "MM":
  	                return b.s(a + 1, 2, "0");
  	              case "MMM":
  	                return h(n.monthsShort, a, c, 3);
  	              case "MMMM":
  	                return h(c, a);
  	              case "D":
  	                return e.$D;
  	              case "DD":
  	                return b.s(e.$D, 2, "0");
  	              case "d":
  	                return String(e.$W);
  	              case "dd":
  	                return h(n.weekdaysMin, e.$W, o, 2);
  	              case "ddd":
  	                return h(n.weekdaysShort, e.$W, o, 3);
  	              case "dddd":
  	                return o[e.$W];
  	              case "H":
  	                return String(s);
  	              case "HH":
  	                return b.s(s, 2, "0");
  	              case "h":
  	                return d(1);
  	              case "hh":
  	                return d(2);
  	              case "a":
  	                return $(s, u, !0);
  	              case "A":
  	                return $(s, u, !1);
  	              case "m":
  	                return String(u);
  	              case "mm":
  	                return b.s(u, 2, "0");
  	              case "s":
  	                return String(e.$s);
  	              case "ss":
  	                return b.s(e.$s, 2, "0");
  	              case "SSS":
  	                return b.s(e.$ms, 3, "0");
  	              case "Z":
  	                return i;
  	            }
  	            return null;
  	          }(t) || i.replace(":", "");
  	        });
  	      }, m.utcOffset = function () {
  	        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
  	      }, m.diff = function (r, d, l) {
  	        var $,
  	          y = this,
  	          M = b.p(d),
  	          m = O(r),
  	          v = (m.utcOffset() - this.utcOffset()) * e,
  	          g = this - m,
  	          D = function () {
  	            return b.m(y, m);
  	          };
  	        switch (M) {
  	          case h:
  	            $ = D() / 12;
  	            break;
  	          case c:
  	            $ = D();
  	            break;
  	          case f:
  	            $ = D() / 3;
  	            break;
  	          case o:
  	            $ = (g - v) / 6048e5;
  	            break;
  	          case a:
  	            $ = (g - v) / 864e5;
  	            break;
  	          case u:
  	            $ = g / n;
  	            break;
  	          case s:
  	            $ = g / e;
  	            break;
  	          case i:
  	            $ = g / t;
  	            break;
  	          default:
  	            $ = g;
  	        }
  	        return l ? $ : b.a($);
  	      }, m.daysInMonth = function () {
  	        return this.endOf(c).$D;
  	      }, m.$locale = function () {
  	        return D[this.$L];
  	      }, m.locale = function (t, e) {
  	        if (!t) return this.$L;
  	        var n = this.clone(),
  	          r = w(t, e, !0);
  	        return r && (n.$L = r), n;
  	      }, m.clone = function () {
  	        return b.w(this.$d, this);
  	      }, m.toDate = function () {
  	        return new Date(this.valueOf());
  	      }, m.toJSON = function () {
  	        return this.isValid() ? this.toISOString() : null;
  	      }, m.toISOString = function () {
  	        return this.$d.toISOString();
  	      }, m.toString = function () {
  	        return this.$d.toUTCString();
  	      }, M;
  	    }(),
  	    k = _.prototype;
  	  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
  	    k[t[1]] = function (e) {
  	      return this.$g(e, t[0], t[1]);
  	    };
  	  }), O.extend = function (t, e) {
  	    return t.$i || (t(e, _, O), t.$i = !0), O;
  	  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
  	    return O(1e3 * t);
  	  }, O.en = D[g], O.Ls = D, O.p = {}, O;
  	}); 
  } (dayjs_min));

  var dayjs_minExports = dayjs_min.exports;
  var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

  // 一天的毫秒数
  var ONE_DAY_MS = 86400000;
  // 图表头部时间轴高度
  var HEADER_HEIGHT = 57;
  var TOP_PADDING = 0;

  // 视图日视图、周视图、月视图、季视图、年视图
  var viewTypeList = [{
    type: 'day',
    label: '日视图',
    value: 2880 // 一个格子宽度为30px, 一天24*60*60秒 / 30px = 2880秒/px
  }, {
    type: 'week',
    label: '周视图',
    value: 3600 // 一个格子宽度为168px, 一周24*60*60*7秒 / 168px = 36000秒/px
  }, {
    type: 'month',
    label: '月视图',
    value: 14400
  }, {
    type: 'quarter',
    label: '季视图',
    value: 86400
  }, {
    type: 'halfYear',
    label: '年视图',
    value: 115200
  }];
  var getViewTypeConfig = function getViewTypeConfig(viewType) {
    return viewTypeList.find(function (item) {
      return item.type === viewType;
    });
  };

  // 创建DOM
  var createElement = function createElement(tagName, className) {
    var element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    return element;
  };

  // 创建SVG元素
  var createSvgElement = function createSvgElement(tagName) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    for (var key in props) {
      var value = props[key];
      element.setAttribute(key, value);
    }
    return element;
  };
  var addPrefixCls = function addPrefixCls(str) {
    var prefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'my-gantt';
    return "".concat(prefixCls, "-").concat(str);
  };
  var handleDrag = function handleDrag(element, _ref, step) {
    var onDragBefore = _ref.onDragBefore,
      onDraging = _ref.onDraging,
      onDragEnd = _ref.onDragEnd;
    var positionX = 0;
    var accumulatedMove = 0; // 累计移动的距离

    var handleMouseMove = function handleMouseMove(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var moveX = ev.clientX;
      var deltaX = moveX - positionX; // 当前鼠标相对初始位置的位移

      if (step) {
        accumulatedMove += deltaX; // 累积移动的距离
        positionX = ev.clientX; // 更新初始位置为当前鼠标位置

        // 判断是否超过步长，如果超过，更新宽度
        if (Math.abs(accumulatedMove) >= step) {
          var steps = Math.floor(accumulatedMove / step); // 计算完整步长的数量
          onDraging === null || onDraging === void 0 || onDraging(steps);
          accumulatedMove = 0; // 重置累计移动距离
        }
      } else {
        onDraging === null || onDraging === void 0 || onDraging(deltaX, ev);
      }
    };
    var _handleMouseUp = function handleMouseUp(event) {
      event.stopPropagation();
      event.preventDefault();
      onDragEnd === null || onDragEnd === void 0 || onDragEnd();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', _handleMouseUp);
    };
    var handleMouseDown = function handleMouseDown(event) {
      onDragBefore === null || onDragBefore === void 0 || onDragBefore(event);
      event.stopPropagation();
      event.preventDefault();
      positionX = event.clientX;
      accumulatedMove = 0; // 重置累计移动距离 
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', _handleMouseUp);
    };
    element.addEventListener('mousedown', handleMouseDown);
  };

  // 给元素添加hover事件
  var useHover = function useHover(element, callback) {
    var isHover = false;
    var handleMouseEnter = function handleMouseEnter(event) {
      isHover = true;
      callback === null || callback === void 0 || callback(isHover, event);
    };
    var handleMouseLeave = function handleMouseLeave(event) {
      isHover = false;
      callback === null || callback === void 0 || callback(isHover, event);
    };
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
  };

  var isBetween$1 = {exports: {}};

  (function (module, exports) {
  	!function (e, i) {
  	  module.exports = i() ;
  	}(commonjsGlobal, function () {

  	  return function (e, i, t) {
  	    i.prototype.isBetween = function (e, i, s, f) {
  	      var n = t(e),
  	        o = t(i),
  	        r = "(" === (f = f || "()")[0],
  	        u = ")" === f[1];
  	      return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
  	    };
  	  };
  	}); 
  } (isBetween$1));

  var isBetweenExports = isBetween$1.exports;
  var isBetween = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);

  var weekday$1 = {exports: {}};

  (function (module, exports) {
  	!function (e, t) {
  	  module.exports = t() ;
  	}(commonjsGlobal, function () {

  	  return function (e, t) {
  	    t.prototype.weekday = function (e) {
  	      var t = this.$locale().weekStart || 0,
  	        i = this.$W,
  	        n = (i < t ? i + 7 : i) - t;
  	      return this.$utils().u(e) ? n : this.subtract(n, "day").add(e, "day");
  	    };
  	  };
  	}); 
  } (weekday$1));

  var weekdayExports = weekday$1.exports;
  var weekday = /*@__PURE__*/getDefaultExportFromCjs(weekdayExports);

  var weekOfYear$1 = {exports: {}};

  (function (module, exports) {
  	!function (e, t) {
  	  module.exports = t() ;
  	}(commonjsGlobal, function () {

  	  var e = "week",
  	    t = "year";
  	  return function (i, n, r) {
  	    var f = n.prototype;
  	    f.week = function (i) {
  	      if (void 0 === i && (i = null), null !== i) return this.add(7 * (i - this.week()), "day");
  	      var n = this.$locale().yearStart || 1;
  	      if (11 === this.month() && this.date() > 25) {
  	        var f = r(this).startOf(t).add(1, t).date(n),
  	          s = r(this).endOf(e);
  	        if (f.isBefore(s)) return 1;
  	      }
  	      var a = r(this).startOf(t).date(n).startOf(e).subtract(1, "millisecond"),
  	        o = this.diff(a, e, !0);
  	      return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
  	    }, f.weeks = function (e) {
  	      return void 0 === e && (e = null), this.week(e);
  	    };
  	  };
  	}); 
  } (weekOfYear$1));

  var weekOfYearExports = weekOfYear$1.exports;
  var weekOfYear = /*@__PURE__*/getDefaultExportFromCjs(weekOfYearExports);

  var quarterOfYear$1 = {exports: {}};

  (function (module, exports) {
  	!function (t, n) {
  	  module.exports = n() ;
  	}(commonjsGlobal, function () {

  	  var t = "month",
  	    n = "quarter";
  	  return function (e, i) {
  	    var r = i.prototype;
  	    r.quarter = function (t) {
  	      return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t - 1));
  	    };
  	    var s = r.add;
  	    r.add = function (e, i) {
  	      return e = Number(e), this.$utils().p(i) === n ? this.add(3 * e, t) : s.bind(this)(e, i);
  	    };
  	    var u = r.startOf;
  	    r.startOf = function (e, i) {
  	      var r = this.$utils(),
  	        s = !!r.u(i) || i;
  	      if (r.p(e) === n) {
  	        var o = this.quarter() - 1;
  	        return s ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
  	      }
  	      return u.bind(this)(e, i);
  	    };
  	  };
  	}); 
  } (quarterOfYear$1));

  var quarterOfYearExports = quarterOfYear$1.exports;
  var quarterOfYear = /*@__PURE__*/getDefaultExportFromCjs(quarterOfYearExports);

  var isLeapYear$1 = {exports: {}};

  (function (module, exports) {
  	!function (e, t) {
  	  module.exports = t() ;
  	}(commonjsGlobal, function () {

  	  return function (e, t) {
  	    t.prototype.isLeapYear = function () {
  	      return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
  	    };
  	  };
  	}); 
  } (isLeapYear$1));

  var isLeapYearExports = isLeapYear$1.exports;
  var isLeapYear = /*@__PURE__*/getDefaultExportFromCjs(isLeapYearExports);

  var advancedFormat$1 = {exports: {}};

  (function (module, exports) {
  	!function (e, t) {
  	  module.exports = t() ;
  	}(commonjsGlobal, function () {

  	  return function (e, t) {
  	    var r = t.prototype,
  	      n = r.format;
  	    r.format = function (e) {
  	      var t = this,
  	        r = this.$locale();
  	      if (!this.isValid()) return n.bind(this)(e);
  	      var s = this.$utils(),
  	        a = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (e) {
  	          switch (e) {
  	            case "Q":
  	              return Math.ceil((t.$M + 1) / 3);
  	            case "Do":
  	              return r.ordinal(t.$D);
  	            case "gggg":
  	              return t.weekYear();
  	            case "GGGG":
  	              return t.isoWeekYear();
  	            case "wo":
  	              return r.ordinal(t.week(), "W");
  	            case "w":
  	            case "ww":
  	              return s.s(t.week(), "w" === e ? 1 : 2, "0");
  	            case "W":
  	            case "WW":
  	              return s.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
  	            case "k":
  	            case "kk":
  	              return s.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0");
  	            case "X":
  	              return Math.floor(t.$d.getTime() / 1e3);
  	            case "x":
  	              return t.$d.getTime();
  	            case "z":
  	              return "[" + t.offsetName() + "]";
  	            case "zzz":
  	              return "[" + t.offsetName("long") + "]";
  	            default:
  	              return e;
  	          }
  	        });
  	      return n.bind(this)(a);
  	    };
  	  };
  	}); 
  } (advancedFormat$1));

  var advancedFormatExports = advancedFormat$1.exports;
  var advancedFormat = /*@__PURE__*/getDefaultExportFromCjs(advancedFormatExports);

  dayjs.extend(isBetween);
  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);
  dayjs.extend(quarterOfYear);
  dayjs.extend(isLeapYear);
  dayjs.extend(advancedFormat);
  var TimeAxis = /*#__PURE__*/function () {
    function TimeAxis(wrapper) {
      var _this$options$showBac;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, TimeAxis);
      this.$wrapper = this.verify_wrapper(wrapper);
      this.options = options;
      // 视图配置，默认为日视图
      var sightConfig = getViewTypeConfig(options === null || options === void 0 ? void 0 : options.viewType) || viewTypeList[0];
      this.sightConfig = sightConfig;
      this.headerWidth = this.$wrapper.clientWidth; // 宽度
      this.headerHeight = 57; // 高度
      // 默认偏移量
      this.translateX = dayjs(this.getStartDate()).valueOf() / (sightConfig.value * 1000);
      // 是否正在移动中
      this._isMoveing = false;
      // 是否显示返回今日按钮
      this._showBackToday = (_this$options$showBac = this.options.showBackToday) !== null && _this$options$showBac !== void 0 ? _this$options$showBac : true;
      this.initDom();
    }
    return _createClass(TimeAxis, [{
      key: "verify_wrapper",
      value: function verify_wrapper(element) {
        if (typeof element === "string") {
          return document.querySelector(element);
        } else if (element instanceof HTMLElement) {
          return element;
        } else {
          throw new TypeError("TimeAxis only supports usage of a string CSS selector, HTML DOM element for the 'element' parameter");
        }
      }

      // 组装DOM结构
    }, {
      key: "initDom",
      value: function initDom() {
        var $header = createElement('header', addPrefixCls('header'));
        var $tableHeader = this.createTableHeader();
        var $timeAxisHeader = this.createTimeAxis();
        $header.appendChild($tableHeader);
        $header.appendChild($timeAxisHeader);

        // 创建返回今日
        if (this.options.showBackToday) {
          var $backToday = this.createBackToday();
          $header.appendChild($backToday);
          this.$backToday = $backToday;
        }

        // 创建切换视图
        if (this.options.showViewTypeSwitch) {
          var $viewTypeSelect = this.createChangeViewType();
          $header.appendChild($viewTypeSelect);
        }
        this.$wrapper.appendChild($header);
        this.$header = $header;
      }

      // 创建左侧表头
    }, {
      key: "createTableHeader",
      value: function createTableHeader() {
        var $tableHeader = createElement('div', addPrefixCls('table-header'));
        return $tableHeader;
      }

      // 创建右侧时间轴
    }, {
      key: "createTimeAxis",
      value: function createTimeAxis() {
        var $timeAxisHeader = this.createTimeAxisHeader();
        var $timeAxis = createElement('div', addPrefixCls('time-axis'));
        // $timeAxis.style.left = `500px`;
        this.$timeAxis = $timeAxis;
        this.renderTimeAxisChunk($timeAxis);
        $timeAxisHeader.appendChild($timeAxis);
        return $timeAxisHeader;
      }

      // 渲染时间轴块
    }, {
      key: "renderTimeAxisChunk",
      value: function renderTimeAxisChunk(wrapper) {
        var $timeAxisRenderChunk = createElement('div', addPrefixCls('time-axis-render-chunk'));
        // 设置水平偏移
        $timeAxisRenderChunk.style.transform = "translateX(-".concat(this.translateX, "px)");
        this.createTimeAxisMajor($timeAxisRenderChunk);
        this.createTimeAxisMinor($timeAxisRenderChunk);
        // 向wrapper容器中添加之前先清空wrapper
        wrapper.innerHTML = '';
        wrapper.appendChild($timeAxisRenderChunk);
        return $timeAxisRenderChunk;
      }

      // 创建 header 并处理时间轴滚动
    }, {
      key: "createTimeAxisHeader",
      value: function createTimeAxisHeader() {
        var _this = this;
        var $timeAxisHeader = createElement('div', addPrefixCls('time-axis-header'));

        // 绑定拖动事件
        handleDrag($timeAxisHeader, {
          onDragBefore: function onDragBefore() {
            _this.isMoveing = true;
          },
          onDraging: function onDraging(deltaX) {
            var x = deltaX - _this.translateX;
            _this.setTranslateX(-x);
          },
          onDragEnd: function onDragEnd() {
            _this.isMoveing = false;
          }
        });

        // 通过事件代理，绑定点击事件
        $timeAxisHeader.addEventListener('click', function (e) {
          var $target = e.target;
          if ($target.className === addPrefixCls('time-axis-major-label') || $target.className === addPrefixCls('time-axis-minor-label')) {
            var _this$options$onTimel, _this$options;
            var dataTime = $target.getAttribute('data-time');
            (_this$options$onTimel = (_this$options = _this.options).onTimelineClick) === null || _this$options$onTimel === void 0 || _this$options$onTimel.call(_this$options, dataTime);
          }
        });
        return $timeAxisHeader;
      }

      // 创建主轴DOM
    }, {
      key: "createTimeAxisMajor",
      value: function createTimeAxisMajor(wrapper) {
        var majorList = this.getMajorList();
        // 使用 fragment 优化DOM批量创建
        var fragment = document.createDocumentFragment();
        majorList.forEach(function (item) {
          var $major = createElement('div', addPrefixCls('time-axis-major'));
          var $majorLabel = createElement('div', addPrefixCls('time-axis-major-label'));
          $majorLabel.innerText = item.label;
          $majorLabel.setAttribute('data-time', item.label);
          $major.appendChild($majorLabel);
          $major.style.cssText = "width: ".concat(item.width, "px; left: ").concat(item.left, "px");
          fragment.appendChild($major);
        });
        wrapper.appendChild(fragment);
      }

      // 创建次轴DOM
    }, {
      key: "createTimeAxisMinor",
      value: function createTimeAxisMinor(wrapper) {
        var minorList = this.getMinorList();
        var fragment = document.createDocumentFragment();
        minorList.forEach(function (item) {
          var $minor = createElement('div', addPrefixCls('time-axis-minor'));
          var $minorLabel = createElement('div', addPrefixCls('time-axis-minor-label'));
          $minorLabel.innerText = item.label;
          $minorLabel.setAttribute('data-time', item.key);
          $minor.appendChild($minorLabel);
          $minor.style.cssText = "width: ".concat(item.width, "px; left: ").concat(item.left, "px");

          // 标识周末
          if (item.isWeek) {
            $minor.setAttribute('isWeek', true);
          }

          // 标识当天
          if (item.isToday) {
            $minor.setAttribute('curDay', true);
          }
          fragment.appendChild($minor);
        });
        wrapper.appendChild(fragment);
      }

      // 创建返回今日
    }, {
      key: "createBackToday",
      value: function createBackToday() {
        var $backToday = createElement('button', addPrefixCls('time-back-today'));
        $backToday.innerText = '返回今日';
        $backToday.style.display = 'none';
        $backToday.addEventListener('click', this.scrollToToday.bind(this));
        return $backToday;
      }

      // 创建切换视图
    }, {
      key: "createChangeViewType",
      value: function createChangeViewType() {
        var _this$options2,
          _this2 = this;
        var $viewTypeSelect = createElement('select', addPrefixCls('view-type-switch'));
        viewTypeList.forEach(function (item) {
          var $option = createElement('option', addPrefixCls('view-type-option'));
          $option.setAttribute('value', item.type);
          $option.innerText = item.label;
          $viewTypeSelect.appendChild($option);
        });

        // 设置默认值
        $viewTypeSelect.value = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.viewType;
        $viewTypeSelect.addEventListener('change', function (event) {
          var val = event.target.value;
          _this2.setViewType(val);
        });
        return $viewTypeSelect;
      }
    }, {
      key: "setViewType",
      value: function setViewType(viewType) {
        var _this$options$onViewT, _this$options3;
        this.options.viewType = viewType;
        this.sightConfig = getViewTypeConfig(viewType);
        var translateX = dayjs(this.getStartDate()).valueOf() / (this.sightConfig.value * 1000);
        // 执行 setTranslateX，会自动重新渲染
        this.setTranslateX(translateX);
        (_this$options$onViewT = (_this$options3 = this.options).onViewTypeChange) === null || _this$options$onViewT === void 0 || _this$options$onViewT.call(_this$options3, {
          viewType: viewType,
          pxUnitAmp: this.pxUnitAmp
        });
      }
    }, {
      key: "setBackTodayDisplay",
      value: function setBackTodayDisplay() {
        // 处理display
        var isOverLeft = this.todayTranslateX < this.translateX;
        var isOverRight = this.todayTranslateX > this.translateX + this.headerWidth;
        var display = (isOverLeft || isOverRight) && this._showBackToday ? 'block' : 'none';
        this.$backToday.style.display = display;
        // 处理定位
        if (isOverLeft) {
          this.$backToday.style.left = '0px';
          this.$backToday.style.right = 'unset';
        } else {
          this.$backToday.style.left = 'unset';
          this.$backToday.style.right = '111px';
        }
      }

      // 返回当天
    }, {
      key: "scrollToToday",
      value: function scrollToToday() {
        var translateX = this.todayTranslateX - this.headerWidth / 2;
        this.setTranslateX(translateX);
      }

      // 跳转到指定日期
    }, {
      key: "scrollToDate",
      value: function scrollToDate(date) {
        var translateX = dayjs(date).valueOf() / this.pxUnitAmp - this.headerWidth / 2;
        this.setTranslateX(translateX);
      }

      /**
      * 切换视图类型开关
      * @param {boolean} flag - 是否显示视图类型选择器
      */
    }, {
      key: "toggleViewTypeSwitch",
      value: function toggleViewTypeSwitch(flag) {
        if (!this.options.showViewTypeSwitch) return;
        // 获取视图类型选择器元素
        var $viewTypeSelect = this.$header.querySelector(".".concat(addPrefixCls('view-type-switch')));
        if (flag) {
          // 如果需要显示，则设置其显示样式
          $viewTypeSelect.style.display = 'block';
        } else {
          // 如果不需要显示，则设置其隐藏样式
          $viewTypeSelect.style.display = 'none';
        }
      }

      /**
      * 根据传入的标志位控制返回今天按钮的显示状态
      * @param {boolean} flag - 控制按钮显示的标志位，true为显示，false为隐藏
      */
    }, {
      key: "toggleBackTodayBtn",
      value: function toggleBackTodayBtn(flag) {
        if (!this.options.showBackToday) return;
        if (flag) {
          this._showBackToday = true;
          this.$backToday.style.display = 'block';
        } else {
          this._showBackToday = false;
          this.$backToday.style.display = 'none';
        }
      }
    }, {
      key: "setTranslateX",
      value: function setTranslateX(translateX) {
        var _this$options$onChang, _this$options4;
        this.translateX = Math.max(translateX, 0);
        // 重新渲染时间轴数据
        this.renderTimeAxisChunk(this.$timeAxis);
        if (this.$backToday) {
          this.setBackTodayDisplay();
        }
        (_this$options$onChang = (_this$options4 = this.options).onChange) === null || _this$options$onChang === void 0 || _this$options$onChang.call(_this$options4, {
          translateX: translateX,
          minorList: this.getMinorList(),
          todayTranslateX: this.todayTranslateX,
          pxUnitAmp: this.pxUnitAmp
        });
      }

      // 获取视图宽度对应的毫秒数
    }, {
      key: "getDurationAmp",
      value: function getDurationAmp() {
        var clientWidth = this.headerWidth;
        return this.pxUnitAmp * clientWidth;
      }

      // 获取主轴数据
    }, {
      key: "getMajorList",
      value: function getMajorList() {
        var majorFormatMap = {
          day: 'YYYY年MM月',
          week: 'YYYY年MM月',
          month: 'YYYY年',
          quarter: 'YYYY年',
          halfYear: 'YYYY年'
        };
        // 获取当前开始时间毫秒数
        var translateAmp = this.translateAmp;
        // 获取结束时间的毫秒数
        var endAmp = translateAmp + this.getDurationAmp();
        // 获取当前视图类型
        var type = this.sightConfig.type;
        // 当前视图格式化类型
        var format = majorFormatMap[type];

        // 初始化当前时间
        var curDate = dayjs(translateAmp);
        // 主轴数据列表
        var dates = [];

        // 获取日期的开始时间
        var getStart = function getStart(date) {
          if (type === 'day' || type === 'week') {
            return date.startOf('month');
          }
          return date.startOf('year');
        };

        // 获取日期的结束时间
        var getEnd = function getEnd(date) {
          // 如果类型为天或周，则返回月末时间
          if (type === 'day' || type === 'week') {
            return date.endOf('month');
          }
          // 否则返回年末时间
          return date.endOf('year');
        };

        /**
         * 获取下一个日期
         * @param {date} start - 起始日期
         * @returns {date} - 返回下一个日期
        */
        var getNextDate = function getNextDate(start) {
          // 如果类型为天或周，则加上一个月
          if (type === 'day' || type === 'week') {
            return start.add(1, 'month');
          }
          // 否则加上一年
          return start.add(1, 'year');
        };

        // 对可视区域内的时间进行迭代
        while (curDate.isBetween(translateAmp - 1, endAmp + 1)) {
          var majorKey = curDate.format(format);
          var start = curDate;
          var end = getEnd(start);
          if (dates.length !== 0) {
            start = getStart(curDate);
          }
          dates.push({
            label: majorKey,
            startDate: start,
            endDate: end
          });

          // 获取下次迭代的时间
          start = getStart(curDate);
          curDate = getNextDate(start);
        }
        return this.majorAmp2Px(dates);
      }
    }, {
      key: "majorAmp2Px",
      value: function majorAmp2Px(ampList) {
        var pxUnitAmp = this.pxUnitAmp;
        var list = ampList.map(function (item) {
          var startDate = item.startDate;
          var endDate = item.endDate;
          var label = item.label;
          var left = startDate.valueOf() / pxUnitAmp;
          var width = (endDate.valueOf() - startDate.valueOf()) / pxUnitAmp;
          return {
            label: label,
            left: left,
            width: width,
            key: startDate.format('YYYY-MM-DD HH:mm:ss')
          };
        });
        return list;
      }

      // 获取次轴数据
    }, {
      key: "getMinorList",
      value: function getMinorList() {
        var _this3 = this;
        var minorFormatMap = {
          day: 'YYYY-MM-D',
          week: 'YYYY-w周',
          month: 'YYYY-MM月',
          quarter: 'YYYY-第Q季',
          halfYear: 'YYYY-'
        };
        // 上半年的月份
        var fstHalfYear = [0, 1, 2, 3, 4, 5];
        var startAmp = this.translateAmp;
        var endAmp = startAmp + this.getDurationAmp();
        var format = minorFormatMap[this.sightConfig.type];

        // 初始化当前时间
        var curDate = dayjs(startAmp);
        // 次轴数据
        var dates = [];
        var getMinorKey = function getMinorKey(date) {
          if (_this3.sightConfig.type === 'halfYear') {
            return date.format(format) + (fstHalfYear.includes(date.month()) ? '上半年' : '下半年');
          }
          return date.format(format);
        };
        var setStart = function setStart(date) {
          var map = {
            day: function day() {
              // 返回当天的起始时间
              return date.startOf('day');
            },
            week: function week() {
              // 返回本周一的起始时间
              return date.weekday(1).hour(0).minute(0).second(0);
            },
            month: function month() {
              // 返回当月的起始时间
              return date.startOf('month');
            },
            quarter: function quarter() {
              // 返回当季度的起始时间
              return date.startOf('quarter');
            },
            halfYear: function halfYear() {
              // 判断是否为上半年，如果是则返回上半年的起始时间，否则返回下半年的起始时间
              if (fstHalfYear.includes(date.month())) {
                return date.month(0).startOf('month');
              }
              return date.month(6).startOf('month');
            }
          };

          // 根据sightConfig对象中的type属性选择对应的起始日期处理函数并执行，然后返回起始日期对象
          return map[_this3.sightConfig.type]();
        };

        // 根据给定的起始时间，返回对应类型的结束时间
        var setEnd = function setEnd(start) {
          var map = {
            day: function day() {
              // 返回当天的最后一秒
              return start.endOf('day');
            },
            week: function week() {
              // 返回本周日的最后一秒
              return start.weekday(7).hour(23).minute(59).second(59);
            },
            month: function month() {
              // 返回当月的最后一秒
              return start.endOf('month');
            },
            quarter: function quarter() {
              // 返回当季度的最后一秒
              return start.endOf('quarter');
            },
            halfYear: function halfYear() {
              // 判断是否为上半年，并返回对应半年的最后一秒
              if (fstHalfYear.includes(start.month())) {
                return start.month(5).endOf('month');
              }
              return start.month(11).endOf('month');
            }
          };

          // 根据 sightConfig.type 调用对应的结束时间计算函数
          return map[_this3.sightConfig.type]();
        };
        var getNextDate = function getNextDate(start) {
          var map = {
            day: function day() {
              return start.add(1, 'day');
            },
            week: function week() {
              return start.add(1, 'week');
            },
            month: function month() {
              return start.add(1, 'month');
            },
            quarter: function quarter() {
              return start.add(1, 'quarter');
            },
            halfYear: function halfYear() {
              return start.add(6, 'month');
            }
          };
          return map[_this3.sightConfig.type]();
        };
        while (curDate.isBetween(startAmp - 1, endAmp + 1)) {
          var minorKey = getMinorKey(curDate);
          var start = setStart(curDate);
          var end = setEnd(start);
          dates.push({
            label: minorKey.split('-').pop(),
            startDate: start,
            endDate: end
          });
          curDate = getNextDate(start);
        }
        return this.minorAmp2Px(dates);
      }
    }, {
      key: "minorAmp2Px",
      value: function minorAmp2Px(ampList) {
        var _this4 = this;
        var pxUnitAmp = this.pxUnitAmp;
        var list = ampList.map(function (item) {
          var startDate = item.startDate;
          var endDate = item.endDate;
          var label = item.label;
          var left = startDate.valueOf() / pxUnitAmp;
          var width = (endDate.valueOf() - startDate.valueOf()) / pxUnitAmp;
          var isWeek = false;
          // const isToday = dayjs().isSame(dayjs(startDate), 'day');
          var isToday = _this4.isToday(startDate);
          if (_this4.sightConfig.type === 'day') {
            isWeek = _this4.isRestDay(startDate.toString());
          }
          return {
            label: label,
            left: left,
            width: width,
            isWeek: isWeek,
            isToday: isToday,
            key: startDate.format('YYYY-MM-DD HH:mm:ss')
          };
        });
        return list;
      }

      // 获取开始时间
    }, {
      key: "getStartDate",
      value: function getStartDate() {
        return dayjs().subtract(10, 'day').toString();
      }

      // 1px对应的毫秒数
    }, {
      key: "pxUnitAmp",
      get: function get() {
        return this.sightConfig.value * 1000;
      }

      // 当前开始时间毫秒数
    }, {
      key: "translateAmp",
      get: function get() {
        var translateX = this.translateX;
        return this.pxUnitAmp * translateX;
      }

      // 当天日期的偏移量
    }, {
      key: "todayTranslateX",
      get: function get() {
        return dayjs().startOf('day').valueOf() / this.pxUnitAmp;
      }
    }, {
      key: "isMoveing",
      get: function get() {
        return this._isMoveing;
      }

      // 定义 setter，监听属性值的变化
      ,
      set: function set(value) {
        if (this._isMoveing !== value) {
          this._isMoveing = value;
          this.onMoveingChange(this.isMoveing);
        }
      }
    }, {
      key: "onMoveingChange",
      value: function onMoveingChange(isMoveing) {
        if (isMoveing) {
          this.$timeAxis.style.cursor = 'col-resize';
          // 时间轴在滚动时，不显示今日
          if (this.$backToday) {
            this.$backToday.style.opacity = 0;
          }
        } else {
          this.$timeAxis.removeAttribute('style');
          if (this.$backToday) {
            this.$backToday.style.opacity = 1;
          }
        }
      }

      // 判断是否为休息日
    }, {
      key: "isRestDay",
      value: function isRestDay(date) {
        // dayjs(date).weekday() 获取日期对象的星期几（返回值范围是0到6，其中0代表周日，6代表周六）
        return [0, 6].includes(dayjs(date).weekday());
      }

      // 判断是否为今天
    }, {
      key: "isToday",
      value: function isToday(date) {
        var today = dayjs().startOf('day'); // 今天的日期开始时间

        var res = false;
        if (this.sightConfig.type === 'day') {
          res = date.isSame(today, 'day');
        } else if (this.sightConfig.type === 'week') {
          res = date.isSame(today, 'week');
        } else if (this.sightConfig.type === 'month') {
          res = date.isSame(today, 'month');
        } else if (this.sightConfig.type === 'quarter' || this.sightConfig.type === 'halfYear') {
          res = date.isSame(today, 'quarter');
        }
        return res; // 判断是否是同一天
      }
    }]);
  }();

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$3(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }
  var isObject_1 = isObject$3;

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$2 = freeGlobal || freeSelf || Function('return this')();
  var _root = root$2;

  var root$1 = _root;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now$1 = function () {
    return root$1.Date.now();
  };
  var now_1 = now$1;

  /** Used to match a single whitespace character. */

  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex$1(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }
  var _trimmedEndIndex = trimmedEndIndex$1;

  var trimmedEndIndex = _trimmedEndIndex;

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim$1(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }
  var _baseTrim = baseTrim$1;

  var root = _root;

  /** Built-in value references. */
  var Symbol$3 = root.Symbol;
  var _Symbol = Symbol$3;

  var Symbol$2 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto$1.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;

  var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$1(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$1;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$1(value) {
    return value != null && typeof value == 'object';
  }
  var isObjectLike_1 = isObjectLike$1;

  var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$1(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$1;

  var baseTrim = _baseTrim,
    isObject$2 = isObject_1,
    isSymbol = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber$1(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject$2(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject$2(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_1 = toNumber$1;

  var isObject$1 = isObject_1,
    now = now_1,
    toNumber = toNumber_1;

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
    nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce$1(func, wait, options) {
    var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber(wait) || 0;
    if (isObject$1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs,
        thisArg = lastThis;
      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }
    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(),
        isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_1 = debounce$1;

  var debounce = debounce_1,
    isObject = isObject_1;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
      trailing = true;
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }
  var throttle_1 = throttle;

  var throttle$1 = /*@__PURE__*/getDefaultExportFromCjs(throttle_1);

  /*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */

  const {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor
  } = Object;
  let {
    freeze,
    seal,
    create
  } = Object; // eslint-disable-line import/no-mutable-exports
  let {
    apply,
    construct
  } = typeof Reflect !== 'undefined' && Reflect;
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return new Func(...args);
    };
  }
  const arrayForEach = unapply(Array.prototype.forEach);
  const arrayPop = unapply(Array.prototype.pop);
  const arrayPush = unapply(Array.prototype.push);
  const stringToLowerCase = unapply(String.prototype.toLowerCase);
  const stringToString = unapply(String.prototype.toString);
  const stringMatch = unapply(String.prototype.match);
  const stringReplace = unapply(String.prototype.replace);
  const stringIndexOf = unapply(String.prototype.indexOf);
  const stringTrim = unapply(String.prototype.trim);
  const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
  const regExpTest = unapply(RegExp.prototype.test);
  const typeErrorCreate = unconstruct(TypeError);

  /**
   * Creates a new function that calls the given function with a specified thisArg and arguments.
   *
   * @param {Function} func - The function to be wrapped and called.
   * @returns {Function} A new function that calls the given function with a specified thisArg and arguments.
   */
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }

  /**
   * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
   *
   * @param {Function} func - The constructor function to be wrapped and called.
   * @returns {Function} A new function that constructs an instance of the given constructor function with the provided arguments.
   */
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }

  /**
   * Add properties to a lookup table
   *
   * @param {Object} set - The set to which elements will be added.
   * @param {Array} array - The array containing elements to be added to the set.
   * @param {Function} transformCaseFunc - An optional function to transform the case of each element before adding to the set.
   * @returns {Object} The modified set with added elements.
   */
  function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    let l = array.length;
    while (l--) {
      let element = array[l];
      if (typeof element === 'string') {
        const lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }

  /**
   * Clean up an array to harden against CSPP
   *
   * @param {Array} array - The array to be cleaned.
   * @returns {Array} The cleaned version of the array
   */
  function cleanArray(array) {
    for (let index = 0; index < array.length; index++) {
      const isPropertyExist = objectHasOwnProperty(array, index);
      if (!isPropertyExist) {
        array[index] = null;
      }
    }
    return array;
  }

  /**
   * Shallow clone an object
   *
   * @param {Object} object - The object to be cloned.
   * @returns {Object} A new object that copies the original.
   */
  function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)) {
      const isPropertyExist = objectHasOwnProperty(object, property);
      if (isPropertyExist) {
        if (Array.isArray(value)) {
          newObject[property] = cleanArray(value);
        } else if (value && typeof value === 'object' && value.constructor === Object) {
          newObject[property] = clone(value);
        } else {
          newObject[property] = value;
        }
      }
    }
    return newObject;
  }

  /**
   * This method automatically checks if the prop is function or getter and behaves accordingly.
   *
   * @param {Object} object - The object to look up the getter function in its prototype chain.
   * @param {String} prop - The property name for which to find the getter function.
   * @returns {Function} The getter function found in the prototype chain or a fallback function.
   */
  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue() {
      return null;
    }
    return fallbackValue;
  }
  const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  const text = freeze(['#text']);
  const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'popover', 'popovertarget', 'popovertargetaction', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'wrap', 'xmlns', 'slot']);
  const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'amplitude', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'exponent', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'slope', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'tablevalues', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  const DOCTYPE_NAME = seal(/^html$/i);
  const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var EXPRESSIONS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    ERB_EXPR: ERB_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR,
    DATA_ATTR: DATA_ATTR,
    ARIA_ATTR: ARIA_ATTR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    DOCTYPE_NAME: DOCTYPE_NAME,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT
  });

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  const NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12 // Deprecated
  };
  const getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {HTMLScriptElement} purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return {TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */
  const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML(html) {
          return html;
        },
        createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  function createDOMPurify() {
    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = root => createDOMPurify(root);

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '3.1.7';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    let {
      document
    } = window;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes
    } = window;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const remove = lookupGetter(ElementPrototype, 'remove');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      const template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document;
    const {
      importNode
    } = originalDocument;
    let hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const {
      MUSTACHE_EXPR,
      ERB_EXPR,
      TMPLIT_EXPR,
      DATA_ATTR,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE,
      CUSTOM_ELEMENT
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);

    /* Allowed attribute names */
    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);

    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */
    let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    let FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    let FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    let ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    let ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    let ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */
    let ALLOW_SELF_CLOSE_IN_ATTR = true;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    let SAFE_FOR_TEMPLATES = false;

    /* Output should be safe even for XML used within HTML and alike.
     * This means, DOMPurify removes comments when containing risky content.
     */
    let SAFE_FOR_XML = true;

    /* Decide if document with <html>... should be returned */
    let WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    let SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    let FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    let RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    let RETURN_DOM_FRAGMENT = false;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    let RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */
    let SANITIZE_DOM = true;

    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */
    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';

    /* Keep element content when removing element? */
    let KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    let IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    let USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;

    /* Allowed XHTML+XML namespaces */
    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);

    /* Parsing of strict XHTML documents */
    let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;

    /* Keep a reference to config to pass to hooks */
    let CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || typeof cfg !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;

      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;

      /* Set configuration parameters */
      ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, text);
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        }

        // Overwrite existing TrustedTypes policy.
        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;

        // Sign local variables required by `sanitize`.
        emptyHTML = trustedTypesPolicy.createHTML('');
      } else {
        // Uninitialized policy, attempt to initialize the internal dompurify policy.
        if (trustedTypesPolicy === undefined) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        }

        // If creating the internal policy succeeded sign internal variables.
        if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
          emptyHTML = trustedTypesPolicy.createHTML('');
        }
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    const HTML_INTEGRATION_POINTS = addToSet({}, ['annotation-xml']);

    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
    const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);

    /**
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    const _checkValidNamespace = function _checkValidNamespace(element) {
      let parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // For XHTML and XML documents that support custom namespaces
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    const _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        getParentNode(node).removeChild(node);
      } catch (_) {
        remove(node);
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    const _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    const _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      let doc = null;
      let leadingWhitespace = null;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }
      const body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     *
     * @param  {Node} root The root element or node to start traversing on.
     * @return {NodeIterator} The created NodeIterator
     */
    const _createNodeIterator = function _createNodeIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    const _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };

    /**
     * Checks whether the given object is a DOM node.
     *
     * @param  {Node} object object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    const _isNode = function _isNode(object) {
      return typeof Node === 'function' && object instanceof Node;
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    const _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], hook => {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    const _sanitizeElements = function _sanitizeElements(currentNode) {
      let content = null;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      const tagName = transformCaseFunc(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove any occurrence of processing instructions */
      if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove any kind of possibly harmful comments */
      if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
            return false;
          }
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
            return false;
          }
        }

        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            const childCount = childNodes.length;
            for (let i = childCount - 1; i >= 0; --i) {
              const childClone = cloneNode(childNodes[i], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Make sure that older browsers don't get fallback-tag mXSS */
      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
        /* Get the element's text content */
        content = currentNode.textContent;
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          content = stringReplace(content, expr, ' ');
        });
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);
      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ;else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ;else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ;else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ;else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ;else if (value) {
        return false;
      } else ;
      return true;
    };

    /**
     * _isBasicCustomElement
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     *
     * @param {string} tagName name of the tag of the node to sanitize
     * @returns {boolean} Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
     */
    const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
      return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);
      const {
        attributes
      } = currentNode;

      /* Check if we have attributes; if not we might have a text node */
      if (!attributes) {
        return;
      }
      const hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      let l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        const attr = attributes[l];
        const {
          name,
          namespaceURI,
          value: attrValue
        } = attr;
        const lcName = transformCaseFunc(name);
        let value = name === 'value' ? attrValue : stringTrim(attrValue);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;

        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
            value = stringReplace(value, expr, ' ');
          });
        }

        /* Is `value` valid for this attribute? */
        const lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */
        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode);

          // Prefix the value and later re-create the attribute with the sanitized value
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }

        /* Work around a security issue with comments inside attributes */
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Handle attributes that require Trusted Types */
        if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ;else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      let shadowNode = null;
      const shadowIterator = _createNodeIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} cfg object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let body = null;
      let importedNode = null;
      let currentNode = null;
      let returnNode = null;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }

      /* Return dirty HTML if DOMPurify cannot run */
      if (!DOMPurify.isSupported) {
        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);
      }

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Serialize doctype if allowed */
      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          serializedHTML = stringReplace(serializedHTML, expr, ' ');
        });
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function () {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {String} tag Tag name of containing element.
     * @param  {String} attr Attribute name.
     * @param  {String} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();

  var Chart = /*#__PURE__*/function () {
    function Chart(wrapper) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Chart);
      // 判断 taskItem 滚动时是否在视图内
      _defineProperty(this, "handleTaskItemInView", throttle$1(function () {
        var translateX = _this.options.translateX;
        var taskItemList = document.querySelectorAll(".".concat(addPrefixCls('task-item')));
        taskItemList.forEach(function (item) {
          // 获取每一个 taskItem 的 translateX
          var itemTranslateX = parseFloat(item.getAttribute('style').match(/translateX\(([-\d.]+)px/)[1]);
          var itemWidth = parseInt(item.offsetWidth);
          // 获取父元素的上一个兄弟元素
          var $taskRowStyleBar = item.parentElement.previousElementSibling;
          var $leftArrowBtn = $taskRowStyleBar.querySelector(".".concat(addPrefixCls('task-item-go-back-left-btn')));
          var $rightArrowBtn = $taskRowStyleBar.querySelector(".".concat(addPrefixCls('task-item-go-back-right-btn')));

          // 在左侧隐藏
          if (itemTranslateX + itemWidth <= translateX) {
            $leftArrowBtn.setAttribute('data-left-arrow', true);
            $leftArrowBtn.setAttribute('data-translateX', itemTranslateX);
          } else {
            $leftArrowBtn.removeAttribute('data-left-arrow');
          }

          // 在右侧隐藏
          if (itemTranslateX >= translateX + _this.bodyClientWidth) {
            $rightArrowBtn.setAttribute('data-right-arrow', true);
            $rightArrowBtn.setAttribute('data-translateX', itemTranslateX);
          } else {
            $rightArrowBtn.removeAttribute('data-right-arrow');
          }
        });
      }, 300));
      // 设置垂直滚动高度，节流处理
      _defineProperty(this, "setScrollY", throttle$1(function (scrollTop) {
        _this.scrollTop = scrollTop;
      }, 100));
      this.$wrapper = this.verify_wrapper(wrapper);
      this.options = options;
      // 1px对应的毫秒数
      this.pxUnitAmp = dayjs().startOf('day').valueOf() / this.options.todayTranslateX;
      // 记录垂直滚动距离
      this.scrollTop = 0;
      // 垂直虚拟滚动开始索引
      this.virtualStartIndex = 0;
      // 是否在设置任务进度
      this.isSetProgressIng = false;
      this.initDom();
    }
    return _createClass(Chart, [{
      key: "verify_wrapper",
      value: function verify_wrapper(element) {
        if (typeof element === "string") {
          return document.querySelector(element);
        } else if (element instanceof HTMLElement) {
          return element;
        } else {
          throw new TypeError("Chart only supports usage of a string CSS selector, HTML DOM element for the 'element' parameter");
        }
      }
    }, {
      key: "initDom",
      value: function initDom() {
        var $chartWrapper = createElement('main', addPrefixCls('chart-wrapper'));
        $chartWrapper.style.height = "".concat(this.bodyClientHeight, "px");
        // 给 $chartWrapper 绑定垂直滚动事件
        $chartWrapper.addEventListener('scroll', this.handleScroll.bind(this));
        this.createGanttChart($chartWrapper);
        this.$wrapper.appendChild($chartWrapper);
        this.handleTaskItemInView();
      }

      // 绑定水平滚动事件，通过事件代理处理各个事件
    }, {
      key: "createGanttChart",
      value: function createGanttChart(wrapper) {
        var _this2 = this;
        var $ganttChart = createElement('div', addPrefixCls('chart'));
        $ganttChart.style.width = "".concat(this.bodyClientWidth, "px");
        $ganttChart.style.height = "".concat(this.bodyScrollHeight, "px");
        this.$ganttChart = $ganttChart;
        // 绑定鼠标滚轮事件
        $ganttChart.addEventListener('wheel', this.handleWheel.bind(this));

        // 绑定鼠标拖动事件
        handleDrag($ganttChart, {
          onDragBefore: function onDragBefore(event) {
            var targetClassName = event.target.className;
            if (targetClassName !== addPrefixCls('task-row-style-bar')) {
              return;
            }
            $ganttChart.style.cursor = 'col-resize';
          },
          onDraging: function onDraging(x) {
            var _this2$options$onWhee, _this2$options;
            (_this2$options$onWhee = (_this2$options = _this2.options).onWheel) === null || _this2$options$onWhee === void 0 || _this2$options$onWhee.call(_this2$options, -x);
          },
          onDragEnd: function onDragEnd() {
            $ganttChart.style.cursor = 'default';
          }
        });

        // 通过事件代理，绑定点击事件
        $ganttChart.addEventListener('click', function (event) {
          var target = event.target;
          // console.log(target);

          if (target.className === addPrefixCls('task-item-content') || target.className === addPrefixCls('task-item-handle-wrapper')) {
            var _this2$options$onTask, _this2$options2;
            var taskItem = target.parentNode;
            var taskItemId = taskItem.getAttribute('data-task-id') * 1;
            // 根据 taskId 获取task数据
            var taskData = _this2.getTaskDataById(taskItemId);
            (_this2$options$onTask = (_this2$options2 = _this2.options).onTaskBarClick) === null || _this2$options$onTask === void 0 || _this2$options$onTask.call(_this2$options2, taskData);
          }
          if (target.className === addPrefixCls('task-item-go-back-left-btn') || target.className === addPrefixCls('task-item-go-back-right-btn')) {
            var _this2$options$onArro, _this2$options3;
            // 添加过渡效果
            _this2.$taskBarRenderChunk.style.transition = 'transform 0.4s';
            var translateX = target.getAttribute('data-translatex');
            (_this2$options$onArro = (_this2$options3 = _this2.options).onArrowBtnClick) === null || _this2$options$onArro === void 0 || _this2$options$onArro.call(_this2$options3, {
              translateX: translateX - _this2.bodyClientWidth / 2
            });
            // 移除过渡效果
            setTimeout(function () {
              _this2.$taskBarRenderChunk.style.transition = 'none';
            }, 500);
          }
        });

        // 创建SVG背景
        this.createSvgBg($ganttChart);
        // 创建横条纹管道
        this.createTaskBarRenderChunk($ganttChart);
        // 创建拖动展示遮罩元素
        if (this.options.showDragMask) {
          this.createDragMask($ganttChart);
        }
        wrapper.appendChild($ganttChart);
      }

      // 处理鼠标滚轮事件，注意 this 发生了变化
    }, {
      key: "handleWheel",
      value: function handleWheel(event) {
        if (event.deltaX !== 0) {
          event.preventDefault();
          event.stopPropagation();
        }
        // 水平滚动，需要修改 TranslateX，重新渲染
        if (Math.abs(event.deltaX) > 0) {
          var _this$options$onWheel, _this$options;
          (_this$options$onWheel = (_this$options = this.options).onWheel) === null || _this$options$onWheel === void 0 || _this$options$onWheel.call(_this$options, event.deltaX);
        }
      }

      // 创建拖动遮罩元素
    }, {
      key: "createDragMask",
      value: function createDragMask(wrapper) {
        var $dragMaskWrap = createElement('div', addPrefixCls('drag-mask-wrapper'));
        $dragMaskWrap.style.cssText = "height: ".concat(this.bodyScrollHeight, "px; transform: translateX(-").concat(this.options.translateX, "px");
        var $dragMask = createElement('div', addPrefixCls('drag-mask'));
        // 显示开始时间
        var $dragMaskStart = createElement('div', addPrefixCls('drag-mask-start'));
        // 显示结束时间
        var $dragMaskEnd = createElement('div', addPrefixCls('drag-mask-end'));
        $dragMask.appendChild($dragMaskStart);
        $dragMask.appendChild($dragMaskEnd);
        $dragMaskWrap.appendChild($dragMask);
        wrapper.appendChild($dragMaskWrap);
        this.$dragMaskWrap = $dragMaskWrap;
        this.$dragMask = $dragMask;
      }

      // 创建 SVG 背景
    }, {
      key: "createSvgBg",
      value: function createSvgBg(wrapper) {
        // 创建一个SVG元素
        var _this$options2 = this.options,
          translateX = _this$options2.translateX,
          minorList = _this$options2.minorList;
        var $svg = createSvgElement('svg', {
          width: this.bodyClientWidth,
          height: this.bodyScrollHeight,
          viewBox: "".concat(translateX, " 0 ").concat(this.bodyClientWidth, " ").concat(this.bodyScrollHeight),
          "class": addPrefixCls('chart-svg-renderer')
        });
        this.$svg = $svg;
        this.createVerticalStripe(minorList);
        wrapper.appendChild($svg);
      }

      // 创建SVG竖条纹
    }, {
      key: "createVerticalStripe",
      value: function createVerticalStripe(minorList) {
        var _this3 = this;
        // 先清空再创建
        this.$svg.innerHTML = '';
        var _this$options3 = this.options,
          lineColor = _this$options3.lineColor,
          weekBarBg = _this$options3.weekBarBg;
        var fragment = document.createDocumentFragment();
        minorList === null || minorList === void 0 || minorList.forEach(function (item) {
          // 创建group元素
          var $g = createSvgElement('g', {
            stroke: lineColor // 设置线条颜色
          });

          // 创建path
          var $path = createSvgElement('path', {
            d: "M".concat(item.left, ",0 L").concat(item.left, ",").concat(_this3.bodyScrollHeight)
          });
          $g.appendChild($path);
          // 如果是周末创建rect
          if (item.isWeek) {
            var $rect = createSvgElement('rect', {
              x: item.left,
              y: 0,
              width: item.width,
              height: _this3.bodyScrollHeight,
              fill: weekBarBg,
              // 周末条的背景颜色
              strokeWidth: 0
            });
            $g.appendChild($rect);
          }
          fragment.appendChild($g);
        });
        this.$svg.appendChild(fragment);
      }

      // 创建任务条区域
    }, {
      key: "createTaskBarRenderChunk",
      value: function createTaskBarRenderChunk(wrapper) {
        var $taskBarRenderChunk = createElement('div', addPrefixCls('task-bar-render-chunk'));
        $taskBarRenderChunk.style.cssText = "height: ".concat(this.bodyScrollHeight, "px; transform: translateX(-").concat(this.options.translateX, "px");
        this.$taskBarRenderChunk = $taskBarRenderChunk;
        // 渲染 taskBar
        this.renderTaskBar();
        wrapper.appendChild($taskBarRenderChunk);
      }
    }, {
      key: "renderTaskBar",
      value: function renderTaskBar() {
        var _this$getVisibleRows = this.getVisibleRows,
          count = _this$getVisibleRows.count,
          start = _this$getVisibleRows.start;
        this.$taskBarRenderChunk.innerHTML = '';
        var end = start + count;
        if (end >= this.getBarList.length) {
          end = this.getBarList.length;
        }
        var fragment = document.createDocumentFragment();
        for (var i = start; i < end; i++) {
          var item = this.getBarList[i];
          var $taskRow = this.createTaskRow();
          $taskRow.style.top = "".concat(i * this.options.rowHeight, "px");
          var $taskRowStyleBar = this.createTaskRowStyleBar();
          var $taskItemWrapper = this.renderTaskItem(item);
          $taskRow.appendChild($taskRowStyleBar);
          $taskRow.appendChild($taskItemWrapper);
          fragment.appendChild($taskRow);
        }
        this.$taskBarRenderChunk.appendChild(fragment);
        // 创建今日线
        this.createTodayLine();
      }
    }, {
      key: "createTaskRow",
      value: function createTaskRow() {
        var $taskRow = createElement('div', addPrefixCls('task-row'));
        $taskRow.style.width = "".concat(this.bodyClientWidth, "px");
        return $taskRow;
      }

      // 负责渲染 taskRow 的样式
    }, {
      key: "createTaskRowStyleBar",
      value: function createTaskRowStyleBar() {
        var $taskRowStyleBar = createElement('div', addPrefixCls('task-row-style-bar'));
        $taskRowStyleBar.style.transform = "translateX(".concat(this.options.translateX, "px)");
        var $taskitemGoBackLeftBtn = this.taskitemGoBackBtnOnLeft();
        var $taskitemGoBackRightBtn = this.taskitemGoBackBtnOnRight();
        $taskRowStyleBar.appendChild($taskitemGoBackLeftBtn);
        $taskRowStyleBar.appendChild($taskitemGoBackRightBtn);
        return $taskRowStyleBar;
      }
    }, {
      key: "taskitemGoBackBtnOnLeft",
      value: function taskitemGoBackBtnOnLeft() {
        var $btn = createElement('div', addPrefixCls('task-item-go-back-left-btn'));
        $btn.innerHTML = '«';
        return $btn;
      }
    }, {
      key: "taskitemGoBackBtnOnRight",
      value: function taskitemGoBackBtnOnRight() {
        var $btn = createElement('div', addPrefixCls('task-item-go-back-right-btn'));
        $btn.innerHTML = '»';
        return $btn;
      }

      // 渲染每一个任务条
    }, {
      key: "renderTaskItem",
      value: function renderTaskItem(data) {
        var _this4 = this;
        var $taskItemWrapper = createElement('div', addPrefixCls('task-item-wrapper'));
        $taskItemWrapper.style.height = "".concat(this.options.rowHeight - 1, "px");

        // 判断日期是否合法
        var valid = dayjs(data.startDate).isValid() && dayjs(data.endDate).isValid();
        if (!valid) {
          throw new Error("startDate or endDate is invalid");
        }
        var startAmp = dayjs(data.startDate || 0).startOf('day').valueOf();
        var endAmp = dayjs(data.endDate || 0).endOf('day').valueOf();
        // 最小宽度
        var minStamp = 11 * this.pxUnitAmp;
        // 开始结束日期相同默认一天
        if (Math.abs(endAmp - startAmp) < minStamp) {
          startAmp = dayjs(data.startDate || 0).startOf('day').valueOf();
          endAmp = dayjs(data.endDate || 0).endOf('day').add(minStamp, 'millisecond').valueOf();
        }
        // 计算宽度
        var width = (endAmp - startAmp) / this.pxUnitAmp;
        // 计算偏移
        var translateX = startAmp / this.pxUnitAmp;
        var $taskItem = createElement('div', addPrefixCls('task-item'));
        $taskItem.setAttribute('data-task-id', data.id);
        $taskItem.style.cssText = "width: ".concat(width, "px; transform: translateX(").concat(translateX, "px);");

        // $taskItem 处理拖拽移动
        handleDrag($taskItem, {
          onDraging: function onDraging(steps) {
            _this4.$ganttChart.style.pointerEvents = 'none'; // 禁用点击事件，防止拖拽移动之后，触发子元素的点击事件
            var taskItemTranslateX = parseFloat($taskItem.getAttribute('style').match(/translateX\(([-\d.]+)px/)[1]);
            var newTranslateX = taskItemTranslateX + steps * _this4.step;
            $taskItem.style.transform = "translateX(".concat(newTranslateX, "px)");

            // 显示遮罩
            if (_this4.options.showDragMask) {
              var top = parseFloat($taskItem.parentElement.parentElement.style.top);
              _this4.showDragMask($taskItem.offsetWidth, newTranslateX, top);
            }
          },
          onDragEnd: function onDragEnd() {
            _this4.$ganttChart.style.pointerEvents = ''; // 恢复点击事件
            // 隐藏遮罩
            if (_this4.options.showDragMask) {
              _this4.$dragMask.style.display = 'none';
            }
            // 移动之后，更新 tasks 数据
            _this4.dragAfterSetDate($taskItem);
          }
        }, this.step);

        // 调整进度部分
        var $taskItemProgressWrapper = this.taskItemProgressWrapper(data);
        $taskItem.appendChild($taskItemProgressWrapper);

        // 内容部分
        var $taskItemContent = this.taskItemContent(data);
        $taskItem.appendChild($taskItemContent);

        // resize部分
        var $taskItemHandleWrapper = this.taskItemHandleWrapper();
        $taskItem.appendChild($taskItemHandleWrapper);

        // tooltip部分
        // $taskItem 处理 hover 事件
        var $taskItemTooltip = null;
        useHover($taskItem, function (isHover) {
          var $taskItemProgressHandle = $taskItem.querySelector(".".concat(addPrefixCls('task-item-progress-handle')));
          if (isHover) {
            if (_this4.options.showTooltip && _this4.isSetProgressIng === false) {
              // 动态创建 tooltip，保证最新数据
              var taskItemId = $taskItem.getAttribute('data-task-id') * 1;
              var taskData = _this4.getTaskDataById(taskItemId);
              $taskItemTooltip = _this4.taskItemTooltip(taskData);
              $taskItem.appendChild($taskItemTooltip);
              $taskItemTooltip.parentElement.parentElement.style.zIndex = '9999999999999';
            }
            $taskItemProgressHandle.style.display = 'block';
          } else {
            if ($taskItemTooltip) {
              var _$taskItemTooltip;
              $taskItemTooltip.parentElement.parentElement.style.zIndex = 'unset';
              // 删除 tooltip
              (_$taskItemTooltip = $taskItemTooltip) === null || _$taskItemTooltip === void 0 || _$taskItemTooltip.remove();
              $taskItemTooltip = null;
            }
            if (_this4.isSetProgressIng === false) {
              $taskItemProgressHandle.style.display = 'none';
            }
          }
        });
        $taskItemWrapper.appendChild($taskItem);
        return $taskItemWrapper;
      }

      // 创建 taskItem 的进度条部分
    }, {
      key: "taskItemProgressWrapper",
      value: function taskItemProgressWrapper(_ref) {
        var progress = _ref.progress;
        var $taskItemProgressWrapper = createElement('div', addPrefixCls('task-item-progress-wrapper'));
        $taskItemProgressWrapper.style.background = "linear-gradient(to right, transparent ".concat(progress * 100, "%, rgba(0, 0, 0, 0.1) ").concat(progress * 100, "% 100%)");
        var $taskItemProgressText = createElement('span', addPrefixCls('task-item-progress-text'));
        $taskItemProgressText.innerHTML = "".concat(Math.round(progress * 100), "%");
        $taskItemProgressWrapper.appendChild($taskItemProgressText);
        var $taskItemProgressHandle = this.taskItemProgressHandle(progress);
        $taskItemProgressWrapper.appendChild($taskItemProgressHandle);
        return $taskItemProgressWrapper;
      }

      // 创建进度调节按钮
    }, {
      key: "taskItemProgressHandle",
      value: function taskItemProgressHandle(progress) {
        var _this5 = this;
        var $taskItemProgressHandle = createElement('div', addPrefixCls('task-item-progress-handle'));
        $taskItemProgressHandle.innerHTML = '▲';
        // 设置初始位置
        $taskItemProgressHandle.style.left = "".concat(Math.round(progress * 100), "%");

        // 监听拖动事件
        var $taskItem = null;
        var $taskItemHandleWrapper = null;
        var $taskItemProgressText = null;
        var $taskItemProgressWrapper = null;
        handleDrag($taskItemProgressHandle, {
          onDragBefore: function onDragBefore(ev) {
            _this5.isSetProgressIng = true;
            $taskItem = ev.target.parentElement.parentElement;
            $taskItemHandleWrapper = $taskItem.querySelector(".".concat(addPrefixCls('task-item-handle-wrapper')));
            $taskItemProgressText = ev.target.previousElementSibling;
            $taskItemProgressWrapper = ev.target.parentElement;
            var $taskItemTooltipWrapper = $taskItem.querySelector(".".concat(addPrefixCls('task-item-tooltip-wrapper')));
            $taskItemHandleWrapper.style.display = 'none';
            $taskItemTooltipWrapper.style.display = 'none';
            $taskItemProgressHandle.style.display = 'block';
          },
          onDraging: function onDraging(deltaX, ev) {
            var _$taskItem$getBoundin = $taskItem.getBoundingClientRect(),
              left = _$taskItem$getBoundin.left,
              right = _$taskItem$getBoundin.right,
              width = _$taskItem$getBoundin.width;
            if (ev.clientX >= left && ev.clientX <= right) {
              // 计算进度
              var _progress = (ev.clientX - left) / width;
              var progressPercent = "".concat(Math.round(_progress * 100), "%");
              $taskItemProgressText.style.display = 'block';
              $taskItemProgressText.innerHTML = progressPercent;
              $taskItemProgressWrapper.style.background = "linear-gradient(to right, transparent ".concat(progressPercent, ", rgba(0, 0, 0, 0.1) ").concat(progressPercent, " 100%)");
              $taskItemProgressHandle.style.left = progressPercent;

              // 修改数据
              _this5.updateTaskData({
                id: $taskItem.getAttribute('data-task-id'),
                progress: _progress
              });
            }
          },
          onDragEnd: function onDragEnd() {
            $taskItemHandleWrapper.removeAttribute('style');
            $taskItemProgressText.style.display = 'none';
            $taskItemProgressHandle.style.display = 'none';
            $taskItem = null;
            $taskItemHandleWrapper = null;
            $taskItemProgressText = null;
            $taskItemProgressWrapper = null;
            _this5.isSetProgressIng = false;
          }
        });
        return $taskItemProgressHandle;
      }

      // 创建 taskItem 的内容部分
    }, {
      key: "taskItemContent",
      value: function taskItemContent(data) {
        var _this$options$renderT, _this$options4;
        var $taskItemContent = createElement('div', addPrefixCls('task-item-content'));
        var taskItemContentStr = (_this$options$renderT = (_this$options4 = this.options).renderTaskbarContent) === null || _this$options$renderT === void 0 ? void 0 : _this$options$renderT.call(_this$options4, data);
        if (taskItemContentStr) {
          $taskItemContent.innerHTML = purify.sanitize(taskItemContentStr);
        } else {
          $taskItemContent.innerHTML = "<div class=\"".concat(addPrefixCls('task-item-content-item'), "\">").concat(data.title, "</div>");
        }
        return $taskItemContent;
      }

      // 创建 taskItem 的调整大小部分
    }, {
      key: "taskItemHandleWrapper",
      value: function taskItemHandleWrapper() {
        var $taskItemHandleWrapper = createElement('div', addPrefixCls('task-item-handle-wrapper'));
        // 左侧把手
        var $resizeHolderLeft = this.taskItemResizeHolderLeft();
        // 右侧把手
        var $resizeHolderRight = this.taskItemResizeHolderRight();
        $taskItemHandleWrapper.appendChild($resizeHolderLeft);
        $taskItemHandleWrapper.appendChild($resizeHolderRight);
        return $taskItemHandleWrapper;
      }

      // 创建 taskItem 的 tooltip
    }, {
      key: "taskItemTooltip",
      value: function taskItemTooltip(data) {
        var _this$options$renderT2, _this$options5;
        var $tooltipWrap = createElement('div', addPrefixCls('task-item-tooltip-wrapper'));
        var tooltipStr = (_this$options$renderT2 = (_this$options5 = this.options).renderTooltip) === null || _this$options$renderT2 === void 0 ? void 0 : _this$options$renderT2.call(_this$options5, data);
        if (tooltipStr) {
          // 使用 DOMPurify 进行 XSS 过滤
          $tooltipWrap.innerHTML = purify.sanitize(tooltipStr);
        } else {
          $tooltipWrap.innerHTML = "<div class=\"".concat(addPrefixCls('task-item-tooltip'), "\">\u4EFB\u52A1\u540D\u79F0\uFF1A").concat(data.title, "</div>");
        }
        return $tooltipWrap;
      }
    }, {
      key: "taskItemResizeHolderLeft",
      value: function taskItemResizeHolderLeft() {
        var _this6 = this;
        var $resizeHolder = createElement('div', addPrefixCls('task-itme-resize-holder-left'));
        $resizeHolder.innerHTML = "‖";
        // 左边
        handleDrag($resizeHolder, {
          onDraging: function onDraging(steps) {
            var $holderWrap = $resizeHolder.parentElement;
            var $taskItem = $resizeHolder.parentElement.parentElement;
            var $taskItemWidth = $taskItem.offsetWidth;
            var taskItemTranslateX = parseFloat($taskItem.getAttribute('style').match(/translateX\(([-\d.]+)px/)[1]);
            _this6.$ganttChart.style.pointerEvents = 'none'; // 禁用点击事件，防止拖拽移动之后，触发子元素的点击事件

            $holderWrap.style.display = 'block';

            // 修改宽度
            var newWidth = $taskItemWidth - steps * _this6.step;
            // 设置最小宽度以避免元素缩得太小
            newWidth = Math.max(newWidth, _this6.step);

            // 修改偏移
            var newTranslateX = taskItemTranslateX + steps * _this6.step;
            var endTranslateX = taskItemTranslateX + $taskItemWidth;
            if (newTranslateX >= endTranslateX) {
              newTranslateX = endTranslateX - _this6.step;
            }
            $taskItem.style.cssText = "width: ".concat(newWidth, "px; transform: translateX(").concat(newTranslateX, "px)");
            if (_this6.options.showDragMask) {
              var top = parseFloat($taskItem.parentElement.parentElement.style.top);
              _this6.showDragMask(newWidth, newTranslateX, top);
            }
          },
          onDragEnd: function onDragEnd() {
            var $holderWrap = $resizeHolder.parentElement;
            $holderWrap.removeAttribute('style');
            _this6.$ganttChart.style.pointerEvents = ''; // 恢复点击事件
            // 拖拽结束，更新 tasks 数据
            var $taskItem = $resizeHolder.parentElement.parentElement;
            _this6.dragAfterSetDate($taskItem);
            if (_this6.options.showDragMask) {
              _this6.$dragMask.style.display = 'none';
            }
          }
        }, this.step);
        return $resizeHolder;
      }
    }, {
      key: "taskItemResizeHolderRight",
      value: function taskItemResizeHolderRight() {
        var _this7 = this;
        var $resizeHolder = createElement('div', addPrefixCls('task-itme-resize-holder-right'));
        $resizeHolder.innerHTML = "‖";

        // 右边，x不变，只变宽度
        handleDrag($resizeHolder, {
          onDraging: function onDraging(steps) {
            _this7.$ganttChart.style.pointerEvents = 'none'; // 禁用点击事件，防止拖拽移动之后，触发子元素的点击事件
            var $holderWrap = $resizeHolder.parentElement;
            $holderWrap.style.display = 'block';
            var $taskItem = $resizeHolder.parentElement.parentElement;
            var $taskItemWidth = $taskItem.offsetWidth;
            var newWidth = $taskItemWidth + steps * _this7.step;
            // 设置最小宽度以避免元素缩得太小
            newWidth = Math.max(newWidth, _this7.step);
            $taskItem.style.width = "".concat(newWidth, "px");
            if (_this7.options.showDragMask) {
              var translateX = parseFloat($taskItem.getAttribute('style').match(/translateX\(([-\d.]+)px/)[1]);
              var top = parseFloat($taskItem.parentElement.parentElement.style.top);
              _this7.showDragMask(newWidth, translateX, top);
            }
          },
          onDragEnd: function onDragEnd() {
            var $holderWrap = $resizeHolder.parentElement;
            $holderWrap.removeAttribute('style');
            _this7.$ganttChart.style.pointerEvents = ''; // 恢复点击事件
            // 拖拽结束，更新 tasks 数据
            var $taskItem = $resizeHolder.parentElement.parentElement;
            _this7.dragAfterSetDate($taskItem);
            if (_this7.options.showDragMask) {
              _this7.$dragMask.style.display = 'none';
            }
          }
        }, this.step);
        return $resizeHolder;
      }

      /**
       * 显示拖拽遮罩
       * @param {number} width - 遮罩宽度
       * @param {number} translateX - 遮罩水平偏移量
       * @param {number} top - 遮罩显示时间的垂直偏移量
      */
    }, {
      key: "showDragMask",
      value: function showDragMask(width, translateX, top) {
        this.$dragMask.style.width = "".concat(width, "px");
        // 修改遮罩的偏移量
        this.$dragMask.style.transform = "translateX(".concat(translateX, "px)");
        // 设置遮罩开始时间和结束时间的文本和位置
        var startTime = dayjs(translateX * this.pxUnitAmp).format('YYYY-MM-DD');
        var endTime = dayjs((translateX + width) * this.pxUnitAmp).subtract(1, 'day').format('YYYY-MM-DD');
        var $dargMaskStart = this.$dragMask.firstChild;
        var $dargMaskEnd = this.$dragMask.lastChild;
        $dargMaskStart.innerHTML = startTime;
        $dargMaskEnd.innerHTML = endTime;
        $dargMaskStart.style.top = "".concat(top, "px");
        $dargMaskEnd.style.top = "".concat(top, "px");
        this.$dragMask.style.display = 'block';
      }

      // 拖拽结束后，设置 taskItem 的数据
    }, {
      key: "dragAfterSetDate",
      value: function dragAfterSetDate(taskItemEle) {
        var $taskItemWidth = taskItemEle.offsetWidth;
        var taskItemTranslateX = parseFloat(taskItemEle.getAttribute('style').match(/translateX\(([-\d.]+)px/)[1]);
        var startDate = dayjs(taskItemTranslateX * this.pxUnitAmp).format('YYYY-MM-DD');
        var endDate = dayjs((taskItemTranslateX + $taskItemWidth - this.step) * this.pxUnitAmp).format('YYYY-MM-DD');
        this.updateTaskData({
          id: taskItemEle.getAttribute('data-task-id'),
          startDate: startDate,
          endDate: endDate
        });
      }

      // 更新 tasks 数据
    }, {
      key: "updateTaskData",
      value: function updateTaskData(data) {
        var taskItem = this.options.tasks.find(function (item) {
          return String(item.id) === data.id;
        });

        // 更新数据
        for (var key in data) {
          if (key === 'id') continue;
          taskItem[key] = data[key];
        }
      }

      // 创建今日线
    }, {
      key: "createTodayLine",
      value: function createTodayLine() {
        var $todayLine = createElement('div', addPrefixCls('today-line'));
        $todayLine.style.transform = "translateX(".concat(this.options.todayTranslateX + 15, "px)");
        this.$taskBarRenderChunk.appendChild($todayLine);
      }

      // 重新渲染任务行在水平移动时，只修改样式，避免重新创建
    }, {
      key: "rerenderTaskRowOnScrollX",
      value: function rerenderTaskRowOnScrollX() {
        var translateX = this.options.translateX;
        this.$taskBarRenderChunk.style.transform = "translateX(-".concat(translateX, "px");
        if (this.options.showDragMask) {
          this.$dragMaskWrap.style.transform = "translateX(-".concat(translateX, "px");
        }
        var taskRowStyleBarList = document.querySelectorAll(".".concat(addPrefixCls('task-row-style-bar')));
        taskRowStyleBarList.forEach(function (item) {
          item.style.transform = "translateX(".concat(translateX, "px)");
        });

        // 判断 taskItem 水平滚动时是否在视图内
        this.handleTaskItemInView();
      }
    }, {
      key: "rerenderSvgBg",
      value:
      // 重新渲染Svg背景
      function rerenderSvgBg(translateX, minorList, todayTranslateX) {
        // 重新设置
        this.options.translateX = translateX;
        this.options.minorList = minorList;
        // 视图发生了变化
        if (this.options.todayTranslateX !== todayTranslateX) {
          this.options.todayTranslateX = todayTranslateX;
          this.pxUnitAmp = dayjs().startOf('day').valueOf() / todayTranslateX;
          // 切视图时，需要重新渲染
          this.renderTaskBar();
        }

        // 修改svg视图偏移
        this.setSvgViewBox(translateX);
        this.createVerticalStripe(minorList);
        // 水平滚动，重新渲染任务行
        this.rerenderTaskRowOnScrollX();
      }
    }, {
      key: "setSvgViewBox",
      value: function setSvgViewBox(translateX) {
        this.$svg.setAttribute('viewBox', "".concat(translateX, " 0 ").concat(this.bodyClientWidth, " ").concat(this.bodyScrollHeight));
      }

      // 处理垂直滚动事件
    }, {
      key: "handleScroll",
      value: function handleScroll(event) {
        var scrollTop = event.currentTarget.scrollTop;
        this.setScrollY(scrollTop);

        // 处理虚拟滚动，计算开始位置
        var newStartIndex = Math.floor(scrollTop / this.options.rowHeight);
        if (newStartIndex !== this.virtualStartIndex) {
          this.virtualStartIndex = newStartIndex;
          // 重新渲染
          this.renderTaskBar();
        }
        this.handleTaskItemInView();
      }
    }, {
      key: "bodyClientWidth",
      get:
      // 内容区宽度
      function get() {
        var _this$$wrapper$getBou = this.$wrapper.getBoundingClientRect(),
          $wrapperWidth = _this$$wrapper$getBou.width;
        return $wrapperWidth;
      }

      // 内容区高度
    }, {
      key: "bodyClientHeight",
      get: function get() {
        var _this$$wrapper$getBou2 = this.$wrapper.getBoundingClientRect(),
          $wrapperHeight = _this$$wrapper$getBou2.height;
        return $wrapperHeight - HEADER_HEIGHT;
      }

      // 内容区滚动区域高度
    }, {
      key: "bodyScrollHeight",
      get: function get() {
        var height = this.getBarList.length * this.options.rowHeight + TOP_PADDING;
        if (height < this.bodyClientHeight) {
          height = this.bodyClientHeight;
        }
        return height;
      }

      // 获取任务条列表数据
    }, {
      key: "getBarList",
      get: function get() {
        return this.options.tasks;
      }

      // 获取可视区域的行，虚拟滚动处理
    }, {
      key: "getVisibleRows",
      get: function get() {
        var visibleHeight = this.bodyClientHeight;
        // 多渲染几个，减少空白
        var visibleRowCount = Math.ceil(visibleHeight / this.options.rowHeight) + 10;
        return {
          start: this.virtualStartIndex,
          count: visibleRowCount
        };
      }
    }, {
      key: "getTaskDataById",
      value: function getTaskDataById(taskId) {
        return this.options.tasks.find(function (item) {
          return item.id === taskId;
        });
      }

      // 根据不同的视图确定拖动时的单位，在任何视图下都以一天为单位
    }, {
      key: "step",
      get: function get() {
        return ONE_DAY_MS / this.pxUnitAmp;
      }
    }]);
  }();

  var Gantt = /*#__PURE__*/function () {
    function Gantt(wrapper, tasks, options) {
      _classCallCheck(this, Gantt);
      this.prefixCls = 'my-gantt';
      this.tasks = tasks;
      this.options = options;
      this.setup_wrapper(wrapper);
      this._wheelTimer = null;
    }
    return _createClass(Gantt, [{
      key: "setup_wrapper",
      value: function setup_wrapper(element) {
        var _this$options$showVie,
          _this$options$showBac,
          _this = this;
        if (typeof element === "string") {
          this.$container = document.querySelector(element);
        } else if (element instanceof HTMLElement) {
          this.$container = element;
        } else {
          throw new TypeError("Gantt only supports usage of a string CSS selector," + " HTML DOM element for the 'element' parameter");
        }

        // 创建甘特图外层容器
        this.$gantWrap = createElement('div', addPrefixCls('wrapper'));
        this.$container.appendChild(this.$gantWrap);

        // 实例化时间轴
        var timeAxis = new TimeAxis(this.$gantWrap, {
          viewType: this.options.viewType || 'day',
          showViewTypeSwitch: (_this$options$showVie = this.options.showViewTypeSwitch) !== null && _this$options$showVie !== void 0 ? _this$options$showVie : true,
          showBackToday: (_this$options$showBac = this.options.showBackToday) !== null && _this$options$showBac !== void 0 ? _this$options$showBac : true,
          onChange: function onChange(_ref) {
            var translateX = _ref.translateX,
              minorList = _ref.minorList,
              todayTranslateX = _ref.todayTranslateX;
              _ref.pxUnitAmp;
            /* 
              1. viewType(视图类型)变化，导致translateX发生变化，会刷新 minorList，会重新渲染 chart的SVG背景
              2. translateX发生变化，会刷新 minorList，所以也需要重新渲染 chart的SVG背景
            */
            chart.rerenderSvgBg(translateX, minorList, todayTranslateX);
          },
          onViewTypeChange: function onViewTypeChange(_ref2) {
            var _this$options$onViewT, _this$options;
            var viewType = _ref2.viewType,
              pxUnitAmp = _ref2.pxUnitAmp;
            // 视图发生变化，会重新执行 setTranslateX，所以会自动重新渲染
            (_this$options$onViewT = (_this$options = _this.options).onViewTypeChange) === null || _this$options$onViewT === void 0 || _this$options$onViewT.call(_this$options, {
              viewType: viewType,
              pxUnitAmp: pxUnitAmp
            });
          },
          onTimelineClick: this.options.onTimelineClick
        });

        // 实例化Chart
        var chart = new Chart(this.$gantWrap, {
          tasks: this.tasks,
          rowHeight: 40,
          // 行高
          translateX: timeAxis.translateX,
          // 偏移量
          todayTranslateX: timeAxis.todayTranslateX,
          minorList: timeAxis.getMinorList(),
          lineColor: this.options.lineColor || '#f0f0f0',
          // 线条颜色
          weekBarBg: this.options.weekBarBg || '#fafbfd',
          // 周末条的背景色
          onWheel: function onWheel(offsetX) {
            // 监听水平滚动事件
            if (_this._wheelTimer) clearTimeout(_this._wheelTimer);
            timeAxis.isMoveing = true;
            var newTranslateX = timeAxis.translateX + offsetX;
            timeAxis.setTranslateX(newTranslateX);
            _this._wheelTimer = window.setTimeout(function () {
              timeAxis.isMoveing = false;
            }, 100);
          },
          onArrowBtnClick: function onArrowBtnClick(_ref3) {
            var translateX = _ref3.translateX;
            timeAxis.setTranslateX(translateX);
          },
          onTaskBarClick: this.options.onTaskBarClick,
          showDragMask: this.options.showDragMask,
          showTooltip: this.options.showTooltip,
          renderTooltip: this.options.renderTooltip,
          renderTaskbarContent: this.options.renderTaskbarContent
        });
        this._timeAxis = timeAxis;
        this._chart = chart;
      }

      /**
      * @description 跳转到指定日期
      * @param {Date | String} date - 要跳转的日期
      */
    }, {
      key: "jumpTo",
      value: function jumpTo(date) {
        this._timeAxis.scrollToDate(date);
      }

      /**
      * @description 切换视图类型开关
      * @param {boolean} flag - 切换标志位
      */
    }, {
      key: "toggleViewTypeSwitch",
      value: function toggleViewTypeSwitch(flag) {
        this._timeAxis.toggleViewTypeSwitch(flag);
      }

      /**
      * @description 改变视图类型
      * @param {string} viewType - 视图类型
      */
    }, {
      key: "changeViewType",
      value: function changeViewType(viewType) {
        this._timeAxis.setViewType(viewType);
      }

      /**
      * @description 切换返回今天按钮的显示状态
      * @param {boolean} flag - 是否显示返回今天按钮
      */
    }, {
      key: "toggleBackTodayBtn",
      value: function toggleBackTodayBtn(flag) {
        this._timeAxis.toggleBackTodayBtn(flag);
      }
    }]);
  }();

  return Gantt;

}));
//# sourceMappingURL=AGantt.umd.js.map
