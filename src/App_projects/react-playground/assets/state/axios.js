import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://192.168.1.100:3001/",
//   timeout: 10000
// });

// export const headers = {
//   Authorization:
//     "Ifd1I25SeuaU25c64dc0e4fd1e18a861e7f6051a9195e234$:23299a36e900c8d6dd8c47bf5df464656b22e5b1b5e7e920733b90ec40d2914c00fCw0wt2wEA"
// };

// instance.defaults.headers.common["Authorization"] =
//   "Ifd1I25SeuaU25c64dc0e4fd1e18a861e7f6051a9195e234$:23299a36e900c8d6dd8c47bf5df464656b22e5b1b5e7e920733b90ec40d2914c00fCw0wt2wEA";

// export default instance;

// export const Authorization =
//   "Ifd1I25SeuaU25c64dc0e4fd1e18a861e7f6051a9195e234$:23299a36e900c8d6dd8c47bf5df464656b22e5b1b5e7e920733b90ec40d2914c00fCw0wt2wEA";

// export const accessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImN1c3RvbWVySWQiOiI1ZTA4OTI5OGMyNGMwZTM1ODAwYTE3ZDciLCJwaG9uZV9udW1iZXIiOiIwOTMwNDU5NjMxMiIsImZ1bGxuYW1lIjoi2KjYr9mI2YYg2YbYp9mFIiwiY29kZSI6IkMxMDI5In0sImlhdCI6MTU3NzYyMDE0OCwiZXhwIjoxNjA4NzI0MTQ4fQ.rKubgt_VDeJA-35QS6CzxD6DVwTYYZkYQYsj6VAy3aQ";

const instance = axios.create({
  baseURL: "https://www.palizpars.com/",
  timeout: 10000
});

export const headers = {
  Authorization:
    "8fb98ac10175a07818774da83f3a6530Ifd1I25SeuaU2234$:2320d81b6e8c4875add252641ee60f5fdc7e6fbdd2bba95aca7122ff38b0df69cff"
};

instance.defaults.headers.common["Authorization"] =
  "8fb98ac10175a07818774da83f3a6530Ifd1I25SeuaU2234$:2320d81b6e8c4875add252641ee60f5fdc7e6fbdd2bba95aca7122ff38b0df69cff";

export default instance;

export const Authorization =
  "8fb98ac10175a07818774da83f3a6530Ifd1I25SeuaU2234$:2320d81b6e8c4875add252641ee60f5fdc7e6fbdd2bba95aca7122ff38b0df69cff";
