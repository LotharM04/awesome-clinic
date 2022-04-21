import { faker } from "@faker-js/faker";

const imageData = [
  {
    avator: require("../assets/avators/doctor.png"),
  },
  {
    avator: require("../assets/avators/doctor(1).png"),
  },
  {
    avator: require("../assets/avators/doctor(2).png"),
  },
  {
    avator: require("../assets/avators/doctor(3).png"),
  },
  {
    avator: require("../assets/avators/doctor(4).png"),
  },
  {
    avator: require("../assets/avators/doctor(5).png"),
  },
  {
    avator: require("../assets/avators/doctor(6).png"),
  },
  {
    avator: require("../assets/avators/doctor(7).png"),
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const profileName = faker.name.findName();

export const appointments = [
  {
    address: {
      city: "Cary",
      street: "7716 Ezequiel Loop",
    },
    avator: imageData[0].avator,
    consultationFee: "R460.75",
    date: "30 October",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "2245d67d-a2fb-4b7c-a435-6be6150d33b2",
    name: "Dr. Lisa Nader",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
  {
    address: {
      city: "Citrus Heights",
      street: "023 Kiehn Trafficway",
    },
    avator: imageData[1].avator,
    consultationFee: "R353.97",
    date: "27 July",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "d794c82e-c173-4c67-aaee-97bd5e9c72a8",
    name: "Dr. Lambert Lueilwitz",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
  {
    address: {
      city: "Gaithersburg",
      street: "723 Dallin Streets",
    },
    avator: imageData[2].avator,
    consultationFee: "R468.01",
    date: "24 October",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "01a53e3a-254a-4edc-95a4-85afdef53f9c",
    name: "Dr. Izaiah Prosacco",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
  {
    address: {
      city: "Richland",
      street: "762 Abshire Causeway",
    },
    avator: imageData[3].avator,
    consultationFee: "R340.84",
    date: "9 February",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "f94bda4b-fa46-4e44-809b-44acff74548c",
    name: "Dr. Pansy O'Connell",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
  {
    address: {
      city: "Grand Prairie",
      street: "478 Emmet Trail",
    },
    avator: imageData[4].avator,
    consultationFee: "R336.86",
    date: "9 September",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "e0681ad3-5d5f-4d0d-b561-dea53e770f08",
    name: "Dr. Taurean Powlowski",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
  {
    address: {
      city: "Pasadena",
      street: "305 Myron Lakes",
    },
    avator: imageData[5].avator,
    consultationFee: "R365.33",
    date: "2 November",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "c494f9a4-a6af-40ac-ab08-1a32c00544db",
    name: "Dr. Junius Mosciski",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
  {
    address: {
      city: "Pompano Beach",
      street: "66179 Teresa Lights",
    },
    avator: imageData[6].avator,
    consultationFee: "R428.73",
    date: "24 March",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "0b45bd85-5fff-4d56-85d6-b64e8de89b64",
    name: "Dr. Gisselle Borer",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
  {
    address: {
      city: "Daytona Beach",
      street: "164 Kuvalis Via",
    },
    avator: imageData[7].avator,
    consultationFee: "R481.81",
    date: "22 June",
    information:
      "Helping you access the appropriate specialist, GP or dentist and minimise your out-of-pocket costs, through our extensive network.",
    key: "3ae0e0c6-42c7-4771-8ba4-75d1a2b6b89b",
    name: "Dr. Amalia Zemlak",
    specialty: "Doctor",
    time: "4:07:09 AM",
  },
];

export const profile = {
  key: faker.datatype.uuid(),
  firstname: profileName.split(" ")[0],
  lastname: profileName.split(" ")[1],
  phone: "081 234 5678",
  email: `${profileName.replace(/ /g, "")}@ymail.com`,
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
  },
  memberSince: `${faker.date.future().getDate()} ${
    months[faker.date.future().getMonth()]
  } 2021`,
  avator: require("../assets/avators/user.png"),
};

export const clerkAvator = [
  {
    avator: require("../assets/avators/cashier.png"),
  },
  {
    avator: require("../assets/avators/cashier(1).png"),
  },
];
