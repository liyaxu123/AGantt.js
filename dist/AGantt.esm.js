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
      var $header = createElement('header', addPrefixCls('time-axis'));
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
      var positionX = 0;
      var handleMouseMove = function handleMouseMove(event) {
        event.preventDefault();
        var moveX = event.clientX;
        var x = moveX - positionX - _this.translateX;
        _this.setTranslateX(-x);
      };
      var _handleMouseUp = function handleMouseUp() {
        _this.isMoveing = false;
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', _handleMouseUp);
      };

      // 绑定拖动事件
      $timeAxisHeader.onmousedown = function (event) {
        event.stopPropagation();
        event.preventDefault();
        _this.isMoveing = true;
        positionX = event.clientX;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', _handleMouseUp);
      };
      return $timeAxisHeader;
    }

    // 创建主轴DOM
  }, {
    key: "createTimeAxisMajor",
    value: function createTimeAxisMajor(wrapper) {
      var majorList = this.getMajorList();
      majorList.forEach(function (item) {
        var $major = createElement('div', addPrefixCls('time-axis-major'));
        var $majorLabel = createElement('div', addPrefixCls('time-axis-major-label'));
        $majorLabel.innerText = item.label;
        $major.appendChild($majorLabel);
        // 设置宽度
        $major.style.width = "".concat(item.width, "px");
        // 设置left
        $major.style.left = "".concat(item.left, "px");
        wrapper.appendChild($major);
      });
    }

    // 创建次轴DOM
  }, {
    key: "createTimeAxisMinor",
    value: function createTimeAxisMinor(wrapper) {
      var minorList = this.getMinorList();
      // console.log('minorList', minorList);

      minorList.forEach(function (item) {
        var $minor = createElement('div', addPrefixCls('time-axis-minor'));
        var $minorLabel = createElement('div', addPrefixCls('time-axis-minor-label'));
        $minorLabel.innerText = item.label;
        $minor.appendChild($minorLabel);
        // 设置宽度
        $minor.style.width = "".concat(item.width, "px");
        // 设置left
        $minor.style.left = "".concat(item.left, "px");
        // 标识周末
        if (item.isWeek) {
          $minor.setAttribute('isWeek', true);
        }

        // 标识当天
        if (item.isToday) {
          $minor.setAttribute('curDay', true);
        }
        wrapper.appendChild($minor);
      });
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
      var _this$options,
        _this2 = this;
      var $viewTypeSelect = createElement('select', addPrefixCls('view-type-switch'));
      viewTypeList.forEach(function (item) {
        var $option = createElement('option', addPrefixCls('view-type-option'));
        $option.setAttribute('value', item.type);
        $option.innerText = item.label;
        $viewTypeSelect.appendChild($option);
      });

      // 设置默认值
      $viewTypeSelect.value = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.viewType;
      $viewTypeSelect.addEventListener('change', function (event) {
        var val = event.target.value;
        _this2.setViewType(val);
      });
      return $viewTypeSelect;
    }
  }, {
    key: "setViewType",
    value: function setViewType(viewType) {
      var _this$options$onViewT, _this$options2;
      this.options.viewType = viewType;
      this.sightConfig = getViewTypeConfig(viewType);
      var translateX = dayjs(this.getStartDate()).valueOf() / (this.sightConfig.value * 1000);
      // 执行 setTranslateX，会自动重新渲染
      this.setTranslateX(translateX);
      (_this$options$onViewT = (_this$options2 = this.options).onViewTypeChange) === null || _this$options$onViewT === void 0 || _this$options$onViewT.call(_this$options2, viewType);
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
      var _this$options$onChang, _this$options3;
      this.translateX = Math.max(translateX, 0);
      // 重新渲染时间轴数据
      this.renderTimeAxisChunk(this.$timeAxis);
      if (this.$backToday) {
        this.setBackTodayDisplay();
      }
      (_this$options$onChang = (_this$options3 = this.options).onChange) === null || _this$options$onChang === void 0 || _this$options$onChang.call(_this$options3, {
        translateX: translateX,
        minorList: this.getMinorList(),
        todayTranslateX: this.todayTranslateX
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
        this.$timeAxis.style.cursor = 'ew-resize';
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

/* 
  图表
*/
var Chart = /*#__PURE__*/function () {
  function Chart(wrapper) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Chart);
    this.$wrapper = this.verify_wrapper(wrapper);
    this.options = options;
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
      this.createGanttChart($chartWrapper);
      this.$wrapper.appendChild($chartWrapper);
    }
  }, {
    key: "createGanttChart",
    value: function createGanttChart(wrapper) {
      var _this$options, _this$options2;
      var $ganttChart = createElement('div', addPrefixCls('chart'));
      $ganttChart.style.width = "".concat((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.width, "px");
      $ganttChart.style.height = "".concat((_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.height, "px");
      // 绑定鼠标滚轮事件
      $ganttChart.addEventListener('wheel', this.handleWheel.bind(this));

      // 创建SVG背景
      this.createSvgBg($ganttChart);
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
        var _this$options$onWheel, _this$options3;
        (_this$options$onWheel = (_this$options3 = this.options).onWheel) === null || _this$options$onWheel === void 0 || _this$options$onWheel.call(_this$options3, event.deltaX);
      }
    }

    // 创建 SVG 背景
  }, {
    key: "createSvgBg",
    value: function createSvgBg(wrapper) {
      // 创建一个SVG元素
      var _this$options4 = this.options,
        viewWidth = _this$options4.width,
        viewHeight = _this$options4.height,
        translateX = _this$options4.translateX,
        minorList = _this$options4.minorList;
      var $svg = createSvgElement('svg', {
        width: viewWidth,
        height: viewHeight,
        viewBox: "".concat(translateX, " 0 ").concat(viewWidth, " ").concat(viewHeight),
        "class": addPrefixCls('chart-svg-renderer')
      });
      this.$svg = $svg;
      this.createVerticalStripe(minorList, this.options.todayTranslateX);
      wrapper.appendChild($svg);
    }

    // 创建SVG竖条纹
  }, {
    key: "createVerticalStripe",
    value: function createVerticalStripe(minorList, todayTranslateX) {
      var _this = this;
      // 先清空再创建
      this.$svg.innerHTML = '';
      var _this$options5 = this.options,
        viewHeight = _this$options5.height,
        lineColor = _this$options5.lineColor,
        weekBarBg = _this$options5.weekBarBg,
        curDayLineColor = _this$options5.curDayLineColor;
      minorList === null || minorList === void 0 || minorList.forEach(function (item) {
        // 创建group元素
        var $g = createSvgElement('g', {
          stroke: lineColor // 设置线条颜色
        });

        // 创建path
        var $path = createSvgElement('path', {
          d: "M".concat(item.left, ",0 L").concat(item.left, ",").concat(viewHeight)
        });
        $g.appendChild($path);
        // 如果是周末创建rect
        if (item.isWeek) {
          var $rect = createSvgElement('rect', {
            x: item.left,
            y: 0,
            width: item.width,
            height: viewHeight,
            fill: weekBarBg,
            // 周末条的背景颜色
            strokeWidth: 0
          });
          $g.appendChild($rect);
        }

        // 如果是当天，绘制 “今日”
        if (todayTranslateX) {
          var left = todayTranslateX + 15;
          var $line = createSvgElement('path', {
            d: "M".concat(left, ",0 L").concat(left, ",").concat(viewHeight),
            stroke: curDayLineColor
          });
          $g.appendChild($line);
        }
        _this.$svg.appendChild($g);
      });
    }

    // 重新渲染Svg背景
  }, {
    key: "rerenderSvgBg",
    value: function rerenderSvgBg(translateX, minorList, todayTranslateX) {
      // 重新设置 todayTranslateX
      this.options.todayTranslateX = todayTranslateX;
      // 修改svg视图偏移
      this.setSvgViewBox(translateX);
      this.createVerticalStripe(minorList, todayTranslateX);
    }
  }, {
    key: "setSvgViewBox",
    value: function setSvgViewBox(translateX) {
      var _this$options6 = this.options,
        viewWidth = _this$options6.width,
        viewHeight = _this$options6.height;
      this.$svg.setAttribute('viewBox', "".concat(translateX, " 0 ").concat(viewWidth, " ").concat(viewHeight));
    }
  }]);
}();

var Gantt = /*#__PURE__*/function () {
  function Gantt(wrapper, tasks, options) {
    _classCallCheck(this, Gantt);
    this.prefixCls = 'my-gantt';
    this.options = options;
    this.setup_wrapper(wrapper);
    this.setup_tasks(tasks);
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
          /* 
            1. viewType(视图类型)变化，导致translateX发生变化，会刷新 minorList，会重新渲染 chart的SVG背景
            2. translateX发生变化，会刷新 minorList，所以也需要重新渲染 chart的SVG背景
          */
          chart.rerenderSvgBg(translateX, minorList, todayTranslateX);
        },
        onViewTypeChange: function onViewTypeChange(viewType) {
          var _this$options$onViewT, _this$options;
          // 视图发生变化，会重新执行 setTranslateX，所以会自动重新渲染
          (_this$options$onViewT = (_this$options = _this.options).onViewTypeChange) === null || _this$options$onViewT === void 0 || _this$options$onViewT.call(_this$options, viewType);
        }
      });

      // 实例化Chart
      var chart = new Chart(this.$gantWrap, {
        width: timeAxis.headerWidth,
        // 宽
        height: 6000,
        // 高
        translateX: timeAxis.translateX,
        // 偏移量
        todayTranslateX: timeAxis.todayTranslateX,
        minorList: timeAxis.getMinorList(),
        lineColor: this.options.lineColor || '#f0f0f0',
        // 线条颜色
        curDayLineColor: this.options.curDayLineColor || '#1890ff',
        // 当天日期的线条颜色
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
        }
      });
    }
  }, {
    key: "setup_tasks",
    value: function setup_tasks(tasks) {
      this.tasks = tasks;
    }
  }]);
}();

export { Gantt as default };
//# sourceMappingURL=AGantt.esm.js.map
