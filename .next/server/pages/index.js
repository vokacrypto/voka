"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nftCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nftCard */ \"./pages/nftCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const { 0: wallet , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: collection , 1: setCollectionAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: NFTs , 1: setNFTs  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { 0: fetchForCollection , 1: setFetchForCollection  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const fetchNFTs = async ()=>{\n        let nfts;\n        console.log(\"fetching nfts\");\n        const api_key = \"uOixItD_8WtCzBAIcrRKo6fiWWLk9YT0\";\n        const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;\n        var requestOptions = {\n            method: \"GET\"\n        };\n        if (!collection.length) {\n            const fetchURL = `${baseURL}?owner=${wallet}`;\n            nfts = await fetch(fetchURL, requestOptions).then((data)=>data.json());\n        } else {\n            console.log(\"fetching nfts for collection owned by address\");\n            const fetchURL1 = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;\n            nfts = await fetch(fetchURL1, requestOptions).then((data)=>data.json());\n        }\n        if (nfts) {\n            console.log(\"nfts:\", nfts);\n            setNFTs(nfts.ownedNfts);\n        }\n    };\n    const fetchNFTsForCollection = async ()=>{\n        if (collection.length) {\n            var requestOptions = {\n                method: \"GET\"\n            };\n            const api_key = \"uOixItD_8WtCzBAIcrRKo6fiWWLk9YT0\";\n            const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;\n            const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${\"true\"}`;\n            const nfts = await fetch(fetchURL, requestOptions).then((data)=>data.json());\n            if (nfts) {\n                console.log(\"NFTs in collection:\", nfts);\n                setNFTs(nfts.nfts);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center py-8 gap-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full justify-center items-center gap-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        disabled: fetchForCollection,\n                        type: \"text\",\n                        placeholder: \"Add your wallet address\",\n                        onChange: (e)=>setWalletAddress(e.target.value),\n                        value: wallet\n                    }, void 0, false, {\n                        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Add the collection address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-gray-600 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>{\n                                    setFetchForCollection(e.target.checked);\n                                },\n                                type: \"checkbox\",\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 35\n                            }, undefined),\n                            \"Fetch for collection\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5\",\n                        onClick: ()=>{\n                            if (fetchForCollection) {\n                                fetchNFTsForCollection();\n                            } else fetchNFTs();\n                        },\n                        children: \"Let's go! \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                lineNumber: 55,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center\",\n                children: NFTs.length && NFTs.map((nft)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftCard__WEBPACK_IMPORTED_MODULE_1__.NFTCard, {\n                        nft: nft\n                    }, void 0, false, {\n                        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 1\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n                lineNumber: 67,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\index.jsx\",\n        lineNumber: 54,\n        columnNumber: 1\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxHQUFHOzs7OztpQ0FBWSxDQUM1QjtnQkFDRCxDQUFDLENBQUM7Ozs7O3lCQUVJOzs7Ozs7aUJBQ0EsQ0FDTDtBQUNELENBQUM7QUFFRCxpRUFBZXhDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBORlRDYXJkIH0gZnJvbSBcIi4vbmZ0Q2FyZFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuY29uc3QgW3dhbGxldCwgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbmNvbnN0IFtjb2xsZWN0aW9uLCBzZXRDb2xsZWN0aW9uQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbmNvbnN0IFtORlRzLCBzZXRORlRzXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgW2ZldGNoRm9yQ29sbGVjdGlvbiwgc2V0RmV0Y2hGb3JDb2xsZWN0aW9uXT11c2VTdGF0ZShmYWxzZSlcblxuXG5jb25zdCBmZXRjaE5GVHMgPSBhc3luYygpID0+IHtcbmxldCBuZnRzO1xuY29uc29sZS5sb2coXCJmZXRjaGluZyBuZnRzXCIpO1xuY29uc3QgYXBpX2tleSA9IFwidU9peEl0RF84V3RDekJBSWNyUktvNmZpV1dMazlZVDBcIlxuY29uc3QgYmFzZVVSTCA9IGBodHRwczovL2V0aC1tYWlubmV0LmFsY2hlbXlhcGkuaW8vdjIvJHthcGlfa2V5fS9nZXRORlRzL2A7XG52YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG5tZXRob2Q6ICdHRVQnXG59O1xuXG5pZiAoIWNvbGxlY3Rpb24ubGVuZ3RoKSB7XG5cbmNvbnN0IGZldGNoVVJMID0gYCR7YmFzZVVSTH0/b3duZXI9JHt3YWxsZXR9YDtcblxubmZ0cyA9IGF3YWl0IGZldGNoKGZldGNoVVJMLCByZXF1ZXN0T3B0aW9ucykudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxufSBlbHNlIHtcbmNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgbmZ0cyBmb3IgY29sbGVjdGlvbiBvd25lZCBieSBhZGRyZXNzXCIpXG5jb25zdCBmZXRjaFVSTCA9IGAke2Jhc2VVUkx9P293bmVyPSR7d2FsbGV0fSZjb250cmFjdEFkZHJlc3NlcyU1QiU1RD0ke2NvbGxlY3Rpb259YDtcbm5mdHM9IGF3YWl0IGZldGNoKGZldGNoVVJMLCByZXF1ZXN0T3B0aW9ucykudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxufVxuXG5pZiAobmZ0cykge1xuY29uc29sZS5sb2coXCJuZnRzOlwiLCBuZnRzKVxuc2V0TkZUcyhuZnRzLm93bmVkTmZ0cylcbn1cbn1cblxuY29uc3QgZmV0Y2hORlRzRm9yQ29sbGVjdGlvbiA9IGFzeW5jICgpID0+IHtcbmlmIChjb2xsZWN0aW9uLmxlbmd0aCkge1xudmFyIHJlcXVlc3RPcHRpb25zID0ge1xubWV0aG9kOiAnR0VUJ1xufTtcbmNvbnN0IGFwaV9rZXkgPSBcInVPaXhJdERfOFd0Q3pCQUljclJLbzZmaVdXTGs5WVQwXCJcbmNvbnN0IGJhc2VVUkwgPSBgaHR0cHM6Ly9ldGgtbWFpbm5ldC5hbGNoZW15YXBpLmlvL3YyLyR7YXBpX2tleX0vZ2V0TkZUc0ZvckNvbGxlY3Rpb24vYDtcbmNvbnN0IGZldGNoVVJMID0gYCR7YmFzZVVSTH0/Y29udHJhY3RBZGRyZXNzPSR7Y29sbGVjdGlvbn0md2l0aE1ldGFkYXRhPSR7XCJ0cnVlXCJ9YDtcbmNvbnN0IG5mdHMgPSBhd2FpdCBmZXRjaChmZXRjaFVSTCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcbmlmIChuZnRzKSB7XG5jb25zb2xlLmxvZyhcIk5GVHMgaW4gY29sbGVjdGlvbjpcIiwgbmZ0cylcbnNldE5GVHMobmZ0cy5uZnRzKVxufVxufVxufVxuXG5yZXR1cm4gKFxuPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS04IGdhcC15LTNcIj5cbjxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC15LTJcIj5cbjxpbnB1dCBkaXNhYmxlZD17ZmV0Y2hGb3JDb2xsZWN0aW9ufSB0eXBlPXtcInRleHRcIn0gcGxhY2Vob2xkZXI9XCJBZGQgeW91ciB3YWxsZXQgYWRkcmVzc1wiIG9uQ2hhbmdlPXtlID0+IHNldFdhbGxldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17d2FsbGV0fT48L2lucHV0PlxuPGlucHV0IHR5cGU9e1widGV4dFwifSBwbGFjZWhvbGRlcj1cIkFkZCB0aGUgY29sbGVjdGlvbiBhZGRyZXNzXCI+PC9pbnB1dD5cbjxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIFwiPjxpbnB1dCBvbkNoYW5nZT17KGUpPT57c2V0RmV0Y2hGb3JDb2xsZWN0aW9uKGUudGFyZ2V0LmNoZWNrZWQpfX0gdHlwZT17XCJjaGVja2JveFwifSBjbGFzc05hbWU9XCJtci0yXCI+PC9pbnB1dD5GZXRjaCBmb3IgY29sbGVjdGlvbjwvbGFiZWw+XG48YnV0dG9uIGNsYXNzTmFtZT17XCJkaXNhYmxlZDpiZy1zbGF0ZS01MDAgdGV4dC13aGl0ZSBiZy1ibHVlLTQwMCBweC00IHB5LTIgbXQtMyByb3VuZGVkLXNtIHctMS81XCJ9IG9uQ2xpY2s9e1xuKCkgPT4ge1xuaWYgKGZldGNoRm9yQ29sbGVjdGlvbikge1xuZmV0Y2hORlRzRm9yQ29sbGVjdGlvbigpXG59ZWxzZSBmZXRjaE5GVHMoKVxufVxufT5MZXQncyBnbyEgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBnYXAteS0xMiBtdC00IHctNS82IGdhcC14LTIganVzdGlmeS1jZW50ZXInPlxue1xuTkZUcy5sZW5ndGggJiYgTkZUcy5tYXAobmZ0ID0+IHtcbnJldHVybiAoXG48TkZUQ2FyZCBuZnQ9e25mdH0+PC9ORlRDYXJkPlxuKVxufSlcbn1cbjwvZGl2PlxuPC9kaXY+XG4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiTkZUQ2FyZCIsInVzZVN0YXRlIiwiSG9tZSIsIndhbGxldCIsInNldFdhbGxldEFkZHJlc3MiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbkFkZHJlc3MiLCJORlRzIiwic2V0TkZUcyIsImZldGNoRm9yQ29sbGVjdGlvbiIsInNldEZldGNoRm9yQ29sbGVjdGlvbiIsImZldGNoTkZUcyIsIm5mdHMiLCJjb25zb2xlIiwibG9nIiwiYXBpX2tleSIsImJhc2VVUkwiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImxlbmd0aCIsImZldGNoVVJMIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJvd25lZE5mdHMiLCJmZXRjaE5GVHNGb3JDb2xsZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJkaXNhYmxlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGFiZWwiLCJjaGVja2VkIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIm5mdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./pages/nftCard.jsx":
/*!***************************!*\
  !*** ./pages/nftCard.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NFTCard\": () => (/* binding */ NFTCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NFTCard = ({ nft  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 flex flex-col \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"object-cover h-128 w-full rounded-t-md\",\n                    src: nft.media[0].gateway\n                }, void 0, false, {\n                    fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                    lineNumber: 6,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl text-gray-800\",\n                                children: nft.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                                lineNumber: 10,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: [\n                                    \"Id: \",\n                                    nft.id.tokenId\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: nft.contract.address\n                            }, void 0, false, {\n                                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: nft.description\n                        }, void 0, false, {\n                            fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\X\\\\Alchemy\\\\4forth\\\\001\\\\nameoftheproject\\\\pages\\\\nftCard.jsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBRWhDLHFCQUNBLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OzBCQUNyQyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQzNCLDRFQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsd0NBQXdDO29CQUFDRSxHQUFHLEVBQUVKLEdBQUcsQ0FBQ0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPOzs7Ozs2QkFBUzs7Ozs7eUJBQ3BGOzBCQUNOLDhEQUFDTCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0VBQWtFOztrQ0FDakYsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxFQUFFOzswQ0FDakIsOERBQUNLLElBQUU7Z0NBQUNMLFNBQVMsRUFBQyx1QkFBdUI7MENBQUVGLEdBQUcsQ0FBQ1EsS0FBSzs7Ozs7eUNBQU07MENBQ3RELDhEQUFDQyxHQUFDO2dDQUFDUCxTQUFTLEVBQUMsZUFBZTs7b0NBQUMsTUFBSTtvQ0FBQ0YsR0FBRyxDQUFDVSxFQUFFLENBQUNDLE9BQU87Ozs7Ozt5Q0FBSzswQ0FDckQsOERBQUNGLEdBQUM7Z0NBQUNQLFNBQVMsRUFBQyxlQUFlOzBDQUFHRixHQUFHLENBQUNZLFFBQVEsQ0FBQ0MsT0FBTzs7Ozs7eUNBQUs7Ozs7OztpQ0FDbEQ7a0NBRU4sOERBQUNaLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7a0NBQy9CLDRFQUFDTyxHQUFDOzRCQUFDUCxTQUFTLEVBQUMsZUFBZTtzQ0FBRUYsR0FBRyxDQUFDYyxXQUFXOzs7OztxQ0FBSzs7Ozs7aUNBQzVDOzs7Ozs7eUJBQ0E7Ozs7OztpQkFFQSxDQUNMO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL25mdENhcmQuanN4PzY3MWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE5GVENhcmQgPSAoeyBuZnQgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGZsZXggZmxleC1jb2wgXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIGgtMTI4IHctZnVsbCByb3VuZGVkLXQtbWRcIiBzcmM9e25mdC5tZWRpYVswXS5nYXRld2F5fSA+PC9pbWc+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB5LWdhcC0yIHB4LTIgcHktMyBiZy1zbGF0ZS0xMDAgcm91bmRlZC1iLW1kIGgtMTEwIFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS04MDBcIj57bmZ0LnRpdGxlfTwvaDI+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+SWQ6IHtuZnQuaWQudG9rZW5JZH08L3A+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCIgPntuZnQuY29udHJhY3QuYWRkcmVzc308L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgbXQtMlwiPlxyXG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntuZnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9Il0sIm5hbWVzIjpbIk5GVENhcmQiLCJuZnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtZWRpYSIsImdhdGV3YXkiLCJoMiIsInRpdGxlIiwicCIsImlkIiwidG9rZW5JZCIsImNvbnRyYWN0IiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/nftCard.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();