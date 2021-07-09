module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "+U72": /***/ function (module) {
      module.exports = JSON.parse(
        '{"Polaris":{"Actions":{"moreActions":"More actions"},"Avatar":{"label":"Avatar","labelWithInitials":"Avatar with initials {initials}"},"Autocomplete":{"spinnerAccessibilityLabel":"Loading"},"Badge":{"PROGRESS_LABELS":{"incomplete":"Incomplete","partiallyComplete":"Partially complete","complete":"Complete"},"STATUS_LABELS":{"info":"Info","success":"Success","warning":"Warning","critical":"Critical","attention":"Attention","new":"New"},"progressAndStatus":"{statusLabel} {progressLabel}"},"Button":{"spinnerAccessibilityLabel":"Loading","connectedDisclosureAccessibilityLabel":"Related actions"},"Common":{"checkbox":"checkbox","undo":"Undo","cancel":"Cancel","newWindowAccessibilityHint":"(opens a new window)","clear":"Clear","close":"Close","submit":"Submit","more":"More"},"ContextualSaveBar":{"save":"Save","discard":"Discard"},"DataTable":{"sortAccessibilityLabel":"sort {direction} by","navAccessibilityLabel":"Scroll table {direction} one column","totalsRowHeading":"Totals","totalRowHeading":"Total"},"DatePicker":{"previousMonth":"Show previous month, {previousMonthName} {showPreviousYear}","nextMonth":"Show next month, {nextMonth} {nextYear}","today":"Today ","start":"Start of range","end":"End of range","months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"days":{"monday":"Monday","tuesday":"Tuesday","wednesday":"Wednesday","thursday":"Thursday","friday":"Friday","saturday":"Saturday","sunday":"Sunday"},"daysAbbreviated":{"monday":"Mo","tuesday":"Tu","wednesday":"We","thursday":"Th","friday":"Fr","saturday":"Sa","sunday":"Su"}},"DiscardConfirmationModal":{"title":"Discard all unsaved changes","message":"If you discard changes, you’ll delete any edits you made since you last saved.","primaryAction":"Discard changes","secondaryAction":"Continue editing"},"DropZone":{"overlayTextFile":"Drop file to upload","overlayTextImage":"Drop image to upload","errorOverlayTextFile":"File type is not valid","errorOverlayTextImage":"Image type is not valid","FileUpload":{"actionTitleFile":"Add file","actionTitleImage":"Add image","actionHintFile":"or drop files to upload","actionHintImage":"or drop images to upload","label":"Upload file"}},"EmptySearchResult":{"altText":"Empty search results"},"Frame":{"skipToContent":"Skip to content","navigationLabel":"Navigation","Navigation":{"closeMobileNavigationLabel":"Close navigation"}},"ActionMenu":{"RollupActions":{"rollupButton":"Actions"}},"Filters":{"moreFilters":"More filters","moreFiltersWithCount":"More filters ({count})","filter":"Filter {resourceName}","noFiltersApplied":"No filters applied","cancel":"Cancel","done":"Done","clearAllFilters":"Clear all filters","clear":"Clear","clearLabel":"Clear {filterName}"},"IndexProvider":{"defaultItemSingular":"Item","defaultItemPlural":"Items","allItemsSelected":"All {itemsLength}+ {resourceNamePlural} are selected.","selected":"{selectedItemsCount} selected","a11yCheckboxDeselectAllSingle":"Deselect {resourceNameSingular}","a11yCheckboxSelectAllSingle":"Select {resourceNameSingular}","a11yCheckboxDeselectAllMultiple":"Deselect all {itemsLength} {resourceNamePlural}","a11yCheckboxSelectAllMultiple":"Select all {itemsLength} {resourceNamePlural}"},"IndexTable":{"emptySearchTitle":"No {resourceNamePlural} found","emptySearchDescription":"Try changing the filters or search term","onboardingBadgeText":"New","resourceLoadingAccessibilityLabel":"Loading {resourceNamePlural}…","selectAllLabel":"Select all {resourceNamePlural}","selected":"{selectedItemsCount} selected","undo":"Undo","selectAllItems":"Select all {itemsLength}+ {resourceNamePlural}","selectItem":"Select {resourceName}","selectButtonText":"Select"},"Loading":{"label":"Page loading bar"},"Modal":{"iFrameTitle":"body markup","modalWarning":"These required properties are missing from Modal: {missingProps}"},"Pagination":{"previous":"Previous","next":"Next","pagination":"Pagination"},"ProgressBar":{"negativeWarningMessage":"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.","exceedWarningMessage":"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100."},"ResourceList":{"sortingLabel":"Sort by","defaultItemSingular":"item","defaultItemPlural":"items","showing":"Showing {itemsCount} {resource}","showingTotalCount":"Showing {itemsCount} of {totalItemsCount} {resource}","loading":"Loading {resource}","selected":"{selectedItemsCount} selected","allItemsSelected":"All {itemsLength}+ {resourceNamePlural} in your store are selected.","allFilteredItemsSelected":"All {itemsLength}+ {resourceNamePlural} in this filter are selected.","selectAllItems":"Select all {itemsLength}+ {resourceNamePlural} in your store","selectAllFilteredItems":"Select all {itemsLength}+ {resourceNamePlural} in this filter","emptySearchResultTitle":"No {resourceNamePlural} found","emptySearchResultDescription":"Try changing the filters or search term","selectButtonText":"Select","a11yCheckboxDeselectAllSingle":"Deselect {resourceNameSingular}","a11yCheckboxSelectAllSingle":"Select {resourceNameSingular}","a11yCheckboxDeselectAllMultiple":"Deselect all {itemsLength} {resourceNamePlural}","a11yCheckboxSelectAllMultiple":"Select all {itemsLength} {resourceNamePlural}","ariaLiveSingular":"{itemsLength} item","ariaLivePlural":"{itemsLength} items","Item":{"actionsDropdownLabel":"Actions for {accessibilityLabel}","actionsDropdown":"Actions dropdown","viewItem":"View details for {itemName}"},"BulkActions":{"actionsActivatorLabel":"Actions","moreActionsActivatorLabel":"More actions","warningMessage":"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions."},"FilterCreator":{"filterButtonLabel":"Filter","selectFilterKeyPlaceholder":"Select a filter…","addFilterButtonLabel":"Add filter","showAllWhere":"Show all {resourceNamePlural} where:"},"FilterControl":{"textFieldLabel":"Search {resourceNamePlural}"},"FilterValueSelector":{"selectFilterValuePlaceholder":"Select a filter…"},"DateSelector":{"dateFilterLabel":"Select a value","dateValueLabel":"Date","dateValueError":"Match YYYY-MM-DD format","dateValuePlaceholder":"YYYY-MM-DD","SelectOptions":{"PastWeek":"in the last week","PastMonth":"in the last month","PastQuarter":"in the last 3 months","PastYear":"in the last year","ComingWeek":"next week","ComingMonth":"next month","ComingQuarter":"in the next 3 months","ComingYear":"in the next year","OnOrBefore":"on or before","OnOrAfter":"on or after"},"FilterLabelForValue":{"past_week":"in the last week","past_month":"in the last month","past_quarter":"in the last 3 months","past_year":"in the last year","coming_week":"next week","coming_month":"next month","coming_quarter":"in the next 3 months","coming_year":"in the next year","on_or_before":"before {date}","on_or_after":"after {date}"}}},"SkeletonPage":{"loadingLabel":"Page loading"},"Tabs":{"toggleTabsLabel":"More tabs"},"Tag":{"ariaLabel":"Remove {children}"},"TextField":{"characterCount":"{count} characters","characterCountWithMaxLength":"{count} of {limit} characters used"},"TooltipOverlay":{"accessibilityLabel":"Tooltip: {label}"},"TopBar":{"toggleMenuLabel":"Toggle menu","SearchField":{"clearButtonLabel":"Clear","search":"Search"}},"MediaCard":{"popoverButton":"Actions"},"VideoThumbnail":{"playButtonA11yLabel":{"default":"Play video","defaultWithDuration":"Play video of length {duration}","duration":{"hours":{"other":{"only":"{hourCount} hours","andMinutes":"{hourCount} hours and {minuteCount} minutes","andMinute":"{hourCount} hours and {minuteCount} minute","minutesAndSeconds":"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds","minutesAndSecond":"{hourCount} hours, {minuteCount} minutes, and {secondCount} second","minuteAndSeconds":"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds","minuteAndSecond":"{hourCount} hours, {minuteCount} minute, and {secondCount} second","andSeconds":"{hourCount} hours and {secondCount} seconds","andSecond":"{hourCount} hours and {secondCount} second"},"one":{"only":"{hourCount} hour","andMinutes":"{hourCount} hour and {minuteCount} minutes","andMinute":"{hourCount} hour and {minuteCount} minute","minutesAndSeconds":"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds","minutesAndSecond":"{hourCount} hour, {minuteCount} minutes, and {secondCount} second","minuteAndSeconds":"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds","minuteAndSecond":"{hourCount} hour, {minuteCount} minute, and {secondCount} second","andSeconds":"{hourCount} hour and {secondCount} seconds","andSecond":"{hourCount} hour and {secondCount} second"}},"minutes":{"other":{"only":"{minuteCount} minutes","andSeconds":"{minuteCount} minutes and {secondCount} seconds","andSecond":"{minuteCount} minutes and {secondCount} second"},"one":{"only":"{minuteCount} minute","andSeconds":"{minuteCount} minute and {secondCount} seconds","andSecond":"{minuteCount} minute and {secondCount} second"}},"seconds":{"other":"{secondCount} seconds","one":"{secondCount} second"}}}}}}'
      );

      /***/
    },

    /***/ 0: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("1TCz");

      /***/
    },

    /***/ "0W++": /***/ function (module, exports) {
      module.exports = require("@shopify/app-bridge/actions");

      /***/
    },

    /***/ "1TCz": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__("cDcd");
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "apollo-boost"
      var external_apollo_boost_ = __webpack_require__("YvTO");
      var external_apollo_boost_default = /*#__PURE__*/ __webpack_require__.n(
        external_apollo_boost_
      );

      // EXTERNAL MODULE: external "react-apollo"
      var external_react_apollo_ = __webpack_require__("MGkW");

      // EXTERNAL MODULE: ./node_modules/next/app.js
      var next_app = __webpack_require__("8Bbg");
      var app_default = /*#__PURE__*/ __webpack_require__.n(next_app);

      // EXTERNAL MODULE: external "@shopify/polaris"
      var polaris_ = __webpack_require__("nj/N");

      // EXTERNAL MODULE: external "react-redux"
      var external_react_redux_ = __webpack_require__("h74D");

      // EXTERNAL MODULE: external "@shopify/app-bridge-react"
      var app_bridge_react_ = __webpack_require__("ZQgG");

      // EXTERNAL MODULE: external "@shopify/app-bridge-utils"
      var app_bridge_utils_ = __webpack_require__("4gC+");

      // EXTERNAL MODULE: external "@shopify/app-bridge/actions"
      var actions_ = __webpack_require__("0W++");

      // EXTERNAL MODULE: ./node_modules/@shopify/polaris/dist/styles.css
      var styles = __webpack_require__("l7Dk");

      // EXTERNAL MODULE: ./node_modules/@shopify/polaris/locales/en.json
      var en = __webpack_require__("+U72");

      // EXTERNAL MODULE: ./Client/CSS/Extra.css
      var Extra = __webpack_require__("tZpp");

      // EXTERNAL MODULE: external "redux"
      var external_redux_ = __webpack_require__("rKB8");

      // EXTERNAL MODULE: external "redux-thunk"
      var external_redux_thunk_ = __webpack_require__("ZSx1");
      var external_redux_thunk_default = /*#__PURE__*/ __webpack_require__.n(
        external_redux_thunk_
      );

      // CONCATENATED MODULE: ./Client/redux/action/index.js
      const FAILED = "FAILED";
      // CONCATENATED MODULE: ./Client/redux/reducer/allReducer.js

      const INITIAL_STATE = {
        error_msg: {},
      };

      const handleReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
          case FAILED: {
            return Object.assign({}, state, {
              error_msg: action.data.error_msg,
            });
          }

          default:
            return state;
        }
      };

      /* harmony default export */ var allReducer = handleReducer;
      // CONCATENATED MODULE: ./Client/redux/reducer/index.js

      const rootReducer = Object(external_redux_["combineReducers"])({
        allReducer: allReducer,
      });
      /* harmony default export */ var reducer = rootReducer;
      // CONCATENATED MODULE: ./Client/redux/store.js

      const composeEnhancers = // typeof window === 'object' &&
        //     (window.location.hostname === "localhost" ) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose : compose;
        false ? undefined : external_redux_["compose"];
      const enhancer = composeEnhancers(
        Object(external_redux_["applyMiddleware"])(
          external_redux_thunk_default.a
        )
      );
      const store = Object(external_redux_["createStore"])(reducer, enhancer);
      /* harmony default export */ var redux_store = store;
      // CONCATENATED MODULE: ./pages/_app.js

      var __jsx = external_react_default.a.createElement;

      function _extends() {
        _extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function userLoggedInFetch(app) {
        const fetchFunction = Object(app_bridge_utils_["authenticatedFetch"])(
          app
        );
        return async (uri, options) => {
          const response = await fetchFunction(uri, options);

          if (
            response.headers.get(
              "X-Shopify-API-Request-Failure-Reauthorize"
            ) === "1"
          ) {
            const authUrlHeader = response.headers.get(
              "X-Shopify-API-Request-Failure-Reauthorize-Url"
            );
            const redirect = actions_["Redirect"].create(app);
            redirect.dispatch(
              actions_["Redirect"].Action.APP,
              authUrlHeader || `/auth`
            );
            return null;
          }

          return response;
        };
      }

      function MyProvider(props) {
        const app = Object(app_bridge_react_["useAppBridge"])();
        const client = new external_apollo_boost_default.a({
          fetch: userLoggedInFetch(app),
          fetchOptions: {
            credentials: "include",
          },
        });
        const Component = props.Component;
        return __jsx(
          external_react_apollo_["ApolloProvider"],
          {
            client: client,
          },
          __jsx(Component, props)
        );
      }

      class _app_MyApp extends app_default.a {
        componentDidMount() {
          if (true) {
            window.host = this.props.host;
            window.shop = this.props.shop;
          }
        }

        render() {
          const { Component, pageProps, host } = this.props;
          let hostname = null;

          if (false) {
          }

          return __jsx(
            external_react_default.a.Fragment,
            null,
            hostname === "localhost"
              ? __jsx(
                  external_react_redux_["Provider"],
                  {
                    store: redux_store,
                  },
                  __jsx(
                    polaris_["AppProvider"],
                    {
                      i18n: en,
                    },
                    __jsx(Component, pageProps)
                  )
                )
              : __jsx(
                  polaris_["AppProvider"],
                  {
                    i18n: en,
                  },
                  __jsx(
                    app_bridge_react_["Provider"],
                    {
                      config: {
                        apiKey: "c52db2b8b431d575622a376c2422c75e",
                        host: host,
                        forceRedirect: true,
                      },
                    },
                    __jsx(
                      MyProvider,
                      _extends(
                        {
                          Component: Component,
                        },
                        pageProps
                      )
                    )
                  )
                )
          );
        }
      }

      _app_MyApp.getInitialProps = async ({ ctx }) => {
        return {
          host: ctx.query.host,
          shop: ctx.query.shop,
        };
      };

      /* harmony default export */ var _app = (__webpack_exports__[
        "default"
      ] = _app_MyApp);

      /***/
    },

    /***/ "4gC+": /***/ function (module, exports) {
      module.exports = require("@shopify/app-bridge-utils");

      /***/
    },

    /***/ "8Bbg": /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("B5Ud");

      /***/
    },

    /***/ AroE: /***/ function (module, exports) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }

      module.exports = _interopRequireDefault;

      /***/
    },

    /***/ B5Ud: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      var _interopRequireDefault = __webpack_require__("AroE");

      exports.__esModule = true;
      exports.Container = Container;
      exports.createUrl = createUrl;
      exports.default = void 0;

      var _react = _interopRequireDefault(__webpack_require__("cDcd"));

      var _utils = __webpack_require__("kYf9");

      exports.AppInitialProps = _utils.AppInitialProps;
      exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
      /**
       * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
       * This allows for keeping state between navigation, custom error handling, injecting additional data.
       */

      async function appGetInitialProps({ Component, ctx }) {
        const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
        return {
          pageProps,
        };
      }

      class App extends _react.default.Component {
        // Kept here for backwards compatibility.
        // When someone ended App they could call `super.componentDidCatch`.
        // @deprecated This method is no longer needed. Errors are caught at the top level
        componentDidCatch(error, _errorInfo) {
          throw error;
        }

        render() {
          const { router, Component, pageProps, __N_SSG, __N_SSP } = this.props;
          return /*#__PURE__*/ _react.default.createElement(
            Component,
            Object.assign(
              {},
              pageProps, // we don't add the legacy URL prop if it's using non-legacy
              // methods like getStaticProps and getServerSideProps
              !(__N_SSG || __N_SSP)
                ? {
                    url: createUrl(router),
                  }
                : {}
            )
          );
        }
      }

      exports.default = App;
      App.origGetInitialProps = appGetInitialProps;
      App.getInitialProps = appGetInitialProps;
      let warnContainer;
      let warnUrl;

      if (false) {
      } // @deprecated noop for now until removal

      function Container(p) {
        if (false) {
        }
        return p.children;
      }

      function createUrl(router) {
        // This is to make sure we don't references the router object at call time
        const { pathname, asPath, query } = router;
        return {
          get query() {
            if (false) {
            }
            return query;
          },

          get pathname() {
            if (false) {
            }
            return pathname;
          },

          get asPath() {
            if (false) {
            }
            return asPath;
          },

          back: () => {
            if (false) {
            }
            router.back();
          },
          push: (url, as) => {
            if (false) {
            }
            return router.push(url, as);
          },
          pushTo: (href, as) => {
            if (false) {
            }
            const pushRoute = as ? href : "";
            const pushUrl = as || href;
            return router.push(pushRoute, pushUrl);
          },
          replace: (url, as) => {
            if (false) {
            }
            return router.replace(url, as);
          },
          replaceTo: (href, as) => {
            if (false) {
            }
            const replaceRoute = as ? href : "";
            const replaceUrl = as || href;
            return router.replace(replaceRoute, replaceUrl);
          },
        };
      }

      /***/
    },

    /***/ MGkW: /***/ function (module, exports) {
      module.exports = require("react-apollo");

      /***/
    },

    /***/ YvTO: /***/ function (module, exports) {
      module.exports = require("apollo-boost");

      /***/
    },

    /***/ ZQgG: /***/ function (module, exports) {
      module.exports = require("@shopify/app-bridge-react");

      /***/
    },

    /***/ ZSx1: /***/ function (module, exports) {
      module.exports = require("redux-thunk");

      /***/
    },

    /***/ cDcd: /***/ function (module, exports) {
      module.exports = require("react");

      /***/
    },

    /***/ h74D: /***/ function (module, exports) {
      module.exports = require("react-redux");

      /***/
    },

    /***/ kYf9: /***/ function (module, exports) {
      module.exports = require("next/dist/next-server/lib/utils.js");

      /***/
    },

    /***/ l7Dk: /***/ function (module, exports) {
      /***/
    },

    /***/ "nj/N": /***/ function (module, exports) {
      module.exports = require("@shopify/polaris");

      /***/
    },

    /***/ rKB8: /***/ function (module, exports) {
      module.exports = require("redux");

      /***/
    },

    /***/ tZpp: /***/ function (module, exports) {
      /***/
    },

    /******/
  }
);
