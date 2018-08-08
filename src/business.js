export class Filter {
  replaceBadWords(phrase) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.purgomalum.com/service/json?text=this is some test input`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

// export class WeatherService {
//   getWeatherByCity(city) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://onwater.io/documentation/swagger.json`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
