function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ReactDOM = ReactDOM,
    createRoot = _ReactDOM.createRoot;
var _React = React,
    Fragment = _React.Fragment;


var domContainer = document.querySelector('#root');
var root = createRoot(domContainer);

var CARS = [{
  id: 1,
  brand: "Audi",
  models: [{
    id: 1,
    name: "A1",
    collection: [{
      id: 1,
      version: "Sportback",
      year: 2019,
      horsepower: 95,
      engine: 999
    }, {
      id: 2,
      version: "Citycarver",
      year: 2019,
      horsepower: 95,
      engine: 999
    }]
  }, {
    id: 2,
    name: "Q5",
    collection: [{
      id: 1,
      version: "FY 2021",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }, {
      id: 2,
      version: "Sportback",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }]
  }, {
    id: 3,
    name: "TT",
    collection: [{
      id: 1,
      version: "Coupe",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }, {
      id: 2,
      version: "Roadster",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }]
  }]
}, {
  id: 2,
  brand: "BMW",
  models: [{
    id: 1,
    name: "8 series",
    collection: [{
      id: 1,
      version: "G1X LCI",
      year: 2022,
      horsepower: 333,
      engine: 2998
    }, {
      id: 2,
      version: "G1X",
      year: 2019,
      horsepower: 340,
      engine: 2998
    }]
  }, {
    id: 2,
    name: "X6",
    collection: [{
      id: 1,
      version: "G06 LCI",
      year: 2023,
      horsepower: 530,
      engine: 4395
    }, {
      id: 2,
      version: "G06",
      year: 2020,
      horsepower: 286,
      engine: 2993
    }]
  }]
}];

var TRow = function TRow(_ref) {
  var rowSpan = _ref.rowSpan,
      colSpan = _ref.colSpan,
      trClass = _ref.trClass,
      tdClass = _ref.tdClass,
      children = _ref.children;

  return React.createElement(
    "tr",
    { className: trClass },
    React.createElement(
      "td",
      { rowSpan: rowSpan, colSpan: colSpan, className: tdClass },
      children
    )
  );
};

var CarModelInfo = function CarModelInfo(_ref2) {
  var data = _ref2.data;

  var id = data.id,
      info = _objectWithoutProperties(data, ["id"]);

  return React.createElement(
    "ul",
    null,
    Object.keys(info).map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        item,
        ": ",
        info[item]
      );
    })
  );
};

var App = React.createElement(
  Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Car specs"
  ),
  React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      CARS.map(function (car) {
        return React.createElement(
          Fragment,
          { key: car.id },
          React.createElement(
            TRow,
            { trClass: "row__brand", colSpan: 2 },
            car.brand
          ),
          car.models.map(function (carModel) {
            return React.createElement(
              Fragment,
              { key: carModel.id },
              React.createElement(
                TRow,
                { tdClass: "cell__model", rowSpan: 2 },
                carModel.name
              ),
              React.createElement(
                TRow,
                null,
                carModel.collection.map(function (carModelInfo) {
                  return React.createElement(CarModelInfo, { key: carModelInfo.id, data: carModelInfo });
                })
              )
            );
          })
        );
      })
    )
  )
);

root.render(App);