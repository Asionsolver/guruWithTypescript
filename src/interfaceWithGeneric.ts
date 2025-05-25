interface WebDeveloper<T, C = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartwatch: T;
  car?: C;
}

type SmartwatchWithBasicFeatures = {
  brand: string;
  model: string;
  display: string;
  releaseYear: number;
  activityTracker?: boolean;
  sleepTracker?: boolean;
  waterResistance?: boolean;
  gps?: boolean;
  notifications?: boolean;
  musicControl?: boolean;
  voiceAssistant?: boolean;
  batteryLife?: string;
  connectivity?: string;
  customWatchFaces?: boolean;
  healthMonitoring?: boolean;
  fitnessTracking?: boolean;
};

type CarBasicFeatures = {
  brand: string;
  model: string;
  year: number;
  color?: string;
  fuelType?: string;
  transmission?: string;
  mileage?: number;
  safetyFeatures?: string[];
  infotainmentSystem?: string;
  navigationSystem?: boolean;
  bluetooth?: boolean;
  airConditioning?: boolean;
  sunroof?: boolean;
  heatedSeats?: boolean;
  parkingSensors?: boolean;
  rearCamera?: boolean;
  alloyWheels?: boolean;
};

const webDeveloperOne: WebDeveloper<SmartwatchWithBasicFeatures> = {
  name: "Alice",
  computer: {
    brand: "Apple",
    model: "MacBook Pro",
    releaseYear: 2021,
  },
  smartwatch: {
    brand: "Apple",
    model: "Apple Watch Series 7",
    display: "Always-On Retina",
    releaseYear: 2021,
  },
};

const webDeveloperTwo: WebDeveloper<
  SmartwatchWithBasicFeatures,
  CarBasicFeatures
> = {
  name: "Bob",
  computer: {
    brand: "Dell",
    model: "XPS 13",
    releaseYear: 2020,
  },
  smartwatch: {
    brand: "Samsung",
    model: "Galaxy Watch 4",
    display: "Super AMOLED",
    healthMonitoring: true,
    activityTracker: true,
    sleepTracker: true,
    releaseYear: 2021,
  },
  car: {
    brand: "Tesla",
    model: "Model 3",
    year: 2021,
    color: "Red",
    fuelType: "Electric",
    transmission: "Automatic",
    safetyFeatures: ["Autopilot", "Emergency Braking"],
    infotainmentSystem: "Tesla Infotainment",
    navigationSystem: true,
    bluetooth: true,
    airConditioning: true,
  },
};
