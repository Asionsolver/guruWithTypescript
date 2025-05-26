const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
const arrayOfStrings: string[] = ["1", "2", "3", "4", "5"]; // manually created string array
const arrayOfStringMapped: string[] = arrayOfNumbers.map((number) =>
  number.toString()
); // using map to convert number array to string array

console.log(arrayOfStringMapped); // ['1', '2', '3', '4', '5']

type AreaNumber = {
  width: number;
  height: number;
};

type height = AreaNumber["height"]; // number

// type AreaString = {
//   // [key in 'width' | 'height']: string;
//   [key in keyof AreaNumber]: string;
// };

// const areaNumber: AreaNumber = {
//   width: 10,
//   height: 20,
// };
// const areaString: AreaString = {
//   width: "10",
//   height: "20",
// };



type AreaString<T> = {
  [key in keyof T]: T[key];
};

const areaStringValue: AreaString<{ width: string; height: number }> = {
  width: "10",
  height: 20,
};

type MobileInfo = {
  brand: string;
  model: string;
  price: string;
  isAvailable: string;
  releaseDate: string;
  features: {
    camera: string;
    battery: string;
    storage: {
      ram: {
        ddr5: {
          speed: string;
          capacity: string;
        };
        ddr4: {
          speed: string;
          capacity: string;
        };
      };
      rom: {
        speed: string;
        capacity: string;
      };
    };
  };
  rating: {
    userRating: string;
    criticRating: string;
  };
};

// type MobileInfoNumber = {
//   [key in keyof MobileInfo]: number | string;
// } & {
//   features: {
//     [key in keyof MobileInfo["features"]]: number | string;
//   };
// };

// type MobileInfoNumber = {
//   [key in keyof MobileInfo]: key extends "features"
//     ? { [k in keyof MobileInfo["features"]]: number | string }
//     : number | string;
// };

// type MobileInfoNumber = {
//   [key in keyof MobileInfo]: key extends "features" | "rating"
//     ? { [k in keyof MobileInfo[key]]: number | string }
//     : number | string;
// };

// type MobileInfoNumber = {
//   [key in keyof MobileInfo]: key extends "features" | "rating"
//     ? {
//         [k in keyof MobileInfo[key]]: MobileInfo[key][k] extends object
//           ? { [kk in keyof MobileInfo[key][k]]: number | string }
//           : number | string;
//       }
//     : number | string;
// };

type RecursiveStringOrNumber<T> = {
  [K in keyof T]: T[K] extends object
    ? RecursiveStringOrNumber<T[K]>
    : string | number;
};

type MobileInfoNumber = RecursiveStringOrNumber<MobileInfo>;

const mobileInfo: MobileInfoNumber = {
  brand: "Apple",
  model: "iPhone 14",
  price: 999,
  isAvailable: "true",
  releaseDate: "2022-09-16",
  features: {
    camera: "12MP",
    battery: "3095mAh",
    storage: {
      ram: {
        ddr5: {
          speed: "6400MHz",
          capacity: "6GB",
        },
        ddr4: {
          speed: "3200MHz",
          capacity: "4GB",
        },
      },
      rom: {
        speed: "128GB",
        capacity: "128GB",
      },
    },
  },
  rating: {
    userRating: "4.5",
    criticRating: "4.0",
  },
};