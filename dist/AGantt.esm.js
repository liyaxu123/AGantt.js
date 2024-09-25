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
      onDraging === null || onDraging === void 0 || onDraging(deltaX);
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
      var display = isOverLeft || isOverRight ? 'block' : 'none';
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
        },
        onDragEnd: function onDragEnd() {
          _this4.$ganttChart.style.pointerEvents = ''; // 恢复点击事件
        }
      }, this.step);

      // 内容部分
      var $taskItemContent = createElement('div', addPrefixCls('task-item-content'));
      $taskItemContent.innerHTML = data.title;
      $taskItem.appendChild($taskItemContent);
      var $taskItemHandleWrapper = createElement('div', addPrefixCls('task-item-handle-wrapper'));
      // 左侧把手
      var $resizeHolderLeft = this.taskItemResizeHolderLeft();
      // 右侧把手
      var $resizeHolderRight = this.taskItemResizeHolderRight();
      $taskItemHandleWrapper.appendChild($resizeHolderLeft);
      $taskItemHandleWrapper.appendChild($resizeHolderRight);
      $taskItem.appendChild($taskItemHandleWrapper);
      $taskItemWrapper.appendChild($taskItem);
      return $taskItemWrapper;
    }
  }, {
    key: "taskItemResizeHolderLeft",
    value: function taskItemResizeHolderLeft() {
      var _this5 = this;
      var $resizeHolder = createElement('div', addPrefixCls('task-itme-resize-holder-left'));
      $resizeHolder.innerHTML = "‖";
      // 左边
      handleDrag($resizeHolder, {
        onDraging: function onDraging(steps) {
          var $holderWrap = $resizeHolder.parentElement;
          var $taskItem = $resizeHolder.parentElement.parentElement;
          var $taskItemWidth = $taskItem.offsetWidth;
          var taskItemTranslateX = parseFloat($taskItem.getAttribute('style').match(/translateX\(([-\d.]+)px/)[1]);
          _this5.$ganttChart.style.pointerEvents = 'none'; // 禁用点击事件，防止拖拽移动之后，触发子元素的点击事件

          $holderWrap.style.display = 'block';

          // 修改宽度
          var newWidth = $taskItemWidth - steps * _this5.step;
          // 设置最小宽度以避免元素缩得太小
          newWidth = Math.max(newWidth, _this5.step);

          // 修改偏移
          var newTranslateX = taskItemTranslateX + steps * _this5.step;
          var endTranslateX = taskItemTranslateX + $taskItemWidth;
          if (newTranslateX >= endTranslateX) {
            newTranslateX = endTranslateX - _this5.step;
          }
          $taskItem.style.cssText = "width: ".concat(newWidth, "px; transform: translateX(").concat(newTranslateX, "px)");
        },
        onDragEnd: function onDragEnd() {
          var $holderWrap = $resizeHolder.parentElement;
          $holderWrap.removeAttribute('style');
          _this5.$ganttChart.style.pointerEvents = ''; // 恢复点击事件
        }
      }, this.step);
      return $resizeHolder;
    }
  }, {
    key: "taskItemResizeHolderRight",
    value: function taskItemResizeHolderRight() {
      var _this6 = this;
      var $resizeHolder = createElement('div', addPrefixCls('task-itme-resize-holder-right'));
      $resizeHolder.innerHTML = "‖";

      // 右边，x不变，只变宽度
      handleDrag($resizeHolder, {
        onDraging: function onDraging(steps) {
          _this6.$ganttChart.style.pointerEvents = 'none'; // 禁用点击事件，防止拖拽移动之后，触发子元素的点击事件
          var $holderWrap = $resizeHolder.parentElement;
          $holderWrap.style.display = 'block';
          var $taskItem = $resizeHolder.parentElement.parentElement;
          var $taskItemWidth = $taskItem.offsetWidth;
          var newWidth = $taskItemWidth + steps * _this6.step;
          // 设置最小宽度以避免元素缩得太小
          newWidth = Math.max(newWidth, _this6.step);
          $taskItem.style.width = "".concat(newWidth, "px");
        },
        onDragEnd: function onDragEnd() {
          var $holderWrap = $resizeHolder.parentElement;
          $holderWrap.removeAttribute('style');
          _this6.$ganttChart.style.pointerEvents = ''; // 恢复点击事件
        }
      }, this.step);
      return $resizeHolder;
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
        onTaskBarClick: this.options.onTaskBarClick
      });
    }
  }]);
}();

export { Gantt as default };
//# sourceMappingURL=AGantt.esm.js.map
