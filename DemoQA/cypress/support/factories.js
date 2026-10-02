import { faker } from '@faker-js/faker'

/** Data acak untuk form Text Box. */
export const buildTextBoxUser = () => ({
  fullName: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
  currentAddress: faker.location.streetAddress(),
  permanentAddress: faker.location.streetAddress(true),
})

/** Data acak untuk satu baris Web Tables. */
export const buildEmployee = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email().toLowerCase(),
  age: faker.number.int({ min: 18, max: 65 }),
  salary: faker.number.int({ min: 1000, max: 20000 }),
  department: faker.commerce.department(),
})

/** Data mahasiswa lengkap untuk Practice Form. */
export const buildStudent = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email().toLowerCase(),
  gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
  mobile: faker.string.numeric(10),
  dateOfBirth: faker.date.birthdate({ mode: 'age', min: 18, max: 40 }),
  subjects: ['Maths', 'Computer Science'],
  hobbies: ['Sports', 'Reading'],
  picture: 'cypress/fixtures/avatar.png',
  address: faker.location.streetAddress(),
  state: 'NCR',
  city: 'Delhi',
})
