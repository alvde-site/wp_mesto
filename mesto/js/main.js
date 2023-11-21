// custom scripts
(() => {
  "use strict";
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var t = (function () {
    function t(e, n, r, o, i, a) {
      var u = i.handleLikeClick;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this._name = e.name),
        (this._link = e.link),
        (this._likes = e.likes),
        (this._ownerId = e.owner._id),
        (this._userId = a),
        (this._cardId = e._id),
        (this._template = n),
        (this._handleCardClick = r),
        (this._handleRemoveCard = o),
        (this._handleLikeClick = u);
    }
    var n, r;
    return (
      (n = t),
      (r = [
        {
          key: "_getTemplate",
          value: function () {
            return document.querySelector(this._template).content.cloneNode(!0);
          },
        },
        {
          key: "generateCard",
          value: function () {
            return (
              (this._element = this._getTemplate()),
              (this._cardImage = this._element.querySelector(".element__img")),
              (this._cardText = this._element.querySelector(
                ".element__description-text"
              )),
              (this._likeButton = this._element.querySelector(
                ".element__like-button"
              )),
              (this._removeButton = this._element.querySelector(
                ".element__remove-button"
              )),
              (this._likeCounter = this._element.querySelector(
                ".element__like-count"
              )),
              this._setEventListenter(),
              (this._cardText.innerText = this._name),
              (this._cardImage.src = this._link),
              (this._cardImage.alt = this._name),
              (this._likeCounter.innerText = this._likes.length),
              this._setLikes(),
              this._userId !== this._ownerId &&
                (this._removeButton.style.display = "none"),
              this._element
            );
          },
        },
        {
          key: "_setEventListenter",
          value: function () {
            this._addLikeToButton(),
              this._removeElement(),
              this._imageViewing();
          },
        },
        {
          key: "_addLikeToButton",
          value: function () {
            var e = this;
            this._likeButton.addEventListener("click", function () {
              e._handleLikeClick(e._cardId);
            });
          },
        },
        {
          key: "_removeElement",
          value: function () {
            var e = this;
            this._removeButton.addEventListener("click", function (t) {
              e._handleRemoveCard(e._cardId, t);
            });
          },
        },
        {
          key: "_imageViewing",
          value: function () {
            var e = this;
            this._cardImage.addEventListener("click", function () {
              e._handleCardClick(e._name, e._link);
            });
          },
        },
        {
          key: "_setLikes",
          value: function () {
            this.isLiked()
              ? this._likeButton.classList.add("element__like-button_active")
              : this._likeButton.classList.remove(
                  "element__like-button_active"
                );
          },
        },
        {
          key: "setNewLikes",
          value: function (e) {
            (this._likes = e),
              (this._likeCounter.innerText = this._likes.length),
              this._setLikes();
          },
        },
        {
          key: "isLiked",
          value: function () {
            var e = this;
            return this._likes.find(function (t) {
              return t._id === e._userId;
            });
          },
        },
      ]) && e(n.prototype, r),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      t
    );
  })();
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var r = (function () {
    function e(t, n) {
      var r,
        o,
        i = this;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (o = function (e, t) {
          t.classList.add(i._inputErrorClass),
            (e.textContent = t.validationMessage);
        }),
        (r = "_setInputInvalid") in this
          ? Object.defineProperty(this, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (this[r] = o),
        (this._inputSelector = t.inputSelector),
        (this._submitButtonSelector = t.submitButtonSelector),
        (this._inactiveButtonClass = t.inactiveButtonClass),
        (this._inputErrorClass = t.inputErrorClass),
        (this._form = n),
        (this._inputList = this._form.querySelectorAll(this._inputSelector)),
        (this._submitButton = this._form.querySelector(
          this._submitButtonSelector
        ));
    }
    var t, r;
    return (
      (t = e),
      (r = [
        {
          key: "enableValidation",
          value: function () {
            var e = this;
            this._checkButtonValidity(),
              this._inputList.forEach(function (t) {
                t.addEventListener("input", function (t) {
                  e._checkInputValidity(t.target), e._checkButtonValidity();
                });
              });
          },
        },
        {
          key: "resetValidation",
          value: function () {
            var e = this;
            this._checkButtonValidity(),
              this._inputList.forEach(function (t) {
                var n = e._form.querySelector("#error-".concat(t.id));
                e._setInputValid(n, t);
              });
          },
        },
        {
          key: "_checkButtonValidity",
          value: function () {
            this._form.checkValidity()
              ? (this._submitButton.classList.remove(this._inactiveButtonClass),
                this._submitButton.removeAttribute("disabled"))
              : (this._submitButton.classList.add(this._inactiveButtonClass),
                this._submitButton.setAttribute("disabled", ""));
          },
        },
        {
          key: "_checkInputValidity",
          value: function (e) {
            var t = this._form.querySelector("#error-".concat(e.id));
            e.validity.valid
              ? this._setInputValid(t, e)
              : this._setInputInvalid(t, e);
          },
        },
        {
          key: "_setInputValid",
          value: function (e, t) {
            t.classList.remove(this._inputErrorClass), (e.textContent = "");
          },
        },
      ]) && n(t.prototype, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var i = (function () {
      function e(t, n) {
        var r = t.renderer;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._renderer = r),
          (this._container = document.querySelector(n));
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: "rendererItems",
            value: function (e, t) {
              var n = this;
              e.reverse().forEach(function (e) {
                n._renderer(e, t);
              });
            },
          },
          {
            key: "addItem",
            value: function (e) {
              this._container.prepend(e);
            },
          },
        ]),
        n && o(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })(),
    a = document.querySelector(".profile__edit-button"),
    u = document.querySelector(".profile__add-button"),
    c = document.querySelector(".profile__edit-avatar-button"),
    s =
      (document.querySelector(".profile__name"),
      document.querySelector(".profile__job"),
      document.querySelector(".form__input_add_name"),
      document.querySelector(".form__input_add_link"),
      document.querySelector(".form__input_profile_name")),
    l = document.querySelector(".form__input_profile_job");
  function f(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var p = (function () {
    function e(t) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this._popupElement = document.querySelector(t)),
        (this._handleEsc = this._handleEscClose.bind(this));
    }
    var t, n;
    return (
      (t = e),
      (n = [
        {
          key: "open",
          value: function () {
            this._popupElement.classList.add("popup_opened"),
              this._addEscCloseListnener();
          },
        },
        {
          key: "close",
          value: function () {
            this._popupElement.classList.remove("popup_opened"),
              this._removeEscCloseListener();
          },
        },
        {
          key: "_handleEscClose",
          value: function (e) {
            "Escape" === e.key && this.close();
          },
        },
        {
          key: "_addEscCloseListnener",
          value: function () {
            document.addEventListener("keydown", this._handleEsc);
          },
        },
        {
          key: "_removeEscCloseListener",
          value: function () {
            document.removeEventListener("keydown", this._handleEsc);
          },
        },
        {
          key: "setEventListeners",
          value: function () {
            var e = this;
            this._popupElement.addEventListener("mousedown", function (t) {
              t.target.classList.contains("popup_opened") && e.close(),
                t.target.classList.contains("popup__close") && e.close();
            });
          },
        },
      ]) && f(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  function h(e) {
    return (
      (h =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      h(e)
    );
  }
  function _(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function d() {
    return (
      (d =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = y(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get
                  ? o.get.call(arguments.length < 3 ? e : n)
                  : o.value;
              }
            }),
      d.apply(this, arguments)
    );
  }
  function y(e, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = b(e));

    );
    return e;
  }
  function m(e, t) {
    return (
      (m =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      m(e, t)
    );
  }
  function v(e, t) {
    if (t && ("object" === h(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return (function (e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    })(e);
  }
  function b(e) {
    return (
      (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      b(e)
    );
  }
  var k = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && m(e, t);
    })(a, e);
    var t,
      n,
      r,
      o,
      i =
        ((r = a),
        (o = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            t = b(r);
          if (o) {
            var n = b(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return v(this, e);
        });
    function a(e) {
      var t;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, a),
        ((t = i.call(this, e))._popupImage = t._popupElement.querySelector(
          ".image-viewing__image"
        )),
        (t._popupCaption = t._popupElement.querySelector(
          ".image-viewing__caption"
        )),
        t
      );
    }
    return (
      (t = a),
      (n = [
        {
          key: "open",
          value: function (e, t) {
            this._popupImage.setAttribute("src", t),
              this._popupImage.setAttribute("alt", e),
              (this._popupCaption.innerText = e),
              d(b(a.prototype), "open", this).call(this);
          },
        },
      ]) && _(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      a
    );
  })(p);
  function g(e) {
    return (
      (g =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      g(e)
    );
  }
  function w(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function E() {
    return (
      (E =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = S(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get
                  ? o.get.call(arguments.length < 3 ? e : n)
                  : o.value;
              }
            }),
      E.apply(this, arguments)
    );
  }
  function S(e, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = j(e));

    );
    return e;
  }
  function O(e, t) {
    return (
      (O =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      O(e, t)
    );
  }
  function L(e, t) {
    if (t && ("object" === g(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return (function (e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    })(e);
  }
  function j(e) {
    return (
      (j = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      j(e)
    );
  }
  var C = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && O(e, t);
    })(a, e);
    var t,
      n,
      r,
      o,
      i =
        ((r = a),
        (o = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            t = j(r);
          if (o) {
            var n = j(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return L(this, e);
        });
    function a(e) {
      var t,
        n = e.popupSelector,
        r = e.submitForm;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, a),
        ((t = i.call(this, n))._submitForm = r),
        (t._popupForm = t._popupElement.querySelector(".form")),
        (t._inputLists = t._popupElement.querySelectorAll(".form__input")),
        (t._submitButton = t._popupElement.querySelector(".form__submit")),
        (t._initialText = t._submitButton.textContent),
        t
      );
    }
    return (
      (t = a),
      (n = [
        {
          key: "_getInputValues",
          value: function () {
            var e = this;
            return (
              (this._formValues = {}),
              this._inputLists.forEach(function (t) {
                e._formValues[t.name] = t.value;
              }),
              this._formValues
            );
          },
        },
        {
          key: "setEventListeners",
          value: function () {
            var e = this;
            this._popupForm.addEventListener("submit", function (t) {
              t.preventDefault(),
                e.renderLoading(!0),
                e._submitForm(e._getInputValues());
            }),
              E(j(a.prototype), "setEventListeners", this).call(this);
          },
        },
        {
          key: "close",
          value: function () {
            E(j(a.prototype), "close", this).call(this),
              this._popupForm.reset();
          },
        },
        {
          key: "confirmDeleteCard",
          value: function (e) {
            this._submitForm = e;
          },
        },
        {
          key: "renderLoading",
          value: function (e) {
            this._submitButton.textContent = e
              ? "Сохранение..."
              : this._initialText;
          },
        },
      ]) && w(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      a
    );
  })(p);
  function I(e) {
    return (
      (I =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      I(e)
    );
  }
  function P(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function R() {
    return (
      (R =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = B(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get
                  ? o.get.call(arguments.length < 3 ? e : n)
                  : o.value;
              }
            }),
      R.apply(this, arguments)
    );
  }
  function B(e, t) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = x(e));

    );
    return e;
  }
  function T(e, t) {
    return (
      (T =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      T(e, t)
    );
  }
  function q(e, t) {
    if (t && ("object" === I(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return (function (e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    })(e);
  }
  function x(e) {
    return (
      (x = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      x(e)
    );
  }
  var U = (function (e) {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && T(e, t);
    })(a, e);
    var t,
      n,
      r,
      o,
      i =
        ((r = a),
        (o = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            t = x(r);
          if (o) {
            var n = x(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);
          return q(this, e);
        });
    function a(e) {
      var t,
        n = e.popupSelector,
        r = e.submitForm;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, a),
        ((t = i.call(this, n))._submitForm = r),
        (t._popupForm = t._popupElement.querySelector(".form")),
        t
      );
    }
    return (
      (t = a),
      (n = [
        {
          key: "setEventListeners",
          value: function () {
            var e = this;
            this._popupForm.addEventListener("submit", function (t) {
              t.preventDefault(), e._submitForm();
            }),
              R(x(a.prototype), "setEventListeners", this).call(this);
          },
        },
        {
          key: "confirmDeleteCard",
          value: function (e) {
            this._submitForm = e;
          },
        },
      ]) && P(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      a
    );
  })(p);
  function V(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var A = (function () {
    function e(t, n, r) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this._nameElement = document.querySelector(t)),
        (this._jobElement = document.querySelector(n)),
        (this._avatarElement = document.querySelector(r));
    }
    var t, n;
    return (
      (t = e),
      (n = [
        {
          key: "getUserInfo",
          value: function () {
            return (
              (this._userInfo = {}),
              (this._userInfo[this._nameElement.getAttribute("class")] =
                this._nameElement.textContent),
              (this._userInfo[this._jobElement.getAttribute("class")] =
                this._jobElement.textContent),
              this._userInfo
            );
          },
        },
        {
          key: "setUserInfo",
          value: function (e) {
            var t = e.name,
              n = e.about,
              r = e.avatar;
            (this._nameElement.textContent = t),
              (this._jobElement.textContent = n),
              (this._avatarElement.style = "background-image: url(".concat(
                r,
                ")"
              ));
          },
        },
      ]) && V(t.prototype, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  function F(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function z(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var D,
    N = new ((function () {
      function e(t) {
        var n = t.baseUrl,
          r = t.headers;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._baseUrl = n),
          (this._headers = r),
          (this._authorization = this._headers.authorization);
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: "getInitialCards",
            value: function () {
              return fetch("".concat(this._baseUrl, "/cards"), {
                headers: { authorization: this._authorization },
              }).then(this._checkResponse);
            },
          },
          {
            key: "getUserInfo",
            value: function () {
              return fetch("".concat(this._baseUrl, "/users/me"), {
                headers: { authorization: this._authorization },
              }).then(this._checkResponse);
            },
          },
          {
            key: "editUserInfo",
            value: function (e) {
              var t = e.profilename,
                n = e.profilejob;
              return fetch("".concat(this._baseUrl, "/users/me"), {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({ name: t, about: n }),
              }).then(this._checkResponse);
            },
          },
          {
            key: "addCard",
            value: function (e) {
              var t = e.name,
                n = e.link;
              return fetch("".concat(this._baseUrl, "/cards"), {
                method: "POST",
                headers: {
                  authorization: this._authorization,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: t, link: n }),
              }).then(this._checkResponse);
            },
          },
          {
            key: "deleteCard",
            value: function (e) {
              return fetch("".concat(this._baseUrl, "/cards/").concat(e), {
                method: "DELETE",
                headers: { authorization: this._authorization },
              }).then(this._checkResponse);
            },
          },
          {
            key: "addLike",
            value: function (e) {
              return fetch(
                "".concat(this._baseUrl, "/cards/").concat(e, "/likes"),
                {
                  method: "PUT",
                  headers: { authorization: this._authorization },
                }
              ).then(this._checkResponse);
            },
          },
          {
            key: "removeLike",
            value: function (e) {
              return fetch(
                "".concat(this._baseUrl, "/cards/").concat(e, "/likes"),
                {
                  method: "DELETE",
                  headers: { authorization: this._authorization },
                }
              ).then(this._checkResponse);
            },
          },
          {
            key: "editAvatarInfo",
            value: function (e) {
              var t = e.link;
              return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({ avatar: t }),
              }).then(this._checkResponse);
            },
          },
          {
            key: "_checkResponse",
            value: function (e) {
              return e.ok
                ? e.json()
                : Promise.reject("Ошибка ".concat(e.status));
            },
          },
        ]) && F(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })())({
      baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
      headers: {
        authorization: "21b633d6-0242-4229-923c-a9cd21579f97",
        "Content-Type": "application/json",
      },
    }),
    J = new i(
      {
        renderer: function (e, t) {
          J.addItem(Y(e, t));
        },
      },
      ".elements__container"
    );
  Promise.all([N.getUserInfo(), N.getInitialCards()])
    .then(function (e) {
      var t,
        n,
        r =
          ((n = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })((t = e)) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  u = !1;
                try {
                  for (
                    n = n.call(e);
                    !(a = (r = n.next()).done) &&
                    (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  (u = !0), (o = e);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw o;
                  }
                }
                return i;
              }
            })(t, n) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return z(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? z(e, t)
                    : void 0
                );
              }
            })(t, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        o = r[0],
        i = r[1];
      (D = o._id), M.setUserInfo(o), J.rendererItems(i, D);
    })
    .catch(function (e) {
      console.log("".concat(e));
    });
  var H,
    M = new A(".profile__name", ".profile__job", ".profile__avatar"),
    $ = {};
  (H = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: "form__submit_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "popup__input-error_active",
  }),
    Array.from(document.querySelectorAll(H.formSelector)).forEach(function (e) {
      var t = new r(H, e),
        n = e.getAttribute("name");
      ($[n] = t), t.enableValidation();
    });
  var G = new U({
    popupSelector: ".popup_handle_remove-confirm",
    submitForm: function () {},
  });
  G.setEventListeners();
  var K = function (e, t) {
      G.open(),
        G.confirmDeleteCard(function () {
          N.deleteCard(e)
            .then(function () {
              t.target.closest(".element").remove(), G.close();
            })
            .catch(function (e) {
              console.log("".concat(e));
            });
        });
    },
    Q = new k(".popup_handle_image-viewing"),
    W = function (e, t) {
      Q.open(e, t);
    };
  Q.setEventListeners();
  var X = new C({
    popupSelector: ".popup_handle_edit-avatar",
    submitForm: function (e) {
      N.editAvatarInfo(e)
        .then(function (e) {
          M.setUserInfo(e), X.close();
        })
        .catch(function (e) {
          console.log("".concat(e));
        })
        .finally(function () {
          X.renderLoading(!1);
        });
    },
  });
  X.setEventListeners();
  var Y = function (e, n) {
      var r = new t(
        e,
        "#element_template",
        W,
        K,
        {
          handleLikeClick: function (e) {
            r.isLiked()
              ? N.removeLike(e)
                  .then(function (e) {
                    r.setNewLikes(e.likes);
                  })
                  .catch(function (e) {
                    console.log("".concat(e));
                  })
              : N.addLike(e)
                  .then(function (e) {
                    r.setNewLikes(e.likes);
                  })
                  .catch(function (e) {
                    console.log("".concat(e));
                  });
          },
        },
        n
      );
      return r.generateCard();
    },
    Z = new C({
      popupSelector: ".popup_handle_add-element",
      submitForm: function (e) {
        N.addCard(e)
          .then(function (e) {
            J.addItem(Y(e, D)), Z.close();
          })
          .catch(function (e) {
            console.log("".concat(e));
          })
          .finally(function () {
            Z.renderLoading(!1);
          });
      },
    });
  Z.setEventListeners();
  var ee = new C({
    popupSelector: ".popup_handle_profile",
    submitForm: function (e) {
      N.editUserInfo(e)
        .then(function (e) {
          M.setUserInfo(e), ee.close();
        })
        .catch(function (e) {
          console.log("".concat(e));
        })
        .finally(function () {
          ee.renderLoading(!1);
        });
    },
  });
  ee.setEventListeners(),
    a.addEventListener("click", function () {
      !(function () {
        $.profileform.resetValidation();
        var e = M.getUserInfo();
        (s.value = e.profile__name), (l.value = e.profile__job), ee.open();
      })();
    }),
    u.addEventListener("click", function () {
      $.cardform.resetValidation(), Z.open();
    }),
    c.addEventListener("click", function () {
      $.avatarform.resetValidation(), X.open();
    });
})();
